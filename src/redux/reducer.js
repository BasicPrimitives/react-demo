import multireducer from 'multireducer';
import auth from './modules/auth';
import notifs from './modules/notifs';
import counter from './modules/counter';
import info from './modules/info';
import largeorganizationalchart from './modules/demos/largeorganizationalchart';
import highlightannotations from './modules/demos/highlightannotations';
import partners from './modules/demos/partners';
import dynamicloading from './modules/demos/dynamicloading';
import verticallayoutorganizationalchart from './modules/demos/verticallayoutorganizationalchart';
import crossteamgroup from './modules/demos/crossteamgroup';
import familychartwithannotations from './modules/demos/familychartwithannotations';
import familychartitemsordering from './modules/demos/familychartitemsordering';
import dependencies from './modules/demos/dependencies';
import patents from './modules/demos/patents';
import financialownership from './modules/demos/financialownership';
import techtree from './modules/demos/techtree';
import orgeditor from './modules/demos/orgeditor';
import howtouse from './modules/howtouse';
import reacthowtouse from './modules/reacthowtouse';
import changelog from './modules/changelog';
import downloads from './modules/downloads';
import introduction from './modules/introduction';
import reference from './modules/reference';

export default function createReducers(asyncReducers) {
  return {
    online: (v = true) => v,
    notifs,
    auth,
    counter: multireducer({
      counter1: counter,
      counter2: counter,
      counter3: counter
    }),
    info,
    introduction,
    reference,
    partners,
    largeorganizationalchart,
    dynamicloading,
    verticallayoutorganizationalchart,
    highlightannotations,
    crossteamgroup,
    familychartwithannotations,
    familychartitemsordering,
    dependencies,
    patents,
    financialownership,
    techtree,
    orgeditor,
    howtouse,
    reacthowtouse,
    changelog,
    downloads,
    ...asyncReducers
  };
}
