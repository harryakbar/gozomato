/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Box, Paper } from '@material-ui/core';
import RestaurantProps from '../../types/restaurant';

const card = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const imageStyle = css`
  width: 100%;
`;

const Restaurant = ({
  id,
  image,
  name,
  cuisine,
  budget,
  rating,
}: RestaurantProps) => {
  return (
    <Paper css={card} elevation={3}>
      <img src={image} css={imageStyle} alt={name} />
      <Box display="flex" justifyContent="space-between" flexDirection="row" padding="1rem">
        <Box flexDirection="column">
          <Box>{name}</Box>
          <Box>{cuisine}</Box>
        </Box>
        <Box flexDirection="column">
          <Box>Budget: {budget}</Box>
          <Box>Rating: {rating}</Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Restaurant;
