import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import ApartmentIcon from "@material-ui/icons/Apartment";
import DnsIcon from "@material-ui/icons/Dns";
import TapAndPlayIcon from "@material-ui/icons/TapAndPlay";

const useStyles = makeStyles((theme) => ({
  features: {
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(10),
      borderLeftWidth: 1,
      borderLeftStyle: "solid",
      borderColor: theme.palette.grey[400],
    },
  },
  iconWrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 500,
  },
  section: {
    backgroundColor: theme.palette.grey[50],
  },
  icon: {
    color: theme.palette.common.white,
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();

  const content = {
    badge: "ACHIEVE MORE",
    "header-p1": "Launch Your Website Marketing Platform",
    description:
      "We will help you to understand your leads and you will increase your company growth by converting the qualified leads into sales. We will help you to understand your leads and you will increase your company growth by converting the qualified leads into sales.",
    "primary-action": "Action",
    "col1-header": "20 years of experience",
    "col1-desc":
      "We've been in business for more than 20 years and are experts at building.",
    "col2-header": "Wide range of services",
    "col2-desc":
      "We offer everything from building to maintaining and demolition.",
    "col3-header": "Our customers come first",
    "col3-desc": "We are only satisfied when you are.",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box pt={10} pb={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <Typography variant="subtitle2" color="secondary">
                {content["badge"]}
              </Typography>
              <Typography
                className={classes.title}
                variant="h3"
                component="h2"
                gutterBottom={true}
              >
                <Typography
                  className={classes.title}
                  variant="h4"
                  component="span"
                >
                  {content["header-p1"]}{" "}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                color="textSecondary"
              >
                {content["description"]}
              </Typography>
              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.primaryAction}
                >
                  {content["primary-action"]}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.features}>
                <Box display="flex" mb={5}>
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <ApartmentIcon className={classes.icon} />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {content["col1-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col1-desc"]}
                    </Typography>
                  </div>
                </Box>
                <Box display="flex" mb={5}>
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <DnsIcon className={classes.icon} />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {content["col2-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col2-desc"]}
                    </Typography>
                  </div>
                </Box>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <TapAndPlayIcon className={classes.icon} />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography variant="h6" component="h3" gutterBottom={true}>
                      {content["col3-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col3-desc"]}
                    </Typography>
                  </div>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
