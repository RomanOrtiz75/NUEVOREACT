import React from 'react'
import descarga from './media/cards-min.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

export const Tarjets = () => {
  return (
<div style={{
  position: 'relative',
  display: 'flex',
  left: '13%',
  top: '700px',
}}>
  
<a href="https://fenamacajedrez.com/rating/Listados/Lista_Rating_Estandar_MAR_2023.xlsx" style={{textDecoration: 'none'}}> 
<Card sx={{ maxWidth: 200 ,
    background: 'transparent',
    margin: '0 100px 0 100px',
    }} elevation='0'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={descarga}
          alt="green iguana"
        />
      <CardContent style={{
          fontSize: '20px',
          textAlign: 'center',
          alignContent: 'center',
      }}>
        <Typography variant="body 2" color="white">
          Rating Normal Descargar
        </Typography>
      </CardContent>  
      </CardActionArea>
    </Card>
    </a>
<a href="https://fenamacajedrez.com/rating/Listados/Lista_Rating_Rapido_MAR_2023.xlsx" style={{textDecoration: 'none'}}>
    <Card sx={{ maxWidth: 200 ,
    background: 'transparent',
    margin: '0 100px 0 100px',
    }} elevation='0'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={descarga}
          alt="green iguana"
        />
      <CardContent style={{
          fontSize: '20px',
          textAlign: 'center',
          alignContent: 'center',
      }}>
        <Typography variant="body 2" color="white">
          Rating Rapido Descargar
        </Typography>
      </CardContent>  
      </CardActionArea>
    </Card>
  </a>

  <a href="https://fenamacajedrez.com/rating/Listados/Lista_Rating_Blitz_MAR_2023.xlsx" style={{textDecoration: 'none'}}>
    <Card sx={{ maxWidth: 200 ,
    background: 'transparent',
    margin: '0 100px 0 100px',
    }} elevation='0'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={descarga}
          alt="green iguana"
        />
      <CardContent style={{
          fontSize: '20px',
          textAlign: 'center',
          alignContent: 'center',
      }}>
        <Typography variant="body 2" color="white">
          Rating Blitz Descargar
        </Typography>
      </CardContent>  
      </CardActionArea>
    </Card>
    </a>
</div>
  )
}