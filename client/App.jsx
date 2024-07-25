
import React from 'react'
import { Stack_Navigation } from './config/Stack_Navigation'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>

      <Stack_Navigation />
    </Provider>
  )
}

export default App