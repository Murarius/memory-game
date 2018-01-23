Rails.application.routes.draw do
  root 'static_pages#start'

  resource :games, only: [:create, :show, :destroy]
end
