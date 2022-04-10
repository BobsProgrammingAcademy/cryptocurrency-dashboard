import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CustomCard = ({ text, value, color, icon }) => {
    const theme = useTheme();

    return (
        <Card>
            <CardContent>
                <Grid 
                    container 
                    spacing={3} 
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography 
                            variant='h6'
                            color={theme.palette.text.secondary} 
                            gutterBottom 
                        >
                            {text}
                        </Typography>
                        <Typography 
                            variant='h3' 
                            color={theme.palette.text.primary}
                        >
                            {value}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: color,
                                height: 56,
                                width: 56
                            }}
                        >
                            <FontAwesomeIcon 
                                icon={icon} 
                                size='lg' 
                                color={theme.palette.common.white}
                            />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CustomCard;