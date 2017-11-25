const express = require('express');
const postgraphql = require('postgraphql').postgraphql;

const app = express();
// app.use('/', routes);

var port = 3000;
var postGraphQLLink = 'postgresql://postgres:open-dictionary-open-dictionary@159.89.206.252:5432/postgres';

app.use(postgraphql(postGraphQLLink));
app.listen(port, ()=>{
  console.log('Port is up at: ',port);
});
