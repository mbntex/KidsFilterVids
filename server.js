const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
var keyObject = require('./git_ignore_folder/keys.js');
var axios = require('axios');
var fs = require('fs');
var bodyParser = require('body-parser');
/*THESE 2 & line 41 beliw why [object]*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));


app.post('/search', function (req, res) {
  // console.log('REQ TO THE SERVER = ', req.body);
  axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      q: req.body.searchString,
      maxResults: 10,
      key: keyObject.keys.YouTube_API_Key,
      videoEmbeddable: true,
      part: 'snippet',
      type: 'video'
    }
  })
  .then(function (response) {
    // console.log('RES123456 = ', response.data);
    console.log('RES123456 = ', response.data.items);
    // var infoToWrite = JSON.stringify(response.data.items);
    // //DEFAULT DATA CREATOR FN : BE SURE TO NAME VAR DefaultSearchData & REAPPLY EXPORT DEFAULT WITH EACH USE
    // fs.writeFile('./src/components/DefaultSearchData.js', infoToWrite, (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // });
    res.send(response.data.items);
  })
  .catch(function (error) {
    res.send('SERVER YOUTUBE AXIOS ERROR = ', error);
  });
})

 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});