import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <p>
        Go to <Link to={`/about`}>About</Link>
      </p>
      <p>
        Go to <Link to={`/`}>Home</Link>
      </p>
      <div>This is Contact</div>
    </>
  );
}

export default Contact;
