import React from 'react';
import PdfViewDialog from './PdfViewDialog';
import primitives from 'basicprimitives';

function OrgPdfViewDialog(props) {
    return <PdfViewDialog {...props} plugin={primitives.pdf.orgdiagram.Plugin} />
}
  
export default OrgPdfViewDialog;