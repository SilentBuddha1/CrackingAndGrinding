import React from 'react'
import './App.css'
import Todo from './components/todo'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AddForm from './components/AddForm'

function App() {
  

  return (
    <>
    <Provider store={store}>
      <Todo/>
      <AddForm/>
      </Provider>
    </>
  ) 
}

export default App
