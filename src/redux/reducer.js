import { routerReducer } from 'react-router-redux';
import auth from './modules/auth';
import notifs from './modules/notifs';
import tutorialOrgDiagram from './modules/TutorialOrgDiagram';
import preloadOrgDiagram from './modules/PreloadOrgDiagram';
import demoOrganizationalChart from './modules/demoorganizationalchart';

export default function createReducers(asyncReducers) {
  return {
    router: routerReducer,
    online: (v = true) => v,
    notifs,
    auth,
    tutorialOrgDiagram,
    preloadOrgDiagram,
    demoOrganizationalChart,
    ...asyncReducers
  };
}
