import { Routes, Route } from 'react-router-dom';
import {
  App,
  Home,
  Videos,
  Demos,
  LargeHierarchy,
  DynamicLoading,
  OrgEditor,
  VerticalLayout,
  CrossTeamGroup,
  CrossBranchAlignment,
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
  AngularUseCases,
  AngularHowToUse,
  ApiReference,
  Reference,
  Changelog,
  Downloads,
  License,
  Contact,
  NotFound
} from '@/containers';

const routes = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="videos" element={<Videos />} />
      <Route path="largehierarchy" element={<LargeHierarchy />} />
      <Route path="dynamicloading" element={<DynamicLoading />} />
      <Route path="orgeditor" element={<OrgEditor />} />
      <Route path="crossbranchalignment" element={<CrossBranchAlignment />} />
      <Route path="verticallayout" element={<VerticalLayout />} />
      <Route path="crossteamgroup" element={<CrossTeamGroup />} />
      <Route path="highlightannotations" element={<HighlightAnnotations />} />
      <Route path="familychartwithannotations" element={<FamilyChartWithAnnotations />} />
      <Route path="familychartitemsordering" element={<FamilyChartItemsOrdering />} />
      <Route path="familycharttechtree" element={<TechTree />} />
      <Route path="dependencies" element={<Dependencies />} />
      <Route path="patents" element={<Patents />} />
      <Route path="partners" element={<Partners />} />
      <Route path="financialownership" element={<FinancialOwnership />} />
      <Route path="mutualfinancialownership" element={<MutualFinancialOwnership />} />
      <Route path="usecases" element={<UseCases />}>
        <Route path=":fileName" element={<HowToUse />} />
      </Route>
      <Route path="reactusecases" element={<ReactUseCases />}>
        <Route path=":fileName" element={<ReactHowToUse />} />
      </Route>
      <Route path="angularusecases" element={<AngularUseCases />}>
        <Route path=":fileName" element={<AngularHowToUse />} />
      </Route>
      <Route path="reference" element={<Reference />}>
        <Route path=":fileName" element={<ApiReference />} />
      </Route>
      <Route path="changelog" element={<Changelog />} />
      <Route path="downloads" element={<Downloads />} />
      <Route path="license" element={<License />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all for NotFound */}
    </Route>
  </Routes>
);

export default routes;