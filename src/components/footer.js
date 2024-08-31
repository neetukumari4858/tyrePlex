import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Card, CardContent, Divider, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import {footerData ,contactUsData,askQueryData} from "../components/data"
const useStyles = makeStyles({
    footerContent: {
        display: 'flex',
        gap: 15,
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginBottom: 6,
    },
    inputBox: {
        height: 30,
        width: 250,
        backgroundColor: "white"
    },
    socialMedia: {
        display: "flex",
        flexDirection: "column",
        gap: 10
    }
    ,
    icons: {
        display: "flex",
        gap: 15
    },
    footerElement: {
        display: "flex",
        gap: 4,
        flexDirection: "column",
        paddingBottom: 20
    },
    foolterCard: {
        backgroundColor: "#2874f0",
        color: 'white'
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <Card >
            <CardContent className={classes.foolterCard}>
                <div className={classes.footerContent}>
                    <div className={classes.footerElement}>
                        {footerData.map((item,itemIndex) => <Typography key={itemIndex}>{item}</Typography>)}
                    </div>
                    <div className={classes.footerElement}>
                        {contactUsData.map((item,itemIndex) => <Typography key={itemIndex}>{item}</Typography>)}
                    </div>
                    <div className={classes.footerElement}>
                        {askQueryData.map((item,itemIndex) => <Typography key={itemIndex}>{item}</Typography>)}
                        <OutlinedInput className={classes.inputBox} placeholder='Ask or search your question' />
                    </div>
                    <div className={classes.socialMedia}>
                        <div>
                            <Typography>
                                Follow On Social
                            </Typography>
                        </div>
                        <div className={classes.icons}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <LinkedInIcon />
                            <YouTubeIcon />
                        </div>
                    </div>
                </div>
                <Divider color="white" />
                <Typography sx={{ textAlign: "center", padding: 2 }}>
                    ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Footer;
