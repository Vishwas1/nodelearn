'use strict';
module.exports = function(app){
    console.log('todoRoute :: Method routes starts.');
    var todoCtrl =  require('../controller/todoCtrl');
    
    app.route('/api/todo')
        .get(todoCtrl.gettodos)
        .post(todoCtrl.createtodo);

    app.route('/api/todo/:todoid')
        .get(todoCtrl.gettodo)
        .put(todoCtrl.udpatetodo)
        .delete(todoCtrl.deltodo);
};