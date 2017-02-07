# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'json'
Exercise.delete_all
JSON.parse(open("#{Rails.root}/db/seeds/exercises.json").read).each do |exercise|
   Exercise.create(exercise)
end

User.create!(
  email: "admin@admin.com",
  password: "password",
  username: "The Admin",
  admin: true
)



# Exercise.create!([
#     { name: "barbell curl", description: "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. ... Continue the movement until your biceps are fully contracted and the bar is at shoulder level.", category: "biceps" },
#     { name: "cable curl", description: "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. ... Continue the movement until your biceps are fully contracted and the bar is at shoulder level.", category: "biceps" },
#     { name: "barbell concentration curl", description: "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. ... Continue the movement until your biceps are fully contracted and the bar is at shoulder level.", category: "biceps" },
#     { name: "hammer curl", description: "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. ... Continue the movement until your biceps are fully contracted and the bar is at shoulder level.", category: "biceps" },
#     { name: "machine curl", description: "Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. ... Continue the movement until your biceps are fully contracted and the bar is at shoulder level.", category: "biceps" }
# ])
