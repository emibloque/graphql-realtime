defmodule ElixirApiWeb.Router do
  use ElixirApiWeb, :router

  forward("/graphiql", Absinthe.Plug.GraphiQL, schema: ElixirApi.Schema)

  forward("/", Absinthe.Plug, schema: ElixirApi.Schema)
end
