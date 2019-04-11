const readline    = require('readline')
const { request } = require('graphql-request')

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})

const endpoint = process.env.EDMOND_API_URL
// const endpoint = "http://localhost:8888/graphql"

console.log("Waiting for ISBN input...")

rl.on('line', (input) => {
  request(endpoint, `
      mutation add_book_from_edmond_scanner {
        register_book(isbn: ${input}) {
          title
          author
          isbn
          stock_count
        }
      }
  `
  ).then((data) => {
    console.log(
      {
        message: `The book (ISBN: ${input}) is successfully registered.`,
        data: data,
      }
    )
  }).catch((err) => {
    console.log(
      {
        message: `The book (ISBN: ${input}) is not registerd due to some errors.`,
        error: err,
      }
    )
  })

  console.log(`Received: ${input}`)
})
