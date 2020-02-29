let express = require('express')
let router = require('./router')

let app = express()

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

// router(app)
app.use(router) // 把路由挂载到服务器

app.listen(80, () => {
  console.log('running...')
})