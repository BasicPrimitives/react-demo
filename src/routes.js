import { routerActions } from 'react-router-redux';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import {
  App,
  Home,
  LargeHierarchy,
  DynamicLoading,
  OrgEditor,
  VerticalLayout,
  CrossTeamGroup,
  HighlightAnnotations,
  FamilyChartWithAnnotations,
  Partners,
  UseCases,
  HardCodedOrganizationalChart,
  StateBoundOrganizationalChart,
  ReduxStateBoundOrganizationalChart,
  ComponentSizingWithCssMedia,
  ItemTemplate,
  ButtonsPanel,
  NotFound
} from 'containers';
import Chat from 'containers/Chat/Loadable';
import Login from 'containers/Login/Loadable';
import LoginSuccess from 'containers/LoginSuccess/Loadable';
import Register from 'containers/Register/Loadable';
import ReduxStatePreloadOrganizationalChart from 'containers/UseCases/ReduxStatePreloadOrganizationalChart/Loadable';

const isAuthenticated = connectedReduxRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth.user !== null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.auth.user === null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
});

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/introduction', component: Home },
      { path: '/largehierarchy', component: LargeHierarchy },
      { path: '/dynamicloading', component: DynamicLoading },
      { path: '/orgeditor', component: OrgEditor },
      { path: '/verticallayout', component: VerticalLayout },
      { path: '/crossteamgroup', component: CrossTeamGroup },
      { path: '/highlightannotations', component: HighlightAnnotations },
      { path: '/familychartwithannotations', component: FamilyChartWithAnnotations },
      { path: '/partners', component: Partners },
      {
        path: '/usecases',
        component: UseCases,
        routes: [
          {
            path: '/usecases/hardcodedorganizationalchart',
            exact: true,
            component: HardCodedOrganizationalChart
          },
          {
            path: '/usecases/stateboundorganizationalchart',
            exact: true,
            component: StateBoundOrganizationalChart
          },
          {
            path: '/usecases/reduxstateboundorganizationalchart',
            exact: true,
            component: ReduxStateBoundOrganizationalChart
          },
          {
            path: '/usecases/reduxstatepreloadorganizationalchart',
            exact: true,
            component: ReduxStatePreloadOrganizationalChart
          },
          {
            path: '/usecases/componentsizingwithcssmedia',
            exact: true,
            component: ComponentSizingWithCssMedia
          },
          {
            path: '/usecases/buttonspanel',
            exact: true,
            component: ButtonsPanel
          },
          {
            path: '/usecases/itemtemplate',
            exact: true,
            component: ItemTemplate
          }
        ]
      },
      { path: '/chat', component: isAuthenticated(Chat) },
      { path: '/login', component: Login },
      { path: '/login-success', component: isAuthenticated(LoginSuccess) },
      { path: '/register', component: isNotAuthenticated(Register) },
      { component: NotFound }
    ]
  }
];

export default routes;
