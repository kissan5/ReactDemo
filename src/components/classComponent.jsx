// import React, { Component } from "react";
import { useState } from "react";

// class ClassComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <>
//         My name is {this.state.count}
//         <div>
//           <button onClick={this.handleClick}>Increment</button>
//         </div>
//       </>
//     );
//   }
// }

// export default ClassComponent;

const ClassToFunctionalComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      Class Component - Counter {count}
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
    </>
  );
};

export default ClassToFunctionalComponent;
