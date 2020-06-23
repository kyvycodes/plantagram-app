import React from 'react'
import {connect} from 'react-redux'
import {editOrder} from '../../store/orders'

class OrderForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddress: '',
      shippingCity: '',
      shippingState: '',
      shippingZipCode: '',
      billingFirstName: '',
      billingLastName: '',
      billingAddress: '',
      billingCity: '',
      billingState: '',
      billingZipCode: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.editOrder(event, this.props.order.id)
    localStorage.removeItem('currentOrder')

    this.setState({
      email: '',
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddress: '',
      shippingCity: '',
      shippingState: '',
      shippingZipCode: '',
      billingFirstName: '',
      billingLastName: '',
      billingAddress: '',
      billingCity: '',
      billingState: '',
      billingZipCode: ''
    })
  }

  render() {
    const totalCost = this.props.orderSummary.reduce((sum, curPlant) => {
      return sum + curPlant.plant_order.plantSubtotal
    }, 0)

    return (
      <div>
        <h1>Total Cost: ${totalCost / 100}</h1>
        <div className="form-element">
          <form id={this.props.orderId} onSubmit={this.handleSubmit}>
            <div id="shipping-info" className="form-section">
              <h1>Shipping Information</h1>
              <div id="shipping-name" className="form-row">
                <div>
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="shippingFirstName"
                    onChange={this.handleChange}
                    value={this.state.shippingFirstName}
                  />
                </div>
                <div>
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="shippingLastName"
                    onChange={this.handleChange}
                    value={this.state.shippingLastName}
                  />
                </div>
              </div>
              <div id="shipping-address" className="form-row">
                <div>
                  <label>Address:</label>
                  <input
                    type="text"
                    name="shippingAddress"
                    onChange={this.handleChange}
                    value={this.state.shippingAddress}
                  />
                </div>
              </div>
              <div id="shipping-region" className="form-row">
                <div>
                  <label>City:</label>
                  <input
                    type="text"
                    name="shippingCity"
                    onChange={this.handleChange}
                    value={this.state.shippingCity}
                  />
                </div>
                <div>
                  <label>State:</label>
                  <input
                    type="text"
                    name="shippingState"
                    onChange={this.handleChange}
                    value={this.state.shippingState}
                  />
                </div>
                <div>
                  <label>Zip Code:</label>
                  <input
                    type="text"
                    name="shippingZipCode"
                    onChange={this.handleChange}
                    value={this.state.shippingZipCode}
                  />
                </div>
              </div>
            </div>
            <div id="billing-info" className="form-section">
              <h1>Billing Information</h1>
              <div id="order-cost">
                <input
                  type="hidden"
                  name="totalCost"
                  readOnly
                  value={totalCost}
                />
              </div>
              <div id="order-email" className="form-row">
                <div>
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </div>
              </div>
              <div id="billing-name" className="form-row">
                <div>
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="billingFirstName"
                    onChange={this.handleChange}
                    value={this.state.billingFirstName}
                  />
                </div>
                <div>
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="billingLastName"
                    onChange={this.handleChange}
                    value={this.state.billingLastName}
                  />
                </div>
              </div>
              <div id="billing-address" className="form-row">
                <div>
                  <label>Address:</label>
                  <input
                    type="text"
                    name="billingAddress"
                    onChange={this.handleChange}
                    value={this.state.billingAddress}
                  />
                </div>
              </div>
              <div id="billing-region" className="form-row">
                <div>
                  <label>City:</label>
                  <input
                    type="text"
                    name="billingCity"
                    onChange={this.handleChange}
                    value={this.state.billingCity}
                  />
                </div>
                <div>
                  <label>State:</label>
                  <input
                    type="text"
                    name="billingState"
                    onChange={this.handleChange}
                    value={this.state.billingState}
                  />
                </div>
                <div>
                  <label>Zip Code:</label>
                  <input
                    type="text"
                    name="billingZipCode"
                    onChange={this.handleChange}
                    value={this.state.billingZipCode}
                  />
                </div>
              </div>
            </div>
            <button type="submit">Submit Order</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {
    editOrder: (event, orderId) => dispatch(editOrder(event, orderId))
  }
}

export default connect(mapState, mapDispatch)(OrderForm)