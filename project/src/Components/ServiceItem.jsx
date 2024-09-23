import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export default function ServiceItem({ service, onEdit, onDelete }) {
    return (
        <li>
           <Card sx={{ maxWidth: 345 }} style={{maxWidth: "400px",maxHeight:"200px"}}>
           <CardContent>
           <Typography gutterBottom variant="h5" component="div">
         {service.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {service.description} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Fees: ${service.price}
        </Typography>
           </CardContent>
           <CardActions className='service-button'>
            <Link to={`/edit-service/${service.id}`}>
           <Button variant="contained" onClick={onEdit} startIcon={<EditIcon/>}>Edit</Button>
           </Link>
           <Button variant="contained" color="error" onClick={onDelete} startIcon={<DeleteIcon />}>Delete</Button>
           </CardActions>
           </Card>
        </li>
  )
}
