import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';

import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();


const store = createStore(reducer)

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

