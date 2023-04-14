import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const Menlat = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

const iconmenu = [
        {
          nombre: 'iconmenu',
          icon: <MenuIcon/>,
        },

      ]     
    const menulateral = [
      {
        nombre: 'Inicio',
        icon: <HomeIcon/>,
        ruta:  'https://www.fenamacajedrez.com',
      },
      {
        nombre: 'Documentos',
        icon: <ArticleIcon/>,
        ruta:  'https://www.fenamacajedrez.com/files/U.V.U.V.ok.delReglamentodeportivodelaFENAMACoK.U.V.U.V...Ultimaversion.pdf',
      },
      {
        nombre: 'Lineamientos',
        icon: <ArticleIcon/>,
        ruta:  'https://www.fenamacajedrez.com/files/U.V.U.V.ok.delReglamentodeportivodelaFENAMACoK.U.V.U.V...Ultimaversion.pdf',
      },
      {
        nombre: 'Registros',
        icon: <ArticleIcon/>,
        ruta:  'https://fenamacajedrez.com/registro-de-torneos/',
      },
      {
        nombre: 'Calendario FENAMAC',
        icon: <CalendarMonthIcon/>,
        ruta:  '/',
      },
      {
        nombre: 'Comisiones',
        icon: <ArticleIcon/>,
        ruta:  'https://www.fenamacajedrez.com/files/RegistroyReportdeTorneosFIDE-FENAMAC1.pdf',
      },
      {
        nombre: 'Circulares',
        icon: <ArticleIcon/>,
        ruta:  '/',
      },
      {
        nombre: 'Protocolos de seguridad',
        icon: <ArticleIcon/>,
        ruta:  'https://fenamacajedrez.com/wp-content/uploads/2021/07/Chess-Care.pdf',
      },
      {
        nombre: 'Afiliaciones',
        icon: <ArticleIcon/>,
        ruta:  'https://afiliaciones.fenamacajedrez.com',
      },
      {
        nombre: 'Torneos',
        icon: <EmojiEventsIcon/>,
        ruta:  'https://iberoamericano.fenamacajedrez.com',
      },
  
    ] 
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {menulateral.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => window.location.href = item.ruta}> 
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.nombre} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider/>
        </Box>
      );
    
      return (
        <div>
          {iconmenu.map((item, index) => (
            <React.Fragment key={item.nombre}>
              <Button style={{
                color: 'white',
                fontSize: '20px'
              }} onClick={toggleDrawer(item.nombre, true)}>{item.icon}</Button>
              <Drawer
                anchor={item.nombre}
                open={state[item.nombre]}
                onClose={toggleDrawer(item.nombre, false)}
              >
                {list(item.nombre)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      )
}
