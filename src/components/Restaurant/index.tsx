/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Box, Paper } from "@material-ui/core";
import RestaurantProps from "../../types/restaurant";

const card = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px 0px;
`;

type ImageProps = {
  src: string;
};

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 14rem;
  background: url("${(props: ImageProps) => props.src}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Restaurant = ({
  featured_image: image,
  thumb,
  name,
  cuisine,
  price_range: budget,
  user_rating: rating,
}: RestaurantProps) => {
  return (
    <Paper css={card}>
      <ImageContainer
        src={
          image ||
          thumb ||
          "https://static.dribbble.com/users/1012566/screenshots/4187820/topic-2_1x.jpg"
        }
      />
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        padding="1rem"
      >
        <Box flexDirection="column">
          <Box>{name}</Box>
          <Box>{cuisine}</Box>
        </Box>
        <Box flex="none">
          <Box>Budget: {budget}</Box>
          <Box>Rating: {rating.aggregate_rating}</Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Restaurant;
