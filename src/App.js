import { Fragment, useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { Models, s3Url } from "./assets/flex2000DB_mock";

const App = () => {
  const modelInitialGLB = `${s3Url}glb/abdominal.glb`
  const modelInitialUSDZ = `${s3Url}usdz/abdominal.usdz`
  const [modelGLB, setModelGLB] = useState(modelInitialGLB);
  const [modelUSDZ, setModelUSDZ] = useState(modelInitialUSDZ);

  const onSelectModel = (name) => {
    setModelGLB(`${s3Url}glb/${name}.glb`);
    setModelUSDZ(`${s3Url}usdz/${name}.usdz`);
  };

  return (
    <Fragment>
      <model-viewer
        ar
        modes="scene-viewer quick-look webxr"
        src={modelGLB} // AR Android/Web
        ios-src={modelUSDZ}
        auto-rotate
        camera-controls
        style={{ width: "100vw", height: "90vh" }}
        autoplay
      //autoplay
      >

      </model-viewer>
      <BottomNavigation>
        {Models.map((model, index) => {
          return (
            <button key={index} onClick={() => onSelectModel(model)}>{model}</button>
          );
        })}
      </BottomNavigation>
    </Fragment>
  );
};

export default App;
