const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An example of an HTTP endpoint that queries Airtable using a KeyQL date_gt parameter
* @returns {array} result Your return value
*/
module.exports = async () => {

  let queryResult = await lib.airtable.query['@0.5.3'].select({
    table: 'People',
    where: [{
      'Born On__date_gt': '2000-01-01'
    }]
  });

  return queryResult.rows.map((row) => {
    return row.fields;
  });

};