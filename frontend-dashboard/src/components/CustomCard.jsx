import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import "../App.css";
const defaultUserImage = 'https://example.com/default-user-image.jpg';



const CustomCard = ({ review }) => {
  const { content, issues, sentiment } = review;

  return (
   <div className='card-total-reviews'>
        <Card sx={{
          width: '100%',
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2
         
        }}>
      <CardHeader
        avatar={<Avatar src={defaultUserImage} />}
        title={`Sentiment: ${sentiment}`}
      />
      <CardContent>
        <Typography variant="h6" color="textPrimary">
          Content:
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {content}
        </Typography>

        <Typography variant="h6" color="textPrimary" style={{ marginTop: '10px' }}>
          Issues:
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {issues}
        </Typography>
      </CardContent>
    </Card>
   </div> 
    
  );
};

export default CustomCard;
