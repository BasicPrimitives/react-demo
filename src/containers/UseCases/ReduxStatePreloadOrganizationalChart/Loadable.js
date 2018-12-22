import React from 'react';
import Loadable from 'react-loadable';

const ReduxStatePreloadOrganizationalChartLoadable = Loadable({
  loader: () => import('./ReduxStatePreloadOrganizationalChart' /* webpackChunkName: 'reduxstatepreloadorganizationalchart' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ReduxStatePreloadOrganizationalChartLoadable;
