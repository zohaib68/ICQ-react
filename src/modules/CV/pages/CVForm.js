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
import { useFormik, Form, FormikProvider, FieldArray,Field,getIn } from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Title from '../../common/components/Title'
import WorkerLayout from '../../common/components/WorkerLayout'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const theme = createTheme();

export default function SignUp() {


  const SignupSchema = Yup.object().shape({
    // personalInformation:{
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        cnic: Yup.string().required('cnic is required'),
        phoneNumber:Yup.string().required('Phone is required'),
        postalAddress: Yup.string().required('Address is required'),
        city:Yup.string().required('city is required'),
    // },
        educationInformation:Yup.array().of(
            Yup.object().shape({
                institute: Yup.string().required("institute required"),
                degree: Yup.string()
                  .required("degree required"),
                startDate: Yup.string().required("startDate required"),
                endDate: Yup.string().required("endDate required"),
              })
        ).min(0, "You need at least three friends")
        .required("Go out! Make your life enjoyable!"),
        experience: Yup.array().of(
            Yup.object().shape({
                startDate: Yup.string().required("startDate required"),
                endDate: Yup.string().required("endDate required"),
                designation: Yup.string().required("designation required"),
                company:  Yup.string().required("company required"),
                location: Yup.string().required("location required"),
                currentStatus: Yup.string().required("currentStatus required"),
            }),
        ).min(0, "You need at least three friends")
        .required("Go out! Make your life enjoyable!")
  });

  const formik = useFormik({
    initialValues: {
        // personalInformation:{
            email: '',
            cnic: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            postalAddress: '',
            city: '',
        // },
        educationInformation:[
            {
                institute:'',
                degree:'',
                startDate:'',
                endDate:''
            }
        ],
        experience:[
            {
                designation:'',
                company:'',
                location:'',
                currentStatus:'',
                startDate:'',
                endDate:''
            }
        ]
    },
    validationSchema: SignupSchema,
    // validationSchema:LoginSchema,
    // onChange: (e)=>{
    //     console.log("EE",e)
    // },
    onSubmit: async (values) => {
      console.log('Values of Form are', values);
      
    //   const { email, password } = values;
      try {

        
      } catch (err) {
        
      }
    },
  });

  
  const { errors, touched, handleSubmit, getFieldProps,values,handleChange, handleBlur } = formik;
  const { personalInformation,educationInformation,experience } = values;
  const [value, setValue] = React.useState(0);
  
  const handleChangea = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
        {/* <WorkerLayout /> */}
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <center>
        <Typography component="h2" variant="h4" color="primary" gutterBottom style={{marginTop:'40px'}}>
            Create Your CV
        </Typography>
        </center>
        <Tabs
        value={value}
        style={{marginTop:'30px'}}
        onChange={handleChangea}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="About" />
        <Tab label="Education" />
        <Tab label="Experience" />
        {/* <Tab label="" /> */}
      </Tabs>

      <FormikProvider value={formik}  onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <TabPanel value={value} index={0} dir={theme.direction}>
                <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="firstName"
                            // required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            // onChange={handleChange}
                            {...getFieldProps("firstName")}
                            // value={values.personalInformation.firstName}
                            error={Boolean(touched.firstName && errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            // required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            {...getFieldProps('lastName')}
                            error={Boolean(touched.lastName && errors.lastName)}
                            helperText={touched.lastName && errors.lastName}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            // required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            {...getFieldProps("email")}
                            error={Boolean(touched.email && errors.email)}
                            helperText={touched.email && errors.email}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            // required
                            fullWidth
                            name="cnic"
                            label="Cnic"
                            type="text"
                            id="cnic"
                            autoComplete="CNIC"
                            {...getFieldProps('cnic')}
                            error={Boolean(touched.cnic && errors.cnic)}
                            helperText={touched.cnic && errors.cnic}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            // required
                            fullWidth
                            name="phoneNumber"
                            label="Phone"
                            type="text"
                            id="phoneNumber"
                            autoComplete="phoneNumber"
                            {...getFieldProps('phoneNumber')}
                            error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                            helperText={touched.phoneNumber && errors.phoneNumber}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            // required
                            fullWidth
                            name="postalAddress"
                            label="Postal Address"
                            type="address"
                            id="postalAddress"
                            autoComplete="postalAddress"
                            {...getFieldProps('postalAddress')}
                            error={Boolean(touched.postalAddress && errors.postalAddress)}
                            helperText={touched.postalAddress && errors.postalAddress}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            // required
                            fullWidth
                            name="city"
                            label="city"
                            type="text"
                            id="city"
                            autoComplete="city"
                            {...getFieldProps('city')}
                            error={Boolean(touched.city && errors.city)}
                            helperText={touched.city && errors.city}
                            />
                        </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                <FieldArray name="educationInformation">
                    {({ push, remove }) => (
                        <div>   
                            {values.educationInformation.map((edu,index)=>{
                                const institute = `educationInformation[${index}].institute`;
                                const touchedInstitute = getIn(touched, institute);
                                const errorInstitute = getIn(errors, institute);
                                const degree = `educationInformation[${index}].degree`;
                                const touchedDegree = getIn(touched, degree);
                                const errorDegree = getIn(errors, degree);
                                // const specialization = `educationInformation[${index}].specialization`;
                                // const touchedSpecialization = getIn(touched, specialization);
                                // const errorSpecialization = getIn(errors, specialization);
                                const startDate = `educationInformation[${index}].startDate`;
                                const touchedStartDate = getIn(touched, startDate);
                                const errorStartDate = getIn(errors, startDate);
                                const endDate = `educationInformation[${index}].endDate`;
                                const touchedEndDate = getIn(touched, endDate);
                                const errorEndDate = getIn(errors, endDate);
                            return <>
                            <Box sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete="Institute"
                                    name={institute}
                                    // required
                                    fullWidth
                                    id="institute"
                                    value={edu.institute}
                                    label="institute"
                                    autoFocus
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedInstitute && errorInstitute)}
                                    helperText={touchedInstitute && errorInstitute}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    // required
                                    fullWidth
                                    id="degree"
                                    label="Degree"
                                    name={degree}
                                    value={edu.degree}
                                    autoComplete="degree"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedDegree && errorDegree)}
                                    helperText={touchedDegree && errorDegree}
                                    />
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <TextField
                                    // required
                                    fullWidth
                                    name={specialization}
                                    id="specialization"
                                    label="specialization"
                                    value={edu.specialization}
                                    autoComplete="specialization"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedSpecialization && errorSpecialization)}
                                    helperText={touchedSpecialization && errorSpecialization}
                                    />
                                </Grid> */}
                                <Grid item xs={6}>
                                    <label>Start Date</label>
                                    <TextField
                                    // required
                                    fullWidth
                                    name={startDate}
                                    value={edu.startDate}
                                    type="date"
                                    id="startDate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedStartDate && errorStartDate)}
                                    helperText={touchedStartDate && errorStartDate}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                <label>End Date</label>
                                    <TextField
                                    // required
                                    fullWidth
                                    name={endDate}
                                    value={edu.endDate}
                                    // label="End Date"
                                    type="date"
                                    id="endDate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedEndDate && errorEndDate)}
                                    helperText={touchedEndDate && errorEndDate}
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
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                <FieldArray name="experience">
                    {({ push, remove }) => (
                        <div>   
                            {values.experience.map((edu,index)=>{
                                const designation = `experience[${index}].designation`;
                                const touchedDesignation = getIn(touched, designation);
                                const errorDesignation = getIn(errors, designation);
                                const company = `experience[${index}].company`;
                                const touchedCompany = getIn(touched, company);
                                const errorCompany = getIn(errors, company);
                                const location = `experience[${index}].location`;
                                const touchedLocation = getIn(touched, location);
                                const errorLocation = getIn(errors, location);
                                const currentStatus = `experience[${index}].currentStatus`;
                                const touchedCurrentStatus = getIn(touched, currentStatus);
                                const errorCurrentStatus = getIn(errors, currentStatus);
                                const startDate = `experience[${index}].startDate`;
                                const touchedStartDate = getIn(touched, startDate);
                                const errorStartDate = getIn(errors, startDate);
                                const endDate = `experience[${index}].endDate`;
                                const touchedEndDate = getIn(touched, endDate);
                                const errorEndDate = getIn(errors, endDate);
                            return <>
                            <Box sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="Designation"
                                        name={designation}
                                        value={edu.designation}
                                        // required
                                        fullWidth
                                        id="designation"
                                        label="designation"
                                        autoFocus
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(touchedDesignation && errorDesignation)}
                                        helperText={touchedDesignation && errorDesignation}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    // required
                                    fullWidth
                                    id="company"
                                    label="Company"
                                    name={company}
                                    value={edu.company}
                                    autoComplete="company"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedCompany && errorCompany)}
                                    helperText={touchedCompany && errorCompany}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    // required
                                    fullWidth
                                    id="location"
                                    label="Location"
                                    name={location}
                                    value={edu.location}
                                    autoComplete="Location"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedLocation && errorLocation)}
                                    helperText={touchedLocation && errorLocation}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    // required
                                    fullWidth
                                    id="currentStatus"
                                    label="Current Status"
                                    name={currentStatus}
                                    value={edu.currentStatus}
                                    autoComplete="currentStatus"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedCurrentStatus && errorCurrentStatus)}
                                    helperText={touchedCurrentStatus && errorCurrentStatus}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <label>Start Date</label>
                                    <TextField
                                    // required
                                    fullWidth
                                    name={startDate}
                                    value={edu.startDate}
                                    type="date"
                                    id="startDate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedStartDate && errorStartDate)}
                                    helperText={touchedStartDate && errorStartDate}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                <label>End Date</label>
                                    <TextField
                                    // required
                                    fullWidth
                                    name={endDate}
                                    value={edu.endDate}
                                    type="date"
                                    id="endDate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touchedEndDate && errorEndDate)}
                                    helperText={touchedEndDate && errorEndDate}
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
                </TabPanel>
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
}