import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StarRating(props) {
  const stars = [];
  const emptyColor = props.emptyColor || "#eee";
  const filledColor = props.filledColor || "yellow";

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <button
        type="button"
        className="btn"
        key={i}
        onClick={() => {
          props.onStarClick(i);
        }}
      >
        <FontAwesomeIcon
          icon={faStar}
          color={i <= props.rating ? filledColor : emptyColor}
          size="3x"
        />
      </button>
    );
  }

  return <>{stars}</>;
}
