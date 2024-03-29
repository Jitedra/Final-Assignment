import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'invoice',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Invoice = require('./containers/InvoiceContainer').default
      const reducer = require('./modules/invoice').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'invoice', reducer })

      /*  Return getComponent   */
      cb(null, Invoice)

    /* Webpack named bundle   */
  }, 'invoice')
  }
})
