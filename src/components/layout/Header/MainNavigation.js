import { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Account from "../../account/";
import Networks from "../../Chains/Networks";
import logo from '../../../assets/images/Logo2.png';
import Navbar from './Navbar';
import Contracts from '../../shared/Contracts';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer';

const mainLinks = [
  { label: "Home", href: "/" },
  // { label: "Swap", href: "/swap" },
  // { label: "Gallery", href: "/gallery" },
]

const presaleLink = { 
  label: "Pre-sale", 
  href: "/pre-sale" 
}

const bridgeLink = {
  label: "Bridge",
  href: "https://bridge.poly.network/token/JS"
}
const teamLink = {
  label: "Team",
  href: "/about#Team"
}
const careersLink = {
  label: "Careers",
  href: "/about#Career"
}

const comingSoonLink = ["Gallery","Swap", "Mint","Stake"];

const moreMenuLinks = [
  // { label: "Transactions", href: "/transactions" },
  // { label: "NFTs", href: "/nfts" },
  { label: "About us", href: "/about" },
] 

const MainNavigation = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [contractsDialogOpen, setContractsDialogOpen] = useState(false);

  const handleContractsDialogToggle = () => {
    setContractsDialogOpen(!contractsDialogOpen);
  };

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="inherit"
        enableColorOnDark
        elevation={0}
        sx={{ backdropFilter: 'blur(20px)', zIndex: 1}}
      >
        <Toolbar 
          
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{marginRight: "auto"}}>
            <Link to="/" style={{marginRight: "auto"}}>
              <img 
                src={logo} 
                alt="JS logo" 
                width="50"
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Navbar 
              mainLinks={mainLinks}
              moreMenuLinks={moreMenuLinks}
              comingSoonLink={comingSoonLink}
              presaleLink={presaleLink}
              handleClickContracts={handleContractsDialogToggle} 
            />
          </Box>
          <Box sx={{marginLeft: "auto"}}>
            <Networks />
          </Box>
          <Box sx={{ml: 1}}>
            <Account />
          </Box>
        </Toolbar>
      </AppBar>
      <SideDrawer
        mainLinks={mainLinks}
        presaleLink={presaleLink}
        // bridgeLink={bridgeLink}
        teamLink={teamLink}
        careersLink={careersLink}
        moreMenuLinks={moreMenuLinks}
        comingSoonLink={comingSoonLink}
        onClose={handleDrawerToggle}
        open={mobileDrawerOpen}
        handleClickContracts={handleContractsDialogToggle} 
      />
      <Contracts 
        open={contractsDialogOpen} 
        handleClose={handleContractsDialogToggle} 
      />
    </Fragment>
  );
}
 
export default MainNavigation;