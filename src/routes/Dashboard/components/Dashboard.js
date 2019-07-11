import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientData:{},
      taxData:{},
      invoiceData:{},
      finalPrice:''
    }
  }

  componentWillMount() {
    //client details
    const ClientData = JSON.parse(localStorage.getItem('Details'));
    this.setState({
      clientData: ClientData[0]
    });

    const TaxData = JSON.parse(localStorage.getItem('Tax'));
    this.setState({
      taxData: TaxData
    });

    //invoice data
    const InvoiceData = JSON.parse(localStorage.getItem('Invoice'));
    this.setState({
      invoiceData: InvoiceData[0]
    });
  }



  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <h3><b>Client Info</b></h3>
          </div>
          <div className="col-sm-10">
            <form>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name :</label>
                <div className="col-sm-5">
                  <input type="text" readOnly value={this.state.clientData.name} className="form-control-plaintext" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Organisation :</label>
                <div className="col-sm-5">
                  <input type="text" readOnly value={this.state.clientData.organisation} className="form-control-plaintext" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Date :</label>
                <div className="col-sm-5">
                  <input type="text" readOnly value={this.state.clientData.date} className="form-control-plaintext" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Address :</label>
                <div className="col-sm-5">
                  <input type="text" readOnly value={this.state.clientData.address} className="form-control-plaintext" />
                </div>
              </div>
            </form>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <h3><b>Tax Info</b></h3>
          </div>
          <div className="col-sm-10">
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" disabled />
              <label className="form-check-label">
                Disabled radio
              </label>
            </div>
            <hr />
          </div>
        </div>
        <div>
          <div className="col-sm-2">
            <h3><b>Invoice</b></h3>
          </div>
          <div className="col-sm-12">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Serial</th>
                  <th scope="col">Particulars</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Tax</th>
                  <th scope="col">Final Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{this.state.invoiceData.particulars}</td>
                  <td>{this.state.invoiceData.amount}</td>
                  <td>{this.state.invoiceData.selectTax}</td>
                  <td>{this.state.finalPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
