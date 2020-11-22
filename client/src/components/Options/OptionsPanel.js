import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import FormGroup from '@material-ui/core/FormGroup';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RadioGroupOption } from 'components';
import { CheckboxOption } from 'components';
import { ComboBoxOption } from 'components';
import { SizeOption } from 'components';
import { ThicknessOption } from 'components';
import { TextOption } from 'components';
import { ItemsOrderOption } from 'components';
import { makeStyles } from "@material-ui/core/styles";

const useStyles =  makeStyles(theme => {
  return ({
    accrodionRoot: {
      width: '100%',
    },
    accordionHeading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    formGroupRoot: {
      '& .option-panel-item': {
        margin: theme.spacing(2, 0, 0),
        minWidth: "25ch"
      }
    }
  })
});

function OptionsPanel(props) {
    const {optionsPanelConfig, onChange} = props;

    const styles = useStyles();

    const [expanded, setExpanded] = React.useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return <>
        { optionsPanelConfig.map( ({title, options, namespace}, index) => {
            const config = props[namespace];
            return <Accordion key={`panel${index}`} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                <AccordionSummary
                  key={`summary${index}`}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography className={styles.accordionHeading}>{title}</Typography>
                </AccordionSummary>
                {expanded === `panel${index}` &&
                    <AccordionDetails key={`details${index}`}>
                    <FormGroup className={styles.formGroupRoot}>
                        {options.map( ({optionType, caption, name, valueType, options, isNullable, widths, heights, onValidate, placeholder}, index) => {
                            switch(optionType) {
                              case "CaptionConfig":
                                return <Typography key={`caption${index}`}>{caption}</Typography>;
                              case "RadioBoxConfig":
                                return  <RadioGroupOption
                                key={name}
                                caption={caption}
                                propertyName={name}
                                value={config[name]}
                                valueType={valueType}
                                items={options}
                                onChange={value => onChange(namespace, name, value)}
                                />;
                              case "CheckBoxConfig":
                                return <CheckboxOption 
                                key={name}
                                caption={caption}
                                propertyName={name}
                                value={config[name]} 
                                onChange={value => onChange(namespace, name, value)} 
                                />;
                              case "DropDownBoxConfig":
                                return <ComboBoxOption
                                key={name}
                                caption={caption}
                                propertyName={name}
                                value={config[name]}
                                valueType={valueType}
                                items={options}
                                isNullable = {isNullable}
                                onChange={value => onChange(namespace, name, value)}
                                />;
                              case "SizeConfig":
                                return <SizeOption
                                    key={name}
                                    caption={caption}
                                    propertyName={name}
                                    value={config[name]}
                                    widths={widths}
                                    heights={heights}
                                    onChange={value => onChange(namespace, name, value)}
                                />;
                              case "ThicknessConfig":
                                return <ThicknessOption
                                    key={name}
                                    caption={caption}
                                    propertyName={name}
                                    value={config[name]}
                                    items={options}
                                    onChange={value => onChange(namespace, name, value)}
                                />;
                              case "TextConfig":
                                  return <TextOption
                                  key={name}
                                  caption={caption}
                                  propertyName={name}
                                  placeholder={placeholder}
                                  valueType={valueType}
                                  value={config[name]}
                                  isNullable={isNullable}
                                  onValidate={onValidate}
                                  onChange={value => onChange(namespace, name, value)}
                              />;
                              case "ItemsOrderConfig":
                                return <ItemsOrderOption 
                                  key={name}
                                  caption={caption}
                                  propertyName={name}
                                  items={config[name]}
                                  onChange={value => onChange(namespace, name, value)}
                                />
                            default:
                                return <li key={`item${index}`}>{optionType}:{caption}</li>;
                            }
                        }
                        )}
                    </FormGroup>
                    </AccordionDetails>
                }
              </Accordion>
          })
    }
    </>
}

export default OptionsPanel;