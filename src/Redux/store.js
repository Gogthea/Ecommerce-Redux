import {createStore} from 'redux';
import rootreducers from './Reducere';

const store = createStore(rootreducers);

export default store;