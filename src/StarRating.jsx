export default function StarRating(props) {
  const stars = [];
  const total = props.total ?? 5;

  for (let i = 1; i <= total; i++) {
    const isStarFilled = i <= props.rating;

    stars.push(
      <button
        type="button"
        className="btn"
        data-testid="star-button"
        key={i}
        onClick={() => {
          props.onStarClick(i);
        }}
      >
        <span data-testid={isStarFilled ? "filled-star" : "empty-star"}>
          {props.children(isStarFilled)}
        </span>
      </button>
    );
  }

  return <>{stars}</>;
}
