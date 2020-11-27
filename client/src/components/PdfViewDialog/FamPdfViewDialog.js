import React from 'react';
import PdfViewDialog from './PdfViewDialog';
import primitives from 'basicprimitives';

function FamPdfViewDialog(props) {
    return <PdfViewDialog {...props} plugin={primitives.pdf.famdiagram.Plugin} />
}
  
export default FamPdfViewDialog;