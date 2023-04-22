import { Route, Routes } from "react-router-dom";
import RegisterUser from "./components/RegisterUser.tsx";
import LoginUser from "./components/LoginUser.tsx";
import RequireAuth from "./components/RequireAuth.tsx";
import TeamList from "./components/TeamList.tsx";
import Partner from "./components/Partner.tsx";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<RegisterUser/>}/>
        <Route path="/signin" element={<LoginUser/>}/>
        <Route element={<RequireAuth/>}>
          <Route path="/team" element={<TeamList/>}>
            <Route path=":teamId" element={<Partner/>}/>
          </Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;