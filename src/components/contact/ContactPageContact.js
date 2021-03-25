import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Hidden, useMediaQuery } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },
  secondBox: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  fullHeightImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
    height: 768,
    width: "100%",
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 500,
  },
  container: {
    borderBottom: "0.6px solid lightgray",
  },
  contactWrapper: {
    backgroundColor: theme.palette.common.white,
  },
  iconWrapper: {
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    color: theme.palette.common.white,
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    header: "Let's talk about the future",
    title2: "Contact details",
    description2:
      "Our contact details. We carefully read and answer to all your questions.",
    description:
      "We're here to answer your questions and be as helpful as possible.",
    terms: "I agree to the terms of use and privacy policy.",
    "primary-action": "Submit",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    contact1: "Address",
    "contact1-desc1": "Adenauerallee 2",
    "contact1-desc2": "Leipzig, Saxony 28658",
    contact2: "Email",
    "contact2-desc": "info@gmail.com",
    contact3: "Phone",
    "contact3-desc": "(241) 512-682",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6}>
          <Box
            pt={10}
            pb={6}
            display="flex"
            className={[classes.halfLg, classes.firstBox]}
          >
            <Container>
              <Box mb={4}>
                <Typography
                  className={classes.title}
                  variant="h4"
                  component="h2"
                  gutterBottom={true}
                >
                  {content["header"]}
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  paragraph={true}
                  className={classes.description}
                >
                  {content["description"]}
                </Typography>
              </Box>

              <form noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      autoComplete="fname"
                      name="firstName"
                      id="firstName"
                      label="First name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="lastName"
                      id="lastName"
                      label="Last name"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="email"
                      id="email"
                      label="Email address"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="company"
                      id="company"
                      label="Company"
                      autoComplete="company"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      multiline
                      rows={5}
                      fullWidth
                      autoComplete="message"
                      name="message"
                      id="message"
                      label="Message"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox name="terms" value="1" color="primary" />
                      }
                      label={content["terms"]}
                    />
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    {content["primary-action"]}
                  </Button>
                </Box>
              </form>
            </Container>
          </Box>
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} md={6}>
            <div
              style={{
                padding: 0,
                width: "100%",
                height: matchesXS ? "25rem" : matchesSM ? "30rem" : "45rem",
              }}
            >
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.1460628878267!2d6.161105815919567!3d50.75432527330324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09c3192156943%3A0xc0842f90b51285a4!2sRichard-Wagner-Stra%C3%9Fe%2014%2C%2052078%20Aachen!5e0!3m2!1sen!2sde!4v1607199534817!5m2!1sen!2sde"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                }}
                aria-hidden="false"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>

      <Container maxWidth="lg">
        <Box pt={10}>
          <Grid container justify="center">
            <Grid item align="center">
              <Typography
                variant="h4"
                style={{ paddingBottom: "1rem" }}
                className={classes.title}
              >
                {content.title2}
              </Typography>
              <Typography
                variant="h6"
                className={classes.description}
                color="textSecondary"
              >
                {content.description2}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box py={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon className={classes.icon} fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    {content["contact1"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content["contact1-desc1"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content["contact1-desc2"]}
                  </Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon className={classes.icon} fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    {content["contact2"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content["contact2-desc"]}
                  </Typography>
                  <br />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <PhoneIcon className={classes.icon} fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    {content["contact3"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content["contact3-desc"]}
                  </Typography>
                  <br />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
