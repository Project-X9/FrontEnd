import * as ActionTypes from '../ActionTypes';


export async function run(effect, dispatch) {
    switch (effect.type) {
    case 'SET_INTERVAL':
      return setInterval(() => dispatch(effect.action), effect.period);
    case 'CLEAR_INTERVAL':
      clearInterval(effect.id);
      break;
    default:
      return;
    }
  }