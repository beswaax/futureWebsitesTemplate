import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
    "&:hover": {
      // transform: scale(1.5),
      shadow: 3,
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  gridContainer: {},
}));

export default function Team(props) {
  const classes = useStyles();

  const content = {
    header: "Meet our Team",
    description: "We are the guys that made this whole thing possible.",
    "01_image":
      "https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&ah=256&q=80",
    "01_name": "Richard Hendricks",
    "01_job": "Chief Executive Officer",
    "01_description": "",
    "02_image":
      "https://images.unsplash.com/photo-1561463385-0e5ea0ca925b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&ah=256&q=80",
    "02_name": "Dinesh Chugtai",
    "02_job": "Chief Technology Officer",
    "02_description": "",
    "03_image":
      "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&ah=256&q=80",
    "03_name": "Bertram Gilfoyle",
    "03_job": "Chief Systems Architect",
    "03_description": "",
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={8} pb={10} textAlign="center">
          <Box mb={6}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.title}
              gutterBottom={true}
            >
              {content["header"]}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {content["description"]}
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4} className={classes.gridContainer}>
              <Avatar
                alt=""
                src={content["01_image"]}
                className={classes.avatar}
              />
              <Box mb={2}>
                <Typography variant="h6" component="h4" gutterBottom={true}>
                  {content["01_name"]}
                </Typography>
                <Typography variant="body1" color="primary" component="span">
                  {content["01_job"]}
                </Typography>
              </Box>
              <Typography variant="body2" paragraph={true}>
                {content["01_description"]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.gridContainer}>
              <Avatar
                alt=""
                src={content["02_image"]}
                className={classes.avatar}
              />
              <Box mb={2}>
                <Typography variant="h6" component="h4" gutterBottom={true}>
                  {content["02_name"]}
                </Typography>
                <Typography variant="body1" color="primary" component="span">
                  {content["02_job"]}
                </Typography>
              </Box>
              <Typography variant="body2" paragraph={true}>
                {content["02_description"]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classes.gridContainer}>
              <Avatar
                alt=""
                src={content["03_image"]}
                className={classes.avatar}
              />
              <Box mb={2}>
                <Typography variant="h6" component="h4" gutterBottom={true}>
                  {content["03_name"]}
                </Typography>
                <Typography variant="body1" color="primary" component="span">
                  {content["03_job"]}
                </Typography>
              </Box>
              <Typography variant="body2" paragraph={true}>
                {content["03_description"]}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
