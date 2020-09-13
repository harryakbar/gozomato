/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Box, Button, Container, Input, Typography, GridListTile, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { Grid, Restaurant } from './components';
import RESTAURANTS from './constants/Restaurants';

const useStyles = makeStyles({
  tile: {
    display: 'flex',
    overflow: 'visible',
    flex: 1,
  },
});

const gridItem = css`
  display: flex;
  min-height: 25rem;
`;

const App = () => {
  const [query, setQuery] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box display="flex" paddingTop="2rem" flexDirection="column" width="100%" alignItems="center" minHeight="100vh">
        <Typography variant="h3">
          GoZomato
        </Typography>
        <Box margin="2rem">
          <Input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Enter city" />
          <Button>Change City</Button>
        </Box>
        <Grid>
          {RESTAURANTS.map((restaurant) => (
            <GridListTile
              component="div"
              css={gridItem}
              key={restaurant.id}
              classes={{ tile: classes.tile }}
            >
              <Restaurant
                id={restaurant.id}
                name={restaurant.name}
                image={restaurant.image}
                cuisine={restaurant.cuisine}
                budget={restaurant.budget}
                rating={restaurant.rating}
              />
            </GridListTile>
          ))}
        </Grid>
      </Box >
    </Container >
  );
};

export default App;
