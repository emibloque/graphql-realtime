#!/bin/sh

mix do deps.get, deps.compile
mix phx.server
