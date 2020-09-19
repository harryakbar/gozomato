type Restaurant = {
  id: string;
  featured_image?: string;
  thumb?: string;
  name: string;
  cuisine: string;
  price_range: number;
  user_rating: { aggregate_rating: number };
};

export default Restaurant;
