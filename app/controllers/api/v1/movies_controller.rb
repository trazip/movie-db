class Api::V1::MoviesController < ApplicationController
  def index
    @movies = Movie.order(id: 'DESC').limit(16)
    render json: @movies
  end
end
