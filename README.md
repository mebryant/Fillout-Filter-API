# Fillout-Filter-API

## Start-Up

### Env
To start add a `.env` file to the base of this project with the following keys populated:
```yaml
PORT=
FILLOUT_API_KEY=
FILLOUT_BASE_URL=
```

### Starting
Next, start the application with the following commands:
```bash
npm i
npm start
```

## Important Links
To access the swagger API for this project use the following link:
`http://localhost:3000/api-docs`
`https://fillout-filter-api-ejgt.onrender.com/api-docs`


### cURL Request
```bash
curl -X 'GET' \
  'https://fillout-filter-api-ejgt.onrender.com/cLZojxk94ous/filteredResponses?limit=1&filters=%7B%0A%20%20%22id%22%3A%20%22bE2Bo4cGUv49cjnqZ4UnkW%22%2C%0A%20%20%22condition%22%3A%20%22equals%22%2C%0A%20%20%22value%22%3A%20%22Johnny%22%0A%7D' \
  -H 'accept: application/json'
```