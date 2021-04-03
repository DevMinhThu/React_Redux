import "./App.css";
import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

function App() {
  const [color, setColor] = useState("red");
  const [fontSize, setFontSize] = useState(15);

  // function nhận data từ con(ColorPicker) truyền cho cha(App)
  // params chính là giá trị value_color của ColorPicker
  const onSetColor = (params) => {
    console.log(params);
    setColor(params);
  };

  return (
    <div className="container mt-50">
      <div className="row">
        <ColorPicker color={color} onReceiveColor={onSetColor} />
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting />
          <Reset />
        </div>
        {/* {color} chính là data state cho props color */}
        <Result color={color} />
      </div>
    </div>
  );
}

export default App;
