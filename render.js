var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var port       = process.env.PORT || 8081;
var router     = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post('/render', function(req, res) {
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
  metrics = [];
  for (i in payload.metrics) {
    for (j in payload.columns[payload.metrics[i]].values) {
      metric = []
      for (k in payload.metricFormat) {
        switch(payload.metricFormat[k].type) {
          case "key":
            metric.push(payload[payload.metricFormat[k].value]);
            break;
          case "string":
            metric.push(payload.metricFormat[k].value);
            break;
          case "reference":
            var value = payload.columns[payload.metricFormat[k].column].values[j]
            metric.push(value);
            break;
          case "metric":
            metric.push(payload.columns[payload.metrics[i]].name)
            break;
        }
      }
      var value = payload.columns[payload.metrics[i]].values[j]
      metrics.push(metric.join('.') + " " + value) // for (k in request.metricFormat)
    } // for (j in request.metrics)
  }
  console.log(metrics)
}
