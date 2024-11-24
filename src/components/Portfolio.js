import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPortfolio } from '../redux/stockSlice';
import { Box, Button, Typography, Card, CardContent, CardActions } from '@mui/material';

const Portfolio = () => {
  const portfolio = useSelector((state) => state.stock.portfolio);
  const dispatch = useDispatch();

  const handleRemove = (symbol) => {
    dispatch(removeFromPortfolio(symbol));
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Portfolio
      </Typography>
      {portfolio.length > 0 ? (
        <Box>
          {portfolio.map((stock) => (
            <Card
              key={stock.symbol}
              sx={{ marginBottom: '15px', border: '1px solid #ccc', borderRadius: '8px' }}
            >
              <CardContent>
                <Typography variant="h6">{stock.name}</Typography>
                <Typography variant="subtitle1">Symbol: {stock.symbol}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRemove(stock.symbol)}
                >
                  Remove from Portfolio
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography variant="subtitle1">Your portfolio is empty.</Typography>
      )}
    </Box>
  );
};

export default Portfolio;
