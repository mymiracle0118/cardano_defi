import { Fragment } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MintCard from '../../components/mint/MintCard';

export default function Mint() {
  return (
    <Fragment >
      <Container style={{ marginTop: "100px" }}>
        <Box sx={{mb: 4}}>
          <Typography 
            color="primary.main" 
            variant="h4" 
            sx={{ fontWeight: 'bold', mb: 1}} 
            component="div"
          >
            Fair Launch
          </Typography>
          <Typography variant="body1" color = "block">
            The launch date will be revealed publically, each participating address can only claim up to 20 of the 10,000 PS BEAGLE. At the end of the presale, your NFT and its metadata will be revealed, so everybody has a fair chance to get something cool and rare.
          </Typography>
        </Box>
      </Container>
      <Box 
        sx={{
          bgcolor: "grey.50", 
          py: 7, 
          borderTop: 1, 
          borderBottom: 1, 
          borderColor: "grey.100",
          mb: 4
        }}
      >
        <Container>
          <Typography 
            color = "block" 
            sx={{ fontWeight: 'bold', mb: 4, textAlign: "center"}}
            variant="h5"
          >
            Mint your PS NFT
          </Typography>
          <MintCard />
        </Container>
      </Box>
    </Fragment>
  )
}