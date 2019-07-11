import { connect } from 'react-redux';

import InvoiceForm from '../components/Invoice';
import {invoiceData} from '../modules/invoice';

const mapDispatchToProps = (dispatch) => {
    return {
      invoiceData: (value) => dispatch(invoiceData(value))
    }
  }

// const mapStateToProps = (state) => ({
//
// })

export default connect(null, mapDispatchToProps)(InvoiceForm);
