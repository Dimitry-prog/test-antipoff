import TeamList from "../components/TeamList.tsx";
import LogoutIcon from "../assets/LogoutIcon.tsx";
import { BREAKPOINT_DESKTOP } from "../utils/constants.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks.ts";
import { authActions } from "../store/slices/authSlice.ts";
import useResizeWindow from "../hooks/useResizeWindow.ts";

const PageTeam = () => {
  const resize = useResizeWindow();
  const isDesktop = resize !== null && resize >= BREAKPOINT_DESKTOP;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/signin", { replace: true });
  }

  return (
    <section className="pb-8 lg:pb-16 flex flex-col gap-8 lg:gap-12">
      <div
        className="relative px-5 py-16 flex flex-col gap-4 items-center bg-violet"
      >
        <button
          onClick={handleLogout}
          type="button"
          aria-label="back"
          className="lg:px-4 lg:py-2 absolute top-4 right-4 lg:top-[15%] lg:right-[5%] text-gray-light lg:border border-gray-light rounded-lg hover:opacity-70 transition-all duration-500"
        >
          {isDesktop ? 'Выход' : <LogoutIcon/>}
        </button>
        <h1 className="text-2xl text-white lg:text-3xl">Наша команда</h1>
        <p className="text-base leading-[19px] text-center text-gray-light lg:text-lg">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их
          плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
        </p>
      </div>
      
      <TeamList/>
    </section>
  );
};

export default PageTeam;