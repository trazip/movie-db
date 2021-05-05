class Movie < ApplicationRecord
  include AlgoliaSearch

  algoliasearch do
    attributes :title
  end
end
