class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  devise :omniauthable, :omniauth_providers => [:google_oauth2, :fitbit]

  has_many :exercises
  has_many :workouts
  has_many :exercises, through: :workouts
  has_many :identities, dependent: :destroy


  def self.from_omniauth(auth)
    identity = Identity.where(provider: auth.provider, uid: auth.uid).first_or_create do |identity|
      if identity.user == nil
        user = User.new
        user.username = auth.info.name
        user.email = auth.info.email || "#{auth.uid}@#{auth.provider}.generated"
        user.password = Devise.friendly_token[0,20]
      end
      identity.user = user
    end

    identity.access_token = auth['credentials']['token']
    identity.refresh_token = auth['credentials']['refresh_token']
    identity.expires_at = auth['credentials']['expires_at']
    identity.timezone = auth['info']['timezone']
    identity.save
    identity.user
  end

  def identity_for(provider)
    identities.where(provider: provider).first
  end

  def fitbit_client

    fitbit_identity = identities.where(provider: 'fitbit').first

    FitgemOauth2::Client.new(
      token: fitbit_identity.access_token,
      client_id: ENV['FITBIT_CLIENT_ID'],
      client_secret: ENV['FITBIT_CLIENT_SECRET'],
      user_id: fitbit_identity.uid
    )
  end

  def google_client

    google_identity = identities.where(provider: 'google_oauth2').first

    GoogleOauth2::Client.new(
      token: google_identity.access_token,
      client_id: ENV['GOOGLE_OAUTH_CLIENT_ID'],
      client_secret: ENV['GOOGLE_OAUTH_SECRET'],
      user_id: google_identity.uid
    )
  end



  # def self.from_omniauth(access_token)
  #   data = access_token.info
  #   user = User.where(:email => data["email"]).first
  #
  #   # Uncomment the section below if you want users to be created if they don't exist
  #   unless user
  #       user = User.create(username: data["name"],
  #          email: data["email"],
  #          password: Devise.friendly_token[0,20]
  #       )
  #   end
  #   user
  #
  #   def fitbit_client
  #
  #   fitbit_identity = identities.where(provider: 'fitbit').first
  #
  #   FitgemOauth2::Client.new(
  #     token: fitbit_identity.access_token,
  #     client_id: ENV['FITBIT_CLIENT_ID'],
  #     client_secret: ENV['FITBIT_CLIENT_SECRET'],
  #     user_id: fitbit_identity.uid
  #   )
  # end
#end
end
