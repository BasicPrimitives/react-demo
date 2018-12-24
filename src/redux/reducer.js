// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import auth from './modules/auth';
import notifs from './modules/notifs';
import tutorialOrgDiagram from './modules/TutorialOrgDiagram';
import preloadOrgDiagram from './modules/PreloadOrgDiagram';
import largeorganizationalchart from './modules/demos/largeorganizationalchart';
import verticallayoutorganizationalchart from './modules/demos/verticallayoutorganizationalchart';
import crossteamgroup from './modules/demos/crossteamgroup';

export default function createReducers(asyncReducers) {
  return {
    router: routerReducer,
    online: (v = true) => v,
    notifs,
    auth,
    tutorialOrgDiagram,
    preloadOrgDiagram,
    largeorganizationalchart,
    verticallayoutorganizationalchart,
    crossteamgroup,
    ...asyncReducers
  };
}
