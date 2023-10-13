import { Fragment } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TokenPools from '../../components/stake/TokenPools';
import StakeSteps from '../../components/stake/StakeSteps';
import HowToStake from '../../components/stake/HowToStake';

export default function Stake() {
  return (
    <Fragment>
      <Container>
        <Box sx={{mb: 4}}>
          <Typography 
            color = "block" 
            variant="h4" 
            sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main'}} 
            component="div"
          >
            Staking
          </Typography>
          <Typography variant="body1" color = "block">
            Stake $JS to earn more $JS. You can stake $JS tokens in the staking pools to earn high APR as a return for holding $JS tokens.
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
        <Container className="fadeInUp">
          <Typography 
            variant="h5" 
            component="div" 
            color = "block"
            sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}
          >
            Stake $JS tokens to earn rewards
          </Typography>
          <Typography 
            variant="body1" color = "block" 
            sx={{ mb: 2, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
          >
            Please be aware <strong>estimated APRs will likely drop over time as more people join the pool</strong>. First you must approve you&apos;ve $JS for use on the staking contract, then enter an amount and press stake.
          </Typography>
          <StakeSteps />
          <HowToStake />
          <TokenPools />
        </Container>
      </Box>
    </Fragment>
  )
}
