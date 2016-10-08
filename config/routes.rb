Rails.application.routes.draw do
  root :to => "home#main"
  get "home" => "home#main"
end
