import React from "react";

export const ReviewCard = ({ review }) => {
  return (
    <div className="review_card">
      <h1>{review.title}</h1>
      <h3>{review.body}</h3>
      <h3>{review.rating} Stars</h3>
    </div>
  );
};
