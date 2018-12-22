const primitives = require('basicprimitives');

const SETCURSORITEM = 'redux-example/tutorialorgdiagram/setCursorItem';

const initialState = {
  pageFitMode: primitives.common.PageFitMode.FitToPage,
  cursorItem: 0,
  hasSelectorCheckbox: primitives.common.Enabled.True,
  items: [
    {
      id: 0,
      parent: null,
      title: 'James Nunnally',
      description: 'VP, Public Sector',
      image: '/photos/j.png'
    },
    {
      id: 1,
      parent: 0,
      title: 'Victor Petrie',
      description: 'VP, Human Resources',
      image: '/photos/v.png'
    },
    {
      id: 2,
      parent: 0,
      title: 'Roger Greenlee',
      description: 'Business Solutions, US',
      image: '/photos/r.png'
    },
    {
      id: 3,
      parent: 0,
      title: 'John Drake',
      description: 'Business Operations, Canada',
      image: '/photos/j.png'
    }
  ]
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SETCURSORITEM: {
      const { cursorItem, ...rest } = state;
      return {
        cursorItem: action.cursorItem,
        ...rest
      };
    }
    default:
      return state;
  }
}

export function setCursorItem(cursorItem) {
  return {
    type: SETCURSORITEM,
    cursorItem
  };
}
