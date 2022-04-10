import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';

import CustomCard from '../CustomCard';

// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartPie as ChartPieIcon } from '@fortawesome/free-solid-svg-icons';
library.add(ChartPieIcon)

const AssetPlatforms = () => {
    const theme = useTheme();

    const [assetPlatforms, setAssetPlatforms] = useState([]);

    const fetchAssetPlatforms = () => {
        axios.get('https://api.coingecko.com/api/v3/asset_platforms', {
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            setAssetPlatforms(response.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchAssetPlatforms();
    }, []);

    return (
        <CustomCard 
            text='ASSET PLATFORMS'
            value={assetPlatforms.length}
            color={theme.palette.warning.dark}
            icon={ChartPieIcon}
        />
    );
};

export default AssetPlatforms;