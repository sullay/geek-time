const Koa = require('koa')
const mount = require('koa-mount')
const koaStatic = require('koa-static')
const fs = require('fs')
const path = require('path')

const app = new Koa()

app.use(
  koaStatic(path.join(__dirname, '/source/'))
)
app.use(
  mount('/', async ctx => {
    ctx.body = fs.readFileSync(path.join(__dirname, '/source/index.html'), 'utf-8')
  })
)
app.listen(3000, () => {
  console.log('start !!!')
})
