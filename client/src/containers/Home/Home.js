import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import YouTube from 'react-youtube';
import MDReactComponent from 'markdown-react-js';
import { load } from 'redux/modules/introduction';
import { Link } from '@reach/router';

import largeHierarchyImage from './carousel/demo_large_hierarchy.png';
import dynamicLoadingImage from './carousel/demo_dynamic_loading.png';
import verticalLayoutImage from './carousel/demo_vertical_layout.png';
import crossTeamGroupImage from './carousel/demo_cross_team_group.png';
import partnersImage from './carousel/demo_partners.png';
import orgeditorImage from './carousel/demo_orgeditor.png';
import familyWithAnnotationsImage from './carousel/demo_family_with_annotations.png';
import familyDiagramNodesOrderImage from './carousel/demo_family_diagram_nodes_order.png';
import dependencyGraphPrimaryParentsImage from './carousel/demo_dependency_graph_primary_parents.png';
import highlightAnnotationsImage from './carousel/demo_instant_highlights.png';
import patentsImage from './carousel/demo_patents.png';
import financialOwnershipImage from './carousel/demo_financial_ownership.png';

const videos = [
	{videoId: "F_wlDks_ABQ", title: "Introduction", subtitle: "Reviews basic features of Organizational and Family diagramming components" },
];

const demos = [
	{href: "/largehierarchy", image: largeHierarchyImage, title: "Large Hierarchy Visualization", subtitle: "Visualization & navigation of diagram having large number of nodes" },
	{href: "/orgeditor", image: orgeditorImage, title: "Organizational Chart Editor", subtitle: "Fully functional oraganizational chart editing application developed in ReactJS" },
	{href: "/dynamicloading", image: dynamicLoadingImage, title: "Dynamic Nodes Loading", subtitle: "Large Hierarchy navigation using dynamic diagram nodes loading" },
	{href: "/verticallayout", image: verticalLayoutImage, title: "Org Chart Vertical Layout", subtitle: "Organizational Diagram demonstrating vertical nodes layout" },
	{href: "/crossteamgroup", image: crossTeamGroupImage, title: "Cross Functional Team", subtitle: "Visualization of cross functional group of employees on organizational diagram" },
	{href: "/highlightannotations", image: highlightAnnotationsImage, title: "Instant Annotations Update", subtitle: "Rendering cycle optimized to specific user changes" },
	{href: "/partners", image: partnersImage, title: "Partners & Annotations", subtitle: "Demo of limited multiple parents support in Organizational chart" },
	{href: "/familychartwithannotations", image: familyWithAnnotationsImage, title: "Family Chart Auto Layout", subtitle: "Various multiple inheritance diagrams, dependencies diagrams and graphs" },
	{href: "/familychartitemsordering", image: familyDiagramNodesOrderImage, title: "Family Diagram Nodes Order", subtitle: "User guided family diagram nodes sorting and layout. Childrens and marriages order" },
	{href: "/familycharttechtree", image: dependencyGraphPrimaryParentsImage, title: "Primary Dependencies", subtitle: "User guided nodes placement into branches of multi-parent hierarchy" },
	{href: "/patents", image: patentsImage, title: "Patents Dependencies", subtitle: "Dependencies visualization having massive number of references to grandparents" },
	{href: "/financialownership", image: financialOwnershipImage, title: "Business Ownership", subtitle: "Multiple inheritance diagram visualizing financial ownership" },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const opts = {
  width: 300,
  height: 200,
  display: 'block'
};

function Changelog() {
  const classes = useStyles();
  const loaded = useSelector(state => state.introduction.loaded); 
  const markdown = useSelector(state => state.introduction.markdown); 
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loaded) {
      dispatch(load());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []/* run only once */);

  return (
    <>
      <Container fixed>
        <Helmet>
          <title>- Data visualization diagramming components for dependencies visualization and analysis.</title>
          <meta name="description" content="JavaScript, HTML, PDFKit, ReactJS; Organizational Chart, Family Inheritance Chart; Dependencies Visualizations;" />
        </Helmet>
        <h1>Basic Primitives Diagrams</h1>
        <h3>Data visualization diagramming Components for dependencies visualization and analysis</h3>
      </Container>
      <Container fixed>
        <h2>Videos</h2>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
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
      </Grid>
      <Container fixed>
        <h2>Demos</h2>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {demos.map(({href, image, title, subtitle}, index) => (
              <Grid key={index} item>
                  <Card className={classes.root}>
                    <CardActionArea component={Link} to={href}>
                      <CardMedia
                        component="img"
                        alt={title}
                        height="200"
                        image={image}
                        title={title}
                      />
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
      <Container fixed>
        <MDReactComponent text={markdown} />
      </Container>
    </>
  )
}

export default Changelog;
