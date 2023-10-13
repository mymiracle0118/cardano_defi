import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Grid from '@mui/material/Grid';
import StepContent from '@mui/material/StepContent';
import StepButton from '@mui/material/StepButton';
import Link from '@mui/material/Link';

const step1Description = (
  <span>
    $PS utility token is available on the Cardano blockchain.<br /> First, you need to create a Cardano supported browser wallet.<br /> For example, visit either <Link href="https://yoroi-wallet.com/" underline="none" target="_blank" rel="noreferrer">&nbsp;Yoroi</Link>,&nbsp;
    <Link href="https://daedaluswallet.io/" underline="none" target="_blank" rel="noreferrer">Daedalus</Link>,&nbsp;
    <Link href="https://adalite.io/" underline="none" target="_blank" rel="noreferrer">Adalite</Link>&nbsp;or <Link href="https://namiwallet.io/" underline="none" target="_blank" rel="noreferrer">Nami</Link> wallet to download the extension and set up a wallet
  </span>
)
const step2Description = (
  <span>
    You need to acquire ADA from any cryptocurrency exchange company.
    <br />
    For example, you can purchase ADA from Coinbase or Binance.
    <br />
    After that,send the acquired ADA to your Cardano-supported wallet like Yoroi, Daedalus, Adalite or Nami Wallet
  </span>
)

const steps = [
  {
    label: 'Create a Cardano-supported Wallet',
    description: step1Description,
  },
  {
    label: 'Acquire Cardano-native token $ADA from an Exchange',
    description: step2Description,
  },
  {
    label: <span>Click On <Link href="./presale" underline="none" target="_blank" rel="noreferrer">Pre-Sale</Link></span>,
    description: <span>
                  You will be directed to $PS Token Pre-Sale page. Then send your ADA to the provided wallet address <br />
                  NOTE:
                  <br />
                  * Pre-Sale supports only ADA.<br />
                  * You can currently swap ADA to PS on the Pre-Sale page through Poppy Swap's official website<br />
                  * Ensure you send ADA to the provided wallet address from a Cardano-supported wallet only, such as Yoroi, Daedalus, Adalite or Nami Wallet, not from an exchange wallet.<br />
                  * To get $PS Tokens in the Pre-Sale, you must reach a minimum of 300 ADA<br />
                </span>,
  },
  {
    label: 'Claim $PS',
    description: 'All $PS purchased can be claimed at the pre-sale page after the end of the vesting period "10-May".',
  }
];

const HowToSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      id="getPS"  
      sx={{py: 7,borderColor: "grey.100" }}
    >
      <Container>
        <Typography 
          variant="body1" 
          color="red" 
          sx={{ mb: 1, fontWeight: 700, textAlign: 'center' }}
        >
          Get started
        </Typography>
        <Typography 
          variant="h4" 
          component="div" 
          sx={{ fontWeight: 'bold', pb: 6, textAlign: 'center' }}
        >
          How to get $PS
        </Typography>
        <Grid container spacing={0} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Stepper activeStep={activeStep} orientation="vertical" nonLinear variant="dots">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepButton color="primary" onClick={handleStep(index)}>
                    <Typography 
                      variant="h6" 
                      component="div"
                    >
                      {step.label}
                    </Typography>
                  </StepButton>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          disableElevation
                          onClick={index === steps.length - 1 ? handleReset : handleNext}
                          sx={{ mt: 1, mr: 1, }}
                          color="primary"
                        >
                          {index === steps.length - 1 ? 'Again' : 'Got It'}
                        </Button>
                        <Button
                          color="secondary"
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          previous step
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
 
export default HowToSection;