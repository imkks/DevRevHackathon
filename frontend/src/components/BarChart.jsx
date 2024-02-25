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
import DetailsPage from './DetailsPage';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const BarChart = ({ data }) => {
  const jsonBug = data.find((item) => item.parent_tag === "Bug");
  const jsonFeatureRequest = data.find((item) => item.parent_tag === "Feature Request");
  const jsonQuestion = data.find((item) => item.parent_tag === "Questions");
  const jsonOthers = data.find((item) => item.parent_tag === "Others");

  const [drillDown, setdrillDown] = useState(false);
  const [drillDownJSON,setdrillDownJSON] = useState({});
     console.log("jsonBug:", jsonBug);
   console.log("jsonFeatureRequest:", jsonFeatureRequest);
   console.log("jsonQuestion:", jsonQuestion);

  const data1 = {
    labels: ["Bug", "Feature Request", "Question","Others"],
    datasets: [
      {
        label: "No of reviews aggregated",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [
          jsonBug.no_of_reviews,
          jsonFeatureRequest.no_of_reviews,
          jsonQuestion.no_of_reviews,
          jsonOthers.no_of_reviews
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
