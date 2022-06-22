const fetch = require('node-fetch');

var dice = 3;
var sides = 6;
var query = `query MyQuery {
    neurons {
        id
    }
  }`;

fetch('http://137.184.55.37:4350/graphql/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { dice, sides },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', JSON.stringify(data)));