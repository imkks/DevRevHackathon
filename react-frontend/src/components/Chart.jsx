import React from 'react'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";


import { Bar } from 'react-chartjs-2'
import BarChart from './BarChart';
import { PieChart } from './PieChart';

const Chart = () => {

  return (
   <div className='d-flex justify-content-center'>
    <BarChart></BarChart>
    <PieChart></PieChart>
   </div>
  )
}

export default Chart