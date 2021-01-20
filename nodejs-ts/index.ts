import { Body } from 'node-fetch';
import axios, { AxiosResponse } from 'axios';
import nodeFetch from 'node-fetch';

const key = process.env.CLOCKIFY_API_KEY || ''
const url = `https://api.clockify.me/api/v1`

if (!key) {
  console.log(`API key must be provided through 'CLOCKIFY_API_KEY' env variable. Get one at https://clockify.me/user/settings`)
  
  process.exit(1) 
}

interface ClockifyUser { id: string, name: string, defaultWorkspace: string }

;(async () => {
  // with axios
  const axiosResponse: AxiosResponse<ClockifyUser> = await axios.get(`${url}/user`, {
    headers: {
	  'X-Api-Key': key
	}
  })
  console.log(`Welcome ${axiosResponse.data.name}`)
  
  // with node-fetch
  const fetchResponse: ClockifyUser = await nodeFetch(`${url}/user`, {
    headers: {
	  'X-Api-Key': key
	}
  }).then((r: Body) => r.json())
  console.log(`Your default workspace ID is ${fetchResponse.defaultWorkspace}`)
})()