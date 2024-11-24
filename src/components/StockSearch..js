import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StockSearch = () => {
  const [query, setQuery] = useState('');
  const [stock, setStock] = useState(null);
  const navigate = useNavigate();

  const searchStock = async () => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=YOUR_API_KEY`
      );
      setStock(response.data.bestMatches[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <TextField
        label="Search Stock"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={searchStock}>
        Search
      </Button>
      {stock && (
        <Box onClick={() => navigate(`/details/${stock['1. symbol']}`)}>
          {stock['2. name']} ({stock['1. symbol']})
        </Box>
      )}
    </Box>
  );
};

export default StockSearch;
