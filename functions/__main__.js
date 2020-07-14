const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An HTTP endpoint that returns data from a linked Airtable base
* @param {string} table The table within your Airtable base you would like to query from.
* @param {array} where Parameters you would like to match rows against. See https://github.com/FunctionScript/KeyQL#writing-queries for examples.
* @ {object.keyql.query}
* @param {object.keyql.limit} limit Pagination for your query results. See https://github.com/FunctionScript/KeyQL#keyqlquerycommandlimit for examples.
* @returns {array} result Your return value
*/
module.exports = async (table, where = [{}], limit = {}) => {

  let queryResult = await lib.airtable.query['@0.5.3'].select({
    table: table,
    where: where,
    limit: limit
  });

  return queryResult.rows.map((row) => {
    return row.fields;
  });

};