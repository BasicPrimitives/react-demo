import React from 'react';
import PdfViewDialog from './PdfViewDialog';
import { FamDiagramPdfkit } from 'basicprimitives';

function FamPdfViewDialog(props) {
    return <PdfViewDialog {...props} plugin={FamDiagramPdfkit} />
}
  
export default FamPdfViewDialog;