var express =  require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3000;


    // mongoose instance connection url connection
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://admin:mongo2017@vishwascluster-shard-00-00-g2gj6.mongodb.net:27017,vishwascluster-shard-00-01-g2gj6.mongodb.net:27017,vishwascluster-shard-00-02-g2gj6.mongodb.net:27017/test?ssl=true&replicaSet=VishwasCluster-shard-0&authSource=admin'); 
    
    console.log('server :: Before connecting to database.');
    //mongoose.connect('mongodb:localhost:27017/tododb'); 
    console.log('server :: After connecting to database.');


    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var routes = require('./api/route/todoRoute'); //importing route
    console.log('server :: Before calling method routes.');
    routes(app); //register the route
    console.log('server :: After calling method routes.');

    app.use(function(req, res) {
        res.status(404).send({url: req.originalUrl + ' not found'})
    });

    app.listen(port);
    console.log('todo list RESTful API server started on: ' + port);
