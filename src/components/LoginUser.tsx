import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { authUser } from "../api/authApi.ts";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const status = useAppSelector(state => state.auth.status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: "eve.holt@reqres.in",
      password: formData.password,
    };

    dispatch(authUser({
      authData: data,
      endpoint: "/login"
    })).unwrap().then(() => navigate("/team", { replace: true }));
  };

  return (
    <section className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] p-4 flex flex-col gap-4 shadow-md rounded-2xl"
      >
        <h2 className='text-lg'>Авторизация</h2>
        <div className="flex flex-col gap-2">
          <p>Электронная почта</p>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Ваше электронная почта"
            disabled={status === 'loading'}
            className="py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-gray outline-none focus:ring-2 disabled:opacity-80 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Пароль</p>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Пароль"
            disabled={status === 'loading'}
            className="py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-gray outline-none focus:ring-2 disabled:opacity-80 transition-all duration-500"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full mt-2 py-3 text-white rounded-lg bg-violet ring-violet hover:bg-white hover:text-violet hover:ring-2 disabled:opacity-80 transition-all duration-500"
        >
          {status === 'loading' ? 'Выполняем вход...' : "Войти"}
        </button>
      </form>
    </section>
  );
};

export default LoginUser;