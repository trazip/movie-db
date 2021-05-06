class Movie < ApplicationRecord
  include AlgoliaSearch

  algoliasearch do
    attributes :title, :image, :year, :imdbID
  end
end
