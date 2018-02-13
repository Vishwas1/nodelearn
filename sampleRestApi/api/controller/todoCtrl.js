'use strict';
var mongoose = require('mongoose'),
    todoMdl = require('../model/todoMdl');
    
module.exports = {
    gettodos : function (req,resp){
        console.log('todoCtrl :: Method gettodos starts.');
        todoMdl.find({},function(err,res){
            if(err) res.send(err);
            else
            resp.status(200).json(res); 
        });
    },

    createtodo : function (req,resp){
        console.log('todoCtrl :: Method createtodo starts.');
        let newtodo = new todoMdl(req.body);
        console.log('todoCtrl :: req.body = ', req.body);
        newtodo.save(function(err, res){
            if(err) res.status(500).send(err);
            else
            resp.status(200).json(res);
        });
    },
    gettodo : function (req,resp){
        console.log('todoCtrl :: Method gettodo starts. id :', req.params.todoid);
        todoMdl.findById(req.params.todoid, function(err,res) {
            if (err)
                res.status(500).send(err);
            else
                resp.status(200).json(res);
        });
    },

    udpatetodo : function (req,resp){
        todoMdl.findOneAndUpdate({_id: req.params.todoid}, req.body, {new: true}, function(err, task) {
            if (err)
                res.send(err);
            else
            resp.status(200).json(task);
        });
    },

    deltodo : function (req,resp){
        todoMdl.remove({
            _id: req.params.todoid
            }, function(err, task) {
            if (err)
                res.send(err);
                else
                resp.status(200).json({ message: 'ToDo successfully deleted' });
        });
    }

}
   

    

    

    

    
