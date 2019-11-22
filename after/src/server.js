const express = require('express');
const app = express();
var data = require('./dataSource.json');
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

// all record
app.get('/api/orders', function (req, res) {
    return res.json({ result: data, count: data.length });
});
// insert
app.post('/api/orders', function (req, res){
    data.splice(0, 0, req.body.value);
    return res.status(200).send('Row Inserted');
});

// remove
app.delete('/api/orders/:id', function (req, res){
    data = data.filter(x => x.OrderID != req.params.id);
    return res.status(200).send('Row Deleted');
});
// update
app.put('/api/orders/:id', function (req, res){
    var index = data.findIndex(x => x.OrderID === req.params.id);
    data.splice(index, 1, req.body.value);
    return res.status(200).send('Row Deleted');
});

app.listen(8080);