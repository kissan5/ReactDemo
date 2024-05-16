import { useState } from "react";

export const FunctionComponent = (props) => {
  const [username, setUsername] = useState("kishan");

  return (
    <>
      this is a functionComponent, {username} {props.lastName}
    </>
  );
};

// export default FunctionComponent;
