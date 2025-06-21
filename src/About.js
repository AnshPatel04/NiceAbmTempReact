import { Link } from "react-router-dom";

const About = () =>{
    return (
        <>
            <h3>About me!</h3>
            <Link to='/' className="btn btn-dark">Home Page</Link>
        </>
    );
}

export default About;