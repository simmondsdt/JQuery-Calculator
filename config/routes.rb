Rails.application.routes.draw do
  root 'calc#show'
  get '/userlist', to: 'calc#index', as: '/index'
end
