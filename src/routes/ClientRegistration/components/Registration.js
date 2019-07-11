import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Button from '../../Button';

class Registration extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      organisation:'',
      date:'',
      address:''
    }
  }

  saveForm = (values) => {
    this.props.clientRegistration(values);
    window.location.href = "../../tax";
  }

  render() {
    const { handleSubmit, reset } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit(this.saveForm)}>
        <div className="form-group row">
          <div className="col-sm-2">
            <label>Name :</label>
          </div>
          <div className="col-sm-5">
            <Field
              name="name"
              component='input'
              type="text"
              value={this.state.name}
              placeholder="Enter your Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <label>Organisation :</label>
          </div>
          <div className="col-sm-5">
            <Field
              name="organisation"
              component='input'
              type="text"
              placeholder="Enter your organisation"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <label>Date :</label>
          </div>
          <div className="col-sm-5">
            <Field
              name="date"
              component='input'
              type="date"
              placeholder="Date"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">
            <label>Address :</label>
          </div>
          <div className="col-sm-5">
            <Field
              name="address"
              component='input'
              type="text"
              placeholder="Enter your address"
              className="form-control"
            />
          </div>
        </div>
        <div>
          <Button name={"Register Client"} />
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration'
})(Registration)
