import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../Button';

class InvoiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taxCreated:''
    }
  }

  componentWillMount() {
    const tax = JSON.parse(localStorage.getItem('Tax'));
    this.setState({
      taxCreated: tax
    })
  }

  saveInvoice = (values) => {
    this.props.invoiceData(values);
    window.location.href = "../../dashboard";
  }

  render() {
    const taxes = this.state.taxCreated!==null && this.state.taxCreated.map(item =>{
      return(
        <option key={item.tax}>{item.tax}</option>
      )
    })
    return(
      <form onSubmit={this.props.handleSubmit(this.saveInvoice)}>
        <div className = "form-group row">
          <div className = "col-sm-2">
            <label>Particulars :</label>
          </div>
          <div className="col-sm-5">
            <Field
              name="particulars"
              component="input"
              type="text"
              placeholder="Enter Particular Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className = "col-sm-2">
            <label>Amount :</label>
          </div>
          <div className = "col-sm-5">
            <Field
              name="amount"
              component="input"
              type="text"
              placeholder="Enter Amount"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <label>Select Tax :</label>
          </div>
          <div className="col-sm-5">
            <Field name="selectTax" className="form-control" component="select">
              <option value = "Select">Select</option>
              {taxes}
            </Field>
          </div>
        </div>
        <div>
          <Button name={"Generate Invoice"} />
        </div>
      </form>
    );
  }
}
export default reduxForm({
  form: 'invoice'
})(InvoiceForm)
