
var originalSearches = require('./src/components/AllowedSearchesDefaults.js');
// './src/components/CurrentAllowedJSONOptions.js'


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

// VIDEO KEYWORD SEARCH
app.post('/search', function (req, res) {
  // console.log('REQ TO THE SERVER = ', req.body);
  axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      q: req.body.searchString,
      maxResults: 10,
      key: keyObject.keys.YouTube_API_Key,
      videoEmbeddable: true,
      part: 'snippet',
      //part: 'snippet,contentDetails,statistics', <--- NOT WORKING... WHY?
      type: 'video',
      /*SAFE SEARCH PARAM DO NOT DELETE*/
      safeSearch: 'strict'
    }
  })
  .then(function (response) {
    // console.log('RES123456 = ', response.data);
    console.log('RES1234566743 = ', response.data.items);
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


app.post('/reset-defaults', function (req, res) {
  fs.writeFile('./src/components/CurrentAllowedJSONOptions.js', JSON.stringify(originalSearches.AllowedSearchesDefaults), (err) => {
    if (err) throw err;
    console.log('The file has been saved123!');
    fs.readFile('./src/components/CurrentAllowedJSONOptions.js', 'utf8', (err, data) => {
      if (err) throw err;
      // console.log('WHAT WE READ TYPE = ', typeof JSON.parse(data));
      // console.log('WHAT WE READ ACTUAL = ', JSON.parse(data));
      res.send(data);
    });
  });
})


app.post('/update-current', function (req, res) {
  fs.writeFile('./src/components/CurrentAllowedJSONOptions.js', JSON.stringify(req.body.data), (err) => {
    if (err) throw err;
    console.log('The new button has been added!');
    fs.readFile('./src/components/CurrentAllowedJSONOptions.js', 'utf8', (err, data) => {
      if (err) throw err;
      console.log('WHAT WE READ TYPE BTN UPDATE = ', typeof JSON.parse(data));
      console.log('WHAT WE READ ACTUAL BTN UPDATE = ', JSON.parse(data));
      res.send(data);
    });
  });
})


app.post('/delete-button', function (req, res) {
  // console.log('Delete req = ', req.body.currentSearchesListWithButtonDeleted)
  fs.writeFile('./src/components/CurrentAllowedJSONOptions.js', JSON.stringify(req.body.currentSearchesListWithButtonDeleted), (err) => {
    if (err) throw err;
    console.log('The requested button has been deleted!');
    fs.readFile('./src/components/CurrentAllowedJSONOptions.js', 'utf8', (err, data) => {
      if (err) throw err;
      // console.log('WHAT WE READ TYPE BTN UPDATE = ', typeof JSON.parse(data));
      // console.log('WHAT WE READ ACTUAL BTN UPDATE = ', JSON.parse(data));
      res.send(data);
    });
  });
})



app.post('/initialize', function (req, res) {
  if (fs.existsSync('./src/components/CurrentAllowedJSONOptions.js')) {
    console.log('CURRENT SEARCHES EXISTS!!!');
        fs.readFile('./src/components/CurrentAllowedJSONOptions.js', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('SUCCESS: existing current searches file read')
        res.send(data);
      });
  } else {
    fs.writeFile('./src/components/CurrentAllowedJSONOptions.js', JSON.stringify(originalSearches.AllowedSearchesDefaults), (err) => {
      if (err) throw err;
      console.log('The initialize current search file has been saved123!');
      fs.readFile('./src/components/CurrentAllowedJSONOptions.js', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('SUCCESS: current searches file created & read')
        res.send(data);
      });
    });
  }
})






 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});