import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextFieldAdapter from './FieldAdapters/TextFieldAdapter';
import ComboBoxFieldAdapter from './FieldAdapters/ComboBoxFieldAdapter';
import RadioGroupFieldAdapter from './FieldAdapters/RadioGroupFieldAdapter';
import { Form, Field } from 'react-final-form';
import { Colors, ShapeType, AdviserPlacementType, ChildrenPlacementType } from 'basicprimitives';
import addNewItemDialogValidation from './AddNewItemDialogValidation';

class AddNewItemDialog extends Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      data: {
        title: null,
        description: null,
        image: '/api/images/photos/a.png',
        itemType: 0,
        adviserPlacementType: 0,
        childrenPlacementType: 0
      }
    };
  }

  shouldComponentUpdate({ isVisible: newIsVisible }) {
    // eslint-disable-line no-unused-vars
    const { isVisible } = this.props;

    return isVisible || newIsVisible;
  }

  render() {
    const images = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((agg, imageChar) => {
      agg[imageChar.toUpperCase()] = `/api/images/photos/${imageChar}.png`;
      return agg;
    }, {});
    const { isVisible, onSubmit, onClose } = this.props;
    const { data } = this.state;
    return (
      isVisible && (
          <Form
            onSubmit={onSubmit}
            initialValues={data}
            validate={addNewItemDialogValidation}
            render={({ handleSubmit, values }) => (
                <Dialog fullScreen open={isVisible} onClose={onClose}>
                  <AppBar style={{position: 'relative'}}>
                    <Toolbar>
                      <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
                        <CloseIcon />
                      </IconButton>
                      <Typography variant="h6" style={{marginLeft: "5px", flex: 1}}>
                        Add new item
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <DialogContent>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Field name="title" component={TextFieldAdapter} placeholder="Title" caption="Title" />
                      </Grid>
                      <Grid item>
                        <Field name="description" component={TextFieldAdapter} placeholder="Description" caption="Description" />
                      </Grid>
                      <Grid item>
                        <Field name="groupTitle" component={TextFieldAdapter} placeholder="Group Title" caption="Group Title" />
                      </Grid>
                      <Grid item><Field name="phone" component={TextFieldAdapter} placeholder="(123) 123-12-12" caption="phone" /></Grid>
                      <Grid item><Field name="email" component={TextFieldAdapter} placeholder="E-mail" caption="E-mail" /></Grid>
                      <Grid item><Field name="label" component={TextFieldAdapter} placeholder={values.title || 'Marker Label'} caption="Marker Label" /></Grid>
                      <Grid item><Field name="itemTitleColor" component={ComboBoxFieldAdapter} caption="Title Color" isNullable valueType="string" items={Colors} /></Grid>
                      <Grid item><Field name="groupTitleColor" component={ComboBoxFieldAdapter} caption="Group Title Color" isNullable valueType="string" items={Colors} /></Grid>
                      <Grid item><Field name="image" component={ComboBoxFieldAdapter} caption="Image" valueType="string" items={images} /></Grid>
                      <Grid item>
                        <Field
                          name="minimizedItemShapeType"
                          component={ComboBoxFieldAdapter}
                          caption="Marker Shape"
                          valueType="number"
                          isNullable={true}
                          items={ShapeType}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid xs={12} item>
                        <h4>Layout Properties</h4>
                      </Grid>
                      <Grid item>
                        <Field
                          name="itemType"
                          component={RadioGroupFieldAdapter}
                          caption="Item Type"
                          valueType="number"
                          items={{
                            Regular: 0,
                            Assistant: 1,
                            SubAssistant: 4,
                            SubAdviser: 5,
                            Adviser: 2,
                            GeneralPartner: 6,
                            LimitedPartner: 7,
                            AdviserPartner: 8
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <Field
                          name="adviserPlacementType"
                          component={RadioGroupFieldAdapter}
                          caption="Placement"
                          valueType="number"
                          items={AdviserPlacementType}
                        />
                      </Grid>
                      <Grid item>
                        <Field
                          name="childrenPlacementType"
                          component={RadioGroupFieldAdapter}
                          caption="Children Layout"
                          valueType="number"
                          items={ChildrenPlacementType}
                        />
                      </Grid>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Add</Button>
                    <Button variant="contained" color="primary" onClick={onClose}>Cancel</Button>
                  </DialogActions>
                </Dialog>
            )}
          />
      )
    );
  }
}

export default AddNewItemDialog;
