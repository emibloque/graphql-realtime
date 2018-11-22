FROM library/elixir:1.6.5-alpine

RUN apk add git --update

WORKDIR /app

# Install Hex+Rebar
RUN mix local.hex --force && \
  mix local.rebar --force

COPY mix.exs .
COPY mix.lock .

RUN mix do deps.get

COPY start.sh /start.sh

CMD ["/start.sh"]
