const express = require('express');
const postgraphql = require('postgraphql').postgraphql;

const app = express();

app.use(postgraphql('postgres://localhost:5432'));
app.listen(3000);
