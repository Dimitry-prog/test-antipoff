import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { ChangeEvent, FormEvent, useState } from "react";
import { authUser } from "../api/authApi.ts";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm: '' });
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
      endpoint: "/register"
    })).unwrap().then(() => navigate("/team", { replace: true }));
  }

  return (
    <section className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] p-4 flex flex-col gap-4 shadow-md rounded-2xl"
      >
        <h2 className='text-lg'>Регистрация</h2>
        <div className="flex flex-col gap-2">
          <p>Имя</p>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Ваше имя"
            disabled={status === 'loading'}
            className="py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-gray outline-none focus:ring-2 disabled:opacity-80 transition-all duration-500"
          />
        </div>
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
        <div className="flex flex-col gap-2">
          <p>Подтвердите пароль</p>
          <input
            value={formData.confirm}
            onChange={handleChange}
            type="password"
            name="confirm"
            placeholder="Подтвердите пароль"
            disabled={status === 'loading'}
            className="py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-gray outline-none focus:ring-2 disabled:opacity-80 transition-all duration-500"/>
        </div>
        <button
          type="submit"
          className="w-full mt-2 py-3 text-white rounded-lg bg-violet ring-violet hover:bg-white hover:text-violet hover:ring-2 disabled:opacity-80 transition-all duration-500">
          {status === 'loading' ? 'Регистрируем...' : "Зарегистрироваться"}
        </button>
      </form>
    </section>
  );
};

export default RegisterUser;