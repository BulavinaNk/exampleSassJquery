const http = require('http');
const url = require('url');
const static = require('node-static');
const file = new static.Server('.');
const path = require("path");
const db =  [{
      title: 'Name',
      description: 'описание',
      like: true,
      del: false
    },
    { 
      title: 'Name2',
      description: 'описание2',
      like: false,
      del: false
    },
    { 
      title: 'Name2',
      description: 'описание2',
      like: false,
      del: false
    },
    { 
      title: 'Name2',
      description: 'описание2',
      like: false,
      del: false
    },
    { 
      title: 'Name2',
      description: 'описание2',
      like: false,
      del: false
    },
    { 
      title: 'Name2',
      description: 'описание2',
      like: false,
      del: false
    },
    { 
      title: 'Name2',
      description: 'описание2',
      like: false,
      del: false
    },
    { 
      title: 'Name2',
      description: 'описание2',
      like: false,
      del: false
    },
    { 
      title: 'Name2',
      description: 'описание2',
      like: false,
      del: false
    },
    {
      title: 'Name3',
      description: 'описание2',
      like: false,
      del: false
    }]

const server = http.createServer(function(req,res){
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if ( req.method === 'OPTIONS' ) {
    res.writeHead(200);
    res.end();
    return;
  }
});

server.listen(80, '127.0.0.1');

const requestCallback = (req, response) => {
  const urlParsed = url.parse(req.url, true);
  if (urlParsed.pathname == '/like') {
    if(urlParsed.query.index){
      db[urlParsed.query.index].like = !db[urlParsed.query.index].like;
    }
    response.end(JSON.stringify(true));      
  } 
  else if (urlParsed.pathname == '/del') {
    if(urlParsed.query.index){
      db.splice(urlParsed.query.index,1);   
    }
    response.end(JSON.stringify(true));
  }
  else if (urlParsed.pathname == '/') {
    console.log('its like page');
    response.end(JSON.stringify(db));      
  }   
};

server.on('request', requestCallback);