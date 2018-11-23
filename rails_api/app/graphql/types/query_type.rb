module Types
  class QueryType < GraphQL::Schema::Object
    field :stories, [Types::StoryType], null: false

    def stories
      [
        {id: 1, image: "image1"},
        {id: 2, image: "image4"}
      ]
    end
  end
end
