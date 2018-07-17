import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import $ from 'jquery';

export default class CustomerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: this.props.customer,
      isShip: false
    }
    this.handleShipping = this.handleShipping.bind(this);
    this.formatAndSetPhoneNumber = this.formatAndSetPhoneNumber.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  formatAndSetPhoneNumber(e) {
    let value = e.target.value;
    value = value.slice(0,3)+"-" + value.slice(3,6)+"-" + value.slice(6,15);
    let copy = Object.assign({}, this.state.customer);
    copy.phone = value;
    this.setState({ customer: copy });
  }

  handleChange(key, e) {
    let value = e.target.value
    let copy = Object.assign({}, this.state.customer);
    copy[key] = value;
    this.setState({ customer: copy });
  }

  handleShipping(e) {
    let isShip = (e.target.value === "ship")
    if (isShip) {
      $("#address-container").removeClass("d-none");
    } else {
      $("#address-container").addClass("d-none");
    }
    this.setState({ isShip: isShip });
  }

  handleSubmit(e, completeOrder) {
    e.preventDefault();
    completeOrder(this.state.customer);
  }

  render() {
    const {completeOrder, isOrderStarted, isCustomerInfoCompleted} = this.props;
    if (!isOrderStarted) {
      return <Redirect to="/" />
    }

    if (isCustomerInfoCompleted) {
      return <Redirect to="/thanks" />
    }

    return (
      <div className="customer-info">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Please fill out the following info<br/><small>Required fiels marked with *</small></h1>
              <form onSubmit={e => this.handleSubmit(e, completeOrder)}>
                <label>Name*</label>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      required="required"
                      className="form-control"
                      placeholder="First name"
                      onChange={(e) => this.handleChange("first", e)}/>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      required="required"
                      className="form-control"
                      placeholder="Last name"
                      onChange={(e) => this.handleChange("last", e)}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone number*</label>
                  <input
                    required="required"
                    type="tel"
                    className="form-control"
                    id="last"
                    placeholder="Phone number"
                    size="20"
                    minLength="10"
                    maxLength="14"
                    onBlur={this.formatAndSetPhoneNumber}
                    onChange={(e) => this.handleChange("phone", e)}
                    value={this.state.customer.phone !== null ? this.state.customer.phone : ""}/>
                </div>
                <div className="form-group">
                  <label htmlFor="instructions">Order Instructions</label>
                  <textarea className="form-control" rows="2" id="instructions" placeholder="Shirt color, special cut instructions, etc."></textarea>
                </div>
                <label>Will your order be sent by mail?</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="shipping" id="ship" value="ship" checked={this.state.isShip} onChange={this.handleShipping} />
                  <label className="form-check-label" htmlFor="ship">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="shipping" id="noship" value="noship" checked={!this.state.isShip} onChange={this.handleShipping} />
                  <label className="form-check-label" htmlFor="noship">
                    No
                  </label>
                </div>
                <div id="address-container" className="d-none">
                  <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">City</label>
                      <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">State</label>
                      <select id="inputState" className="form-control">
                        <option defaultValue>Choose...</option>
                        <option value="AL">Alabama</option>
                      	<option value="AK">Alaska</option>
                      	<option value="AZ">Arizona</option>
                      	<option value="AR">Arkansas</option>
                      	<option value="CA">California</option>
                      	<option value="CO">Colorado</option>
                      	<option value="CT">Connecticut</option>
                      	<option value="DE">Delaware</option>
                      	<option value="DC">District Of Columbia</option>
                      	<option value="FL">Florida</option>
                      	<option value="GA">Georgia</option>
                      	<option value="HI">Hawaii</option>
                      	<option value="ID">Idaho</option>
                      	<option value="IL">Illinois</option>
                      	<option value="IN">Indiana</option>
                      	<option value="IA">Iowa</option>
                      	<option value="KS">Kansas</option>
                      	<option value="KY">Kentucky</option>
                      	<option value="LA">Louisiana</option>
                      	<option value="ME">Maine</option>
                      	<option value="MD">Maryland</option>
                      	<option value="MA">Massachusetts</option>
                      	<option value="MI">Michigan</option>
                      	<option value="MN">Minnesota</option>
                      	<option value="MS">Mississippi</option>
                      	<option value="MO">Missouri</option>
                      	<option value="MT">Montana</option>
                      	<option value="NE">Nebraska</option>
                      	<option value="NV">Nevada</option>
                      	<option value="NH">New Hampshire</option>
                      	<option value="NJ">New Jersey</option>
                      	<option value="NM">New Mexico</option>
                      	<option value="NY">New York</option>
                      	<option value="NC">North Carolina</option>
                      	<option value="ND">North Dakota</option>
                      	<option value="OH">Ohio</option>
                      	<option value="OK">Oklahoma</option>
                      	<option value="OR">Oregon</option>
                      	<option value="PA">Pennsylvania</option>
                      	<option value="RI">Rhode Island</option>
                      	<option value="SC">South Carolina</option>
                      	<option value="SD">South Dakota</option>
                      	<option value="TN">Tennessee</option>
                      	<option value="TX">Texas</option>
                      	<option value="UT">Utah</option>
                      	<option value="VT">Vermont</option>
                      	<option value="VA">Virginia</option>
                      	<option value="WA">Washington</option>
                      	<option value="WV">West Virginia</option>
                      	<option value="WI">Wisconsin</option>
                      	<option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>
                </div>
                <h2>Other Contact Information<br /><small>Fill out at least one of the following</small></h2>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => this.handleChange("email", e)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="fb">Facebook</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fb"
                    placeholder="Facebook"
                    onChange={(e) => this.handleChange("fb", e)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="twitter">Twitter</label>
                  <input
                    type="text"
                    className="form-control"
                    id="twitter"
                    placeholder="Twitter"
                    onChange={(e) => this.handleChange("twitter", e)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    type="text"
                    className="form-control"
                    id="instagram"
                    placeholder="Instagram"
                    onChange={(e) => this.handleChange("instagram", e)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="other">Other Mode of Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    id="other"
                    placeholder="Hotel room number, meeting date and time, etc."
                    onChange={(e) => this.handleChange("other", e)}/>
                </div>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
