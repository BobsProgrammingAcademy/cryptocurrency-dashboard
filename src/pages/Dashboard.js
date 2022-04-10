import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';

import DashboardHeader from '../components/DashboardHeader';
import Categories from '../components/statistics/Categories';
import Exchanges from '../components/statistics/Exchanges';
import AssetPlatforms from '../components/statistics/AssetPlatforms';
import MarketIndexes from '../components/statistics/MarketIndexes';
import CoinMarkets from '../components/tables/CoinMarkets';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart'
import DoughnutChart from '../components/charts/DoughnutChart';
import PolarAreaChart from '../components/charts/PolarAreaChart';
import LineChart from '../components/charts/LineChart';
import AreaChart from '../components/charts/AreaChart';
import Spacer from '../components/Spacer';


const Dashboard = () => {
    const theme = useTheme();
    
    return (
        <React.Fragment>
            <Helmet>
                <title>Cryptocurrency Dashboard</title>
            </Helmet>
            <Box 
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 8
                }}
            >
                <Container maxWidth={false}>
                    <Grid container spacing={3}>

                        <DashboardHeader />

                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <Categories />
                        </Grid>

                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <Exchanges />
                        </Grid>

                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <AssetPlatforms />
                        </Grid>

                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <MarketIndexes />
                        </Grid>

                        <Grid item xs={12}>
                            <CoinMarkets />
                        </Grid>

                        <Grid item xs={12}>
                            <BarChart />
                        </Grid>
                        
                        <Grid item md={6} xs={12}>
                            <PieChart />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <PolarAreaChart />
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <DoughnutChart />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <LineChart />
                        </Grid>

                        <Grid item xs={12}>
                            <AreaChart />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Box>
            <Spacer sx={{ pt: 7 }} />
        </React.Fragment>
    );
};

export default Dashboard;