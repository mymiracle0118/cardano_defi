import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CopyToClipboard from './CopyToClipboard';

const contracts = [
  {
    title: "World (Token)", 
    value: "9c2a02b3a38380568749ff510a27d8884bd689dd6acbe2acfee4a509",
    link: "https://cardanoscan.io/tokenPolicy/9c2a02b3a38380568749ff510a27d8884bd689dd6acbe2acfee4a509"
  },
  {
    title: "EQN (Token)", 
    value: "e681e6d095b21bcfdd74e8ae8e2beeb9309d922f8faf8ebf37c076b5",
    link: "https://cardanoscan.io/tokenPolicy/0x25b24b3c47918b7962b3e49c4f468367f73cc0e0"
  },
  {
    title: "neuron (Token)", 
    value: "d070f6b0e45fc3cd280e21fd4fcac4d59b3d35b23387eb6559455879",
    link: "https://cardanoscan.io/tokenPolicy/d070f6b0e45fc3cd280e21fd4fcac4d59b3d35b23387eb6559455879"
  },
  {
    title: "USDI (Token)", 
    value: "53cc9c21351cc19be68ebb5e275c325d0fc2be0044b695361ae330fd",
    link: "https://cardanoscan.io/tokenPolicy/53cc9c21351cc19be68ebb5e275c325d0fc2be0044b695361ae330fd"
  }
]

export default function Contracts({open, handleClose}) {

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      BackdropProps={{style: {backgroundColor: 'rgba(32, 38, 45, 0.2)', backdropFilter: 'blur(2px)'}}}
      PaperProps={{
        style: { borderRadius: 25, boxShadow: 'none' }
      }}
      fullWidth
    >
      <DialogTitle id="alert-dialog-title" sx={{p: 3}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="h6" sx={{fontWeight: 500}}>
            Contracts
          </Typography>
          <IconButton onClick={handleClose} aria-label="close" sx={{bgcolor: 'grey.100'}}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        {contracts.map((contract, i) => (
          <Stack direction="row" mb={2} key={i} justifyContent="space-between" spacing={3}>
            <Box>
              <Typography variant="h6" color = "block" sx={{fontWeight: 500, mb: 1}}>
              {contract.title}
              </Typography>
              <Link 
                href={contract.link} 
                underline="none" 
                target="_blank" 
                rel="noreferrer"
                sx={{fontWeight: 500, fontSize: '14px'}}
              >
                {contract.value}
              </Link>
            </Box>
            <Box sx={{alignSelf: 'end'}}>
              <CopyToClipboard text={contract.value} />
            </Box>
          </Stack>
        ))}
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}