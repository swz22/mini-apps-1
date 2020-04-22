//TODO rewrite controllers. likely don't need update and delete

const helper = require("./db/dbhelpers.js");

const controller = {
  get: (req, res) => {
    //res.send("hello from get")
    helper.getInfo(function (err, results) {
      if (err) {
        res.status(400).send(err);
      }
      res.json(results);
    });
  },
  // post: (req, res) => {
  //   // res.send("hello from post");
  //   var accountInfo = req.body;
  //   helper.postInfo(groceryItem, (err, results) => {
  //     if(err) console.error(err);
  //     res.status(200).send('successfully posted')
  //   })
  // },
}


module.exports = controller;
