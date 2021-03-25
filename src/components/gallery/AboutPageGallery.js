import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[50],
  },
  media: {
    height: "256px",
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: "1rem",
  },
  description: {
    fontWeight: 500,
  },
}));

export default function Gallery(props) {
  const classes = useStyles();

  const content = {
    title: "Check out our gallery",
    description:
      "After 3 days all of your offers will arrive and you will have another 7 days to select your new company.",
    image1:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    image2:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    image3:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    image4:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Box py={7}>
        <Container maxWidth="lg">
          <Box py={5}>
            <Grid container justify="center">
              <Grid item align="center">
                <Typography variant="h4" className={classes.title}>
                  {content.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.description}
                >
                  {content.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia
                    className={classes.media}
                    image={content["image1"]}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia
                    className={classes.media}
                    image={content["image2"]}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia
                    className={classes.media}
                    image={content["image3"]}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Card>
                <CardActionArea href="#">
                  <CardMedia
                    className={classes.media}
                    image={content["image4"]}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
