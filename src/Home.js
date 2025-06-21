import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
            <h3>Hello Charm</h3>
            <Link to='/About' className="btn btn-dark">About Page</Link>
        </>
    );
}

export default Home;