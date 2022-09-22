import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider, FieldArray } from 'formik';
// import { Formik, Form, Field, FieldArray } from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {


  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    phone:Yup.string().required('Phone is required'),
    address:Yup.string().required('Address is required'),
    role:Yup.string().required('Role is required')
  });

  const formik = useFormik({
    initialValues: {
      education:[{
        email: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      role: ''
    }]
    },
    validationSchema: SignupSchema,
    // validationSchema:LoginSchema,
    onSubmit: async (values) => {
      console.log('Values of Form are', values);
      
    //   const { email, password } = values;
      try {

        
      } catch (err) {
        
      }
    },
  });

  
  const { errors, touched, handleSubmit, getFieldProps,values } = formik;

  console.log("VALIES ",values)
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Experience
          </Typography>
            <FormikProvider value={formik}  onSubmit={handleSubmit}>
                <Form autoComplete="off">
                <FieldArray name="education">
              {({ push, remove }) => (
                <div>   
                    {values.education.map((edu,index)=>{
                    return <>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="Designation"
                            name="designation"
                            required
                            fullWidth
                            id="designation"
                            label="designation"
                            autoFocus
                            {...getFieldProps('designation')}
                            error={Boolean(touched.designation && errors.designation)}
                            helperText={touched.designation && errors.designation}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="company"
                            label="Company"
                            name="company"
                            autoComplete="company"
                            {...getFieldProps('company')}
                            error={Boolean(touched.company && errors.company)}
                            helperText={touched.company && errors.company}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="location"
                            label="Location"
                            name="location"
                            autoComplete="Location"
                            {...getFieldProps('location')}
                            error={Boolean(touched.location && errors.location)}
                            helperText={touched.location && errors.location}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="currentStatus"
                            label="Current Status"
                            name="currentStatus"
                            autoComplete="currentStatus"
                            {...getFieldProps('currentStatus')}
                            error={Boolean(touched.currentStatus && errors.currentStatus)}
                            helperText={touched.currentStatus && errors.currentStatus}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <label>Start Date</label>
                            <TextField
                            required
                            fullWidth
                            name="startDate"
                            // label="Start Date"
                            type="date"
                            id="startDate"
                            // autoComplete="startDate"
                            {...getFieldProps('startDate')}
                            error={Boolean(touched.startDate && errors.startDate)}
                            helperText={touched.startDate && errors.startDate}
                            />
                        </Grid>
                        <Grid item xs={6}>
                        <label>End Date</label>
                            <TextField
                            required
                            fullWidth
                            name="endDate"
                            // label="End Date"
                            type="date"
                            id="endDate"
                            // autoComplete="startDate"
                            {...getFieldProps('endDate')}
                            error={Boolean(touched.endDate && errors.endDate)}
                            helperText={touched.endDate && errors.endDate}
                            />
                        </Grid>
                        </Grid>
                    </Box>
                    <Button
                        //   className={classes.button}
                          margin="normal"
                          type="button"
                          color="secondary"
                          variant="outlined"
                          onClick={() => remove(index)}
                        >
                          x
                        </Button>
                        </>
                    })}
                    <Button
                    // className={classes.button}
                    type="button"
                    variant="outlined"
                    onClick={() =>
                      push({ id: Math.random(), firstName: "", lastName: "" })
                    }
                  >
                    Add
                  </Button>
                    </div>
              )}

                </FieldArray>
                    
                </Form>
            </FormikProvider>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}