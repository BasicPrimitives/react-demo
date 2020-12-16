import React from 'react';
import PdfViewDialog from './PdfViewDialog';
import { OrgDiagramPdfkit } from 'basicprimitives';

function OrgPdfViewDialog(props) {
    return <PdfViewDialog {...props} plugin={OrgDiagramPdfkit} />
}
  
export default OrgPdfViewDialog;