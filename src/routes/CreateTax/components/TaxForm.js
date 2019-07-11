import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../Button';

class TaxForm extends React.Component{
  constructor(props) {
    super(props);
  }

  saveTax = (values) => {
    this.props.taxValue(values);
  }
  render() {
    return(
    <form onSubmit={this.props.handleSubmit(this.saveTax)}>
      <div className="form-group row">
        <div className="col-sm-2">
          <label>Applicable Tax :</label>
        </div>
        <div className="col-sm-5">
          <Field
            name="tax"
            component="input"
            type="text"
            placeholder="Enter Applicable Tax"
            className="form-control"
          />
        </div>
      </div>
      <div className="col-sm-5">
        <Button name={'Create Tax'} />
      </div>
    </form>
  )
}
}
export default reduxForm({
  form: 'tax'
})(TaxForm)
