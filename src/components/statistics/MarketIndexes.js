import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';

import CustomCard from '../CustomCard';

// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartColumn as ChartColumnIcon } from '@fortawesome/free-solid-svg-icons';
library.add(ChartColumnIcon)

const MarketIndexes = () => {
    const theme = useTheme();

    const [indexes, setIndexes] = useState([]);

    const fetchIndexes = () => {
        axios.get('https://api.coingecko.com/api/v3/indexes', {
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            setIndexes(response.data);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchIndexes();
    }, []);
    
    return (
        <CustomCard 
            text='MARKET INDEXES'
            value={indexes.length}
            color={theme.palette.primary.main}
            icon={ChartColumnIcon}
        />
    );
};

export default MarketIndexes;