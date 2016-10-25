Rails.application.routes.draw do 
  root :to => "jobs#index"
  get "home" => "jobs#index"
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :companies, :only => [:show, :create] do
    get :jobs
    collection do
      get :autocomplete
    end
  end
  resources :reviews, :only => [:new, :create, :show]
  resources :jobs, :only => [:show, :create, :index]
end
