import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReviewCard, DealsInCard, DealerServiceCard, SoldByDealerCard } from "../components";
import { Carousel } from 'react-responsive-carousel';
import { carouselData } from "../components/data";
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const useStyles = makeStyles({
  iconText: {
    display: 'flex',
    gap: 8,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: '0.8rem',
  },
  cardContainer: {
    display: "flex",
  },
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: '2rem',
    margin: 30
  }
});

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = useState(3);
  return (
    <Container className={classes.homeContainer} >
      <Card>
        <CardContent className={classes.content}>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
            {carouselData.map((item, index) => (
              <div key={index}>
                <img height={400} src={item.img} alt={item.title} />
              </div>
            ))}
          </Carousel>
          <Typography>
            SHREE HEMKUNT TYPES AND SERVICES
          </Typography>
          <div className={classes.iconText}>
            <PlaceIcon />
            <Typography>
              PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
            </Typography>
          </div>
          <div className={classes.iconText}>
            <AccessTimeIcon />
            <Typography>
              Open - Monday to Sunday - 10:00AM to 8:00PM
            </Typography>
          </div>
          <div className={classes.iconText}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography>2278 Review</Typography>
          </div>
          <CardActions>
            <Button variant="outlined">Get Directions</Button>
          </CardActions>
          <ReviewCard />
        </CardContent>
      </Card>
      <DealsInCard />
      <DealerServiceCard />
      <SoldByDealerCard />
    </Container>
  )
}
export default Home;