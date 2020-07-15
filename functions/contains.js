const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An example of an HTTP endpoint that queries Airtable using a KeyQL contains parameter
* @returns {array} result Your return value
*/
module.exports = async () => {

  let queryResult = await lib.airtable.query['@0.5.3'].select({
    table: 'People',
    where: [{
      'Job__contains': 'ist'
    }]
  });

  return queryResult.rows.map((row) => {
    return row.fields;
  });

};