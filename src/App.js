import React from 'react'
import { Provider } from 'react-redux'
import store from './THUNK/store'
import CounterComponent from './THUNK/CounterComponent'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <CounterComponent/>
      </Provider>
    </div>
  )
}

