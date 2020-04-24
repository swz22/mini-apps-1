class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      ccNum: "",
      ccExp: "",
      cvv: "",
      ccZip: "",
      currentPage: 0,
    };

    this.switchPage = this.switchPage.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.nextPageHandler = this.nextPageHandler.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  switchPage(page) {
    if (page === 0) {
      return (
        <div>
          <h1> Click to Start Checkout! </h1>
          <button onClick={this.nextPageHandler}>Start</button>
        </div>
      );
    } else if (page === 1) {
      return (
        <div>
          <h3> Enter Personal Information </h3>
          <UserInfo
            change={this.changeHandler.bind(this)}
            changePage={this.nextPage.bind(this)}
          />
        </div>
      );
    } else if (page === 2) {
      return (
        <div>
          <h3> Enter Shipping Information </h3>
          <Shipping
            change={this.changeHandler.bind(this)}
            changePage={this.nextPage.bind(this)}
          />
        </div>
      );
    } else if (page === 3) {
      return (
        <div>
          <h3> Enter Payment Information </h3>
          <CC
            change={this.changeHandler.bind(this)}
            changePage={this.nextPage.bind(this)}
          />
        </div>
      );
    } else if (page === 4) {
      return (
        <div>
          <Confirmation
            info={this.state}
          />
        </div>
      );
    }
  }

  changeHandler(event) {
    var change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  nextPageHandler(event) {
    event.preventDefault();
    this.nextPage();
  }

  nextPage() {
    var nextState = this.state.currentPage + 1;
    this.setState({ currentPage: nextState });
  }

  render() {
    return this.switchPage(this.state.currentPage);
  }
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.changePage();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" onChange={this.props.change} name="name"></input>
        </div>
        <div>
          <label>E-mail:</label>
          <input type="text" onChange={this.props.change} name="email"></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" onChange={this.props.change} name="password"></input>
        </div>
        <div>
          <input type="submit" value="Next"></input>
        </div>
      </form>
    );
  }
}

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.changePage();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <div>
          <label>Address 1:</label>
          <input type="text" onChange={this.props.change} name="address1"></input>
        </div>
        <div>
          <label>Address 2:</label>
          <input type="text" onChange={this.props.change} name="address2"
          ></input>
        </div>
        <div>
          <label>City:</label> <input type="text" onChange={this.props.change} name="city"></input>
        </div>
        <div>
          <label>State:</label>
          <input type="text" onChange={this.props.change} name="state"></input>
        </div>
        <div>
          <label>Zip Code:</label>
          <input type="text" onChange={this.props.change} name="zip"></input>
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" onChange={this.props.change} name="phone"></input>
        </div>
        <div>
          <input type="submit" value="Next"></input>
        </div>
      </form>
    );
  }
}

class CC extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.changePage();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <div>
          <label>Credit Card# :</label>
          <input type="text" onChange={this.props.change} name="ccNum"></input>
        </div>
        <div>
          <label>Expiration Date :</label>
          <input type="text" onChange={this.props.change} name="ccExp"></input>
        </div>
        <div>
          <label>CVV :</label>
          <input type="text" onChange={this.props.change} name="cvv"></input>
        </div>
        <div>
          <label>Zip Code:</label>
          <input type="text" onChange={this.props.change} name="ccZip"></input>
        </div>
        <div>
          <input type="submit" value="Next"></input>
        </div>
      </form>
    );
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.info);
  }

  clickPurchase(event) {
    event.preventDefault();
    alert("Pleasure doing business with ya!");
    this.sendPurchase();
  }

  render() {
    return (
      <form className="form" onSubmit={this.clickPurchase.bind(this)}>
        <div className="confirmation">
          <div>Name: {this.props.info.name}</div>
          <div>E-mail: {this.props.info.email}</div>
          <div>Address: {this.props.info.address1} {this.props.info.address2}{this.props.info.city}{this.props.info.state}{this.props.info.zip}</div>
          <div>Phone Number: {this.props.info.phone}</div>
          <div>Credit Card: {this.props.info.ccNum}</div>
          <div>Expiration Date: {this.props.info.ccExp}</div>
          <div>CVV: {this.props.info.cvv}</div>
          <div>Zip Code: {this.props.info.ccZip}</div>
          <br></br>
          <footer>Is this information correct?</footer>
        </div>
        <input type="submit" value="Complete your purchase!"></input>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
