import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Loader from "./components/Loader";
import BarChart from "./components/BarChart";
import DetailsPage from "./components/DetailsPage";
import CheckBoxSelection from "./components/CheckBoxSelection";
import "./App.css";
const App = () => {
  const [jsonData] = useState({
    adobe: "Adobe",
    ludo_king: "Ludo King"
  });
  const checkBoxData = ["Twitter", "Play Store", "App Store"];

  const [loading, setLoading] = useState(true);
  const [buttonClick, setbuttonClick] = useState(false);

  const jsonString = `[
    {
        "parent_tag": "Bug",
        "no_of_reviews": 2,
        "Summary": "Users are reporting bugs related to app crashes, freezing, and issues with loading free spins. Landscape mode ad without an exit option caused the screen to go black and the app to crash.",
        "Reviews": {
            "Review 1": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"],
            "Review 2": ["The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.", "Data synchronization issues", "Negative"]
        }
    },
     {
        "parent_tag": "Feature Request",
        "no_of_reviews": 5,
        "Summary": "Users are reporting bugs related to app crashes, freezing, and issues with loading free spins. Landscape mode ad without an exit option caused the screen to go black and the app to crash.",
        "Reviews": {
            "Review 1": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"],
            "Review 2": ["The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.", "Data synchronization issues", "Negative"]
        }
    },
     {
        "parent_tag": "Questions",
        "no_of_reviews": 4,
        "Summary": "Users are reporting bugs related to app crashes, freezing, and issues with loading free spins. Landscape mode ad without an exit option caused the screen to go black and the app to crash.",
        "Reviews": {
            "Review 1": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"],
            "Review 2": ["The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.", "Data synchronization issues", "Negative"]
        }
    },
    {
      "parent_tag": "Others",
      "no_of_reviews": 4,
      "Summary": "Users are reporting bugs related to app crashes, freezing, and issues with loading free spins. Landscape mode ad without an exit option caused the screen to go black and the app to crash.",
      "Reviews": {
          "Review 1": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"],
          "Review 2": ["The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.", "Data synchronization issues", "Negative"]
      }
  }
]`;
  var bigData;
  var apiData;
  try {
    bigData = JSON.parse(jsonString);
    console.log("bigData" + bigData);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  async function fetchData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("APIData" + data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  const handleFetchData = () => {
    setbuttonClick(true);
    setLoading(false);
    // const apiUrl = 'http://ec2-13-60-32-246.eu-north-1.compute.amazonaws.com:3000/';

    // fetchData(apiUrl)
    //   .then(data => {
    //     setLoading(false);
    //     apiData = data;
    //     console.log("Inside fetch"+bigData);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  return (
    <div className="app-container">
      <div>
        <div className="dropCheckbox-container">
          <div className="dropdown-container">
            {loading ? <Dropdown data={jsonData} /> : ""}
          </div>
          <div className="checkbox-container">
            {loading ? <CheckBoxSelection values={checkBoxData} /> : ""}
          </div>
        </div>

        <br />
        <br />

        {loading ? (
          <button className="button-container" onClick={handleFetchData}>
            Fetch Data
          </button>
        ) : (
          ""
        )}

        <br />
        <br />
        {buttonClick ? loading ? <Loader /> : <BarChart data={bigData} /> : ""}
      </div>
    </div>
  );
};

export default App;
