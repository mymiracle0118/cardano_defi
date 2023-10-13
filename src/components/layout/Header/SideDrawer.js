import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import WhitePaper from "../../../assets/whitepaper.pdf";


const drawerWidth = 220;

const SideDrawer = ({mainLinks, bridgeLink, teamLink, careersLink, presaleLink, moreMenuLinks, comingSoonLink, onClose, open, window, handleClickContracts}) => {
  const router = useLocation();
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleClickContractsItem = () => {
    onClose()
    handleClickContracts()
  }

  return ( 
    <Drawer
      container={container}
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        zIndex: 10000,
        display: { 
          xs: 'block', 
          sm: 'none' 
        },
        '& .MuiDrawer-paper': { 
          boxSizing: 'border-box', 
          width: drawerWidth, 
          border: 0,
          boxShadow: 'none'
        },
      }}
      BackdropProps={{style: {backgroundColor: 'rgba(32, 38, 45, 0.2)', backdropFilter: 'blur(2px)'}}}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List
          sx={{maxWidth: drawerWidth }}
          component="nav"
          className="sidebar"
          aria-labelledby="main-list"
          dense
        >
          {mainLinks.map(link => (
            <ListItemButton 
              component={Link} 
              to={link.href}
              key={link.href}
              selected={router.pathname === link.href}
              onClick={onClose}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
          <ListItemButton
            onClick={onClose}
            component={Link} 
            to={presaleLink.href}
            selected={router.pathname === presaleLink.href}
            sx={{display: 'flex', alignItems: 'center', width: '100%'}}
          >
            <Badge 
              badgeContent="LIVE" 
              color="error"
            >
              <ListItemText primary={presaleLink.label} />
            </Badge>
          </ListItemButton>
          {comingSoonLink.map(link => (
            <ListItem 
              key={link}
              sx={{display: 'flex', alignItems: 'center', width: '100%'}}
            >
              <ListItemText primary={link} sx={{opacity: .3}} />
            </ListItem>
          ))}
        </List>
        <Divider light />
        <List
          sx={{maxWidth: drawerWidth }}
          component="nav"
          className="sidebar"
          aria-labelledby="main-list"
          dense
        >
          {moreMenuLinks.map(link => (
            <ListItemButton
              component={Link}
              to={link.href}
              key={link.href}
              selected={router.pathname === link.href} 
              onClick={onClose}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
          <ListItemButton
            onClick={onClose}
            component="a"
            href={teamLink.href}
            rel="noopener noreferrer"
            sx={{display: 'flex', alignItems: 'center', width: '100%'}}
          >
            <ListItemText primary={teamLink.label} />
          </ListItemButton>
          <ListItemButton
            onClick={onClose}
            component="a"
            href={WhitePaper}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ListItemText primary="PS whitepaper" />
          </ListItemButton>
          <ListItemButton
            onClick={onClose}
            component="a"
            href={ careersLink.href}
            rel="noopener noreferrer"
            sx={{display: 'flex', alignItems: 'center', width: '100%'}}
          >
            <ListItemText primary={ careersLink.label} />
          </ListItemButton>
          <ListItemButton
            onClick={handleClickContractsItem}
          >
            <ListItemText primary="Contracts" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  )
}
 
export default SideDrawer;