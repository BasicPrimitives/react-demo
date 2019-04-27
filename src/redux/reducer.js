import { routerReducer } from 'react-router-redux';
import auth from './modules/auth';
import notifs from './modules/notifs';
import tutorialOrgDiagram from './modules/TutorialOrgDiagram';
import preloadOrgDiagram from './modules/PreloadOrgDiagram';
import largeorganizationalchart from './modules/demos/largeorganizationalchart';
import highlightannotations from './modules/demos/highlightannotations';
import partners from './modules/demos/partners';
import dynamicloading from './modules/demos/dynamicloading';
import verticallayoutorganizationalchart from './modules/demos/verticallayoutorganizationalchart';
import crossteamgroup from './modules/demos/crossteamgroup';
import familychartwithannotations from './modules/demos/familychartwithannotations';
import dependencies from './modules/demos/dependencies';
import patents from './modules/demos/patents';
import financialownership from './modules/demos/financialownership';
import orgeditor from './modules/demos/orgeditor';
import howtouse from './modules/howtouse';

export default function createReducers(asyncReducers) {
  return {
    router: routerReducer,
    online: (v = true) => v,
    notifs,
    auth,
    tutorialOrgDiagram,
    preloadOrgDiagram,
    partners,
    largeorganizationalchart,
    dynamicloading,
    verticallayoutorganizationalchart,
    highlightannotations,
    crossteamgroup,
    familychartwithannotations,
    dependencies,
    patents,
    financialownership,
    orgeditor,
    howtouse,
    ...asyncReducers
  };
}
