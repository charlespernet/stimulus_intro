Rails.application.routes.draw do
  root to: 'carts#show'
  resources :carts, only: :show do
    resources :items, only: :create
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
