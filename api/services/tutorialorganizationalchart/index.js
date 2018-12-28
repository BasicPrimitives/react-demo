const primitives = require('basicprimitives');

export default function tutorialorganizationalchartService(app) {
  app.use('/load-tutorialorganizationalchart', (req, res) => {
    res.json({
      pageFitMode: primitives.common.PageFitMode.FitToPage,
      cursorItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      items: [
        {
          id: 0,
          parent: null,
          title: 'Harry Harter',
          description: 'VP, Strategy, API',
          image: '/photos/h.png'
        },
        {
          id: 1,
          parent: 0,
          title: 'Fannie Carter',
          description: 'Chief Operating Officer, API',
          image: '/photos/f.png'
        },
        {
          id: 2,
          parent: 0,
          title: 'Brent Hill',
          description: 'Business Solutions, API',
          image: '/photos/b.png'
        },
        {
          id: 3,
          parent: 0,
          title: 'Kelly Ward',
          description: 'Business Operations, API',
          image: '/photos/k.png'
        }
      ]
    });
  });
}
