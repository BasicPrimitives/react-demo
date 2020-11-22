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
    },
    TemplatePhotoFrame = {
      border: '1px solid #cccccc',
      background: '#f6f6f6',
      color: '#1c94c4',
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
    ContactTemplate: {
      ...TemplateItem,
      ...TemplateCornerAll, 
      ...TemplateItemFrame,
      width: '100%',
      height: '100%',
      left: '-1px',
      top: '-1px'
    },
    ContactTitleBackground: {
      ...TemplateItem, 
      ...TemplateCornerAll, 
      ...TemplateItemFrame,
      top: '2px',
      left: '2px',
      right: '2px',
      height: '20px'
    },
    ContactTitle: {
      ...TemplateItem, 
      ...TemplateTitle,
      top: '2px',
      left: '2px',
      right: '2px',
      height: '16px',
    },
    ContactPhotoFrame: {
      ...TemplateItem, 
      ...TemplatePhotoFrame,
      top: '26px',
      left: '2px',
      width: '50px',
      height: '60px',
    },
    ContactPhoto: {
      height: '60px',
      width: '50px'
    },
    ContactPhone: {
      ...TemplateItem,
      overflow: 'hidden',
      top: '26px',
      left: '56px',
      height: '16px',
      bottom: '2px',
      fontSize: '12px'
    },
    ContactEmail: {
      ...TemplateItem,
      overflow: 'hidden',
      top: '44px',
      left: '56px',
      height: '16px',
      bottom: '2px',
      fontSize: '12px'
    },
    ContactDescription: {
      ...TemplateItem,
      overflow: 'hidden',
      top: '62px',
      left: '56px',
      right: '2px',
      bottom: '2px',
      fontSize: '12px'
    },
    DefaultTemplate: {
      ...TemplateItem, 
      ...TemplateCornerAll, 
      ...TemplateItemFrame,
      width: '100%',
      height: '100%',
      left: '-1px',
      top: '-1px',
    },
    DefaultTitleBackground: {
      ...TemplateItem, 
      ...TemplateCornerAll, 
      ...TemplateItemFrame,
      top: '2px',
      left: '2px',
      right: '2px',
      height: '20px',
    },
    DefaultTitle: {
      ...TemplateItem, 
      ...TemplateTitle,
      top: '2px',
      left: '2px',
      right: '2px',
      height: '16px',
    },
    DefaultPhotoFrame: {
      ...TemplateItem, 
      ...TemplatePhotoFrame,
      top: '26px',
      left: '2px',
      width: '50px',
      height: '60px',
    },
    DefaultPhoto: {
      height: '60px',
      width: '50px'
    },
    DefaultDescription: {
      ...TemplateItem,
      overflow: 'hidden',
      textAlign: 'left',
      top: '26px',
      left: '56px',
      right: '2px',
      bottom: '2px',
      fontSize: '12px'
    }
  })
});

export default useStyles;