import { makeStyles } from "@material-ui/core/styles";

const useStyles =  makeStyles(theme => {
  let TemplateItem = {
    position: 'absolute',
    fontFamily: 'Trebuchet MS, Tahoma, Verdana, Arial, sans-serif',
    webkitTapHighlightColor: 'rgba(0,0,0,0)',
    webkitUserSelect: 'none',
    webkitTouchCallout: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    boxSizing: 'content-box',
  },
  TemplateCornerAll = {
    mozBorderRadius: '4px',
    webkitBorderRadius: '4px',
    khtmlBorderRadius: '4px',
    borderRadius: '4px',
  },
  TemplateItemFrame = {
    border: '1px solid #dddddd',
    background: '#eeeeee',
    color: '#333333',
  },
  TemplateTitle = {
    textOverflow: 'ellipsis',
    oTextOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '14px',
    lineHeight: '16px',
    color: 'white',
    padding: '0',
  };

  const drawerWidth = 350;

  return ({
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
    appContent: {
      margin: '70px 0', // for fixed navbar
      position: 'relative'
    },
    buttonsPanel: {
      width: '100%',
      padding: '5px'
    },
    placeholder: {
      width: '100%',
      height: '350px',
      borderWidth: '1px',
      borderStyle: 'dotted',
      "@media screen and (min-height: 600px)": {
        height: '350px'
      },
      "@media screen and (min-height: 700px)": {
        height: '450px'
      },    
      "@media screen and (min-height: 800px)": {
          height: '550px'
      },    
      "@media screen and (min-height: 900px)": {
          height: '650px'
      },    
      "@media screen and (min-height: 1000px)": {
          height: '750px'
      },    
      "@media screen and (min-height: 1100px)": {
          height: '850px'
      },    
      "@media screen and (min-height: 1200px)": {
          height: '950px'
      },    
      "@media screen and (min-height: 1300px)": {
          height: '1050px'
      },    
      "@media screen and (min-height: 1400px)": {
          height: '1150px'
      },    
      "@media screen and (min-height: 1500px)": {
          height: '1250px'
      }
    },
    Badge: {
      boxSizing: "content-box",
      mozBorderRadius: '16px',
      webkitBorderRadius: '16px',
      khtmlBorderRadius: '16px',
      borderRadius: '16px',
      fontSize: "14px",
      lineHeight: "18px",
      textAlign: "center",
      textDecoration: "none",
      verticalAlign: "middle",
      fontWeight: "bold",
      fontFamily: "Arial",
      padding: "4px",
      float: "left",
      width: "16px",
      height: "16px",
      zIndex: "1000",
      color: "white"
    },    
    BadgeLabel: {
      boxSizing: "content-box",
      fontSize: "14px",
      lineHeight: "18px",
      textAlign: "center",
      textDecoration: "none",
      verticalAlign: "middle",
      fontWeight: "bold",
      fontFamily: "Arial",
      paddingTop: "6px"
    },
    ContactRoot: {
      width: "100%",
      height: "100%"
    },
    ContactTitle: {
      fontSize: 14,
    },
    ContactPos: {
      marginBottom: 12,
    },
    InLayoutLabel: {
      textAlign: "center"
    },    
    UnitTemplate: {
      ...TemplateItem, 
      ...TemplateCornerAll, 
      ...TemplateItemFrame,
      width: "100%",
      height: "100%",
      left: "-1px",
      top: "-1px"
    },
    UnitBackground: {
      ...TemplateItem, 
      ...TemplateCornerAll,
      ...TemplateItemFrame,
      top: "2px",
      left: "2px",
      width: "216px",
      height: "20px"
    },
    UnitTitle: {
      ...TemplateItem, 
      ...TemplateTitle,
      top: "3px",
      left: "6px",
      width: "208px",
      height: "16px",
      textAlign: "center"
    },
    UnitDescription: {
      ...TemplateItem,
      top: "26px",
      left: "4px",
      width: "212px",
      height: "36px",
      fontSize: "10px"
    },
    ShapeTemplate: {
      ...TemplateItem,
      width: "100%",
      height: "100%",
      left: "-1px",
      top: "-1px"
    },
    ShapeFrame: {
      ...TemplateItem,
      top: "0px",
      left: "0px",
      width: "100px",
      height: "100px"
    },
    ShapeShape: {
      ...TemplateItem,
      height: "100px",
      width: "100px"
    },
    ShapeTitle: {
      ...TemplateItem,
      top: "40px",
      left: "0px",
      width: "100px",
      height: "24px",
      fontSize: "20px",
      textAlign: "center"
    }
  })
});

export default useStyles;