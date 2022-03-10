import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
// import PeopleIcon from '@mui/icons-material/People';
// import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
// import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
// import PublicIcon from '@mui/icons-material/Public';
// import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
// import TimerIcon from '@mui/icons-material/Timer';
// import SettingsIcon from '@mui/icons-material/Settings';
// import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import ShopIcon from '@mui/icons-material/Shop';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import DiamondIcon from '@mui/icons-material/Diamond';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
// import { useNavigate } from 'react-router-dom';

let categories = [
  {
    id: 'Hello Admin !',
    children: [
      {
        id: 'Home',
        icon: <HomeIcon />,
      },
      {id: 'Logout', icon: <LogoutIcon /> },
      { id: 'Shop', icon: <ShopIcon /> },
      { 
        id: 'Storage', 
        icon: <StoreIcon />,
        active: true,
      },
      { id: 'Contact', icon: <ContactPageIcon /> },
    ],
  },
  // {
  //   id: 'All products',
  //   children: [
  //     { 
  //       id: "Men's clothing", 
  //       icon: <BoyIcon />,
  //       active: false,
  //     },
  //     { 
  //       id: "Women's clothing", 
  //       icon: <GirlIcon />,
  //       active: false,
  //     },
  //     { 
  //       id: 'Jewelery', 
  //       icon: <DiamondIcon />,
  //       active: false,
  //     },
  //     { 
  //       id: 'Electronics', 
  //       icon: <ElectricalServicesIcon />,
  //       active: false,
  //     },
  //   ],
  // },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;
  // const navigate = useNavigate();
  // const handleChoose = (e) =>{
  //   const choose = e.target.innerText;
  //   const childrenArray = categories[1].children;
  //   const chooseArray = childrenArray.filter(children =>(children.id === e.target.innerText));
  //   const selectedIndex = childrenArray.indexOf(chooseArray[0]);
  //   categories[1].children.map(array =>{
  //     if(array.active) array.active = false
  //   })
  //   categories[1].children[selectedIndex].active = true;
  //   categories[1].children.forEach(item =>{
  //     console.log(item.active)
  //   })
  //   console.log(chooseArray);
  //   console.log(selectedIndex);
  //   console.log(categories[1].children[selectedIndex].active)
  // }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        {/* <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Paperbase
        </ListItem> */}
        <ListItem sx={{ ...item, ...itemCategory }}>
          {/* <ListItemIcon>
            <HomeIcon />
          </ListItemIcon> */}
          {/* <ListItemText>Project Overview</ListItemText> */}
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                {/* <ListItemButton selected={active} sx={item} onClick={({childId, active}) =>{handleChoose({childId, active})}}> */}
                <ListItemButton selected={active} sx={item} >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}