const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
var axios = require('axios');
var bodyParser = require('body-parser');
var keyObject = require('./git_ignore_folder/keys.js');
var fs = require('fs');

const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));


app.get('/test', (req, res)=>{ res.send('hi there!'); })

app.get('/search', (req, res) => { 
  console.log('REQQUERY = ', req.query);
  res.send()
 })



app.post('/search', (req, res) => {
  console.log('Words To Search = ', req.body.wordsToSearch);

  axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: req.body.wordsToSearch,
        maxResults: 10,
        key: keyObject.keys.YouTube_API_Key,
        videoEmbeddable: true,
        part: 'snippet',
        type: 'video'
      }
    })
    .then(function (info) {
      console.log('GOT DATA BACK FOR /SEARCH ON SERVER', req.body.wordsToSearch, 'DATA = ', info.data.items);
      // var infoToWrite = JSON.stringify(info.data.items);
      // fs.writeFile('temp.js', infoToWrite, (err) => {
      //   if (err) throw err;
      //   console.log('The file has been saved!');
      // });
      res.send(info.data.items); 
    })
    .catch(function (err) {
      console.log('SERVER ERROR =', err);
    });
})



app.post('/search-channel', (req, res) => {
  console.log('Words To Search = ', req.body.wordsToSearch);

  axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: '',
        maxResults: 10,
        key: keyObject.keys.YouTube_API_Key,
        videoEmbeddable: true,
        part: 'snippet',
        channelId: 'UCdLpUdHtGPMTQ-QrM4KD20A',
        type: 'video'
      }
    })
    .then(function (info) {
      console.log('GOT DATA BACK FOR /SEARCH ON SERVER', req.body.wordsToSearch, 'DATA = ', info.data.items);
      var infoToWrite = JSON.stringify(info.data.items);
      // fs.writeFile('temp.js', infoToWrite, (err) => {
      //   if (err) throw err;
      //   console.log('The file has been saved!');
      // });
      res.send(info.data.items); 
    })
    .catch(function (err) {
      console.log('SERVER ERROR =', err);
    });
})



 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});