import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, Grid, Row, Col
} from 'react-bootstrap';
import { TextFieldAdapter, ComboBoxFieldAdapter, RadioGroupFieldAdapter } from 'components';
import { Form, Field } from 'react-final-form';
import primitives from 'basicprimitives';
import addNewItemDialogValidation from './AddNewItemDialogValidation';

class AddNewItemDialog extends Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {
        title: null,
        description: null,
        image: '/photos/a.png',
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
      agg[imageChar.toUpperCase()] = `/photos/${imageChar}.png`;
      return agg;
    }, {});
    const { isVisible, onSubmit, onClose } = this.props;
    const { data } = this.state;
    return (
      isVisible && (
        <Modal show={isVisible} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Form
            onSubmit={onSubmit}
            initialValues={data}
            validate={addNewItemDialogValidation}
            render={({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-lg">Add new item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Grid fluid>
                    <Row>
                      <Col sm={12} md={6}>
                        <Field name="title" component={TextFieldAdapter} placeholder="Title" caption="Title" />
                        <Field name="description" component={TextFieldAdapter} placeholder="Description" caption="Description" />
                        <Field name="groupTitle" component={TextFieldAdapter} placeholder="Group Title" caption="Group Title" />
                        <Field name="phone" component={TextFieldAdapter} placeholder="(123) 123-12-12" caption="phone" />
                        <Field name="email" component={TextFieldAdapter} placeholder="E-mail" caption="E-mail" />
                        <Field name="label" component={TextFieldAdapter} placeholder={values.title || 'Marker Label'} caption="Marker Label" />
                        <Field name="itemTitleColor" component={ComboBoxFieldAdapter} caption="Title Color" isNullable valueType="string" items={primitives.common.Colors} />
                        <Field name="groupTitleColor" component={ComboBoxFieldAdapter} caption="Group Title Color" isNullable valueType="string" items={primitives.common.Colors} />
                        <Field name="image" component={ComboBoxFieldAdapter} caption="Image" valueType="string" items={images} />
                        <Field
                          name="minimizedItemShapeType"
                          component={ComboBoxFieldAdapter}
                          caption="Marker Shape"
                          valueType="number"
                          isNullable
                          items={primitives.common.ShapeType}
                        />
                      </Col>
                      <Col sm={12} md={6}>
                        <h4>Layout Properties</h4>
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
                        <Field
                          name="adviserPlacementType"
                          component={RadioGroupFieldAdapter}
                          caption="Placement"
                          valueType="number"
                          items={primitives.common.AdviserPlacementType}
                        />
                        <Field
                          name="childrenPlacementType"
                          component={RadioGroupFieldAdapter}
                          caption="Children Layout"
                          valueType="number"
                          items={primitives.common.ChildrenPlacementType}
                        />
                      </Col>
                    </Row>
                  </Grid>
                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </Modal.Body>
                <Modal.Footer>
                  <Button type="submit">Add</Button>
                  <Button onClick={onClose}>Cancel</Button>
                </Modal.Footer>
              </form>
            )}
          />
        </Modal>
      )
    );
  }
}

export default AddNewItemDialog;
