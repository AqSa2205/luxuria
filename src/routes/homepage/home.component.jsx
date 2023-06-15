import { Outlet } from 'react-router-dom';
import CategoriesContainer from '../../component/CategoriesContainer/CategoriesContainer'

const Home = () => {
  return(
    <div>
        <Outlet/>
        <CategoriesContainer/>
    </div>
  )
}

export default Home;