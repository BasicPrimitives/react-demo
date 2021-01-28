import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux'
import {
  load,
  showLicenseDialog,
  hideLicenseDialog,
  acceptLicense
} from 'redux/modules/downloads';
import MDReactComponent from 'markdown-react-js';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

function Downloads() {
  const loaded = useSelector(state => state.downloads.loaded); 
  const markdown = useSelector(state => state.downloads.markdown); 
  const license = useSelector(state => state.downloads.license); 
  const isLicenseAccepted = useSelector(state => state.downloads.isLicenseAccepted); 
  const isLicenseDialogVisible = useSelector(state => state.downloads.isLicenseDialogVisible); 
  const fileName = useSelector(state => state.downloads.fileName); 
  const dispatch = useDispatch()
  let key = 0;

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []/* run only once */);

  function handleIterate(Tag, props, children, level) {
    if (level === 1) {
      props = {
        ...props,
        className: 'first-level-class'
      };
    }
    if (Tag === 'p') {
      if (children.filter(child => child.key != null && child.key.indexOf('button') !== -1).length > 0) {
        key += 1;
        return <React.Fragment key={`buttons-${key}`}><br/><div style={{
          display: "inline"
        }}>{children}</div></React.Fragment>;
      } else if (children.filter(child => child.$$typeof != null).length > 0) {
        key += 1;
        return <React.Fragment key={`buttons-${key}`}>{children}</React.Fragment>;
      }
    }
    if (Tag === 'a') {
      const { href } = props;
      let [caption] = children;
      switch (caption) {
        case "Download":
          return <Button key={`button-${href}`} type="submit" onClick={() => dispatch(showLicenseDialog(href))} variant="contained" color="primary" style={{
            display: "inline",
            verticalAlign: "middle"
          }}>Download</Button>;
        case "npm package":
          return <form key={`button-${href}`} method="get" action={href} style={{
            display: "inline",
            verticalAlign: "middle"
          }}>
            <Button type="submit" variant="contained" color="primary">npm package</Button>
          </form>;
        case "GitHub":
          return <form key={`button-${href}`} method="get" action={href} style={{
            display: "inline",
            verticalAlign: "middle"
          }}>
            <Button type="submit" variant="contained" color="primary">GitHub</Button>
          </form>;
        case "GitHub Deployment":
          return <form key={`button-${href}`} method="get" action={href} style={{
            display: "inline",
            verticalAlign: "middle"
          }}>
            <Button type="submit" variant="contained" color="primary">GitHub Deployment</Button>
          </form>;
        default:
          return <a {...props}>{children}</a>;
      }
    }
    return <Tag {...props}>{children}</Tag>;
  }
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>- Downloads</title>
        <meta name="description" content="Products, API Reference &amp; Demos sources downloads." />
      </Helmet>
      <Container fixed>
        <MDReactComponent text={markdown} onIterate={handleIterate} />
      </Container>
      {isLicenseDialogVisible &&
        <Dialog fullScreen 
          open={isLicenseDialogVisible} 
          onClose={() => dispatch(hideLicenseDialog())}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={() => dispatch(hideLicenseDialog())} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                License agreement
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>
            <Container fixed>
              <MDReactComponent text={license} />
            </Container>
          </DialogContent>
          <DialogActions>
            <FormControlLabel
                control={
                  <Checkbox checked={isLicenseAccepted} color="primary" onChange={() => dispatch(acceptLicense(!isLicenseAccepted))} />
                }
                label="I agree to the terms listed above"
            />
            <form method="get" target="_blank" action={fileName} style={{
              display: "inline",
              verticalAlign: "middle"
            }}>
              <Button type="submit" disabled={!isLicenseAccepted} variant="contained" color="primary">Download</Button>
            </form> 
            <Button variant="contained" color="primary" onClick={() => dispatch(hideLicenseDialog())}>Cancel</Button>
          </DialogActions>
        </Dialog>
      }
    </>
  );
}

export default Downloads;
