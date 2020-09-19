/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  Box,
  Button,
  Container,
  Input,
  Typography,
  GridListTile,
  makeStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";

import { Grid, Restaurant } from "./components";
import RestaurantType from "./types/restaurant";
import { useAPI } from "./hooks/useAPI";
import { getRestaurants } from "./services/api";

const useStyles = makeStyles({
  tile: {
    display: "flex",
    overflow: "visible",
    flex: 1,
  },
});

const gridItem = css`
  display: flex;
  min-height: 24rem;
`;

type Restaurants = {
  restaurants: { restaurant: RestaurantType }[];
  results_found: number;
  results_start: number;
  results_shown: number;
};

const App = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("Jakarta");
  const [data, fetchRestaurants, isLoading] = useAPI(getRestaurants);
  const [restaurants, setRestaurants] = useState<Restaurants | null>(null);

  useEffect(() => {
    fetchRestaurants({ q: query });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) setRestaurants(data);
  }, [data]);

  const onClick = () => {
    fetchRestaurants({ q: query });
  };

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        padding="2rem 0"
        flexDirection="column"
        width="100%"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h3">GoZomato</Typography>
        <Box margin="2rem">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Enter city"
          />
          <Button onClick={onClick}>Change City</Button>
        </Box>
        {isLoading && <h1>Loading</h1>}
        {data && restaurants && restaurants.restaurants.length === 0 && (
          <img
            src="https://static.dribbble.com/users/1012566/screenshots/4187820/topic-2_1x.jpg"
            alt="not found"
          />
        )}
        {data && restaurants && restaurants.restaurants.length > 0 && (
          <Grid>
            {restaurants?.restaurants?.map(({ restaurant }) => (
              <GridListTile
                component="div"
                css={gridItem}
                key={restaurant.id}
                classes={{ tile: classes.tile }}
              >
                <Restaurant
                  id={restaurant.id}
                  name={restaurant.name}
                  featured_image={restaurant.featured_image}
                  thumb={restaurant.thumb}
                  cuisine={restaurant.cuisine}
                  price_range={restaurant.price_range}
                  user_rating={restaurant.user_rating}
                />
              </GridListTile>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default App;
