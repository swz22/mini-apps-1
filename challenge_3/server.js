const express = require("express");
const bodyParser = require("body-parser");
const path = require('path')
const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", function (req, res) {
  app.query(
    `INSERT INTO list (id, name, email, password, phone, address, creditCard) VALUES ('1', '${req.body.name}', '${req.body.email}', '${req.body.password}', '${req.body.phone}', '${req.body.address1}', '${req.body.address2}','${req.body.city}','${req.body.state}','${req.body.zip}','${req.body.ccNum}','${req.body.expiry}','${req.body.cvv}',' '${req.body.billingZip}')`,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

  res.status(200).send('success!');
  res.end();
});

app.use(express.static(path.join(__dirname, "./public")));
app.listen(port, () => console.log(`listening on port: ${port}`));
