import notifs from './modules/notifs';
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
import mutualfinancialownership from './modules/demos/mutualfinancialownership';
import techtree from './modules/demos/techtree';
import orgeditor from './modules/demos/orgeditor';
import howtouse from './modules/howtouse';
import reacthowtouse from './modules/reacthowtouse';
import changelog from './modules/changelog';
import downloads from './modules/downloads';
import contact from './modules/contact';
import videos from './modules/videos';
import license from './modules/license';
import introduction from './modules/introduction';
import reference from './modules/reference';
import notificationsReducer from './modules/notificationsReducer';
import pages from './modules/pages';

export default function createReducers() {
  return {
    online: (v = true) => v,
    notifs,
    introduction,
    pages,
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
    mutualfinancialownership,
    techtree,
    orgeditor,
    howtouse,
    reacthowtouse,
    changelog,
    downloads,
    videos,
    contact,
    license,
    notificationsReducer
  };
}
