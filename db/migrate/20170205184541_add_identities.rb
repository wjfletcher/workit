class AddIdentities < ActiveRecord::Migration[5.0]
  def change
    create_table :identities do |t|
      t.string :uid
      t.string :provider
      t.string :access_token
      t.string :refresh_token
      t.integer :expires_at #the UTC timesteamp at which the access_token expires
      t.references :user
      t.string :timezone
      t.timestamps null: false
    end
  end
end
