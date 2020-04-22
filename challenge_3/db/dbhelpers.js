var db = require('./');

module.exports = {
  getInfo: function (callback) {
    var queryStr = 'SELECT * FROM list';
    db.query(queryStr, function(err, results) {
      callback(err,results)
    })
  },
  postInfo: function (groceryItem, callback) {
    var {item, quantity} = groceryItem;
    var queryStr = `INSERT INTO list (item, quantity) VALUES ('${item}', ${quantity})`;
    db.query(queryStr, function(err, results) {
      callback(err,results)
    })
  }
  // },
  // updateInfo: function ({id, newQuantity}, callback) {
  //   var queryStr = `UPDATE list SET quantity = ${newQuantity} WHERE id = ${id}`;
  //   db.query(queryStr, function(err, results) {
  //     callback(err,results)
  //   })
  // },
  // deleteInfo: function (id, callback) {
  //   var queryStr = `DELETE FROM list WHERE id = ${id}`;
  //   db.query(queryStr, function(err, results) {
  //     callback(err,results)
  //   })
  // }
}