import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'registration',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Registration = require('./containers/RegistrationContainer').default
      const reducer = require('./modules/registration').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'registration', reducer })

      /*  Return getComponent   */
      cb(null, Registration)

    /* Webpack named bundle   */
    }, 'registration')
  }
})
