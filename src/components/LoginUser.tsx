import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { authUser } from "../api/authApi.ts";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../hooks/useFormValidation.ts";

const LoginUser = () => {
  const { errors, isValid, handleBlur, handleChange, handleChangeInRealTime, resetForm, values } = useFormValidation();
  const status = useAppSelector(state => state.auth.status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: "eve.holt@reqres.in",
      password: values.password,
    };

    dispatch(authUser({
      authData: data,
      endpoint: "/login"
    })).unwrap().then(() => {
      navigate("/team", { replace: true });
      resetForm();
    });
  };

  return (
    <section className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] p-4 flex flex-col gap-4 shadow-md rounded-2xl"
        noValidate
      >
        <h2 className='text-lg'>Авторизация</h2>
        <div className="relative flex flex-col gap-2">
          <p>Электронная почта</p>
          <input
            value={values.email || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="Ваше электронная почта"
            disabled={status === 'loading'}
            required
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$"
            className={`${errors.email
              ? "invalid:ring-red invalid:ring-2"
              : ""} py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-violet outline-none focus:ring-2 disabled:opacity-80 transition-all duration-500`}
          />
          <span className="absolute -bottom-[15px] text-xs text-red">
            {errors.email
              ? "Введите корректный email"
              : ""}
          </span>
        </div>
        <div className="relative flex flex-col gap-2">
          <p>Пароль</p>
          <input
            value={values.password || ''}
            onChange={handleChangeInRealTime}
            type="password"
            name="password"
            placeholder="Пароль"
            disabled={status === 'loading'}
            required
            pattern="[a-zA-Zа-яА-Я0-9ё]{2,}"
            className={`${errors.password
              ? "invalid:ring-red invalid:ring-2"
              : ""} py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-violet outline-none focus:ring-2 disabled:opacity-80 transition-all duration-500`}
          />
          <span className="absolute -bottom-[15px] text-xs text-red">
            {errors.password
              ? "Пароль должен быть не менее 2-х символов"
              : ""}
          </span>
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || !isValid}
          className="w-full mt-2 py-3 text-white rounded-lg bg-violet ring-violet hover:bg-white hover:text-violet hover:ring-2 disabled:opacity-60 disabled:hover:bg-violet disabled:hover:text-white disabled:hover:ring-0 transition-all duration-500"
        >
          {status === 'loading' ? 'Выполняем вход...' : "Войти"}
        </button>
      </form>
    </section>
  );
};

export default LoginUser;