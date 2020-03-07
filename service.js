const data = require('./data.json');
const fs = require('fs');

//操作文件方法
let writeFs = function(url,data){
    //写入文件
    fs.writeFile(url,JSON.stringify(data),(err)=>{
        if(err){
            console.log(err);
        }
    });  
}
//查找所有信息
exports.getAllBooks = (req,res)=>{
    res.json(data); 
};

//查询图书名是否存在
exports.checkName = (req,res)=>{
    let name = req.params.name;
    let index = data.findIndex((item)=>{
        return item.name == name;
    });
    if(index == -1){
        res.json(false);
    }else{
        res.json(true); 
    }
};

//添加图书
exports.addBook = (req,res)=>{
    let info = req.body;
    console.log(info);
    data.push(info);
    //更新数据
    writeFs('./data.json',data);
    res.json(data);
};

//修改图书跳转
exports.toEditBook = (req,res)=>{
    let index = data.findIndex((item)=>{
        return item.id == req.params.id;
    });
    res.json(data[index]);
};

//修改图书提交
exports.editBook = (req,res)=>{
    let id = req.params.id;
    let index = data.findIndex((item)=>{
        return item.id == id;
    });
    data[index].name = req.body.name;
    data[index].data = req.body.date;
    writeFs('./data.json',data);
    console.log('id:' + id + ' name:' + req.body.name);
    console.log('edit success!');
    res.json(data);
}

//删除图书
exports.deleteBook = (req,res)=>{
    let id = req.params.id;
    let index = data.findIndex((item)=>{
        return item.id == id;
    });
    data.splice(index,1);
    writeFs('./data.json',data);
    res.json(data);
}