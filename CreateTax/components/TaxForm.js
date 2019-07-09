import React from 'react';

import Button from '../../Button';

class TaxForm extends React.Component {
  render() {
    return(
      <form className='container'>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Applicable Tax :</label>
          <div className="col-sm-5">
            <input type="text" className="form-control" placeholder="Enter Applicable tax" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-5">
            <Button
              name={"Create"}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default TaxForm;
