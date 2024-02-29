import React from 'react'
import { Pie } from 'react-chartjs-2';

export const PieChart = () => {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  return (
    <div className='m-2 bg-body-tertiary'>
         <Pie options={{"maintainAspectRatio":false,"responsive":"true"}} data={data} />
    </div>
  )
}
