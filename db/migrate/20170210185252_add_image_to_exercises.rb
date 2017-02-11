class AddImageToExercises < ActiveRecord::Migration[5.0]
  def change
    add_column :exercises, :image, :string, default: "https://image.freepik.com/free-icon/muscular-arm-outline_318-46478.jpg"
  end
end
