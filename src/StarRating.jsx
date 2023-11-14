export default function StarRating(props) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const isStarFilled = i <= props.rating;

    stars.push(
      <button
        type="button"
        className="btn"
        key={i}
        onClick={() => {
          props.onStarClick(i);
        }}
      >
        {props.renderStar(isStarFilled)}
      </button>
    );
  }

  return <>{stars}</>;
}
