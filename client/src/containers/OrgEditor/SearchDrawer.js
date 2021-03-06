import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { TextOption } from 'components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { hideDrawer, setFilterText, setCursorItem } from 'redux/modules/demos/orgeditor';
import NodeDragSource from './NodeDragSource';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    listItem: {
        margin: theme.spacing(1),
        width: 220,
        height: 120
    }
}));

function SearchDrawer(props) { // eslint-disable-line react/prefer-stateless-function
    const theme = useTheme();
    const styles = useStyles(theme);
    const { open } = props;
    const isPrimary = useSelector(state => state.orgeditor.isPrimary); 
    const filterText = useSelector(state => state.orgeditor.filterText); 
    const filteredItems = useSelector(state => state.orgeditor.filteredItems); 
    const dispatch = useDispatch()
  

    return <Drawer
        key="search-drawer"
        className={styles.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
        paper: styles.drawerPaper,
        }}
    >
        <div key="icon" className={styles.drawerHeader}>
        <IconButton onClick={() => dispatch(hideDrawer())}>
            {theme.direction === 'ltr' ?  <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        </div>
        <Divider />
        <Container fixed>
            <TextOption
                key="filter-text"
                caption="Search text"
                propertyName="filterText"
                valueType="string"
                value={filterText}
                isNullable={true}
                onChange={value => dispatch(setFilterText(value))}
                />
            <List aria-label="children-list">
                {filteredItems.map((itemConfig, index) => (
                    <ListItem className={styles.listItem} key={`item-${itemConfig.id}`} button onClick={() => dispatch(setCursorItem(itemConfig.id, isPrimary))}>
                        <NodeDragSource itemConfig={itemConfig}></NodeDragSource>
                    </ListItem>
                ))}
            </List>
        </Container>
    </Drawer>;
}

export default SearchDrawer;
