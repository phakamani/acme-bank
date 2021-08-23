const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    const allowedOrigins = ['https://travis-ci.com/', 'http://localhost:4200', 'http://127.0.0.1:9000', 'http://localhost:9000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.setHeader('Content-Type', 'application/json');

    // Pass to next layer of middleware
    next();
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/accounts', (req, res) => {
  res.send([
      {
          "account_number": "6331103626640816",
          "account_type": "cheque",
          "balance": "-296.65"
      },
      {
          "account_number": "5248117462997084",
          "account_type": "savings",
          "balance": "-20.00"
      },
      {
          "account_number": "3581474249964105",
          "account_type": "savings",
          "balance": "980.20"
      },
      {
          "account_number": "6709502417011422",
          "account_type": "savings",
          "balance": "905.81"
      },
      {
          "account_number": "5308160489139568",
          "account_type": "cheque",
          "balance": "-986.10"
      },
      {
          "account_number": "3559243852997209",
          "account_type": "cheque",
          "balance": "531.75"
      },
      {
          "account_number": "3585913435866604",
          "account_type": "cheque",
          "balance": "253.14"
      },
      {
          "account_number": "3564003756077737",
          "account_type": "savings",
          "balance": "896.79"
      },
      {
          "account_number": "3543910523783643",
          "account_type": "cheque",
          "balance": "-590.47"
      },
      {
          "account_number": "3532070362684767",
          "account_type": "savings",
          "balance": "58.00"
      }
  ])
})

app.post('/login', function (req, res) {
    const data = {
      userName: "userName",
      password: "password"
    };
    let response = {};
    // const login
    if (req.body.userName === data.userName && req.body.password === data.password) {
      response = {
        status: 'success',
        message: 'login successful'
      }
    } else {
      response = {
        status: 'error',
        message: 'No matching user name and password found'
      }
      res.status(404);
    }
    res.send(response);
})

app.listen(8080, () => console.log('Server running on port 8080'))
