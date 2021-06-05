import React, { useEffect ,useState ,useCallback} from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons';

import * as actions from "../../store/actions/doc_profile_actions";
import {useSelector,useDispatch} from 'react-redux';

import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Avatar,
    Typography,
    CardActions
  } from '@material-ui/core';




  export default function DocProfile(){
    // const id=localStorage.getItem('userId');
    const user=useSelector(state=>state.docauth.profile);
    
    const dispatch=useDispatch();

    // const user={
    //   firstName:"firstname",
    //     lastName:"lastname",
    //     email:"email",
    //     number:"0998765",
    //     state:"bsdna",
    //     country:"country",
    //     pincode:"098765",
    // }
    const tryProfile = useCallback(() =>{
      const uid=localStorage.getItem('userId');
      dispatch(actions.docGetProfile(uid));
      },[dispatch]);
    useEffect(()=>{
     tryProfile();
    },[tryProfile]);

    useEffect(()=>{
      if(user){
        setfirstname(user.firstName);
        setlastname(user.lastName);
        setemail(user.email);
        setnumber(user.number);
        setcountry(user.country);
        setstate(user.state);
        setaddress(user.address);
        setpincode(user.pincode);
      }
    },[user]);

    
    
    
      

    
    
    


    const [firstname,setfirstname] =useState(user?user.firstName:'');
    const [lastname,setlastname] =useState(user?user.lastName:'');
    const [email,setemail] =useState(user?user.email:'');
    const [number,setnumber] =useState(user?user.number:'');
    const [state,setstate] =useState(user?user.state:'');
    const [country,setcountry] =useState(user?user.country:'');
    const [address,setaddress] =useState(user?user.address:'');
    const [pincode,setpincode] =useState(user?user.pincode:'');

    

    const Ref = React.createRef();

    const changefirstname = (event) => {
        setfirstname(event.target.value);
    }
    const changelastname = (event) => {
        setlastname(event.target.value);
    }
    const changeemail = (event) => {
        setemail(event.target.value);
    }
    const changenumber = (event) => {
        setnumber(event.target.value);
    }
    const changestate = (event) => {
        setstate(event.target.value);
    }
    const changecountry= (event) => {
      setcountry(event.target.value);
    }
    const changepincode= (event) => {
      setpincode(event.target.value);
    }
    const changeaddress= (event) => {
      setaddress(event.target.value);
    }
    

    

    const handleSubmit = () => {
      const newUser={
        firstName:firstname,
        lastName:lastname,
        email:email,
        number:number,
        state:state,
        country:country,
        address:address,
        pincode:pincode

      }
       dispatch(actions.docEditProfile({newUser}));
    }





  return (
    <div className="row m-2">
      <div className="col-sm-12 col-md-5 col-lg-5 ">
      <Card >
    <CardContent>
      <Box
        style={{
          margin:'auto',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src=""
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
          style={{textTransform:'capitalize'}}
        >
        {`${user?user.firstName:''} ${user?user.lastName:''}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user?user.address:''} ${user?user.pincode:''}`}
          
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user?user.state:''} ${user?user.country:''}`}
        </Typography>
        <Typography
          className="row"
          color="textSecondary"
          variant="body1"
        >
          {/* <p style={{display:'flex',justifyContent:'space-between'}}> */}
          <h5 className='m-2'><FontAwesomeIcon icon={faPhoneAlt} /> {user ? user.number:''} </h5>
          <h5 className='m-2'><FontAwesomeIcon icon={faEnvelope} /> {user ? user.email:''} </h5>
          {/* </p> */}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>

    </CardActions>
  </Card>
      </div>
      <div className="col-sm-12 col-md-7 col-lg-7 ">
    <ValidatorForm
      onSubmit={handleSubmit}
      instantValidate={false}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextValidator
              ref={Ref}
              onChange={changefirstname}
                fullWidth
                label="First name"
                name="firstName"
                value={firstname}
                variant="outlined"
                validators={['required']}
                errorMessages={['this field is required']}
              />
              
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextValidator
                fullWidth
                label="Last name"
                name="lastname"
                value={lastname}
                variant="outlined"
                validators={['required']}
                ref={Ref}
                onChange={changelastname}
                errorMessages={['this field is required']}
              />

            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextValidator
                fullWidth
                label="Email Address"
                name="email"
                value={email}
                variant="outlined"
                ref={Ref}
                onChange={changeemail}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextValidator
                fullWidth
                label="Phone Number"
                name="phone"
                value={number}
                type="number"
                variant="outlined"
                ref={Ref}
                onChange={changenumber}
                validators={['required', 'isNumber']}
                errorMessages={['this field is required','invalid number']}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextValidator
                fullWidth
                label="Country"
                name="country"
                value={country}
                variant="outlined"
                ref={Ref}
                onChange={changecountry}
                validators={['required']}
                errorMessages={['this field is required']}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextValidator
                fullWidth
                label="State"
                name="state"   
                value={state}             
                variant="outlined"
                ref={Ref}
                onChange={changestate}
                validators={['required']}
                errorMessages={['this field is required']}
              />
                
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextValidator
                fullWidth
                label="Address"
                name="address"   
                value={address}             
                variant="outlined"
                ref={Ref}
                onChange={changeaddress}
                validators={['required']}
                errorMessages={['this field is required']}
              />
                
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextValidator
                fullWidth
                label="pincode"
                name="pincode"
                type="number"   
                value={pincode}             
                variant="outlined"
                ref={Ref}
                onChange={changepincode}
                validators={['required','isNumber']}
                errorMessages={['this field is required','Invalid pincode']}
              />
                
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p:4
          }}
        >
          <Button
           type="submit"
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </ValidatorForm>
    </div>
    </div>
  );
};










