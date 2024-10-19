import React from 'react';
import Accordion from '@mui/material/Accordion';
import FormGroup from '@mui/material/FormGroup';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioGroupOption from '@/components/Options/RadioGroupOption';
import CheckboxOption from '@/components/Options/CheckboxOption';
import ComboBoxOption from '@/components/Options/ComboBoxOption';
import SizeOption from '@/components/Options/SizeOption';
import ThicknessOption from '@/components/Options/ThicknessOption';
import TextOption from '@/components/Options/TextOption';
import ItemsOrderOption from '@/components/Options/ItemsOrderOption';
import { makeStyles } from '@mui/styles';

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