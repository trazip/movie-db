class Api::V1::MoviesController < ApplicationController
  before_action :set_movie, only: [:destroy]
  def index
    @movies = Movie.order(id: 'DESC').limit(16)
    render json: @movies
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render json: { id: @movie.id }, status: :created
    else
      render_error
    end
  end

  def destroy
    @movie.destroy
    head :no_content
  end

  private

  def set_movie
    @movie = Movie.find(params[:id])
  end

  def movie_params
    params.require(:movie).permit(:title, :year, :image, :imdbID)
  end

  def render_error
    render json: { errors: @quote.errors.full_messages },
      status: :unprocessable_entity
  end
end
