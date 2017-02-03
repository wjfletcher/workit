Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :workouts

  resources :exercises

  namespace :api do
    namespace :v1 do
      resources :workouts, only: [:index]
    end
  end

  resources :data, only: [:index]

end
