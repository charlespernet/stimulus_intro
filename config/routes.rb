Rails.application.routes.draw do
  root to: 'carts#show'
  resources :carts, only: :show
  resources :items, only: :create
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
