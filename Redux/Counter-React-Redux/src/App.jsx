import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./Components/Header";
import DisplayComponents from "./Components/DisplayComponent";
import Container from "./Components/Container";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./Components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <center className="px-4 py-5 my-5 text-center ">
        <Container>
          <Headers />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMessage /> : <DisplayComponents />}
            <Controls />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
