class AddExercisesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :category, null: false
      t.timestamps
    end
  end
end
