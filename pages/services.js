import React from "react";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core";

import PageHeader from "../src/components/headers/PageHeader";
import Features from "../src/components/features/Features4";
import HowItWorks from "../src/components/how-it-works/HowItWorks2";

const useStyles = makeStyles((theme) => ({}));

const About = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <section>
      <PageHeader
        title={"Services"}
        description={
          "Forward thinking businesses use our cloud backup service to ensure data reliability and safety."
        }
      />
      <Features />
      <HowItWorks />
    </section>
  );
};

export default About;
