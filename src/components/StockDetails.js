import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPortfolio, addToWatchlist } from '../redux/stockSlice';
import { Button, Box, Typography } from '@mui/material';

const StockDetails = () => {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=YOUR_API_KEY`
        );
        setStockData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStockData();
  }, [symbol]);

  const handleAddToPortfolio = () => {
    dispatch(
      addToPortfolio({
        symbol,
        name: stockData['Meta Data']['2. Symbol'] || 'Unknown Name',
      })
    );
  };

  const handleAddToWatchlist = () => {
    dispatch(
      addToWatchlist({
        symbol,
        name: stockData['Meta Data']['2. Symbol'] || 'Unknown Name',
      })
    );
  };

  return (
    <Box>
      <Typography variant="h4">Stock Details for {symbol}</Typography>
      {stockData ? (
        <Box>
          <pre>{JSON.stringify(stockData, null, 2)}</pre>
          <Button variant="contained" onClick={handleAddToPortfolio}>
            Add to Portfolio
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddToWatchlist}>
            Add to Watchlist
          </Button>
        </Box>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default StockDetails;
