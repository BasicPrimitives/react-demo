import { makeStyles } from "@material-ui/core/styles";

const useStyles =  makeStyles(theme => {
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
    ContactSmall: {
      margin: 5
    },
    ContactTitle: {
      fontSize: 14,
    },
    ContactPos: {
      marginBottom: 12,
    }
  })
});

export default useStyles;