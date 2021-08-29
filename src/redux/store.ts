import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";


export const store = createStore(reducers, {},
  compose(applyMiddleware(thunk),
    // @ts-ignore
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true, traceLimit: 25})
  )
);
