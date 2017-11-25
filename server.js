const express = require('express');
const postgraphql = require('postgraphql').postgraphql;

const app = express();

var port = 3000;
var postGraphQLLink = `postgresql://postgres:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/postgres`;

app.use(postgraphql(postGraphQLLink, "public", {
  graphiql:true
}));

app.listen(port, ()=>{
  console.log('Port is up at: ',port);
});