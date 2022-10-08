const express = require('express')
const app = express()
const port = 3000
const {nanoid} = require('nanoid')



const URL = {
  id: 'Google',
  redirect: 'http://www.google.com',
}
const URL2 = {
  id: 'Ebay',
  redirect: 'http://www.ebay.co.uk'
}

const MockDatabase = [URL, URL2]

app.use(express.static('./web'))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/getAllLinks', (req, res) => {
  res.json(MockDatabase);
})

app.get('*', (req, res) => {

  console.debug(req.params)

  const requestedId = req.params[0].split('/')[1]

   const foundObject = MockDatabase.find((object) => {
    return object.id === requestedId 
   })

  //res.json(foundObject)
  res.redirect(foundObject.redirect);
  console.log('THIS WAS CALLED')
})

app.post('/createLink', (req, res) => {
  console.debug(req.query)

  const newUrl = {
    id: nanoid(),
    redirect: req.query.url
  }
  MockDatabase.push(newUrl)

  res.json(newUrl)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
