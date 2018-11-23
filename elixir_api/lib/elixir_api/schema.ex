defmodule ElixirApi.Schema do
  use Absinthe.Schema

  object :message do
    field(:timestamp, :integer)
    field(:text, :string)
  end

  mutation do
    field :add_message, :message do
      arg(:text, non_null(:string))

      resolve(fn _, args, _ ->
        {:ok, %{timestamp: :os.system_time(:seconds), text: args.text}}
      end)
    end
  end

  subscription do
    field :message_added, :message do
      config(fn _, _ ->
        {:ok, topic: "*"}
      end)

      trigger(:add_message, topic: fn _ -> "*" end)

      resolve(fn message, _, _ ->
        {:ok, message}
      end)
    end
  end

  query do
    field :messages, list_of(:message) do
      resolve(fn _, _ ->
        {:ok, []}
      end)
    end
  end
end
