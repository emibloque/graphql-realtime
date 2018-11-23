defmodule ElixirApi.Schema do
  use Absinthe.Schema

  # Example data
  @items [%{id: "foo", name: "Foo"}, %{id: "bar", name: "Bar"}]

  object :item do
    field(:id, :id)
    field(:name, :string)
  end

  query do
    field :item, list_of(:item) do
      resolve(fn _, _ ->
        {:ok, @items}
      end)
    end
  end
end
