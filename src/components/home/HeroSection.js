import { Link } from "react-router-dom"
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import logoArt from "../../assets/images/Logo2.png";
// import logovideo from "../../assets/images/logovideo.mp4";
import ReactPlayer from 'react-player'
import WhitePaper from "../../assets/whitepaper.pdf";

const HeroSection = () => {
  return (
    <Container className="fadeInUp" sx={{ marginTop: '45px', paddingTop: '50px'}}>
      <Stack 
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={9}>
          <Box sx={{maxWidth: "800px", mx: 'auto'}}>
            <Typography 
              color="black" 
              variant="h4" 
              sx={{ fontWeight: 'bold', mb: 3}} 
              component="div"
            >
              A Next-Gen non-Custodial Dex with <br />Smart DeFi on Cardano
            </Typography>
            <Typography variant="body1"  sx={{ mb: 4 }}>
              PS is a next-generation non-custodial Decentralized exchange with Smart DeFi on Cardano blockchain that will supports Liquidity Providing, Yield Farming, Staking, Launching IDO, NFT and Lending & borrow. Starting with the Main token of the Eco System $PS and Ending with $PSs as a reward token for the system.
            </Typography>
            {/* <Typography variant="body1" color = "block" sx={{ mb: 2 }}>
              There are 10,000 unique collectable characters inspired by JS INU and Contains 20 ELON&apos;s and 80 zombies.
            </Typography> */}
            <Typography 
              variant="body1" 
              sx={{ mb: 2, fontWeight: 700 }}
            >
              We will start with NFT and End with DEX
            </Typography>
            <Stack
              direction="row"
              spacing={1}
            >
              <Button
                component={Link}
                to="/pre-sale"
                disableElevation 
                variant="contained" 
                endIcon={<ArrowForwardIcon />}
                sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
                Get $PS
              </Button>
              <Button 
                component="a"
                href={WhitePaper}
                target="_blank" 
                rel="noopener noreferrer"
                endIcon={<ArrowDownwardIcon />}
                sx={{ color: 'red' }}>
                Download PS whitepaper
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{maxWidth: "800px", py: 2, mb: 2, mx: 'auto'}}>
          {/* <div dangerouslySetInnerHTML={{ __html: `
            <video
              loop
              muted
              autoplay
              playsinline
              width='100%'
              src="${logovideo}"
            />,
          ` }}></div> */}
            <ReactPlayer url='https://youtu.be/TvEY8GW0uY4' width="100%" height="100%" controls playing/>

            </Box>
        </Grid>
      </Grid>
      </Stack>
    </Container>
  );
}
 
export default HeroSection;
