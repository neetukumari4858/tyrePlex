import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../components/data"
import { Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/joy/Box';
import StarIcon from '@mui/icons-material/Star';
import Badge from '@mui/material/Badge';
import warrentyBadge from "../assets/warrantyBadge.png"

// Header Menu Item Product Listing Page.

const useStyles = makeStyles({
    cardContent: {
        display: "flex",
        flexDirection: 'column',
        gap: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    outerContainer: {
        display: 'flex',
        gap: 40,
        overflowX: 'auto',
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        'overflow-x': 'scroll',
        'overflow-y': 'hidden',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
    },
    productReview: {
        display: "flex",
        gap: 5
    },
    ratingBtn: {
        height: 20,
        width: 10,
        backgroundColor: "green",
        color: "black"
    },
    type: {
        display: "flex",
        gap: 50
    },
    divider: {
        display: "flex",
        gap: 7,
        alignItems: "center"
    },
    badge: {
        height: 55,
    },
});


const ProductPage = () => {
    const { category, brand } = useParams();
    const filteredProducts = products.filter(product =>
        product.category === category.toLowerCase() && product.brand === brand.toLowerCase()
    );
    const navigate = useNavigate()
    const classes = useStyles();
    const goBack = () => {
        navigate("/")
    }
    return (
        <div>
            <Card>
                <div className={classes.divider}>
                    <IconButton>
                        <ArrowBackIcon onClick={goBack} />
                    </IconButton>
                    <Typography>Products for {category} / {brand}</Typography>
                </div>
                <CardContent>
                    <Box className={classes.outerContainer}>
                        {filteredProducts.length > 0 ? (<>
                            {filteredProducts.map((item, itemIndex) => (
                                <>
                                    <Card key={itemIndex} variant="outlined" sx={{ width: 200, minWidth: 180 }}>
                                        <CardContent className={classes.cardContent}>
                                            <Badge badgeContent={<img src={warrentyBadge} alt='warrentyBadge' className={classes.badge} />}  >
                                                <img src={item.productImage} alt={item.title} width={120} height={100} />
                                            </Badge>
                                            <Typography level="body-sm">{item.title}</Typography>
                                            <Typography level="body-sm">{item.modal}</Typography>
                                            <div className={classes.productReview}>
                                                <Button
                                                    sx={{
                                                        height: 20,
                                                        width: 30,
                                                        minWidth: 30,
                                                        backgroundColor: "green",
                                                        color: "white",
                                                        fontSize: 10,
                                                        '& .MuiButton-startIcon': {
                                                            margin: 0,  // Remove space between icon and text
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 10,
                                                        },
                                                    }}
                                                    startIcon={<StarIcon sx={{ height: 10 }}
                                                    />}
                                                >
                                                    {item.rating}
                                                </Button>
                                                <Typography level="body-sm">{item.reviewCount} Review</Typography>
                                            </div>
                                            <Typography level="body-sm">
                                                <s>{item.price}</s> ₹{item.actualPrice}
                                            </Typography>
                                            <Typography level="body-sm" sx={{ color: "green" }}>{item.availability}</Typography>
                                            <div className={classes.type}>
                                                <Typography level="body-sm">{item.type}</Typography>
                                                <img src={item.brandLogo} alt='brandLogo' height={40} width={60} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </>
                            ))}
                        </>) : <Typography> Data Not Found ...</Typography>}
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductPage;