import Stories from "../../components/Stories/Stories"
import Posts from "../../components/Posts/Posts"
import Share from "../../components/Share/Share"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home