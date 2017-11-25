const express = require('express');
const postgraphql = require('postgraphql').postgraphql;

const app = express();

var port = 3000;
var postGraphQLLink = `postgresql://postgres:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/postgres`;

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use(postgraphql(postGraphQLLink, "public", {
  graphiql: true,
  watchPg: true,
}));

app.listen(port, ()=>{
  console.log('Port is up at: ',port);
});