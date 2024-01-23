import { createStore } from 'redux';
import rootReducer from './mainReducer';
export const store = createStore( rootReducer );
