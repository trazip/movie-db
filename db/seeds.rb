# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'json'

Movie.delete_all

url = 'https://gist.githubusercontent.com/jcampbell18/0e1da3a85ff8698092a90357d39c0102/raw/000503a6cc57896feb008c47b20a9d8e3cfa77db/combined-movies.json'
movies_serialized = URI.open(url).read
movies = JSON.parse(movies_serialized)

movies['Search'].each_with_index do |movie, index|
  puts "Creating movie n°#{index + 1}"
  Movie.create(title: movie['Title'], year: movie['Year'].to_i, image: movie['Poster'], imdbID: movie['imdbID'])
end

puts 'Finished'
