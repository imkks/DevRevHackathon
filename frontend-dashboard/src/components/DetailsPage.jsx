// components/DetailsPage.js

import React from "react";
import { useParams } from "react-router-dom";
import CustomCard from "./CustomCard.jsx";
import { Box } from "@mui/material";
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
        <Box
        sx={{
          justifyContent:'center',
          display: 'flex',
          gap: '5rem',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
         {parent_tag} - Total Reviews {noOfReviews}{" "}
      </Box>
        
      <Box
        sx={{
          justifyContent:'center',
          display: 'flex',
          gap: '5rem',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
          Summary - {Summary}
        <br />
      </Box>
      <Box
        sx={{
          justifyContent: 'flex-start',
          display: 'flex',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        
         <br />
         <div>
          {Object.keys(reviews).map((key) => (
            <CustomCard key={key} review={reviews[key]} />
          ))}
        </div>
         
       
      </Box>
      <div>
       
       
        <br />

        
      </div>
    </div>
  );
};

export default DetailsPage;
