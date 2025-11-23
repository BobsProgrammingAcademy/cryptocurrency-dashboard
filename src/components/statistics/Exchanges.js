import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';

// Font Awesome Icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartArea as ChartAreaIcon } from '@fortawesome/free-solid-svg-icons';
library.add(ChartAreaIcon);

// Components
import CustomCard from '../CustomCard';

const Exchanges = () => {
  const theme = useTheme();

  const [exchanges, setExchanges] = useState([]);

  const fetchExchanges = () => {
    axios
      .get('https://api.coingecko.com/api/v3/exchanges', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setExchanges(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchExchanges();
  }, []);

  return (
    <CustomCard
      text='EXCHANGES'
      value={exchanges.length}
      color={theme.palette.success.dark}
      icon={ChartAreaIcon}
    />
  );
};

export default Exchanges;
