FROM ruby:2.5-alpine

WORKDIR /app

RUN apk add --update build-base postgresql-dev sqlite-dev tzdata

COPY Gemfile .
COPY Gemfile.lock .

RUN bundle install

COPY . .

CMD ["puma"]
