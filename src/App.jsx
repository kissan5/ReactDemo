// import { useState } from "react";

import { ThemeProvider } from "./context/themeContext";
import Button from "./components/Button";

// import FavPokemonComponent from "./components/favPokemon";

// import FavPokemonForm from "./components/favPokemonForm";

// import ClassComponent from "./components/classComponent";
// import { FunctionComponent } from "./components/functionComponent";

const App = () => {
  // const [username, setUsername] = useState("kishan");

  return (
    // <div className="">
    //   Begin the first class, {4 + 5}
    //   <div>
    //     <ClassComponent></ClassComponent>
    //   </div>
    //   <div>
    //     <FunctionComponent lastName="shah"></FunctionComponent>
    //   </div>
    // </div>

    // <FavPokemonComponent></FavPokemonComponent>

    // <FavPokemonForm></FavPokemonForm>

    <ThemeProvider>
      <div className="">
        <Button></Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
