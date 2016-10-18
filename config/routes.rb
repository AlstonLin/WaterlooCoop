Rails.application.routes.draw do 
  root :to => "home#main"
  get "home" => "home#main"
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :companies, :only => [:show, :create] do
    collection do
      get :autocomplete
    end
  end
  resources :reviews, :only => [:new, :create, :show]
  resources :jobs, :only => [:show, :create]
end
