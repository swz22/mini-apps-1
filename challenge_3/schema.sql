DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;
USE checkout;

CREATE TABLE list (
  id INT AUTO_INCREMENT,
  name VARCHAR(225) NOT NULL,
  email VARCHAR(225) NOT NULL,
  pw VARCHAR(225) NOT NULL,
  address VARCHAR(225) NOT NULL,
  phone INT NOT NULL,
  ccnum VARCHAR(225) NOT NULL,
  ccexp INT NOT NULL,
  cvv INT NOT NULL,
  zip INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO list (id, name, email, pw, address, phone, ccnum, ccexp, cvv, zip) VALUES (1, "jay", "jj@gmail.com", "password", "123 happy lane", 2132222222, "4242-4242-4242-4242", 1120, 321, 90210);