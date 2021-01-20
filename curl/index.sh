#!/usr/bin/env bash

API_KEY=${1:-XXX}
echo "API KEY = $API_KEY"

curl -H "X-Api-Key: $API_KEY" https://api.clockify.me/api/v1/user | json_pp