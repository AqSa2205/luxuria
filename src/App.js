import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/signIn.component";
import Home from "./routes/homepage/home.component";



function App() {
  return (
    <Routes>
      <Route path="/" element= {<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
export default App;
