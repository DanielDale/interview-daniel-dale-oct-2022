const express = require('express')
const app = express()
const port = 3000
const {nanoid} = require('nanoid')

const db = require('./controller.js')

app.use(express.static('./web'))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Route the ability to redirect to site using link
app.get('*', async (req, res) => {

  console.debug(req.params)
  const requestedId = req.params[0].split('/')[1]
  let url = await db.getUrl(requestedId)
  url = url[0].url
  const shortenedObject = {
    id: requestedId,
    redirect: url  
  }

  // Redirect to site using shortened link
  res.redirect(shortenedObject.redirect);
  console.log('THIS WAS CALLED')
})

// Route to add a new link and return to UI
app.post('/createLink', async (req, res) => {
  const newUrl = {
    id: nanoid(5),
    redirect: req.query.url
  }

  const result = await db.insertUrl(newUrl.redirect, newUrl.id)
  res.json({id: result[0].shortened})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
