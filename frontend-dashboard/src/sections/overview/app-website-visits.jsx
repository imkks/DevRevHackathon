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
      "no_of_reviews": 7,
      "Summary": "Users are reporting bugs related to application crashes, freezing, and issues with loading files. An ad in landscape mode without an exit option caused the screen to go black and the application to crash.",
      "Reviews": {
        "review_1": ["The application concept is great. However, there are random issues with file loading and the application tends to freeze frequently. It's frustrating to experience these bugs.", "Functionality issues", "Negative"],
        "review_2": ["Files are not loading properly within the application. Additionally, an ad in landscape mode without an exit option led to a black screen and application crash. I had to uninstall the application until these issues are resolved.", "Data synchronization issues", "Negative"],
        "review_3": ["Encountered multiple bugs while using the application. It frequently crashes and freezes, especially during file loading. The overall experience is disappointing due to these issues.", "Performance issues", "Negative"],
        "review_4": ["I've experienced several bugs while using the application, including crashes, freezing, and difficulty in loading files. These issues significantly impact the user experience.", "Usability issues", "Negative"],
        "review_5": ["The application crashes frequently, especially when loading large files. Additionally, it freezes randomly, making it difficult to use. These bugs need to be addressed urgently.", "Functionality issues", "Negative"],
        "review_6": ["Encountered bugs related to file loading and application crashes. These issues are frustrating and significantly impact the usability of the application.", "Usability issues", "Negative"],
        "review_7": ["Experiencing issues with file loading and frequent crashes while using the application. It's frustrating to encounter these bugs, especially during important tasks.", "Functionality issues", "Negative"]
      }
    },
    {
      "parent_tag": "Feature Request",
      "no_of_reviews": 6,
      "Summary": "Users are requesting new features and improvements related to application functionality and performance.",
      "Reviews": {
        "review_1": ["The application concept is promising, but there are several areas for improvement. I'd like to see better file loading capabilities and smoother performance overall.", "Functionality issues", "Neutral"],
        "review_2": ["The application needs enhancements in file loading speed and stability. Additionally, an option to exit ads in landscape mode would improve the overall user experience.", "Data synchronization issues", "Positive"],
        "review_3": ["While the application concept is interesting, it lacks efficiency in file loading and frequently freezes. I hope to see these issues addressed in future updates.", "Functionality issues", "Neutral"],
        "review_4": ["I'm experiencing difficulties with file loading and frequent freezing while using the application. It would be great to see these issues resolved in the next update.", "Data synchronization issues", "Neutral"],
        "review_5": ["The application shows promise, but it needs significant improvements in file loading and overall performance. Additionally, an option to exit ads in landscape mode would greatly enhance the user experience.", "Functionality issues", "Positive"],
        "review_6": ["Encountered limitations in file loading and overall performance while using the application. It would be helpful to have additional features for better file management and performance optimization.", "Usability issues", "Positive"]
      }
    },
    {
      "parent_tag": "Questions",
      "no_of_reviews": 10,
      "Summary": "Users have questions and concerns regarding the application's functionality and performance.",
      "Reviews": {
        "review_1": ["I'm experiencing difficulties with file loading and frequent crashes while using the application. Can these issues be addressed in the next update?", "Functionality issues", "Negative"],
        "review_2": ["How can I improve the application's performance, especially in terms of file loading and responsiveness?", "Data synchronization issues", "Neutral"],
        "review_3": ["Is there a way to optimize file loading speed within the application? I've noticed significant delays when opening large files.", "Performance issues", "Neutral"],
        "review_4": ["Are there any plans to introduce new features for better file management and organization within the application?", "Feature request", "Positive"],
        "review_5": ["Can you provide tips for improving overall application performance and responsiveness? I've noticed some lag while using certain features.", "Usability issues", "Neutral"],
        "review_6": ["How frequently are updates released for the application? I'm eager to see improvements in file loading and overall performance.", "Functionality issues", "Neutral"],
        "review_7": ["What steps can I take to troubleshoot file loading issues within the application? I've encountered difficulties while opening specific file types.", "Data synchronization issues", "Neutral"],
        "review_8": ["Can you provide more information about the application's file synchronization capabilities? I'm interested in learning how it handles data synchronization across devices.", "Data synchronization issues", "Neutral"],
        "review_9": ["Are there any known workarounds for application crashes and freezes? I've experienced these issues frequently while using the product.", "Usability issues", "Neutral"],
        "review_10": ["How does the application handle large files? I'm concerned about performance issues when working with files of significant size.", "Performance issues", "Neutral"]
      }
    },
    {
      "parent_tag": "Others",
      "no_of_reviews": 5,
      "Summary": "Users have miscellaneous feedback and suggestions for the application.",
      "Reviews": {
        "review_1": ["The application has potential, but it needs significant improvements in terms of file loading and stability. I hope to see these issues resolved soon.", "Functionality issues", "Neutral"],
        "review_2": ["I encountered difficulties with file loading and application crashes while using the product. It would be helpful to have an option to exit ads in landscape mode.", "Data synchronization issues", "Negative"],
        "review_3": ["Overall, the application has been useful for my workflow, but there are some areas for improvement. I'd like to see better performance and stability in future updates.", "Usability issues", "Neutral"],
        "review_4": ["I've experienced some issues with file loading and application crashes, but overall, the application has been helpful for my needs. Looking forward to seeing improvements in future updates.", "Functionality issues", "Neutral"],
        "review_5": ["The application has potential, but it needs significant improvements in terms of file loading speed and stability. I'm hopeful that future updates will address these issues.", "Performance issues", "Neutral"]
      }
    }
  ]`;
  var bigData = JSON.parse(jsonString);
  const [loading, setLoading] = useState(true);
  const [buttonClick, setbuttonClick] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [apiData, setAPIData] = useState({});
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
    setbuttonClick(true);

    const apiUrl = 'http://ec2-13-60-32-246.eu-north-1.compute.amazonaws.com:3000/';

    if (selectedProduct == 10)//adobe
    {

      setAPIData(bigData);
      setLoading(false);
      console.log(selectedProduct + "IF");
    }
    else //ludoking
    {
      console.log(selectedProduct + "ELSE");
      fetchData(apiUrl)
        .then(data => {

          setLoading(false);
          setAPIData(data);
          console.log("Inside fetch" + bigData);
          console.log("123" + loading);
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

      {buttonClick ? (loading ? <Loader /> : <BarChart data={apiData} value={selectedProduct} />) : ""}








    </Card>
  );
}

AppWebsiteVisits.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string
};
