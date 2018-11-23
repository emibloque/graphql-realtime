module Types
  class QueryType < GraphQL::Schema::Object
    field :stories, [Types::StoryType], null: false

    def stories
      [
        {id: 1, image: "/images/cassidy-mills-425636-unsplash.jpg"},
        {id: 2, image: "/images/eamonn-maguire-57073-unsplash.jpg"}
      ]
    end
  end
end
