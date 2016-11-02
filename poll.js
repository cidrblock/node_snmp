var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var snmp       = require ("net-snmp");
var port       = process.env.PORT || 8080;
var router     = express.Router();
var Int64      = require('./lib/Int64')
var request    = require('request');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post('/poll', function(req, res) {
  if (req.body.type == "singles") {
    singlePoll(req.body)
  } else if (req.body.type == "table") {
    tablePoll(req.body)
  }
  res.sendStatus(200);
});

app.use('/', router);
  app.listen(port);

function tablePoll(payload) {
  var options = {
    port: 161,
    retries: 1,
    timeout: 5000,
    transport: "udp4",
    version: snmp.Version2c
  };
  var session = snmp.createSession (payload.device, payload.community, options);
  var oid = payload.oid;
  var columns = Object.keys(payload.columns);

  function render(value, type) {
    switch(type) {
      case "OctetString":
        return String(value)
        break;
      case "Counter64":
        x = new Int64(new Buffer(value))
        return x.toString();
        break;
      case "Integer":
        return value;
        break;
    }
  }

  function responseCb (error, table) {
    results = {}
    if (error) {
      console.error (error.toString ());
    } else {
      var metrics = []
      for (entry in table) {
        var row = table[entry]
        for (column in row) {
          var columnValue = row[column]
          if (!("values" in payload.columns[column])) {
            payload.columns[column].values = []
          }
          payload.columns[column].values.push(render(columnValue, payload.columns[column].type))
        }
      }
    }
    post(payload)
  }
  var maxRepetitions = 5000;
  session.tableColumns (oid, columns, maxRepetitions, responseCb);
}

function post (payload) {
  request({
    url: payload.renderURL,
    method: "POST",
    json: true,   // <--Very important!!!
    body: payload
  }, function (error, response, body){
    if (error) {
      console.log(error)
    } else {
      console.log(response.statusCode);
    }
  });
}
