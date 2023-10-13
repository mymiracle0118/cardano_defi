import Box from '@mui/material/Box';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import qrcode from "../../../assets/images/qrcode.png"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import logopoppy from "../../../assets/images/Logo2.png";
import cardanolog from "../../../assets/images/Car.png";

import moment from "moment";

const targetTime = moment("2022-04-10");
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


const SaleDetail = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));
  console.log(timeBetween)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

const [pstoken, setPsToken] = useState(59);
const [adatoken, setAdaToken] = useState(1);
const swapTo = (val) => {
  // alert("sdfsdf")
  setPsToken(val)
  setAdaToken(Math.round(val / 59))
}
const swapFrom = (val) => {
  setAdaToken(val)
  setPsToken(val * 59)
}
const copypsaddress = () => {
  navigator.clipboard.writeText("9c2a02b3a38380568749ff510a27d8884bd689dd6acbe2acfee4a509");
  handleTooltipOpen();
}

  return (
    <Container sx={{mt: 0}} className="fadeInUp" id = "paddingzero">
      <Grid 
        
        container 
        rowSpacing={0} 
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ padding: "0px !important" }}
      >
        <Grid item xs={12} sm={8} md={8} sx={{textAlign: 'center',padding: "0px !important" }}>
          <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: 1,
                      width: '100%',
                      // height: '270px',
                    },
                  }}
                >
                <Paper id="paper" elevation={3} sx={{ padding: "20px", backgroundImage: `url('../../../assets/images/paper.png')` }}>
                  <h2>PS Token Details</h2>
                  <p>Total supply: 500,000,000 $PS</p>
                  <p>Presale Total allocation: 85,000,000 $PS (17% of Total supply)</p>

                </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={8} sx={{textAlign: 'center',}}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '100%',
                // height: '270px',
              },
            }}
          >
            <Paper id="paper" elevation={3} sx={{ padding: "20px" }}>
              <h2>Presale Price</h2>
              <p>1 ADA = 59 $PS token</p>
              <p>1$PS = 0.017 ADA</p>
              <p>Minimun buy 300 ADA</p>
              <p>Maximun buy 40,000 ADA</p>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={8} sx={{textAlign: 'center', }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '100%',
                height: '100%',
              },
            }}
          >
            <Paper id="paper" elevation={3} >
              <div style={{ padding: "10px" }}>
                <h2>Converter ADA to $PS </h2>
                <p>Trade tokens in an Instant</p>
                {/* <div style={{ width: "60%", justifyContent:"center", margin: "auto" }}> */}
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                  <Grid item xs={12} sm={7} md={7}>
                    <div style={{  margin: "20px 5px 5px 5px",padding: "1px", borderRadius:"10px", wordWrap: 'break-word', backgroundColor: '#727b97' }}>
                      <p style={{ textAlign: 'left', marginLeft: "10px",marginBottom:"0px" }}>From</p>
                      <Grid container spacing={2}>
                        <Grid item xs={0} sm={0} md={0}>
                          </Grid>
                        <Grid item xs={5} sm={5} md={5}>
                          {/* <Item>xs=8</Item> */}
                          <input id="inputfrom" type="number" onChange={(e) => swapFrom(e.target.value)} value={adatoken} style={{ marginTop: "12px", width: "100%" }} />
                        </Grid>
                        <Grid item xs={11} sm={5} md={6} style={{ padding: "0px", width: "100%",display:"inline-flex" }} >
                          <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={10} sm={10} md={10}>
                              <FormControl variant="standard" sx={{ m: 1, width: "100%", color: "white !important" }}>
                                <InputLabel id="demo-simple-select-standard-label" style={{ color: "white !important" }}>Swap From</InputLabel>
                                <Select
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                  value={age}
                                  onChange={handleChange}
                                  label="Age"
                                >
                                  <MenuItem value={10}>ADA</MenuItem>
                                </Select>
                                
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid item xs={2} sm={2} md={2} sx={{ mt : 3}}>

                            <img id="logswap1" src={cardanolog} alt="cardanologo" style={{verticalAlign: "sub" }}></img>
                          </Grid>
                        </Grid>
                        
                      </Grid>
                    </div>
                    <b>↓</b>
                    <div style={{  margin: "20px 5px 5px 5px",padding: "1px", borderRadius:"10px", wordWrap: 'break-word', backgroundColor: '#727b97' }}>
                      <p style={{ textAlign: 'left', marginLeft: "10px",marginBottom:"0px" }}>To</p>
                      <Grid container spacing={2}>
                        <Grid item xs={0} sm={0} md={0}>
                          </Grid>
                        <Grid item xs={5} sm={5} md={5}>
                          {/* <Item>xs=8</Item> */}
                          <input id="inputfrom" onChange={(e) => swapTo(e.target.value)} value={pstoken} style={{ marginTop: "12px", width: "100%" }} />
                        </Grid>
                        <Grid item xs={11} sm={5} md={6} style={{ padding: "0px", width: "100%",display:"inline-flex" }} >
                          <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={10} sm={10} md={10}>
                              <FormControl variant="standard" sx={{ m: 1, width: "100%", color: "white !important" }}>
                                <InputLabel id="demo-simple-select-standard-label" style={{ color: "white !important" }} >Swap To</InputLabel>
                                <Select
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                  value={age}
                                  onChange={handleChange}
                                  label="Age"
                                >
                                  <MenuItem value={10}>$PS</MenuItem>
                                </Select>
                                
                              </FormControl>
                            </Grid>
                          </Grid>
                          <Grid item xs={2} sm={2} md={2} sx={{ mt : 3}}>

                            <img id="logswap" src={logopoppy} alt="poppylogo" style={{verticalAlign: "sub" }}></img>
                          </Grid>
                        </Grid>
                        
                      </Grid>
                    </div>
                {/* </div> */}
                </Grid>
              </Grid>
              </div>     
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={8} sx={{textAlign: 'center',}}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '97%',
                // height: '270px',
              },
            }}
          >
            <Paper id="paper" elevation={3} sx={{ padding: "20px" }}> 
              <h2>Send ADA to PS Wallet Address below:</h2>
              <div style={{color:"white !important", padding: "20px", wordWrap: 'break-word', border: 'solid 2px lightblue', backgroundColor: '#727b97' }}>
                <img id="qrcode" src={qrcode} alt="qrcode"></img>
                <p>9c2a02b3a38380568749ff510a27d8884bd689dd6acbe2acfee4a509</p>
              </div>
              <div style={{ display : "flex", width : "100%",paddingTop: "20px", justifyContent: "center "}}>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <div>
                    <Tooltip
                      PopperProps={{
                        disablePortal: true,
                      }}
                      onClose={handleTooltipClose}
                      open={open}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      title="copied above address"
                    >
                      <Button variant="outlined" style={{ borderRadius: "20px" }} onClick={() => copypsaddress()}>Copy Address to Clipboard Button </Button>
                    </Tooltip>
                  </div>
                </ClickAwayListener>

              </div>
            </Paper>
          </Box>
        </Grid>
      </Grid>
      <Grid 
        container 
        rowSpacing={4} 
        columnspacing={22} 
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        
      </Grid>
      <Divider style={{ marginTop: "60px" }}></Divider>
      <div style={{ display : "flex", width : "100%",paddingTop: "20px", justifyContent: "center", textAlign:"center"}}>
        <h1>POPPYSWAP SALE ENDS IN</h1>
      </div>
      <div style={{ display : "flex", width : "100%",paddingTop: "20px", justifyContent: "center", border: ""}}>
          <Grid container justifyContent="center" spacing={0} rowSpacing={2}>
            <Grid item xs={3} id="test1">
              <Grid container justifyContent="center" spacing={0}>
                <Grid item xs={6} sm={4} md={4} id="circlegrid" style={{justifyContent: "right"}}>
                <div id="circlenumber" >{timeBetween.days() < 10 ? "0" : timeBetween.days().toString().slice(0,1)}</div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} id="circlegrid">
                <div id="circlenumber">{timeBetween.days() < 10 ? timeBetween.days().toString().slice(0,1) : timeBetween.days().toString().slice(1,2)}</div>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" style={{paddingTop: "10px"}} spacing={0}>
                <Grid item xs={8}>
                  <h1 id="timetitle">days</h1>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} id="test1">
              <Grid container justifyContent="center" spacing={0}>
                <Grid item xs={6} sm={4} md={4} id="circlegrid" style={{justifyContent: "right"}}>
                <div id="circlenumber">{timeBetween.hours() < 10 ? "0" : timeBetween.hours().toString().slice(0,1)}</div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} id="circlegrid">
                <div id="circlenumber">{timeBetween.hours() < 10 ? timeBetween.hours().toString().slice(0,1) : timeBetween.hours().toString().slice(1,2)}</div>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" style={{paddingTop: "10px"}} spacing={0}>
                <Grid item xs={8}>
                  <h1 id="timetitle">hours</h1>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} id="test1">
              <Grid container justifyContent="center" spacing={0}>
                <Grid item xs={6} sm={4} md={4} id="circlegrid" style={{justifyContent: "right"}}>
                <div id="circlenumber">{timeBetween.minutes() < 10 ? "0" : timeBetween.minutes().toString().slice(0,1)}</div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} id="circlegrid">
                <div id="circlenumber">{timeBetween.minutes() < 10 ? timeBetween.minutes().toString().slice(0,1) : timeBetween.minutes().toString().slice(1,2)}</div>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" style={{paddingTop: "10px"}} spacing={0}>
                <Grid item xs={8}>
                  <h1 id="timetitle">mins</h1>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} id="test1">
              <Grid container justifyContent="center" spacing={0}>
                <Grid item xs={6} sm={4} md={4} id="circlegrid" style={{justifyContent: "right"}}>
                <div id="circlenumber">{timeBetween.seconds() < 10 ? "0" : timeBetween.seconds().toString().slice(0,1)}</div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} id="circlegrid">
                <div id="circlenumber">{timeBetween.seconds() < 10 ? timeBetween.seconds().toString().slice(0,1) : timeBetween.seconds().toString().slice(1,2)}</div>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" style={{paddingTop: "10px"}} spacing={0}>
                <Grid item xs={8}>
                  <h1 id="timetitle">seconds</h1>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </div>
      <div style={{ display : "flex", width : "100%",paddingTop: "20px", justifyContent: "center", border: ""}}>
        <h3>Progress</h3>
      </div>
      <div style={{ display : "flex", width : "100%",paddingTop: "20px", justifyContent: "center", border: ""}}>
        <Box sx={{ width: '100%' }}>
        <Grid container justifyContent="center" spacing={5} style={{ paddingTop: "0px" }}>
            <Grid item xs={12}>
              <LinearProgressWithLabel value="20" />
              <p style={{ float: "right", paddingRight: "50px" , marginBottom: "0px", marginTop:"0px"}}>3,160,000 / 220,000,000</p>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={5} style={{ paddingTop: "0px" }}>
              <Grid item xs={4}>
                <h3 style={{ display : "flex",justifyContent: "center"  }}>Minimun Buy</h3>
                <h3 style={{ color: "purple", display : "flex",justifyContent: "center"  }}>300 ADA</h3>
              </Grid>
              <Grid item xs={5}>

              </Grid>
              <Grid item xs={3}>
                <h3 style={{ display : "flex",justifyContent: "center"  }}>Maximun Buy</h3>
                <h3 style={{ color: "purple", display : "flex",justifyContent: "center"  }}>40,000 ADA</h3>
              </Grid>
            </Grid>
        </Box>
      </div>
    </Container>
  );
}

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" value={50} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
 
export default SaleDetail;