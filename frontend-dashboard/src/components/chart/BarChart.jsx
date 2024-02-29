import { Bar, getElementAtEvent } from "react-chartjs-2";
import { useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import DetailsPage from "../DetailsPage";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);
/*
APIData[
    {
        "parent_tag": "Bug",
        "no_of_reviews": 2,
        "Summary": "Users are reporting issues with the game's algorithm, stating that the dice rolls seem to be 'scripted' and not truly random. They feel that the game unfairly chooses the rolls and the winner, leading to a lack of enjoyment in playing.",
        "Reviews": {
            "review_1": ["The game's algorithm is fixed for drama. I've played now almost a hundred games and on way too many occasions the dice 'magically' strikes exactly the right number when it counts the most. I can easily tell when I'll win or lose no matter the actual game strategy. Overall the game is good to pass the time but the developers should move away from the 'scripted' dice play and make the dice truly random. Anyone notice how close the games are at the end? At this stage, it's no longer fun to play.", "Functionality issues", "Negative"],
            "review_2": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. If it were random then you would roll a number that would cause you to land on your own so you lose a turn. Never happens. You only roll a number to land on yourself on safe spaces. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"]
        }
    }
]

*/
const BarChart = ({ data, value }) => {
  if(value == 20)
  data = JSON.parse(data);
  
  //in case of API call use parse
  console.log("data1"+data);
  const jsonBug = data.find((item) => item.parent_tag === "Bug");
  const jsonFeatureRequest = data.find((item) => item.parent_tag === "Feature Request");
  const jsonQuestion = data.find((item) => item.parent_tag === "Questions");
  const jsonOthers = data.find((item) => item.parent_tag === "Others");

  const [drillDown, setdrillDown] = useState(false);
  const [drillDownJSON,setdrillDownJSON] = useState({});
     console.log("jsonBug:", jsonBug);
   console.log("jsonFeatureRequest:", jsonFeatureRequest);
   console.log("jsonQuestion:", jsonQuestion);

   var jsonBugTotalReview = 0;
   var jsonFeatureTotalReview = 0;
   var jsonQuestionTotalReview = 0;
   var jsonOthersTotalReview = 0;

   if(jsonBug)
   {
    jsonBugTotalReview = jsonBug.no_of_reviews;
   }

   if(jsonFeatureRequest)
   {
    jsonFeatureTotalReview =  jsonFeatureRequest.no_of_reviews;
   }
   if(jsonQuestion)
   {
    jsonQuestionTotalReview =jsonQuestion.no_of_reviews;
   }
   if(jsonOthers)
   {
    jsonOthersTotalReview = jsonOthers.no_of_reviews;
   }

  const data1 = {
    labels: ["Bug", "Feature Request", "Question","Others"],
    datasets: [
      {
        label: "No of reviews aggregated",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [
          jsonBugTotalReview,
          jsonFeatureTotalReview,
          jsonQuestionTotalReview,
          jsonOthersTotalReview
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  const chartRef = useRef();

  const handleBarClick = (event) => {
    // Check if any elements were clicked
    var index = getElementAtEvent(chartRef.current, event)[0].index;
    
    
    if(index == 0){
        setdrillDownJSON(jsonBug);
    }
    if(index == 1){
        setdrillDownJSON(jsonFeatureRequest);
    }
    if(index == 2){
        setdrillDownJSON(jsonQuestion);
    }
    if(index == 3){
        setdrillDownJSON(jsonQuestion);
    }
    console.log("inEvent"+JSON.stringify(drillDownJSON));
    setdrillDown(true);

  };

  return (
    <div>
      
      {
      drillDown ? 
      
      <DetailsPage data={drillDownJSON} /> :
      
      <Bar
      data={data1}
      ref={chartRef}
      onClick={handleBarClick}
      options={options}
    />
    }
      
    </div>
  );
};

export default BarChart;
