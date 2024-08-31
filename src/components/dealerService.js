import React from 'react'
import Box from '@mui/joy/Box';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { dealerServicesData } from "../components/data"
import { makeStyles } from '@mui/styles';
import { CardActions } from '@mui/joy';

const useStyles = makeStyles({
    cardContent: {
        display: "flex",
        flexDirection: 'column',
        gap: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    reviewContainer: {
        display: 'flex',
        gap: 30,
        overflowX: 'auto',
        padding: '10px',
        'overflow-x': 'scroll',
        'overflow-y': 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
    },
    wheelImage: {
        width: 80,
        height: 50
    }
});

const DealerServiceCard = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                <Typography>Services offered by this Dealer</Typography>
                <Box className={classes.reviewContainer}>
                    {
                        dealerServicesData.map((item, index) => (
                            <Card
                                key={index}
                                variant="outlined"
                                sx={{
                                    width: 180,
                                    minWidth: 180,
                                }}
                            >
                                <CardContent className={classes.cardContent}>
                                    <img src={item.logo} alt={item.title} className={classes.wheelImage} />
                                    <Typography level="body-sm">{item.title}</Typography>
                                    <CardActions>
                                        <Button variant="outlined"
                                        > Book Now</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Box>
            </CardContent>
        </Card>
    );
}
export default DealerServiceCard;