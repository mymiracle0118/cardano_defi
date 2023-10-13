import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const HeroSection = () => {
  return (
    <Container className="fadeInUp">
      <Box sx={{maxWidth: "800px", py: 5, my: 5, mx: 'auto'}}>
        <Typography 
          variant="body1" 
          sx={{ mb: 1, fontWeight: 'bold', textAlign: 'center' }}
        >
          About us
        </Typography>
        <Typography 
          color="primary.main" 
          variant="h2" 
          sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }} 
          component="div"
        >
          The  Genius DEX Platform For You
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, textAlign: 'center' }}>
        PS is a non-custodial Decentralized exchange with Intelligent routing on Cardano blockchain that will supports Liquidity Providing, Yield Farming, Staking, Launching IDO, NFT and Lending & borrow. Starting with the Main token of the Eco System $PS and Ending with $PSs as a reward token for the system.
        </Typography>
      </Box>
    </Container>
  );
}
 
export default HeroSection;
