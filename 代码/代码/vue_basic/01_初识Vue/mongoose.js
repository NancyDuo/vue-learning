let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test');


var Schema = mongoose.Schema;
var sh = new Schema({
    'name':String,
    'age':Number,
});

var schModel = mongoose.model('test1',sh);

schModel.create({
    'name':"Nannan",
    'age':'40',
},function (err){
    if(!err){
        console.log('success');
    }
})

schModel.find({'name':'Nancy'},'age',function (err,docs){
    if(!err){
        console.log(docs)
    }
})

