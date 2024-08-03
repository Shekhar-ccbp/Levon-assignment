import {useEffect, useState} from 'react'

const BarChart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData('Sample')
  }, [])

  return (
    <div className="widget">
      <h1>Bar Chart</h1>
      {data}
    </div>
  )
}

export default BarChart
