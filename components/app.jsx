import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import vault from '../sample'
import TodoAppSample from './todolist'

let sample = document.getElementById('app')
render(
  <Provider store={vault}>
    <TodoAppSample />
  </Provider>,
  sample
)
