class Exercise < ApplicationRecord
  has_many :users
  has_many :workouts
  has_many :users, through: :workouts

  validates :name, :description, :category, presence: true
end
