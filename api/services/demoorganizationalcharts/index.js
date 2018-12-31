import LargeOrganizationalChart from './data/largeorganizationalchart.js';
import Partners from './data/partners.js';
import VerticalLayoutOrganizationalChart from './data/verticallayoutorganizationalchart.js';

export default function service(app) {
  app.use('/load-demoorganizationalchart', (req, res) => {
    let result = { message: `Chart ${req.name} not found!` };

    const { name } = req.query;
    switch (name) {
      case 'largeorganizationalchart': {
        const { cursorItem, selectedItems, depth } = req.query;
        const selected = selectedItems != null ? JSON.parse(selectedItems) : [];
        // selecting all data from data source and filtering it in business layer is not optimal,
        // you have to design your data base properly so you don't need to fetch all nodes to filter them
        result = LargeOrganizationalChart(cursorItem, selected, depth);
        break;
      }
      case 'verticallayoutorganizationalchart':
        result = VerticalLayoutOrganizationalChart;
        break;
      case 'partners':
        result = Partners;
        break;
      default:
        break;
    }
    return res.json(result);
  });
}
