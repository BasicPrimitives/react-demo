import LargeOrganizationalChart from './data/largeorganizationalchart.js';
import VerticalLayoutOrganizationalChart from './data/verticallayoutorganizationalchart.js';
import Partners from './data/partners.js';

export default function tutorialorganizationalchartService(app) {
  app.use('/load-demoorganizationalchart', (req, res) => {
    let result = { message: `Chart ${req.name} not found!` };

    const { name } = req.query;
    switch (name) {
      case 'largeorganizationalchart': {
        const { cursorItem, selectedItems, depth } = req.query;
        const selected = selectedItems != null ? JSON.parse(selectedItems) : [];
        result = LargeOrganizationalChart(cursorItem, selected, depth);
        break;
      }
      case 'verticallayoutorganizationalchart':
        result = VerticalLayoutOrganizationalChart();
        break;
      case 'partners':
        result = Partners();
        break;
      default:
        break;
    }
    // selecting all data from data source and filtering it in business layer is not optimal,
    // you have to design your data base properly so you don't need to fecth all nodes to filter them
    return res.json(result);
  });
}
