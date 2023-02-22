import React from 'react'
import descarga from './media/cards.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

export const Tarjets = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={descarga}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Lista de Rating Estándar FEBRERO 2023
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
