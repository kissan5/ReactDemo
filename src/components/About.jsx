import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <p>
        Go to <Link to={`/contact`}>Contact</Link>
      </p>
      <p>
        Go to <Link to={`/`}>Home</Link>
      </p>
      <div>This is About</div>
    </>
  );
}

export default About;
