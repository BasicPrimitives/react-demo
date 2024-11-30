const LargeOrganizationalChart = require('./data/largeorganizationalchart.js');
const Partners = require('./data/partners.js');
const SmallDataset = require('./data/smalldataset.js');
const CrossBranchAlignment = require('./data/crossbranchalignment.js');
const MatrixLayout = require('./data/matrixlayout.js');
const VerticalLayoutOrganizationalChart = require('./data/verticallayoutorganizationalchart.js');

function service(url, app) {
  app.use(`${url}/load-demoorganizationalchart`, (req, res) => {
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
      case 'smalldataset':
        result = SmallDataset;
        break;
      case 'partners':
        result = Partners;
        break;
      case 'matrixlayout':
        result = MatrixLayout;
        break;
      case 'crossbranchalignment':
        result = CrossBranchAlignment;
        break;
      default:
        break;
    }
    return res.json(result);
  });
}

module.exports = service;
