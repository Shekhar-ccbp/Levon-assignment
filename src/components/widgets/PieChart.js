import {useEffect, useState} from 'react'

const PieChart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData('Sample')
  }, [])

  return (
    <div className="widget">
      Pie Chart
      <p>{data}</p>
    </div>
  )
}

export default PieChart
