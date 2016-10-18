import Immutable from 'immutable'

export default (state = Immutable.List(['sample app']), action) => {
  switch(action.type) {
    case 'addItem':
      return state.unshift(action.a)
    case 'deleteItem':
      return state.filter((a, b) => b !== action.b)
    default:
      return state
  }
}