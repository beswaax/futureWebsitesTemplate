import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  img: {
    maxWidth: "100%",
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 500,
  },
  link: {
    border: "1px solid lightgray",
    padding: 8,
    borderRadius: 5,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Guaranted Company Growth with Targeted Leads",
    "header-p2": "Learn More About",
    description:
      "We will help you to understand your leads and you will increase your company growth by converting the qualified leads into sales.",
    "primary-action": "BOOK CONSULTATION",
    "secondary-action": "LEARN MORE",
    pattern: "nereus-assets/img/bg/pattern1.png",
    image: "/assets/working-on-sofa.svg",
    ...props.content,
  };

  return (
    <section
      className={classes.section}
      style={{ backgroundImage: `url("${content["pattern"]}")` }}
    >
      <Container maxWidth="lg">
        <Box pt={8} pb={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Container maxWidth="sm">
                    <Typography variant="h4" component="h2" gutterBottom={true}>
                      <Typography
                        className={classes.title}
                        variant="h4"
                        component="span"
                        color="primary"
                      >
                        {content["header-p1"]}{" "}
                      </Typography>
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {content["description"]}
                    </Typography>
                    <Box mt={3}>
                      <Button
                        disableRipple
                        disableTouchRipple
                        variant="contained"
                        color="primary"
                        className={classes.primaryAction}
                      >
                        {content["primary-action"]}
                      </Button>
                      <Link
                        href="#"
                        variant="subtitle1"
                        color="textPrimary"
                        className={classes.link}
                      >
                        {content["secondary-action"]}
                      </Link>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={content["image"]} alt="" className={classes.img} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
