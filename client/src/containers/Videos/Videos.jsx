import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown';
import { load } from '@/redux/modules/videos';

const opts = {
  width: 300,
  height: 200,
  display: 'block',
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
}));

function Videos() {
  const classes = useStyles();
  const loaded = useSelector((state) => state.videos.loaded);
  const markdown = useSelector((state) => state.videos.markdown);
  const videos = useSelector((state) => state.videos.videos);
  const dispatch = useDispatch();
  let key = 0;

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  }, [dispatch, loaded]);

  const renderers = {
    // Custom render for <p> tag
    p: ({ children }) => {
      const childArray = Array.isArray(children) ? children : [children];
      if (childArray.filter((child) => child.$$typeof != null).length > 0) {
        key += 1;
        return (
          <div key={`item-${key}`} style={{ display: 'inline' }}>
            {children}
          </div>
        );
      }
      return <p>{children}</p>;
    },

    // Custom render for <a> tag
    a: ({ children, ...props }) => {
      let caption = typeof children === 'string' ? children : children[0];
      if (caption === 'Videos') {
        key += 1;
        return (
          <Grid key={`table-${key}`} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="left" spacing={2}>
                {videos.map(({ videoId, title, subtitle }, index) => (
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
          </Grid>
        );
      }
      return <a {...props}>{children}</a>;
    },
  };

  return (
    <>
      <Helmet>
        <title>- Video Tutorials</title>
      </Helmet>
      <Container fixed>
        <ReactMarkdown
          children={markdown}
          components={renderers} // Use custom renderers
        />
      </Container>
    </>
  );
}

export default Videos;
