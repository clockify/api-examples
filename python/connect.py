import requests
import json

api_key="[YOUR KEY GOES HERE]"

data = {'x-api-key': api_key}
r = requests.get('https://api.clockify.me/api/v1/user', headers=data)
print(r.content)
