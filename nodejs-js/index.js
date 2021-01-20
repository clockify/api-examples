const axios = require('axios')
const fetch = require('node-fetch')

const key = process.env.CLOCKIFY_API_KEY || ''
const url = `https://api.clockify.me/api/v1`

if (!key) {
  console.log(`API key must be provided through 'CLOCKIFY_API_KEY' env variable. Get one at https://clockify.me/user/settings`)
  
  process.exit(1) 
}

;(async () => {
  // with axios
  const axiosResponse = await axios.get(`${url}/user`, {
    headers: {
	  'X-Api-Key': key
	}
  })
  console.log(`Welcome ${axiosResponse.data.name}`)
  
  // with node-fetch
  const fetchResponse = await fetch(`${url}/user`, {
    headers: {
	  'X-Api-Key': key
	}
  }).then(r => r.json())
  console.log(`Your default workspace ID is ${fetchResponse.defaultWorkspace}`)
})()