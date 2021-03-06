const express = require('express')
const renderFile = require('ejs').renderFile
const app = express()

app.engine('html', renderFile)
app.set('view engine', 'html')

const staticPath = 'dist'
app.use(express.static(staticPath))

app.listen(process.env.PORT || 3000)
