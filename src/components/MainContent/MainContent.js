import LineChart from '../widgets/LineChart'
import BarChart from '../widgets/BarChart'
import PieChart from '../widgets/PieChart'
import './MainContent.css'

const MainContent = () => (
  <main className="main-content">
    <LineChart />
    <BarChart />
    <PieChart />
    <div className="recent-activity">Recent Activity</div>
  </main>
)

export default MainContent
