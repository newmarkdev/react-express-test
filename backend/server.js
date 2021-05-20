import express from 'express'
import listEndpoints from 'express-list-endpoints'
import cors from 'cors'
var request = require ("request")

const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

// fetch sample data 
app.get('/test-title', (req, res) => {
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
