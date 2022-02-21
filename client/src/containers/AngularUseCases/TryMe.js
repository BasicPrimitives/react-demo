import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Editor from './Editor';

class TryMe extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onCodeChange: PropTypes.func.isRequired,
    activeKey: PropTypes.number.isRequired,
    tagKey: PropTypes.number.isRequired,
    samples: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        defaultUrl: PropTypes.string.isRequired,
        defaultContent: PropTypes.string.isRequired
      })
    ).isRequired,
    classes: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.setActiveSample = this.setActiveSample.bind(this);
    this.tryIt = this.tryIt.bind(this);
    this.resetSample = this.resetSample.bind(this);
    this.onEditorValueChange = this.onEditorValueChange.bind(this);

    const { samples, activeKey } = props;
    this.state = {
      samples,
      activeKey
    };
  }

  componentWillReceiveProps({ onCodeChange, samples, activeKey }) {
    this.setState({
      onCodeChange, // eslint-disable-line react/no-unused-state
      samples,
      activeKey
    });
  }

  onEditorValueChange(text) {
    const { samples, activeKey } = this.state;
    this.setState({
      samples: samples.map((sample, index) => {
        if (index === activeKey) {
          const newSample = { ...sample };
          newSample.content = text;
          return newSample;
        }
        return sample;
      })
    });
  }

  setActiveSample(activeKey) {
    this.setState({
      activeKey
    });
  }

  tryIt() {
    const { onCodeChange } = this.props;
    const { activeKey, samples } = this.state;
    const { content } = samples[activeKey];
    onCodeChange(activeKey, content);
  }

  resetSample() {
    const { activeKey, samples } = this.state;
    this.setState({
      samples: samples.map((sample, index) => {
        if (index === activeKey) {
          const newSample = { ...sample };
          newSample.url = sample.defaultUrl;
          newSample.content = sample.defaultContent;
          return newSample;
        }
        return sample;
      })
    });
  }

  render() {
    const { name, tagKey } = this.props;
    const { samples, activeKey } = this.state;
    const { url, content } = samples[activeKey];
    return (
      <div key={tagKey}>
        <Paper square>
          <Tabs 
            id={name} 
            value={activeKey} 
            onChange={(event, key) => this.setActiveSample(key)} 
            aria-label="Samples"
            indicatorColor="primary"
            textColor="primary"
          >
            {samples.map(({ caption }, index) => (
              <Tab value={index} key={`tab${index}`} label={caption} />
            ))}
          </Tabs>
        </Paper>
        <Editor content={content} onCodeChange={this.onEditorValueChange} />
        <div style={{width: "100%", border: "none", padding: "10px"}}>
          <Button variant="contained" color="primary" onClick={() => this.resetSample()}>Reset code value</Button>
          &nbsp;
          <Button variant="contained" color="primary" onClick={() => this.tryIt()}>Try it >></Button>
        </div>
        <Paper square>
          <iframe title="placeholder" src={url} style={{width: "100%", height: "540px", border: "none"}} />
        </Paper>
      </div>
    );
  }
}

export default TryMe;
