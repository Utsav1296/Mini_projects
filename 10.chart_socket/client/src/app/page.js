"use client"
import io from "socket.io-client"
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale, LineElement, PointElement, Title, Tooltip, Legend
} from 'chart.js'
import { Line } from "react-chartjs-2"
import { useEffect, useState } from "react";
ChartJs.register(
  CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend
)
const socket = io('http://localhost:4000')
export default function Home() {
  return (
    <RealtimeChart />
  );
}

const RealtimeChart = () => {
  const [dataPoints, setDataPoints] = useState([])

  useEffect(() => {
    socket.on('stockDataSet', (data) => {
      setDataPoints(currentPoints => [...currentPoints, data])
    })
  }, [])

  const chartData = {
    labels: dataPoints.map(point => point.day),
    datasets: [{
      label: 'Stock Price',
      data: dataPoints.map(point => point.price),
      fill: false,
      borderColor: 'rgba(75, 192,192,1)',
      borderWidth: 1
    }]
  };
  // const chartOptions = {
  //   scales: {
  //     x: {
  //       type: 'category', // Use a category scale for the x-axis
  //       labels: dataPoints.map(point => point.day),
  //     },
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };
  return (<div style={{ width: "1000px", height: "400px" }}>
    {/* <Line data={chartData} options={chartOptions} /> */}
    <Line data={chartData} />

  </div>)
}