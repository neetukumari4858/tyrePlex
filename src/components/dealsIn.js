import React from 'react'
import Box from '@mui/joy/Box';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { dealsInData } from "../components/data"

const useStyles = makeStyles({
    cardContent: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    dealsInContainer: {
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

const DealsInCard = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardContent>
                <Typography>Deals In</Typography>
                <Box className={classes.dealsInContainer}>
                    {
                        dealsInData.map((item, index) => (
                            <Card
                                key={index}
                                variant="outlined"
                                sx={{
                                    width: 180,
                                    minWidth: 180,
                                }}
                            >
                                <CardContent className={classes.cardContent}>
                                    <img src={item.logo} alt={item.title} width={70} height={40} />
                                    <Typography level="body-sm">{item.title}</Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Box>
            </CardContent>
        </Card>
    );
}
export default DealsInCard;