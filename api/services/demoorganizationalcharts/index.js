import LargeOrganizationalChart from './data/largeorganizationalchart.js';
import Partners from './data/partners.js';
import MatrixLayout from './data/matrixlayout.js';
import VerticalLayoutOrganizationalChart from './data/verticallayoutorganizationalchart.js';

export default function service(app) {
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
        result = VerticalLayoutOrganizationalChart;
        break;
      case 'partners':
        result = Partners;
        break;
      case 'matrixlayout':
        result = MatrixLayout;
        break;
      default:
        break;
    }
    return res.json(result);
  });
}
