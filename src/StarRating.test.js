import { render, screen } from "@testing-library/react";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

test("rendering stars", () => {
  // Arrange
  const rating = 4;

  // Act
  const { getAllByTestId } = render(
    <StarRating
      rating={rating}
      onStarClick={(selectedRating) => {
        setRating(selectedRating);
      }}
    >
      {(isStarFilled) => {
        return (
          <FontAwesomeIcon
            icon={faStar}
            color={isStarFilled ? "yellow" : "#eee"}
            size="3x"
          />
        );
      }}
    </StarRating>
  );

  // Assert
  // Check that 5 stars were rendered
  expect(getAllByTestId("star-button").length).toBe(5);

  // Check that there are 4 filled stars
  expect(getAllByTestId("filled-star").length).toBe(4);

  // Check that there is 1 empty star
  expect(getAllByTestId("empty-star").length).toBe(1);
});

test("rendering a specified number of stars", () => {
  // Arrange
  const rating = 4;

  // Act
  const { getAllByTestId } = render(
    <StarRating
      rating={rating}
      total={10}
      onStarClick={(selectedRating) => {
        setRating(selectedRating);
      }}
    >
      {(isStarFilled) => {
        return (
          <FontAwesomeIcon
            icon={faStar}
            color={isStarFilled ? "yellow" : "#eee"}
            size="3x"
          />
        );
      }}
    </StarRating>
  );

  // Assert
  // Check that 5 stars were rendered
  expect(getAllByTestId("star-button").length).toBe(10);

  // Check that there are 4 filled stars
  expect(getAllByTestId("filled-star").length).toBe(4);

  // Check that there is 1 empty star
  expect(getAllByTestId("empty-star").length).toBe(6);
});
