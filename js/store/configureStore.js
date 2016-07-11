import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import env from 'env';
import createLogger from 'redux-logger';
import skillsReducer from 'skillsReducer'

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
console.log('__DEV__', __DEV__);
console.log('userAgent', !!window.navigator.userAgent);

export default configureStore = () => {
  //DI to make testing of routes easier, can be undone if necessary now that custom compiler (test/support/mocks) is in place
  // const routerMiddleware = syncRoutes(appRoutes, Actions, BackAndroid, ToastAndroid);
  let finalCreateStore;
  if (env.isProd) {
    finalCreateStore = compose(
      // Processed left to right in order, keep oob prior to routing (technically this way oob could block routes from happening)
      //applyMiddleware(promiseMiddleware, thunk, routerMiddleware),
      applyMiddleware(thunk),
    )(createStore);
  } else {
    const logger = createLogger();
    finalCreateStore = compose(
      //applyMiddleware(logger, promiseMiddleware, thunk),
      applyMiddleware(thunk, logger),
      // Works for Android 5.x+ stock or genymotion emulator
      devTools()  //uses internet
      //devTools({ hostname: 'localhost', port: 8013, name: 'Android app' }) //requires dev server
    )(createStore);
  }
  const store = finalCreateStore(combineReducers({
    skills: skillsReducer,
  }));

  if (isDebuggingInChrome) {
    //TODO play around with this to make sure it's working, ideally can access redux store from chrome console
    window.store = store;
  }

  return store;
}
