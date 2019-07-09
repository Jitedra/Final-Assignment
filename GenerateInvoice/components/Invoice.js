import React from 'react';

import Button from '../../Button';

export class InvoiceForm extends React.Component {
  render() {
    return(
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Particular</label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Particular Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Amount</label>
          <div className="col-sm-5">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Amount"
            />
          </div>
        </div>
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Check Me</legend>
            <div className="col-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                />
                <label className="form-check-label">
                  Radio 1
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                />
                <label className="form-check-label">
                  Radio 2
                </label>
              </div>
              <div className="form-check disabled">
                <input
                  className="form-check-input"
                  type="radio"
                />
                <label className="form-check-label">
                  Radio 3
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
          <div className="col-sm-6">
            <Button
              name={"Generate Invoice"}
            />
          </div>
        </div>
      </form>
    );
  }
}
