class AddApprovedToExercises < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :approved, :boolean, default: false
  end
end
