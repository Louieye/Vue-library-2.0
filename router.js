//路由模块
const express = require('express');
const path = require('path');
const service = require('./service.js');
const router = express.Router();

//查询图书
router.get('/books',service.getAllBooks);
//添加图书提交
router.post('/books',service.addBook);
//修改图书页面跳转
router.get('/books/:id',service.toEditBook);
//修改图书提交
router.put('/books/:id',service.editBook);
//删除图书
router.delete('/books/:id',service.deleteBook);
//验证图书是否存在
router.get('/books/book/:name',service.checkName);

module.exports = router;