import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'components';
import { Button, Tabs, Tab } from 'react-bootstrap';

class TryMe extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onCodeChange: PropTypes.func.isRequired,
    activeKey: PropTypes.number.isRequired,
    samples: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        defaultUrl: PropTypes.string.isRequired,
        defaultContent: PropTypes.string.isRequired
      })
    ).isRequired
  };

  constructor(props, context) {
    super(props, context);

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
    const { name } = this.props;
    const { samples, activeKey } = this.state;
    const { url, content } = samples[activeKey];
    const styles = require('./TryMe.scss');
    return (
      <div>
        <Tabs id={name} defaultActiveKey={activeKey} onSelect={key => this.setActiveSample(key)}>
          {samples.map(({ caption }, index) => (
            <Tab eventKey={index} generateChildId key={`tab${index}`} title={caption} />
          ))}
        </Tabs>
        <Editor content={content} onCodeChange={this.onEditorValueChange} />
        <div className={styles.buttonsgroup}>
          <Button onClick={() => this.resetSample()}>Reset code value</Button>
          &nbsp;
          <Button onClick={() => this.tryIt()}>Try it >></Button>
        </div>
        <div>
          <iframe title="placeholder" src={url} className={styles.placeholder} />
        </div>
      </div>
    );
  }
}

export default TryMe;
