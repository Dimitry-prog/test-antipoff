import PhoneIcon from "../assets/PhoneIcon.tsx";
import EmailIcon from "../assets/EmailIcon.tsx";
import { useEffect, useState } from "react";
import ArrLeftIcon from "../assets/ArrLeftIcon.tsx";
import LogoutIcon from "../assets/LogoutIcon.tsx";
import { BREAKPOINT_DESKTOP } from "../utils/constants.ts";

const Partner = () => {
  const [resize, setResize] = useState<number | null>(null);
  const isDesktop = resize !== null && resize >= BREAKPOINT_DESKTOP;

  useEffect(() => {
    const handleResize = () => setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const timeOut = setTimeout(() => {
      handleResize();
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeOut);
    }
  }, []);

  return (
    <section className="flex flex-col gap-8 lg:gap-12">
      <div
        className="relative px-8 lg:px-[188px] py-16 lg:py-10 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center bg-violet">
        <button type="button" aria-label="back"
                className="lg:px-4 lg:py-2 absolute top-6 left-4 lg:top-[15%] lg:left-[5%] text-gray-light lg:border border-gray-light rounded-lg">
          {isDesktop ? 'Назад' : <ArrLeftIcon/>}
        </button>
        <button type="button" aria-label="back"
                className="lg:px-4 lg:py-2 absolute top-6 right-4 lg:top-[15%] lg:right-[5%] text-gray-light lg:border border-gray-light rounded-lg">
          {isDesktop ? 'Выход' : <LogoutIcon/>}
        </button>

        <img src="https://reqres.in/img/faces/2-image.jpg" alt="partner"
             className="w-[188px] h-[188px] object-cover rounded-[100px]"/>
        <div className="flex flex-col gap-4 items-center lg:items-start text-white order-first lg:order-last">
          <h1 className="w-full text-2xl lg:text-3xl">Артур Королёв</h1>
          <p className="text-lg lg:text-xl">Партнер</p>
        </div>
      </div>
      <div className="px-8 lg:px-[188px] flex-grow flex flex-col lg:flex-row gap-8 lg:gap-32">
        <div className="flex flex-col gap-6">
          <p>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие
            аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше
            понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать
            продажи, используя самые современные аналитические инструменты.
          </p>
          <p>
            В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не
            менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что
            ты
            помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания
            проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
          </p>
          <p>
            Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую
            деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей
            инновационный подход к красоте, а также инвестором других бизнес-проектов.
          </p>
        </div>
        <div className="flex flex-col gap-6 order-first lg:order-last">
          <a href="tel:+7 (954) 333-44-55" target='_blank' rel="noreferrer noopener" className="flex gap-3">
            <PhoneIcon/>
            +7 (954) 333-44-55
          </a>
          <a href="mailto:sykfafkar@gmail.com" target='_blank' rel="noreferrer noopener" className="flex gap-3">
            <EmailIcon/>
            sykfafkar@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partner;