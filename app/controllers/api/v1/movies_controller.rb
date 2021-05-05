class Api::V1::MoviesController < ApplicationController
  def index
    @movies = Movie.limit(16)
    render json: @movies
  end
end
