import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import {
  load,
  showLicenseDialog,
  hideLicenseDialog,
  acceptLicense,
} from '@/redux/modules/downloads';
import ReactMarkdown from 'react-markdown';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
  const loaded = useSelector((state) => state.downloads.loaded);
  const markdown = useSelector((state) => state.downloads.markdown);
  const license = useSelector((state) => state.downloads.license);
  const isLicenseAccepted = useSelector((state) => state.downloads.isLicenseAccepted);
  const isLicenseDialogVisible = useSelector((state) => state.downloads.isLicenseDialogVisible);
  const fileName = useSelector((state) => state.downloads.fileName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  }, [loaded, dispatch]);

  const renderers = {
    p({ children }) {
      return <p>{children}</p>;
    },
    a({ children, href }) {
      let caption = typeof children === 'string' ? children : children[0];
  
      switch (caption) {
        case 'Download':
          return (
            <Button
              onClick={() => dispatch(showLicenseDialog(href))}
              variant="contained"
              color="primary"
              style={{ display: 'inline', verticalAlign: 'middle' }}
            >
              Download
            </Button>
          );
        case 'npm package':
        case 'GitHub':
        case 'GitHub Deployment':
          return (
            <Button
              onClick={() => window.open(href, '_blank')}
              variant="contained"
              color="primary"
              style={{ display: 'inline', verticalAlign: 'middle' }}
            >
              {caption}
            </Button>
          );
        default:
          return <a href={href}>{children}</a>;
      }
    },
  };
  

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>- Downloads</title>
        <meta name="description" content="Products, API Reference & Demos sources downloads." />
      </Helmet>
      <Container fixed>
        <ReactMarkdown components={renderers}>{markdown}</ReactMarkdown>
      </Container>
      {isLicenseDialogVisible && (
        <Dialog
          fullScreen
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
              <ReactMarkdown>{license}</ReactMarkdown>
            </Container>
          </DialogContent>
          <DialogActions>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isLicenseAccepted}
                  color="primary"
                  onChange={() => dispatch(acceptLicense(!isLicenseAccepted))}
                />
              }
              label="I agree to the terms listed above"
            />
            <form method="get" target="_blank" action={fileName} style={{ display: 'inline', verticalAlign: 'middle' }}>
              <Button type="submit" disabled={!isLicenseAccepted} variant="contained" color="primary">
                Download
              </Button>
            </form>
            <Button variant="contained" color="primary" onClick={() => dispatch(hideLicenseDialog())}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default Downloads;
