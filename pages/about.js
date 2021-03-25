import React from "react";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core";

import IndividualJob from "../src/components/IndividualJob";
import JobContact from "../src/components/contact/JobContact";
import PageHeader from "../src/components/headers/PageHeader";
import AboutPageContent from "../src/components/content/AboutPageContent";
import AboutPageTeam from "../src/components/Team/AboutPageTeam";
import Testimonials from "../src/components/testimonials/TestimonialsWithLogos";
import Contact from "../src/components/contact/ContactBasic";
import Gallery from "../src/components/gallery/AboutPageGallery";

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
    color: "#2D3748",
    paddingBottom: 10,
  },
}));

const About = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <section>
      <PageHeader
        title={"About Us"}
        description={
          "We are founded by a leading academic and researcher in the field of Industrial Systems Engineering."
        }
      />
      <AboutPageContent />
      <AboutPageTeam />
      <Testimonials />
      <Contact />
      <Gallery />
    </section>
  );
};

export default About;
