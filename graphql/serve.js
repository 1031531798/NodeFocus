// server.js
const express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
function initGraphql (app) {
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));
}
module.exports = {initGraphql};