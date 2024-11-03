import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { pageToTitle } from './helpers';
import { useSelector, useDispatch } from 'react-redux';
import { load } from '@/redux/modules/pages';
import { useLocation } from "react-router-dom"
import { Tree } from 'basicprimitives';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Link, useNavigate } from 'react-router-dom';

let savedScrollTop = null;

function PersistScroll(props) {
  const { children } = props;
  const rootRef = React.useRef();

  React.useEffect(() => {
    const parent = rootRef.current ? rootRef.current.parentElement : null;
    const activeElement = document.querySelector('.drawer-active');

    if (!parent || !activeElement || !activeElement.scrollIntoView) {
      return undefined;
    }

    const activeBox = activeElement.getBoundingClientRect();

    if (savedScrollTop === null || activeBox.top - savedScrollTop < 0) {
      // Center the selected item in the list container.
      activeElement.scrollIntoView();
      // Fix a Chrome issue, reset the tabbable ring back to the top of the document.
      document.body.scrollIntoView();
    } else {
      parent.scrollTop = savedScrollTop;
    }

    return () => {
      savedScrollTop = parent.scrollTop;
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}

PersistScroll.propTypes = {
  children: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 240,
    backgroundColor: theme.palette.background.level1,
  },
  title: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  toolbarIe11: {
    display: 'flex',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
}));

function getPagesTree(pages) {
  const tree = Tree();
  tree.add(null, 0, {});
  let key = 0;
  let depth = 0;
  let level = pages.map((value) => { return {...value, parent: 0, depth }});
  while(level.length > 0) {
    depth +=1;
    let newLevel = [];
    for(let index = 0; index < level.length; index+=1) {
      let levelPage = level[index];
      key++;
      let item = {...levelPage, id: key.toString()};
      tree.add(item.parent, key, item);
      if(levelPage.children) {
        for(let childIndex  = 0; childIndex < levelPage.children.length; childIndex+=1) {
          let child = levelPage.children[childIndex]
          newLevel.push({...child, parent: key, depth });  
        }
      }
    }
    level = newLevel;
  }

  return tree;
}

function getActivePages(tree, pathname) {
  let activePage = null;
  tree.loop(this, function (id, page) {
    if(!page.children && page.pathname === pathname) {
      activePage = page;
      return tree.BREAK;
    }
  });

  const activePages = [];
  if(activePage) {
    activePages.push(activePage.id);
    tree.loopParents(this, activePage.id, function (parentid, page) {
      activePages.push(parentid.toString());
    });
  }
  return activePages;
}

function AppDrawer(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loaded = useSelector(state => state.pages.loaded); 
  const pages = useSelector(state => state.pages.pages); 
  let { pathname, hash } = useLocation();

  const navigate = useNavigate();

  const [tree, setTree] = React.useState(getPagesTree(pages));
  const [expandedItems, setExpandedItems] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    } else {
      setTree(getPagesTree(pages));
    }
  }, [loaded, dispatch, pages]);

  React.useEffect(() => {
    // Add support for leading / in development mode.
    if (pathname !== '/') {
      // The leading / is only added to support static hosting (resolve /index.html).
      // We remove it to normalize the pathname.
      // See `rewriteUrlForNextExport` on Next.js side.
      pathname = pathname.replace(/\/$/, '');
    }

    const activePages = getActivePages(tree, `${pathname}${hash}`);
    setSelectedItem(activePages.length > 0 ? activePages[0] : null);
    setExpandedItems(activePages);
  }, [pathname, tree]);

  const handleExpandedItemsChange = (event, itemIds) => {
    setExpandedItems(itemIds);
  };

  const children = {};
  tree.loopPostOrder(this, (pageid, page, parentid, parent) => {
    const handleClick = (event, nodeId) => {
      setSelectedItem(nodeId);
      props.onClose();
      navigate(page.pathname);
    };
    if(pageid > 0) {
      children[parentid] = children[parentid] || [];
      if (children[pageid]) {
        const title = pageToTitle(page);
        children[parentid].push(
          <TreeItem 
            itemId={page.id}
            depth={page.depth}
            key={pageid}
            label={title}
          >
            {children[pageid]}
          </TreeItem>
        );
      } else {
        const title = pageToTitle(page);
        children[parentid].push(
          <TreeItem
            itemId={page.id}
            depth={page.depth}
            key={pageid}
            title={title}
            href={page.pathname}
            onClick={handleClick}
            label={title}
          />
        );
      }
    }
  });

  return (
    <PersistScroll>
      <SimpleTreeView
        expandedItems={expandedItems}
        selectedItems={selectedItem ? [selectedItem] : []}
        onExpandedItemsChange={handleExpandedItemsChange}
      >
        {children[0]}
      </SimpleTreeView>
    </PersistScroll>
  );
}

export default AppDrawer;
