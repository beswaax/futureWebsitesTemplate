import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../../Link";
import {
  Button,
  Grid,
  makeStyles,
  useTheme,
  Card,
  CardContent,
  CardActions,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  button: {},
  cardRoot: {
    backgroundColor: theme.palette.primary.dark,
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  cardRoot2: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    boxShadow: "#0f0f0f",
    border: "1px solid lightgray",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: 10,
  },
}));

const AboutPageContent = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    firstCard: {
      title: "Learn more about Genera",
      text:
        "Get free online programing tips and resources delivered directly to your inbox.",
      button: "LEARN MORE",
    },
    secondCard: {
      title: "Don't see a job for you?",
      text:
        "Get free online programing tips and resources delivered directly to your inbox.",
      button: "SEE OTHER JOBS",
    },
    firstTextBlock: {
      title: "Our story",
      text:
        "If we're no longer the right solution for you, we'll allow you to export and take your data at anytime for any reason. If we're no longer the right solution for you, we'll allow you to export and take your data at anytime for any reason.If we're no longer the right solution for you, we'll allow you to export and take your data at anytime for any reason.If we're no longer the right solution for you, we'll allow you to export and take your data at anytime for any reason.If we're no longer the right solution for you, we'll allow you to export and take your data at anytime for any reason.",
    },
    secondTextBlock: {
      title: "Who are we?",
      text:
        "Our sign up is dead simple. We only require your basic company information and what type of data storage you want. Our sign up is dead simple. We only require your basic company information and what type of data storage you want.",
    },
    thirdTextBlock: {
      title: "What’s up with the name?",
      text:
        "We support bulk uploading via SQL, integrations with most data storage products, or you can use our API. Simply select where you'd like to transfer your data and we'll being the process of migrating it instantly.",
    },
    perks: [
      "Affordable, scalable and performant. The perfect solution for small apps.",
      "A mid-sized solution for businesses undergoing rapid user growth.",
      "A farm of machines entirely dedicated to your company's storage needs.",
      "A mid-sized solution for businesses undergoing rapid user growth.",
      "Affordable, scalable and performant. The perfect solution for small apps.",
      "A mid-sized solution for businesses undergoing rapid user growth.",
      "A farm of machines entirely dedicated to your company's storage needs.",
      "A mid-sized solution for businesses undergoing rapid user growth.",
    ],
  };

  return (
    <Container maxWidth="lg">
      <Box my={10}>
        <Grid container direction="column" justify="space-between">
          <Grid item container direction="row" justify="space-between">
            <Hidden mdUp>
              <Grid item sm={12} md={5}>
                <Box my={2}>
                  <Image
                    src={"/assets/working-on-sofa.svg"}
                    width={400}
                    height={400}
                  />
                </Box>
              </Grid>
            </Hidden>

            <Grid item sm={12} md={6}>
              <Box py={matchesSM ? 2 : 7} pb={6}>
                <Typography className={classes.title} variant="h4">
                  {content.firstTextBlock.title}
                </Typography>
                <Typography color="textPrimary">
                  {content.firstTextBlock.text}
                </Typography>
              </Box>
            </Grid>

            <Hidden smDown>
              <Grid item sm={12} md={5}>
                <Box>
                  <Image
                    src={"/assets/working-on-sofa.svg"}
                    width={400}
                    height={400}
                  />
                </Box>
              </Grid>
            </Hidden>
          </Grid>

          <Grid item container direction="row" justify="space-between">
            <Grid item sm>
              <Box pr={3} py={matchesXS ? 2 : 5}>
                <Typography variant="h4" className={classes.title}>
                  {content.secondTextBlock.title}
                </Typography>
                <Typography color="textPrimary">
                  {content.secondTextBlock.text}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm>
              <Box py={matchesXS ? 2 : 5} pr={3}>
                <Typography className={classes.title} variant="h4">
                  {content.thirdTextBlock.title}
                </Typography>
                <Typography>{content.thirdTextBlock.text}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPageContent;
