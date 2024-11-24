import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../redux/stockSlice';
import { Box, Button, Typography, Card, CardContent, CardActions } from '@mui/material';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.stock.watchlist);
  const dispatch = useDispatch();

  const handleRemove = (symbol) => {
    dispatch(removeFromWatchlist(symbol));
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Watchlist
      </Typography>
      {watchlist.length > 0 ? (
        <Box>
          {watchlist.map((stock) => (
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
                  Remove from Watchlist
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography variant="subtitle1">Your watchlist is empty.</Typography>
      )}
    </Box>
  );
};

export default Watchlist;
