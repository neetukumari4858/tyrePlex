import React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { reviewData } from "../components/data"

const useStyles = makeStyles({
  cardContent: {
    display: "flex",
    flexDirection: 'column',
    gap: 15,
  },
  reviewContainer: {
    display: 'flex',
    gap: 5,
    overflowX: 'auto',
    padding: '10px',
    'overflow-x': 'scroll',
    'overflow-y': 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  }
});

const ReviewCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.reviewContainer}>
      {
        reviewData.map((item, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              width: 320,
              minWidth: 320,
            }}
          >
            <CardContent className={classes.cardContent}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                }}
              >
                <Avatar src={item.avatar} size="lg" />
                <Typography>{item.name}</Typography>
              </Box>
              <Typography level="body-sm">{item.review}</Typography>
            </CardContent>
          </Card>
        ))
      }
    </Box>
  );
}
export default ReviewCard;

