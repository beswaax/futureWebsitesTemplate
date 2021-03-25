import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../Link";
import {
  Button,
  Grid,
  makeStyles,
  useTheme,
  Card,
  CardContent,
  CardActions,
  useMediaQuery,
} from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

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

const IndividualJob = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    buttons: {
      firstButton: "REFER A FRIEND",
      secondButton: "APPLY NOW",
    },
    jobDetails: {
      title: "UX /UI Designer",
      location: "San Francisco, CA · Full time",
    },
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
      title: "Who we are",
      text:
        "We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.",
    },
    secondTextBlock: {
      title: "What we’re looking for",
      text:
        "Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.",
    },
    thirdTextBlock: {
      title: "Why to apply",
      text:
        "We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.",
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
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Box my={3} spacing={5}>
            <Typography className={classes.title} variant="h3">
              {content.jobDetails.title}
            </Typography>
            <Typography color="textPrimary" variant="subtitle1">
              {content.jobDetails.location}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box my={2}>
        <Grid container style={{ backgroundColor: "lightgray" }}>
          <Typography style={{ padding: 0.7 }}></Typography>
        </Grid>
      </Box>

      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        justify="space-between"
      >
        <Grid item sm={12} md={7}>
          <Box my={2}>
            <Typography className={classes.title} variant="h4">
              {content.firstTextBlock.title}
            </Typography>
            <Typography color="textPrimary">
              {content.firstTextBlock.text}
            </Typography>
          </Box>

          <Box my={4}>
            <Typography variant="h4" className={classes.title}>
              {content.secondTextBlock.title}
            </Typography>
            <Typography color="textPrimary">
              {content.secondTextBlock.text}
            </Typography>
          </Box>

          {/* <Box my={2}>
            <div>
              {content.perks.map((perk) => {
                return (
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    style={{ nowrap: true }}
                  >
                    <Grid item>
                      <CheckCircleOutlineRoundedIcon
                        className={classes.linkIcon}
                      />
                    </Grid>
                    <Grid item style={{ nowrap: true }}>
                      {perk}
                    </Grid>
                  </Grid>
                );
              })}
            </div>
          </Box> */}

          <Box my={2}>
            <Typography className={classes.title} variant="h4">
              {content.thirdTextBlock.title}
            </Typography>
            <Typography>{content.thirdTextBlock.text}</Typography>
          </Box>
        </Grid>

        <Grid item sm={12} md={4}>
          <Box my={2}>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography
                  style={{ color: "#FFFFFF" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  {content.firstCard.title}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "#F7F7F7" }}>
                  {content.firstCard.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  disableRipple
                  disableFocusRipple
                  variant="contained"
                  href="/about-us"
                >
                  {content.firstCard.button}
                </Button>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Card className={classes.cardRoot2}>
              <CardContent className={classes.cardContentRoot}>
                <Typography
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                  color="textPrimary"
                >
                  {content.secondCard.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {content.secondCard.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  disableRipple
                  disableFocusRipple
                  color="primary"
                  variant="contained"
                  href="/jobs"
                >
                  {content.secondCard.button}
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndividualJob;
