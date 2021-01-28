import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
import MDReactComponent from 'markdown-react-js';
import { load } from 'redux/modules/videos';

const opts = {
  width: 300,
  height: 200,
  display: 'block'
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  }
}));

function Videos() {
  const classes = useStyles();
  const loaded = useSelector(state => state.videos.loaded); 
  const markdown = useSelector(state => state.videos.markdown); 
  const videos = useSelector(state => state.videos.videos); 
  const dispatch = useDispatch()
  let key = 0;

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []/* run only once */);

  function handleIterate(Tag, props, children, level) {
    if (level === 1) {
      props = {
        ...props,
        className: 'first-level-class'
      };
    }
    if (Tag === 'p') {
      if (children.filter(child => child.$$typeof != null).length > 0) {
        key += 1;
        return <div key={`item-${key}`} style={{
          display: "inline"
        }}>{children}</div>;
      }
    }
    if (Tag === 'a') {
      let [caption] = children;
      switch (caption) {
        case "Videos":
          key +=1;
          return <Grid key={`table-${key}`} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="left" spacing={2}>
                {videos.map(({videoId, title, subtitle}, index) => (
                  <Grid key={index} item>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <YouTube videoId={videoId} opts={opts} />
                          <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                              {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              {subtitle}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>;
        default:
          return <a {...props}>{children}</a>;
      }
    }
    return <Tag {...props}>{children}</Tag>;
  }
  
  return (
    <>
      <Helmet>
        <title>- Video Tutorials</title>
      </Helmet>
      <Container fixed>
        <MDReactComponent text={markdown} onIterate={handleIterate} />
      </Container>
    </>
  );
}

export default Videos;