// components/DetailsPage.js

import React from "react";
import { useParams } from "react-router-dom";
import CustomCard from "./CustomCard";
const DetailsPage = ({ data }) => {
  console.log("details" + JSON.stringify(data));
  let parent_tag = data.parent_tag;
  let noOfReviews = data.no_of_reviews;
  let Summary = data.Summary;

  /*
 "Reviews": {
        "Review 1": [
            "Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.",
            "Functionality issues",
            "Negative"
        ],
        "Review 2": [
            "The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.",
            "Data synchronization issues",
            "Negative"
        ]
    }
    */
  let reviewsJSON = data.Reviews;
  var reviews = {};
  Object.keys(reviewsJSON).forEach((key) => {
    var reviewId = key.replace(/\s+/g, ""); // Removing spaces for review ID
    reviews[reviewId] = {
      content: reviewsJSON[key][0],
      issues: reviewsJSON[key][1],
      sentiment: reviewsJSON[key][2],
    };
  });
  console.log(reviews);

  return (
    <div>
      <h2>
        {parent_tag} - Total Reviews {noOfReviews}{" "}
      </h2>
      <div>
        {Summary}
        <br />
        <h3>Individual Review</h3>
        <br />

        <div>
          {Object.keys(reviews).map((key) => (
            <CustomCard key={key} review={reviews[key]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
