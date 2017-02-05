Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users, controllers: { :omniauth_callbacks => "users/omniauth_callbacks" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :workouts

  resources :exercises

  namespace :api do
    namespace :v1 do
      resources :workouts, only: [:index, :create]
    end
  end

  resources :data, only: [:index]

  get 'fitbit/:resource/:date.json' => 'fitbit_api#data_request'

end
