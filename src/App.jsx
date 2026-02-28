import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ModuleA from "./Modules/ModuleA";
import A1 from "./Modules/A/A1";
import A2 from "./Modules/A/A2";
import A3 from "./Modules/A/A3";
import B1 from "./Modules/B/B1";
import B2 from "./Modules/B/B2";
import B3 from "./Modules/B/B3";
import C1 from "./Modules/C/C1";
import C2 from "./Modules/C/C2";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="05_module_a" element={<ModuleA/>}/>
          <Route path="05_module_a/A1" element={<A1/>}/>
          <Route path="05_module_a/A2" element={<A2/>}/>
          <Route path="05_module_a/A3" element={<A3/>}/>
          <Route path="05_module_a/B1" element={<B1/>}/>
          <Route path="05_module_a/B2" element={<B2/>}/>
          <Route path="05_module_a/B3" element={<B3/>}/>
          <Route path="05_module_a/C1" element={<C1/>}/>
          <Route path="05_module_a/C2" element={<C2/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
