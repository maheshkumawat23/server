var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
//var mongoXlsx = require('mongo-xlsx');
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

var model;
app.use(express.static(__dirname + '/project'));

var mongoose = require('mongoose')
mongoose.connect('mongodb://mahesh:mahesh@ds139645.mlab.com:39645/canteen', function () {
  console.log('mongodb connected')
})

var Post = mongoose.model('Post', {
  empId: { type: String, required: true },
  location:     { type: String, required: true },
  vendorName:    { type: String, required: true },
  taste : { type: String, required: true },
  service : { type: String, required: true },
  hygine: { type: String, required: true },
  veriety: { type: String, required: true },
  quality : { type: String, required: true },
  quantity :{ type: String, required: true },
  comments : { type: String},
  date : {type:String, required:true}
 
  
  
});

app.get('/api/posts', function (req, res) {
  Post.find({},function (err, posts) {
        if (err) { return next(err) }
        res.json(posts);
		//console.log(posts.length);
       // console.log('this is server' + posts);

    });
})
app.post('/api/request', function(req,res,next){
	
	var data = req.body;
	console.log(data.data.location+","+data.data.vendorName+","+data.data.from+","+data.data.to);
	 Post.find({$and :[{'location':data.data.location},{'vendorName': data.data.vendorName},{'date':{ $gte:data.data.from,$lte:data.data.to}}]},function (err, posts) {
        if (err) { return next(err) }
        res.json(posts);
       // console.log('this is server' + posts);

    });
	
	
});
app.post('/api/download', function(req,res,next){
	var data = req.body;
    
	console.log(data.data.location+","+data.data.vendorName+","+data.data.from+","+data.data.to);
	 Post.find({$and :[{'location':data.data.location},{'vendorName': data.data.vendorName},{'date':{ $gte:data.data.from,$lte:data.data.to}}]},function (err, posts) {
        if (err) { return next(err) }
        res.json(posts);
       

    });
	
});
app.post('/api/posts', function (req, res, next) {
	var data = req.body;
	console.log(data);
	
	for(var i=0 ;i<data.length;i++){
  var post = new Post({
    empId: data[i].empId,
  location: data[i].location,
  vendorName:data[i].vendorName,
  taste : data[i].taste,
  service : data[i].service,
  hygine: data[i].hygine,
  veriety: data[i].veriety,
  quality : data[i].quality,
  quantity :data[i].quantity,
  comments : data[i].comments,
  date : data[i].submitDate
 
  })
  //Post.find({}).remove().exec();
  post.save(function (err, post) {
    if (err) { return next(err) }
   //res.json(post);
   console.log("saved");
  })
	}
})
/*app.get('/', function (req, res) {
  res.sendfile('index.html');
});
app.listen(3000, function () {
  console.log('Server listening on', 3000)
})*/
app.get('/', function(request, response) {
  response.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
