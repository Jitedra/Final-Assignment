import { connect } from 'react-redux';

import { taxValue } from '../modules/tax';
import TaxForm from '../components/TaxForm';

const mapDispatchToProps = (dispatch) => {
  return {
    taxValue: (value) => dispatch(taxValue(value))
  }
}

// const mapStateToProps = (state) => ({
//
// })

export default connect(null, mapDispatchToProps)(TaxForm);
