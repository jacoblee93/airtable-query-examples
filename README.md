# Airtable Base Query Example

## Deploy Now

[<img src="https://deploy.stdlib.com/static/images/deploy.svg?" width="192">](https://deploy.stdlib.com/)

This project contains an endpoint that queries data from an Airtable base as an authless API. It wraps the [airtable.query.select](https://autocode.com/stdlib/airtable/query/#select) API and makes the data available for frontend calls. You can deploy this API in just a few clicks onto Autocode by clicking the button above and linking your desired Airtable Base.

This behavior is completely customizable by editing the API code and redeploying. The only things you'll need are an Autocode account and an Airtable base!

## The Query Endpoint

Your endpoint will be accessible via HTTP. You can make calls to it via the [lib-js](https://github.com/stdlib/lib-js) frontend package, or directly to the URL using `fetch` or whatever HTTP client you prefer.

Given an Airtable base with the following content:

![](./images/base-contents.png)

Here are some examples and results of querying your base via this endpoint:

Via `lib-js`:
```
lib.username['airtable-select-query']['@dev']({
  table: 'People',
  where: [{
    Name__startswith: 'Bil'
  }]
}, (err, data) => {
  if (err) {
    // Handle error
  }
  console.log(data);
  /*
    Logs:
    [{
      Name: 'Bilbo Baggins',
      Job: 'Burglar'
    }, {
      Name: 'Billiam Smith',
      Job: 'Actor'
    }, {
      Name: 'Billy Eyelash',
      Job: 'Artist'
    }]
  */
});
```

Via `fetch`:
```
async function fetchData () {
  // You must provide the trailing slash in the URL
  let response = await fetch('https://username.api.stdlib.com/airtable-select-query@dev/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      table: 'People',
      where: [{
        Job__contains: 'ist'
      }]
    })
  });
  return response.json();
  /*
    Returns:
    [{
      Name: 'Billy Eyelash',
      Job: 'Artist'
    }, {
      Name: 'Vin Venture',
      Job: 'Mistborn'
    }]
  */
}
```

The endpoint accepts [KeyQL query and limit parameters](https://github.com/FunctionScript/KeyQL) to make queries. See here for the spec and more examples: https://github.com/FunctionScript/KeyQL

