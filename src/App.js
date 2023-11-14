import "bootstrap/dist/css/bootstrap.css";

import StarRating from "./StarRating";
import { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [rating, setRating] = useState(3);

  return (
    <div>
      <StarRating
        rating={rating}
        onStarClick={(selectedRating) => {
          setRating(selectedRating);
        }}
        renderStar={(isStarFilled) => {
          return (
            <FontAwesomeIcon
              icon={faStar}
              color={isStarFilled ? "yellow" : "#eee"}
              size="3x"
            />
          );
        }}
      >
        <p>A 5 star review is much appreciated.</p>
      </StarRating>
    </div>
  );
}

export default App;
