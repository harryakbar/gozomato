// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from "react";
import { render, screen } from "@testing-library/react";
import Restaurant from "./index";

test("shows the children when the checkbox is checked", () => {
  render(
    <Restaurant
      id="123"
      name="Sederhana"
      featured_image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-3Ysmhh1O0nU%2FUqBual6lS8I%2FAAAAAAAAhPc%2F8dcUH-x052A%2Fs1600%2FDSC_0188jk.jpg&f=1&nofb=1"
      cuisine="Masakan Padang"
      price_range={1}
      user_rating={{ aggregate_rating: 1 }}
    />
  );

  expect(screen.queryByText("Sederhana")).toBeInTheDocument();
});
