require 'spec_helper'

feature 'user signs in' do
  let(:user) do
    User.create(
      username: "user",
      email: "user@example.com",
      password: "password"
    )
  end

  scenario 'user signs up and logs in with required information' do
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
    expect(page).to have_content("Login")
    click_link 'Login'
    fill_in 'Email', with: 'user@example.com'
    fill_in 'Password', with: 'password'
    click_button 'Log in'

    expect(page).to have_content("Signed in successfully")
    expect(page).to have_content("Logout")
  end
end
