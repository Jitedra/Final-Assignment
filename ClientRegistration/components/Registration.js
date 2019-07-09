import React from 'react';
import Button from '../../Button';

class clientRegistrationForm extends React.Component {
  render() {
    return(
      <form className='container'>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name :</label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Organisation Name :</label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Organisation Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Date :</label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="Date"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Address :</label>
          <div className="col-sm-5">
            <input
            type="text"
            className="form-control"
            placeholder="Enter Your Address"
          />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <Button
              name={"Register Client"}
            />
          </div>
        </div>
      </form>
    );
  }
}
export default clientRegistrationForm;
