import React, { useEffect, useState } from 'react';
import { Enabled } from 'basicprimitives';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; 
import Photos from './Photos';

function PdfViewDialog(props) {
  const { isVisible, onClose, config, caption, templates, onItemRender, plugin } = props;

  const [url, setUrl] = useState(null);

  // Function to dynamically load external scripts
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = (error) => reject(error);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    const loadScripts = async () => {
      try {
        // Dynamically load the PDFKit and BlobStream scripts
        await loadScript('/pdfkit.standalone.js');
        await loadScript('/blob-stream.js');
        console.log('Scripts loaded successfully');
      } catch (error) {
        console.error('Failed to load scripts:', error);
      }
    };

    if (isVisible) {
      loadScripts().then(() => {
        let { items } = config;
      
        items = items.map(item => {
          let imageName = "a";
          if (item.image != null) {
            [, imageName] = item.image.match(/.*(.+?)\.png/m) || [];
          }
          return {
            ...item,
            image: Photos[imageName]
          };
        });
  
        const orgDiagramPlugin = plugin({
          ...config,
          items,
          cursorItem: null,
          hasSelectorCheckbox: Enabled.False,
          templates: templates || [],
          onItemRender
        });
  
        var diagramSize = orgDiagramPlugin.getSize();
  
        var doc = new window.PDFDocument({ size: [diagramSize.width + 100, diagramSize.height + 150] });
        var stream = doc.pipe(window.blobStream());
  
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
      });
    }

    // Cleanup: Remove the dynamically added scripts when the component is unmounted
    return () => {
      const scripts = document.querySelectorAll('script[src="/pdfkit.standalone.js"], script[src="/blob-stream.js"]');
      scripts.forEach(script => script.remove());
    };
  }, [isVisible, config, caption, templates, onItemRender, plugin]);

  return (
    isVisible ? (
      <Dialog fullScreen open={isVisible} onClose={onClose}>
        <AppBar style={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{ marginLeft: "5px", flex: 1 }}>
              {caption}
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <div style={{ width: "100%", height: "100%" }}>
            <iframe title="PDF Preview" src={url} style={{ width: "100%", height: "100%", border: "none" }} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    ) : null
  );
}

export default PdfViewDialog;
