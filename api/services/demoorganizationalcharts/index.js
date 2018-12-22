import _ from 'lodash';
import LargeOrganizationalChart from './data/largeorganizationalchart.js';

export default function tutorialorganizationalchartService(app) {
  app.use('/load-demoorganizationalchart', (req, res) => {
    var result = { message: `Chart ${req.name} not found!` };

    switch(req.query.name) {
      case 'largeorganizationalchart':
        result = LargeOrganizationalChart();
        break;
      default:
        break;
    };
    return res.json(result);
  });
}
