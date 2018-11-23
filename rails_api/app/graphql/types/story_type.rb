module Types
  class StoryType < GraphQL::Schema::Object
    field :id, ID, null: false
    field :image, String, null: false
  end
end
