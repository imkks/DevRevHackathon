import React from 'react'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";


import { Bar } from 'react-chartjs-2'

const BarChart = () => {
// ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Bugs', 'Feature', 'Question'],
        datasets: [
          {
            label:'Bar chart',
            backgroundColor: 
            [
                'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
            ],
            borderWidth: 2,
            data: [65, 59, 80],
          },
        ],
      };
  return (
    <div className='bg-body-tertiary m-2'> 
        
   
        <Bar options={{"maintainAspectRatio":false,"responsive":"false"}} data={data} />
   

    </div>
  )
}

export default BarChart