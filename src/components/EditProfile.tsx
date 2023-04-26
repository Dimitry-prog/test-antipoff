import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import ArrLeftIcon from "../assets/ArrLeftIcon.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../api/userApi.ts";
import useFormValidation from "../hooks/useFormValidation.ts";

const EditProfile = () => {
  const { errors, isValid, handleChangeInRealTime, resetForm, values } = useFormValidation();
  const status = useAppSelector(state => state.user.status);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { teamId } = useParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (teamId) {
      const data = {
        id: Number(teamId),
        avatar: values.avatar,
      };
      dispatch(updateUser(data)).unwrap().then(() => {
        navigate(-1);
        resetForm();
      });
    }
  }

  return (
    <section className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] p-4 flex flex-col gap-4 shadow-md rounded-2xl"
        noValidate
      >
        <div className="flex items-center justify-between">
          <h2 className='text-lg'>Редактировать профиль</h2>
          <Link
            to={`/team/${teamId}`}
            type="button"
            aria-label="back"
            className="text-black bg-violet/50 rounded-lg hover:bg-violet transition-all duration-500"
          >
            <ArrLeftIcon/>
          </Link>
        </div>
        <div className="relative flex flex-col gap-2">
          <p>Аватар</p>
          <input
            value={values.avatar || ''}
            onChange={handleChangeInRealTime}
            type="url"
            name="avatar"
            placeholder="Ссылка на аватар"
            disabled={status === 'loading'}
            required
            pattern="^(ftp|http|https):\/\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\:[0-9]+)?(\/\S*)?$"
            className={`${errors.avatar
              ? "invalid:ring-red invalid:ring-2"
              : ""} py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-violet outline-none focus:ring-2 disabled:opacity-80 transition-all duration-500`}
          />
          <span className="absolute -bottom-[15px] text-xs text-red">
            {errors.avatar
              ? "Введите корректную ссылку"
              : ""}
          </span>
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || !isValid}
          className="w-full mt-2 py-3 text-white rounded-lg bg-violet ring-violet hover:bg-white hover:text-violet hover:ring-2 disabled:opacity-60 disabled:hover:bg-violet disabled:hover:text-white disabled:hover:ring-0 transition-all duration-500">
          {status === 'loading' ? 'Сохраняем данные...' : "Сохранить"}
        </button>
      </form>
    </section>
  );
};

export default EditProfile;