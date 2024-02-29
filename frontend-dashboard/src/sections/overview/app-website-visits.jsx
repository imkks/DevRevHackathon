import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import BarChart from 'src/components/chart/barChart';
import { useState } from 'react';
// ----------------------------------------------------------------------
import Dropdown from 'src/components/Dropdown';
import Loader from 'src/components/Loader';
import CheckBoxSelection from 'src/components/CheckBoxSelection';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function AppWebsiteVisits({ title, subheader }) {
  const jsonString = `[
    {
        "parent_tag": "Bug",
        "no_of_reviews": 2,
        "Summary": "Users are reporting bugs related to app crashes, freezing, and issues with loading free spins. Landscape mode ad without an exit option caused the screen to go black and the app to crash.",
        "Reviews": {
            "review_1": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"],
            "review_2": ["The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.", "Data synchronization issues", "Negative"]
        }
    },
     {
        "parent_tag": "Feature Request",
        "no_of_reviews": 5,
        "Summary": "Users are reporting bugs related to app crashes, freezing, and issues with loading free spins. Landscape mode ad without an exit option caused the screen to go black and the app to crash.",
        "Reviews": {
            "review_1": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"],
            "review_2": ["The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.", "Data synchronization issues", "Negative"],
            "review_3": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"],
            "review_4": ["The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.", "Data synchronization issues", "Negative"],
            "review_5": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"]
        }
    },
     {
        "parent_tag": "Questions",
        "no_of_reviews": 4,
        "Summary": "Users are reporting bugs related to app crashes, freezing, and issues with loading free spins. Landscape mode ad without an exit option caused the screen to go black and the app to crash.",
        "Reviews": {
            "review_1": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"],
            "review_2": ["The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.", "Data synchronization issues", "Negative"]
        }
    },
    {
      "parent_tag": "Others",
      "no_of_reviews": 4,
      "Summary": "Users are reporting bugs related to app crashes, freezing, and issues with loading free spins. Landscape mode ad without an exit option caused the screen to go black and the app to crash.",
      "Reviews": {
          "review_1": ["Game concept..great. Random...not at all. Game chooses the rolls and winner. This game chooses a winner and gives them favored rolls. It's easy to watch it happen.", "Functionality issues", "Negative"],
          "reviews_2": ["The free spins are still not loading. Landscape mode ad without exit option led to a black screen and app crash. Free spins are not working on girlfriend's phone either. Uninstalled the app until a new version comes up.", "Data synchronization issues", "Negative"]
      }
  }
]`;
  var bigData = JSON.parse(jsonString);
  const [loading, setLoading] = useState(true);
  const [buttonClick, setbuttonClick] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [apiData, setAPIData ] = useState({});
  const [jsonData] = useState({
    adobe: "Adobe",
    ludo_king: "Ludo King"
  });
  const checkBoxData = ["Twitter", "Play Store", "App Store"];

  const onSelectProduct = (product) => {
    // This function is called when the Dropdown selection changes
    console.log(`Selected Product: ${product}`);
    setSelectedProduct(product);
    // Do any additional logic with the selected product if needed
  };
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
    

    const apiUrl = 'http://ec2-13-60-32-246.eu-north-1.compute.amazonaws.com:3000/';
    
    if (selectedProduct == 10)//adobe
     {
      setbuttonClick(true);
      setAPIData(bigData);
      setTimeout(setLoading(false),5000);
      console.log(selectedProduct + "IF");
     } 
    else //ludoking
    {
      console.log(selectedProduct + "ELSE");
      fetchData(apiUrl)
        .then(data => {
          setbuttonClick(true);
          setLoading(false);
          setAPIData(data); 
          console.log("Inside fetch" + bigData);
        })
        .catch(error => {
          console.error(error);
        });
    }


  };




  return (
    <Card >
      <CardHeader title={title} subheader={subheader} />



      {loading
        ?
        <div style={{ width: '100%' }}>
          <Box
            sx={{
              justifyContent: 'center',
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
            <Dropdown onSelectProduct={onSelectProduct} />
            <CheckBoxSelection />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '10rem',
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
            {loading ? (
              <Button variant="contained" onClick={handleFetchData} > Fetch Data</Button>
            ) : (
              ""
            )}
          </Box>
        </div>
        :

        ""

      }

      {buttonClick ? loading ? <Loader /> : <BarChart data={apiData} value={selectedProduct} /> : ""}








    </Card>
  );
}

AppWebsiteVisits.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string
};
