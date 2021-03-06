require "rails_helper"

feature "user sees previous workouts" do
  scenario "signs in to see workouts" do

    user1 = User.create(username: "user", email: "user@example.com", password: "password")

    Exercise.create(name: "curls", description: "curl the weights", category: "arms")



    visit root_path
    expect(page).to have_content('Login')
    click_link 'Login'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'
    click_link user1.username
    expect(page).to have_content("Your Workouts")
    
  end
end
