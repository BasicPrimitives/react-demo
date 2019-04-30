import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
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
  Dependencies,
  Patents,
  FinancialOwnership,
  Partners,
  UseCases,
  HardCodedOrganizationalChart,
  StateBoundOrganizationalChart,
  ReduxStateBoundOrganizationalChart,
  ComponentSizingWithCssMedia,
  HowToUse,
  ItemTemplate,
  ButtonsPanel,
  NotFound
} from 'containers';
import About from 'containers/About/Loadable';
import Chat from 'containers/Chat/Loadable';
import Login from 'containers/Login/Loadable';
import LoginSuccess from 'containers/LoginSuccess/Loadable';
import Register from 'containers/Register/Loadable';
import ReduxStatePreloadOrganizationalChart from 'containers/UseCases/ReduxStatePreloadOrganizationalChart/Loadable';

const isAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth.user !== null,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedRouterRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.auth.user === null,
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
      { path: '/dependencies', component: Dependencies },
      { path: '/patents', component: Patents },
      { path: '/partners', component: Partners },
      { path: '/financialownership', component: FinancialOwnership },
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
          },
          {
            path: '/usecases/:fileName',
            exact: true,
            component: HowToUse
          }
        ]
      },
      { path: '/chat', component: isAuthenticated(Chat) },
      { path: '/about', component: isAuthenticated(About) },
      { path: '/login', component: Login },
      { path: '/login-success', component: isAuthenticated(LoginSuccess) },
      { path: '/register', component: isNotAuthenticated(Register) },
      { component: NotFound }
    ]
  }
];

export default routes;
