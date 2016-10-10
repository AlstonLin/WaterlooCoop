Rails.application.routes.draw do 
  root :to => "home#main"
  get "home" => "home#main"
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :companies, :only => [:show, :create]
end
