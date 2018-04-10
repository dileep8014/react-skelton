/**
 * Created by dileepkumar on 4/9/18.
 */
import { cre } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware, combineEpics }  from 'redux-observable';
import { testEpic } from './epics'
import  reducers  from './reducers'


const rootReducers = combineReducers(reducers)
const rootEpics = combineEpics(testEpic)
const epicMiddleware = createEpicMiddleware(rootEpics)

const loggerMiddleWare = (store) => (next) => (action) => {
  console.log(':ACTION',action)
  const result = next(action);
  console.log(':STORE', store.getState())
  return result;
}

export function configureStore() {
    return createStore(
      rootReducers,
      applyMiddleware(epicMiddleware, loggerMiddleWare)
    )
}
