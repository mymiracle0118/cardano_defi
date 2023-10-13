import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Badge from '@mui/material/Badge';

const BridgeSection = () => {
  return (
    <Box id="bridge" 
      sx={{
        bgcolor: "grey.50", 
        py: 7, 
        borderBottom: 1, 
        borderColor: "grey.100",
      }}
    >
      <Container>
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 3 }}
        >
          Bridge
        </Typography>
        <Typography variant="body1" color = "block" sx={{ mb: 2, maxWidth: '900px' }}>
          As the size of the Blockchain networks around us increase at a humongous scale, the chance to have decent interconnection between each other is very minuscule, which means, each platform runs completely closed off from another and sharing of data is quite restricted and takes away one key factor of decentralization which is being able to share and exchange information between platforms freely.
        </Typography>
        <Typography variant="body1" color = "block" sx={{ mb: 3, maxWidth: '900px' }}>
          As a result of this flaw, it can become very difficult to transfer digital assets in terms of digital currency, or an asset of another form stored on the Blockchain network. To combat this, the PS platform is implementing a concept which widely is know as a Blockchain bridge. The Blockchain bridge allows the transfer of tokens and digital assets generally from one chain network to another regardless of the rules or protocols that they separately operate upon. With this, individuals have a means to move their digital assets from one chain to another.
        </Typography>
        <Badge badgeContent={"soon"} color="primary">
          <Button
            component="a"
            href="https://bridge.poly.network/token/JS"
            target="_blank" 
            rel="noopener noreferrer"
            disableElevation 
            disabled
            variant="contained" 
            endIcon={<ArrowForwardIcon />}
          >
            Bridge Now
          </Button>
        </Badge>
      </Container>
    </Box>
  );
}
 
export default BridgeSection;
