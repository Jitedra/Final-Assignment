import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path : 'tax',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const CreateTax = require('./containers/TaxContainer').default
      const reducer = require('./modules/tax').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'tax', reducer })

      /*  Return getComponent   */
      cb(null, CreateTax)

    /* Webpack named bundle   */
  }, 'tax')
  }
});
