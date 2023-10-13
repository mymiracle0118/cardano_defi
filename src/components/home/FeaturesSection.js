import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
// import cubes from '../../assets/images/cubes.svg';
import blockchain from '../../assets/images/blockchain.svg';
import NFT from '../../assets/images/Logo2.png';
// import { FeaturedVideoSharp } from '@mui/icons-material';

const features = [
  {
    title: "NFT",
    description: "Individuals can have access to our PS NFT platform. This gives the chance to Mint digital art and also gives lovers of art to own their NFT from our platform."
  },
  {
    title: "Rewards",
    description: "PS holders can stake the tokens into the Staking Pools to receive rewards and transaction fees. Staking indirectly serves to support the system."
  },
  {
    title: "Lend & Borrow",
    description: "PS will build a decentralized money market platform that takes advantage of the speed, automation, and security of the blockchain to connect lenders and borrowers efficiently and securely, and earn rewards."
  },
  {
    title: "IDO LaunchPad",
    description: "PS Pad will give the crypto currency projects the ability to launch a IDO and Distribute tokens "
  },
  {
    title: "Repurchase & Burn",
    description: "All Transaction fee, IDO fee will be used for $PS and $PSs repurchase and burn"
  },
  {
    title: "Decentralized Exchange",
    description: "A DEX aggregator that gets you the best prices from your DEX trades. PS splits your trade across multiple DEXes along our Liquidity Pool to ensure the best prices and lowest slippage possible"
  }
]

const FeaturesSection = () => {
  return (
<Box sx={{bgcolor: 'grey.50', py: 7, borderTop: 1, borderColor: "grey.100" }}>
      <Container>
      <Grid container spacing={4} justifyContent="center">
        <Box sx={{maxWidth: '500px', textAlign: "center"}}>
          <Typography 
            variant="body1" 
            color="primary.main" 
            sx={{ mb: 1, fontWeight: 700 }}
          >
            Our main features
          </Typography>
          <Typography 
            color="text.primary" 
            variant="h4" 
            sx={{ fontWeight: 700, mb: 5 }} 
            component="div"
          >
            The  Genius DEX Platform For You
          </Typography>
        </Box>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          {features.map((f, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Stack direction="row" spacing={2}>
                <Box sx={{minWidth: 36}}>
                  <img
                    src={blockchain}
                    width="36"
                    height="36"
                    alt="cubes"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '0.875rem'}}
                  >
                  {f.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem'}}>
                    {f.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
 
export default FeaturesSection;
