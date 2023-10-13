import { Fragment, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PhaseI from '../../components/pre-sale/PhaseI/Renderer';
import PreSaleSteps from 'components/pre-sale/PreSaleSteps';
import SaleDetail from 'components/pre-sale/SaleDetail';

export default function PreSale() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <Container id="presaletop" style={{scrollBehavior: "smooth"}}> 
        <Box sx={{mb: 3}}>
          <Typography 
            color="primary.main" 
            variant="h4" 
            sx={{ fontWeight: 'bold', mb: 5}} 
            component="div"
          >
            Pre-sale
          </Typography>
          <Typography variant="body1" color = "block">
            During the pre-sale, you will have the option to buy $PS. All $PS purchased can be claimed after the end of the vesting period "10-May".
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
          {/* <Typography 
            color = "block"
            sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
            variant="h5"
          >
            IDO
          </Typography>
          <Typography 
            variant="body1" color = "block" 
            sx={{ mb: 2, textAlign: 'center', maxWidth: 600, mx: 'auto' }}
          >
            Grab your PS token now and enjoy vast benefits that come along with being a part of us.
          </Typography> */}
          {/* <PreSaleSteps /> */}
          {/* <PhaseI /> */}
          <SaleDetail />
        </Container>
      </Box>
    </Fragment>
  )
}
