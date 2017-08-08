import { createStore } from 'redux'
// get reducer in file
import reducer from './ducks/counter'
//give reducer to store
let store = createStore(reducer);
//export store
export default store;
