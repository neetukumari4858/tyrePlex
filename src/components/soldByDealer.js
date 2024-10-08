import { useState } from 'react';
import Box from '@mui/joy/Box';
import FilterModal from "./filterModal";
import StarIcon from '@mui/icons-material/Star';
import Badge from '@mui/material/Badge';
import warrentyBadge from "../assets/warrantyBadge.png"
import { Card, CardContent, Typography, Container, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { products } from "./data"

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
        gap: 50,
        alignItems: "center"
    },
    divider: {
        display: "flex",
    },
    badge: {
        height: 55,
    },
    buttonContainer: {
        display: "flex",
        gap: 10,
    },
    warrantyImg: {
        width: 120,
        height: 100
    }
});

const SoldByDealerCard = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [showAll, setShowAll] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleApplyFilters = (filters) => {
        const { brand, price, category, modal } = filters;
        let filteredData = products;

        if (brand) filteredData = filteredData.filter(item => item.brand === brand.toLowerCase());
        if (category) filteredData = filteredData.filter(item => item.category === category.toLowerCase());
        if (modal) filteredData = filteredData.filter(item => item.modal === modal);

        if (price === "Price Low to High") {
            filteredData = filteredData.sort((a, b) => a.actualPrice - b.actualPrice);

        } else if (price === "Price High to Low") {
            filteredData = filteredData.sort((a, b) => b.actualPrice - a.actualPrice);
        }
        setFilteredProducts(filteredData);
    };

    const handleClearFilters = () => {
        setFilteredProducts(products);
    };

    const productToShow = showAll ? filteredProducts : filteredProducts.slice(0, 4)

    return (
        <Card >
            <Container sx={{ padding: 3 }}>
                <Typography>Products offered by this Dealer</Typography>
                <div className={classes.buttonContainer}>
                    <Button onClick={handleOpen} variant="outlined" sx={{ marginTop: 2 }}>Filters</Button>
                    <Button variant="outlined" sx={{ marginTop: 2 }} onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less' : 'View All'}</Button>
                </div>
            </Container>
            <FilterModal open={open} handleClose={handleClose} onApply={handleApplyFilters} onClear={handleClearFilters}
            />
            <CardContent>
                <Box className={classes.outerContainer}>
                    {productToShow.length > 0 ? (<>
                        {productToShow.map((item, itemIndex) => (
                            <>
                                <Card key={itemIndex} variant="outlined" sx={{ width: 200, minWidth: 180 }}>
                                    <CardContent className={classes.cardContent}>
                                        <Badge badgeContent={<img src={warrentyBadge} alt='warrentyBadge' className={classes.badge} />}  >
                                            <img src={item.productImage} alt={item.title} className={classes.warrantyImg} />
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
    );
}

export default SoldByDealerCard;