var request = require('request')
  , ig = require('instagram-node').instagram();


exports.index = function(req, res){
  res.render('index', { title: 'Cooper Union Instagram Proxy' });
};

exports.json = function(req, res, next) {
  res.set({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  });

  next();
};


exports.articles = function(req, res) {
  
 var news = new npr(process.env.KEY);

 news.getNews(function(response){
  res.end(JSON.stringify(response));
 });


}