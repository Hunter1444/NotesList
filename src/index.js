import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

let defaultNotes = [
  {
    name: 'пост 1',
    active: true
  },
  {
    name: 'пост 2',
    active: true
  },
]

function reducer(state = defaultNotes, action){
  if(action.type === "CREATE_NOTE"){
    return  [
      ...state,
      {
        name:'',
        active: true
      }
    ]
  } else{
    return state
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
