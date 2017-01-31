class AddWorkoutsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :workouts do |t|
      t.date :date, null: false
      t.belongs_to :user, null: false
      t.belongs_to :exercise, null: false
      t.integer :reps
      t.integer :sets
      t.float :weight
      t.float :distance
      t.time :time
    end
  end
end
