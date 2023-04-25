import { Route, Routes } from "react-router-dom";
import RegisterUser from "./components/RegisterUser.tsx";
import LoginUser from "./components/LoginUser.tsx";
import RequireAuth from "./components/RequireAuth.tsx";
import Partner from "./components/Partner.tsx";
import PageTeam from "./pages/PageTeam.tsx";
import EditProfile from "./components/EditProfile.tsx";

const App = () => {

  return (
    <main className="max-w-[1440px] mx-auto">
      <Routes>
        <Route path="/" element={<RegisterUser/>}/>
        <Route path="/signin" element={<LoginUser/>}/>
        <Route element={<RequireAuth/>}>
          <Route path="/team" element={<PageTeam/>}/>
          <Route path="/team/:teamId" element={<Partner/>}/>
          <Route path="/team/:teamId/edit-profile" element={<EditProfile/>}/>
        </Route>
      </Routes>
    </main>
  );
};

export default App;