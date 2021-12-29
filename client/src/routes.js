import { Router } from "@reach/router"
import {
  App,
  Home,
  Videos,
  Demos,
  LargeHierarchy,
  CrossBranchAlignment,
  DynamicLoading,
  OrgEditor,
  VerticalLayout,
  CrossTeamGroup,
  HighlightAnnotations,
  FamilyChartWithAnnotations,
  FamilyChartItemsOrdering,
  Dependencies,
  Patents,
  FinancialOwnership,
  MutualFinancialOwnership,
  TechTree,
  Partners,
  ReactUseCases,
  UseCases,
  ReactHowToUse,
  HowToUse,
  ApiReference,
  Reference,
  Changelog,
  Downloads,
  License,
  Contact,
  NotFound
} from './containers';

const routes =   
<Router>
  <App path="/">
    <Home path="/"/>
    <Videos path="/videos"/>
    <Demos path="/">
      <LargeHierarchy path="largehierarchy" />
      <DynamicLoading path="dynamicloading" />
      <OrgEditor path="orgeditor" />
      <CrossBranchAlignment path="crossbranchalignment" />
      <VerticalLayout path="verticallayout" />
      <CrossTeamGroup path="crossteamgroup" />
      <HighlightAnnotations path="highlightannotations" />
      <FamilyChartWithAnnotations path="familychartwithannotations" />
      <FamilyChartItemsOrdering path="familychartitemsordering" />
      <TechTree path="familycharttechtree" />
      <Dependencies path="dependencies" />
      <Patents path="patents" />
      <Partners path="partners" />
      <FinancialOwnership path="financialownership" />
      <MutualFinancialOwnership path="mutualfinancialownership" />
      <NotFound default />
    </Demos>
    <UseCases path="usecases">
      <HowToUse path=":fileName" />
    </UseCases>
    <ReactUseCases path="reactusecases">
      <ReactHowToUse path=":fileName" />
    </ReactUseCases>
    <Reference path="reference">
      <ApiReference path=":fileName" />
    </Reference>
    <Changelog path="changelog" />
    <Downloads path="downloads" />
    <License path="license" />
    <Contact path="contact" />
  </App>
</Router>

export default routes;
