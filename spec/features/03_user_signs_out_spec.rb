require 'rails_helper'

feature 'user signs out' do
  let(:user) do
    User.create(
      email: "user@example.com",
      password: "password"
    )
  end

  scenario 'user signs up and logs in then logs out' do
    visit root_path
    click_link 'Sign up'
    fill_in 'Username', with: 'user'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    click_button 'Sign up'

    expect(page).to have_content("signed up successfully")
    expect(page).to have_content("Logout")
    click_link 'Logout'

    expect(page).to have_content("Signed out successfully")
    expect(page).to have_content("Login")
    click_link 'Login'
  end
end
