let express = require('express')
let router = express.Router()
let Blog = require('./blog')

// router.get('/blogs', (req, res) => { // 查看所有博客
//   Blog.find((err, blogs) => {
//     if (err) {
//       return res.status(500).send('Server Error')
//     }
//     res.send(blogs)
//   })
// })


// router.get('/blogs/edit', (req, res) => { // 查看一个博客
//   Blog.findById(req.query.id, (err, student) => {
//     if (err) {
//       return res.status(500).send('Server Error')
//     }
//     res.render('edit.html', {
//       student: student
//     })
//   })
// })
// router.post('/blogs/edit', (req, res) => { // 改一个博客
//   Blog.findByIdAndUpdate(req.body.id, req.body, (err) => {
//     if (err) {
//       return res.status(500).render('Server Error')
//     }
//     res.redirect('/blogs')
//   })
// })
// router.get('/blogs/delete', (req, res) => { // 删除一个博客
//   Blog.findByIdAndRemove(req.query.id, (err) => {
//     if (err) {
//       res.status(500).render('Server Error')
//     }
//     res.redirect('/blogs')
//   })
// })
router.get('/blogs/new', (req, res) => { // 增加博客
  console.log('dadasd')
  new Blog(req.body).save((err, ret) => {
    if (err) {
      return res.status(500).send('Server Error')
    }
    res.redirect('/blogs')
  })
})
router.get('/catalog/title', (req, res) => { // 查询所有的标题
  Blog.find({
    title: 1,
    date: 1,
    main: 0,
    author: 1
  }, (err, catalog) => {
    if (err) {
      res.status(500).render('Server Error')
    }
    res.send('catalog')
  })
})
module.exports = router


