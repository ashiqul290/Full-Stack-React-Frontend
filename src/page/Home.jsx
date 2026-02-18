import Banner from '../Components/Banner'
import Category from '../Components/Category'
import LATESTNEWS from '../Components/LATESTNEWS'
import LATESTPRDOUCTS from '../Components/LATESTPRDOUCTS'
import NameLOGOIMG from '../Components/NameLOGOIMG'
import OURTRENDYPRODUCTS from '../Components/OURTRENDYPRODUCTS'
import SpringCollection from '../Components/SpringCollection'
const Home = () => {
  return (
    <>
   <Banner />
   <Category />
   <OURTRENDYPRODUCTS />
    <SpringCollection />
    <LATESTPRDOUCTS />
    <LATESTNEWS />
    <NameLOGOIMG />
    </>
  )
}

export default Home