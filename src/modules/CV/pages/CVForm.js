import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Yup from "yup";
import {
  useFormik,
  Form,
  FormikProvider,
  FieldArray,
  Field,
  getIn,
} from "formik";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Title from "../../common/components/Title";
import WorkerLayout from "../../common/components/WorkerLayout";
import { MenuItem } from "@mui/material";
import { convertToBase64 } from "../../../utils/utils";
import { postReq } from "../../../Crud/Crud";
import { UPLOAD_CV } from "../../../Crud/constsants";
import { useSelector } from "react-redux";
import {
  workerCategoryOptions,
  workerExpOptions,
} from "../../common/components/WorkerOptions";

const theme = createTheme();

export const CVform = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log(user, "userConsole");
  const { _id: userId } = user;
  const SignupSchema = Yup.object().shape({
    workerType: Yup.string().required("Worker Type is required"),
    experience: Yup.string().required("Experience is required"),
    cvPdf: Yup.string().required("CV is required"),
  });

  const formik = useFormik({
    initialValues: {
      workerType: "",
      experience: "",
      cvPdf: "",
    },
    validationSchema: SignupSchema,

    onSubmit: async (values) => {
      console.log("Values of Form are", values);
      const { cvPdf } = values;
      const { name } = cvPdf;
      let trimmedName = name?.replace(".pdf", "");
      console.log(name, "File");
      let base64File = await convertToBase64(cvPdf);

      postReq(UPLOAD_CV, {
        ...values,
        cvPdf: base64File,
        cvPdfName: trimmedName?.replace(/\s/g, ""),
        userId: userId,
      })
        .then()
        .catch();
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    handleChange,
    setFieldValue,
  } = formik;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <center>
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            gutterBottom
            style={{ marginTop: "40px" }}
          >
            Create Your CV
          </Typography>
        </center>

        <FormikProvider value={formik} onSubmit={handleSubmit}>
          <Form autoComplete="off">
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    id="workerType"
                    label="*Worker Type"
                    name="workerType"
                    {...getFieldProps("workerType")}
                    error={Boolean(touched.workerType && errors.workerType)}
                    helperText={touched.workerType && errors.workerType}
                  >
                    {workerCategoryOptions}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    id="experience"
                    label="*Experience"
                    name="experience"
                    {...getFieldProps("experience")}
                    error={Boolean(touched.experience && errors.experience)}
                    helperText={touched.experience && errors.experience}
                  >
                    {workerExpOptions}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Field name="cvPdf">
                    {(props) => (
                      <TextField
                        onChange={(e) => {
                          handleChange(e);
                          setFieldValue("cvPdf", e?.target.files[0]);
                        }}
                        fullWidth
                        id="cvPdf"
                        label="*CV"
                        name="cvPdf"
                        type="file"
                        {...props}
                        error={Boolean(touched.cvPdf && errors.cvPdf)}
                        helperText={touched.cvPdf && errors.cvPdf}
                      />
                    )}
                  </Field>
                </Grid>
              </Grid>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create CV
            </Button>
          </Form>
        </FormikProvider>
      </Container>
    </ThemeProvider>
  );
};
