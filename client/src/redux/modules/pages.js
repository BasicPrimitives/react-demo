const LOAD = 'redux-example/pages/LOAD';
const LOAD_SUCCESS = 'redux-example/pages/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/pages/LOAD_FAIL';

const initialState = {
  loaded: false,
  pages: [
    {
      pathname: '/',
      title: "Introduction"
    },
    {
      pathname: '/videos',
      title: "Video Tutorials"
    },
    {
      pathname: '/',
      title: "Demos",
      children: [
        {
          pathname: '/',
          title: 'Organizational Chart',
          subheader: '/',
          children: [
            { pathname: '/largehierarchy', title: 'Large Hierarchy' },
            { pathname: '/dynamicloading', title: 'Dynamic Loading' },
            { pathname: '/orgeditor', title: 'Editor & Matrix Layout' },
            { pathname: '/verticallayout', title: 'Vertical Layout' },
            { pathname: '/crossteamgroup', title: 'Cross Functional Team' },
            { pathname: '/highlightannotations', title: 'Highlight & Connector Annotations' },
            { pathname: '/partners', title: 'Partners & Annotations' },
          ]
        },
        {
          pathname: '/',
          title: 'Family Chart',
          subheader: '/',
          children: [
            { pathname: '/familychartitemsordering', title: 'Family Chart Items Ordering' },
            { pathname: '/familychartwithannotations', title: 'Family Chart & Annotations' },
            { pathname: '/familycharttechtree', title: 'Dependency Graph Primary Parents' },
            { pathname: '/dependencies', title: 'Dependencies' },
            { pathname: '/patents', title: 'Patents' },
            { pathname: '/financialownership', title: 'Financial Ownership' },
            { pathname: '/mutualfinancialownership', title: 'Mutual Financial Ownership' },
          ]
        },
      ],
    },
    {
      pathname: '/usecases',
      title: 'JavaScript & PDFKit Use Cases',
      children: []
    },
    {
      pathname: '/reactusecases',
      title: 'ReactJS Use Cases',
      children: []
    },
    { 
      pathname: '/reference', 
      title: 'API reference',
      children: []
    },
    { pathname: '/changelog', title: 'Changelog' },
    { pathname: '/downloads', title: 'Downloads' },
    { pathname: '/license', title: 'License' },
    { pathname: '/contact', title: 'Contact' },
  ]
};

function getPageReference(line) {
  let title = (line.match(/\[([^)]+)\]/) || [])[1];
  let [href, hashTag]  = (line.match(/\(([^)]+)\)/) || [])[1].split("#");
  href = href || "";
  if(href[0] === "/") {
    href = href.substring(1);
  }
  href = href.toLowerCase();
  hashTag = hashTag || "";
  if(hashTag !== "") {
    hashTag = `#${hashTag}`;
  }
  return {
    title,
    href,
    hashTag
  }
}

function getCleanText(markdown) {
  markdown = markdown.replace(/(&amp;)/g, match => '&');
  markdown = markdown.replace(/(\.md)/g, match => '');
  return markdown;
}

function getAPIPages(markdown, baseUrl) {
  const result = [];
  let currentPage = null;
  const lines = getCleanText(markdown).split('\n'); 
  for(var index = 0; index < lines.length; index+=1) {
    var line = lines[index];
    if(line !== "") {
      if(line.substring(0, 4) === "####") {
        const {title, href, hashTag} = getPageReference(line);
        currentPage = {
          title,
          pathname: `/${baseUrl}/${href}${hashTag}`,
          children: []
        }
        result.push(currentPage);
      } else {
        if(currentPage !== null && line.substring(0, 1) === "*") {
          const {title, href, hashTag} = getPageReference(line);
          currentPage.children.push(
            {
              title,
              pathname: `/${baseUrl}/${href}${hashTag}`
            }
          )
        }
      }
    }
  }
  return result;
}

function getSamplePages(markdown, baseUrl) {
  const result = [];
  let currentPage = null;
  const lines = getCleanText(markdown).split('\n'); 
  for(var index = 0; index < lines.length; index+=1) {
    var line = lines[index];
    if(line !== "") {
      if(line.indexOf("github.com") > 0 ) {
      } else {
        if(line.substring(0, 2) === "##") {
          const title = line.substring(2).trim();
          currentPage = {
            title,
            children: []
          }
          result.push(currentPage);
        } else {
          if(line.substring(0, 1) === "*") {
            const {title, href, hashTag} = getPageReference(line);
            currentPage.children.push(
              {
                title,
                pathname: `/${baseUrl}/${href}${hashTag}`
              }
            )
          }
        }
      }
    }
  }
  return result;
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_SUCCESS: {
      const { result } = action;
      const { pages } = state;
      const { javascript, react, reference, packageinfo } = result;
      const childPages = {
        reference: getAPIPages(reference.markdown, 'reference'),
        usecases: getSamplePages(javascript.markdown, 'usecases'),
        reactusecases: getSamplePages(react.markdown, 'reactusecases')
      };
      return {
        ...state,
        loading: false,
        loaded: true,
        version: packageinfo.version,
        pages: pages.map(page => {
          const { pathname, title, children } = page;
          const newChildren = childPages[pathname.substring(1)];
          if(newChildren != null) {
            return {
              pathname,
              title,
              children: newChildren
            };
          } else {
            return {
              pathname,
              title,
              children
            };
          }
        })
      };
    }
    case LOAD_FAIL: {
      const { error } = action;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.pages && globalState.pages.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => Promise.all([
      client.get('/load-markdown?name=javascript-readme'), 
      client.get('/load-markdown?name=react-readme'),
      client.get('/load-markdown?name=reference-readme'),
      client.get('/javascript/package.json')
    ]).then(results => ({
      javascript: results[0],
      react: results[1],
      reference: results[2],
      packageinfo: results[3]
    }))
  };
}

