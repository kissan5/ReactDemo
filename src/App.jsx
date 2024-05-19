// import { useState } from "react";

import { useState, useEffect } from "react";
import InternalComponent from "./components/internalComponent";
import HOCWrapper from "./components/HOCWrapper";

const ComponentWithLoadingIndicator = HOCWrapper(InternalComponent);

// import { ThemeProvider } from "./context/themeContext";
// import Button from "./components/Button";

// import FavPokemonComponent from "./components/favPokemon";

// import FavPokemonForm from "./components/favPokemonForm";

// import ClassComponent from "./components/classComponent";
// import { FunctionComponent } from "./components/functionComponent";

const App = () => {
  // const [username, setUsername] = useState("kishan");

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData("Load Data");
      console.log("Loaded the data");
    }, 2000);
  }, []);

  return (
    <div className="">
      {/* //   Begin the first class, {4 + 5}
    //   <div>
    //     <ClassComponent></ClassComponent>
    //   </div>
    //   <div>
    //     <FunctionComponent lastName="shah"></FunctionComponent>
    //   </div>
    // </div>

    // <FavPokemonComponent></FavPokemonComponent>

    // <FavPokemonForm></FavPokemonForm>

    // <ThemeProvider>
    //   <div className="">
    //     <Button></Button> */}
      Demo Hocs
      <ComponentWithLoadingIndicator isLoading={isLoading} data={data} />
    </div>
    // </ThemeProvider>

    // <div>{isLoading ? <p>Loading...</p> : <p>{data}</p>}</div>
  );
};

export default App;
