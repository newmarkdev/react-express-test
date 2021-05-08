import express from 'express'
var request = require ("request")
import cors from 'cors'

// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 5000
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/test', (req, res) => {
  request (
      'https://jsonplaceholder.typicode.com/todos/1',
      function(error, response, body) {
          if (!error && response.statusCode === 200)
         var parseBody = JSON.parse(body);
         var title = parseBody["title"]
          res.send({title})
      }    
  )
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
