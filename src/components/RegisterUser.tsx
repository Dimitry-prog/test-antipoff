const RegisterUser = () => {
  return (
    <section className="h-screen grid place-items-center">
      <form className="w-full max-w-[500px] p-4 flex flex-col gap-4 shadow-md rounded-2xl">
        <h2 className='text-lg'>Регистрация</h2>
        <div className="flex flex-col gap-2">
          <p>Имя</p>
          <input type="text" placeholder="Ваше имя"
                 className="py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-gray outline-none focus:ring-2 transition-all duration-500"/>
        </div>
        <div className="flex flex-col gap-2">
          <p>Электронная почта</p>
          <input type="text" placeholder="Ваше электронная почта"
                 className="py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-gray outline-none focus:ring-2 transition-all duration-500"/>
        </div>
        <div className="flex flex-col gap-2">
          <p>Пароль</p>
          <input type="text" placeholder="Пароль"
                 className="py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-gray outline-none focus:ring-2 transition-all duration-500"/>
        </div>
        <div className="flex flex-col gap-2">
          <p>Подтвердите пароль</p>
          <input type="text" placeholder="Подтвердите пароль"
                 className="py-3 pl-4 pr-3 text-sm rounded-lg bg-gray-light ring-gray outline-none focus:ring-2 transition-all duration-500"/>
        </div>
        <button type="submit"
                className="w-full mt-2 py-3 text-white rounded-lg bg-violet ring-violet hover:bg-white hover:text-violet hover:ring-2 transition-all duration-500">
          Зарегистрироваться
        </button>
      </form>
    </section>
  );
};

export default RegisterUser;