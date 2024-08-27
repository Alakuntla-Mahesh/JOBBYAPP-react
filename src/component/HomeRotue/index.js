import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="home-background">
      <Header />
      <div className="items">
        <h1 className="home-h1">Find The Job That Fits Your Life</h1>
        <p className="home-p">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and Potential
        </p>
        <Link to="/jobs">
          <button type="button" className="jobs-btn">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
