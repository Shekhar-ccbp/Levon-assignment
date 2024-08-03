import {useEffect, useState} from 'react'

const LineChart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData('Sample')
  }, [])

  return <div className="widget">{data}</div>
}

export default LineChart
