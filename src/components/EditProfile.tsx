import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import ArrLeftIcon from "../assets/ArrLeftIcon.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../api/userApi.ts";

const EditProfile = () => {
  const [formData, setFormData] = useState({ avatar: '' });
  const status = useAppSelector(state => state.user.status);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { teamId } = useParams();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (teamId) {
      const data = {
        id: Number(teamId),
        avatar: formData.avatar,
      };
      dispatch(updateUser(data)).unwrap().then(() => navigate(-1));
    }
  }

  return (
    <section className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] p-4 flex flex-col gap-4 shadow-md rounded-2xl"
      >
        <div className="flex items-center justify-between">
          <h2 className='text-lg'>Редактировать профиль</h2>
          <Link to={`/team/${teamId}`}
                type="button"
                aria-label="back"
                className="text-black bg-violet/50 rounded-lg hover:bg-violet transition-all duration-500"
          >
            <ArrLeftIcon/>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p>Аватар</p>
          <input
            value={formData.avatar}
            onChange={handleChange}
            type="url"
            name="avatar"
            placeholder="Ссылка на аватар"
            disabled={status === 'loading'}
            className="py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-gray outline-none focus:ring-2 disabled:opacity-80 transition-all duration-500"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-2 py-3 text-white rounded-lg bg-violet ring-violet hover:bg-white hover:text-violet hover:ring-2 disabled:opacity-80 transition-all duration-500">
          {status === 'loading' ? 'Сохраняем данные...' : "Сохранить"}
        </button>
      </form>
    </section>
  );
};

export default EditProfile;