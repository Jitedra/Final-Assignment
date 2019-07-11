import { connect } from 'react-redux';

import { clientRegistration } from '../modules/registration';
import Registration from '../components/Registration';

const mapDispatchToProps = (dispatch) => {
  return {
    clientRegistration: (details) => dispatch(clientRegistration(details))
  }
}
// const mapStateToProps = (state) => ({
//
// })

export default connect(null, mapDispatchToProps)(Registration);
