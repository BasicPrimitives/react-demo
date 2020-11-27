import React, { useEffect } from 'react';
import primitives from 'basicprimitives';
import ReactGA from "react-ga";
import PDFDocument from 'pdfkit-nodejs-webpack';
import blobStream from 'blob-stream';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Photos from './Photos';

function PdfViewDialog(props) {
  const { isVisible, onClose, config, fileName, caption, templates, onItemRender, plugin } = props;

  const [url, setUrl] = React.useState(null);
    
  useEffect(() => {
    ReactGA.event({
      category: 'PDF Download',
      action: 'Click',
      label: fileName
    });
  
    let { items } = config;
  
    items = items.map(item => {
      var imageName = "a";
      if (item.image != null) {
        [, imageName] = item.image.match(/.*(.+?)\.png/m) || [];
      }
      return {
        ...item,
        image: Photos[imageName]
      }
    });
  
    const orgDiagramPlugin = plugin({
      ...config,
      items,
      cursorItem: null,
      hasSelectorCheckbox: primitives.common.Enabled.False,
      templates: (templates || []),
      onItemRender
    });
  
    var diagramSize = orgDiagramPlugin.getSize();
  
    var doc = new PDFDocument({ size: [diagramSize.width + 100, diagramSize.height + 150] });
    var stream = doc.pipe(blobStream());
  
    doc.save();
  
    doc.fontSize(25)
      .text(caption, 50, 50);
  
    orgDiagramPlugin.draw(doc, 50, 100);
  
    doc.restore();
  
    doc.end();
  
    stream.on('finish', function () {
      const blob = stream.toBlobURL('application/pdf');
      setUrl(blob);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    isVisible && (
      <Dialog fullScreen open={isVisible} onClose={onClose}>
        <AppBar style={{position: 'relative'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{marginLeft: "5px", flex: 1}}>
              {caption}
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
        <div style={{width: "100%", height: "100%"}}>
          <iframe title="placeholder" src={url} style={{width: "100%", height: "100%", border: "none"}} />
        </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    )
  );
}

export default PdfViewDialog;