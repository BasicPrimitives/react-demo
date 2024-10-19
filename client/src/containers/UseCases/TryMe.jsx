import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Editor from './Editor';

const TryMe = ({ name, onCodeChange, activeKey: initialActiveKey, samples }) => {
  const [activeKey, setActiveKey] = useState(initialActiveKey);
  const [sampleList, setSampleList] = useState(samples);

  useEffect(() => {
    setSampleList(samples);
    setActiveKey(initialActiveKey);
  }, [samples, initialActiveKey]);

  const onEditorValueChange = (text) => {
    setSampleList(prevSamples =>
      prevSamples.map((sample, index) =>
        index === activeKey ? { ...sample, content: text } : sample
      )
    );
  };

  const tryIt = () => {
    const { content } = sampleList[activeKey];
    onCodeChange(activeKey, content);
  };

  const resetSample = () => {
    setSampleList(prevSamples =>
      prevSamples.map((sample, index) =>
        index === activeKey
          ? { ...sample, url: sample.defaultUrl, content: sample.defaultContent }
          : sample
      )
    );
  };

  const { url, content } = sampleList[activeKey];

  return (
    <>
      <Paper square>
        <Tabs
          id={name}
          value={activeKey}
          onChange={(event, key) => setActiveKey(key)}
          aria-label="Samples"
          indicatorColor="primary"
          textColor="primary"
        >
          {sampleList.map(({ caption }, index) => (
            <Tab value={index} key={`tab${index}`} label={caption} />
          ))}
        </Tabs>
      </Paper>
      <Editor content={content} onCodeChange={onEditorValueChange} />
      <div style={{ width: "100%", border: "none", padding: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={resetSample}
          style={{ marginRight: "10px" }} // Add margin to the right
        >
          Reset code value
        </Button>
        <Button variant="contained" color="primary" onClick={tryIt}>
          Try it <span>&gt;&gt;</span>
        </Button>
      </div>
      <Paper square>
        <iframe title="placeholder" src={url} style={{ width: "100%", height: "540px", border: "none" }} />
      </Paper>
    </>
  );
};

TryMe.propTypes = {
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
  ).isRequired,
};

export default TryMe;
