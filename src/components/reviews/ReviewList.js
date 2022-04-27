import React, { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { getReviewsByMovieId , addReview } from "../modules/ReviewManager";

export const ReviewList = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [isWritingReview, setIsWritingReview] = useState(false);

  const getReviews = (movieId) => {
    getReviewsByMovieId(movieId).then((someReviews) => setReviews(someReviews));
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    addReview()
  };

  const handleFieldChange = () => {};


  useEffect(() => {
    getReviews(movieId);
    console.log(reviews);
  }, []);

  return (
    <>
      <div className="review_list">
        <button
          type="button"
          onClick={() => {
            () => {
              setIsWritingReview(true);
            };
          }}
        >
          Add a New Review
        </button>
        <h1>User Reviews</h1>
        {isWritingReview ? (
          <form className="new_review_form">
            <h2>Add Review</h2>
            <fieldset>
              <label className="new_review_label" htmlFor="new_review_title">
                Title
              </label>
              <input
                type="text"
                id="title"
                onChange={handleFieldChange}
                required
                autoFocus
                className="new_review_controlled_form"
                placeholder="Title"
                value={newReview.title}
              />
            </fieldset>
            <fieldset>
              <label className="new_review_label" htmlFor="new_review_body">
                Body
              </label>
              <input
                type="text"
                id="body"
                onChange={handleFieldChange}
                required
                autoFocus
                className="new_review_controlled_form"
                placeholder="Body"
                value={newReview.body}
              />
            </fieldset>
            <fieldset>
              <label className="new_review_label" htmlFor="new_review_rating">
                Rating
              </label>
              <input
                type="text"
                id="rating"
                onChange={handleFieldChange}
                required
                autoFocus
                className="new_review_controlled_form"
                placeholder="Rating"
                value={newReview.rating}
              />
            </fieldset>
            <button
              type="button"
              id="message_edit_submit_btn"
              className="submit_btn"
              onClick={handleSubmitReview}
            >
              Submit
            </button>
            <button
              type="button"
              id="new_review_cancel_btn"
              className="cancel_btn"
              onClick={() => setIsWritingReview(false)}
            >
              Cancel
            </button>
          </form>
        ) : (
          <></>
        )}
        {reviews.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
      </div>
    </>
  );
};
