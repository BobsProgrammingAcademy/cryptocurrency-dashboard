import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

import TablePaginationActions from './TablePaginationActions';

const CoinMarkets = () => {
  const theme = useTheme();

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const fetchCoinMarkets = () => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCoinMarkets();
  }, []);

  return (
    <>
      <Box>
        <Box sx={{ marginTop: 3 }}>
          <Card>
            <CardContent>
              <Box sx={{ maxWidth: 500 }}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SvgIcon fontSize='small' color='action'>
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder='Search a cryptocurrency'
                  variant='outlined'
                  onChange={handleChange}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box sx={{ paddingTop: 3 }}>
        <Card>
          <Box sx={{ minWidth: 1050, paddingBottom: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Symbol</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>24h</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Volume</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Market Cap</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredCoins.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : filteredCoins
                ).map((coin) => (
                  <TableRow hover key={coin.id}>
                    <TableCell>
                      <img
                        src={coin.image}
                        alt=''
                        style={{ height: '30px', width: '30px' }}
                      />
                    </TableCell>
                    <TableCell>{coin.name}</TableCell>
                    <TableCell>{coin.symbol}</TableCell>
                    <TableCell>${coin.current_price.toFixed(2)}</TableCell>
                    <TableCell>
                      {coin.price_change_percentage_24h > 0 ? (
                        <span
                          style={{
                            color:
                              theme.palette.mode === 'dark'
                                ? theme.palette.success.main
                                : theme.palette.success.dark,
                          }}
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      ) : (
                        <span
                          style={{
                            color:
                              theme.palette.mode === 'dark'
                                ? theme.palette.error.main
                                : theme.palette.error.dark,
                          }}
                        >
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                      )}
                    </TableCell>
                    <TableCell>${coin.total_volume.toLocaleString()}</TableCell>
                    <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[]}
              colSpan={3}
              count={coins.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
              sx={{ display: 'flex', justifyContent: 'center' }}
            />
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default CoinMarkets;
