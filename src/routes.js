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
  ComponentSizingWithCssMedia,
  HowToUse,
  NotFound
} from 'containers';
import About from 'containers/About/Loadable';
import Chat from 'containers/Chat/Loadable';
import Login from 'containers/Login/Loadable';
import LoginSuccess from 'containers/LoginSuccess/Loadable';
import Register from 'containers/Register/Loadable';

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
            path: '/usecases/componentsizingwithcssmedia',
            exact: true,
            component: ComponentSizingWithCssMedia
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
