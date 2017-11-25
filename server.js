const express = require('express');
const postgraphql = require('postgraphql').postgraphql;

const app = express();
app.use('/', routes);

var port = 3000;
var postGraphQLLink = 'postgres://localhost:5432';

app.use(postgraphql(postGraphQLLink));
app.listen(port, ()=>{
  console.log('Port is up at: ',port);
});
