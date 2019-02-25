const readline = require('readline')
const axios    = require('axios')

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})

const api_url = process.env.EDMOND_API_URL

console.log("Waiting for ISBN input...")

rl.on('line', (input) => {
  axios.post(api_url + input)
       .then((res) => {
         console.log(
           {
             message: `The book (ISBN: ${input}) is successfully registered.`,
             http_status: `${res.status}`,
             body: res.data,
           }
         )
       })
       .catch((err) => {
         console.log(
           {
             message: `The book (ISBN: ${input}) is not registerd due to some errors.`,
             http_status: `${err.response.status}`,
             body: err.response.data,
           }
         )
       })

  console.log(`Received: ${input}`)
})
