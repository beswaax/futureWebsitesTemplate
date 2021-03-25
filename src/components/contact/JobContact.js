import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#F7F9FA",
    marginTop: "6rem",
    paddingTop: "7rem",
    paddingBottom: "7rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "5rem",
      paddingTop: "5rem",
      paddingBottom: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
      paddingTop: "4rem",
      paddingBottom: "4rem",
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: 10,
  },
  textField: {
    marginTop: "1rem",
  },
  button: {
    marginTop: "1rem",
    alignItems: "center",
  },
}));

const JobContact = () => {
  const classes = useStyles();
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.section}>
      <Container maxWidth="md">
        <Box style={{ textAlign: matchesSM ? "left" : "center" }}>
          <Typography variant="h4" className={classes.title}>
            Apply for this job
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            After 3 days all of your offers will arrive and you will have
            another 7 days to select your new company.
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            id="name"
            name="name"
            label="Name"
            type="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            id="message"
            name="message"
            label="Message"
            type="message"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />

          <Box align="center">
            <Button
              className={classes.button}
              disableRipple
              disableTouchRipple
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default JobContact;
