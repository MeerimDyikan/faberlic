import './About.css';
import aboutImg from "../../images/Interest_1_7_2024-ru-en.jpg"
import aboutImage1 from "../../images/about2.webp"
import aboutImage2 from "../../images/aboutball5.webp"
import aboutImage3 from "../../images/about6.webp"
import aboutImage4 from "../../images/about7.webp"
import aboutImage5 from "../../images/about8.webp"
import aboutImage6 from "../../images/about9.webp"
import aboutImage7 from "../../images/about3.webp"
import aboutImage8 from "../../images/about4.webp"
import aboutImage9 from "../../images/about10.jpg"
function About() {
  return (
    <>
    <div class="card2">
            <div class="content">
                <h2>ДОБРО ПОЖАЛОВАТЬ</h2>
                <p>В МИР КРАСИВЫХ РЕШЕНИЙ И ВДОХНОВЛЯЮЩИХ ИДЕЙ<br /> ДЛЯ ВАС И ВАШИХ БЛИЗКИХ</p>
            </div>
       
        </div>

 
 <h2 className="about_tit">Наша история</h2>




<div className="card1 flex">
    <div className="text-side">
        <h2>2020</h2>
        <p>Faberlic меняет позиционирование бренда – FABERLIC. ВДОХНОВЛЯЕШЬ НА ЛУЧШЕЕ / FABERLIC. BE YOUR BEST. Компания каждый день стремится открывать новые возможности для вдохновений, создавая уникальные инновационные продукты, разнообразные образовательные проекты и социальные инициативы.</p>
    </div>
    <div className="image-side">
        <div className="image-container">
            <img src={aboutImage2} alt="Картинка"/>
        </div>
    </div>
</div>
<div className="card1 flex">
   
    <div className="image-side">
        <div className="image-container">
            <img src={aboutImage3} alt="Картинка"/>
        </div>
    </div>
    <div className="text-side">
        <h2>2019</h2>
        <p>Faberlic совершает настоящий прорыв в моде и создаёт глобальный прецедент: впервые в истории марка косметики с многомиллионной аудиторией запускает собственный бренд couture. Премьерный показ первой коллекции Faberlic Couture сезона осень-зима – 2019/20 состоялся на главном подиуме Недели моды в Москве в Гостином дворе. По мотивам кутюрной коллекции создана премиальная линия Faberlic Premier, которая появится в продаже осенью 2019 года.</p>
    </div>
</div>
<div className="card1 flex">
    <div className="text-side">
        <h2>2018</h2>
        <p>В нашем портфолио появляется ещё две звёздные коллаборации. Вместе с актрисой и режиссёром Ренатой Литвиновой мы создаём эксклюзивный аромат и линейку декоративной косметики, а с актрисой Юлией Высоцкой – коллекцию стильных аксессуаров для кухни.

В этом же году поклонники кислородной косметики Faberlic покорены новой инновационной разработкой – трёхступенчатой программой омоложения Expert Skin Activator, направленной на работу в глубоких слоях эпидермиса. Каскадное увлажнение достигается благодаря комбинации гиалуроновых кислот разного молекулярного веса..</p>
    </div>
    <div className="image-side">
        <div className="image-container">
            <img src={aboutImage4} alt="Картинка"/>
        </div>
    </div>
    
</div>
<div className="card1 flex">
   
    <div className="image-side">
        <div className="image-container">
            <img src={aboutImage5} alt="Картинка"/>
        </div>
    </div>
    <div className="text-side">
        <h2>2017</h2>
        <p>В 2017 году Faberlic создаёт две совместные коллекции с кутюрье Валентином Юдашкиным. Мы перенесли принципы высокой моды в одежду, доступную каждой женщине. В коллекцию Faberlic by Valentin Yudashkin вошли также три аромата: два женских и один мужской, которые остаются хитами.
 
 В конце весны - начале лета 2017 года компания открыла собственное швейное производство в Ивановской области. Теперь пошив одежды, белья и чулочно-носочной продукции осуществляется в России.</p>
    </div>
</div>
<div className="card1 flex">
    <div className="text-side">
        <h2>2013-2014</h2>
        <p>Faberlic выходит на модный рынок, запуская производство и продажу детской одежды. Дизайнером коллекций становится итальянский модельер Джермана Тровато, на счету у которой работа с такими брендами, как Ralph Lauren, Max Mara, Kiko и др. В моде Faberlic продолжает ту же стратегию, что и в парфюмерно-косметическом секторе: делать высокое качество доступным, применять инновационные технологии и проводить собственные разработки, сохраняя при этом политику низких цен.</p>
    </div>
    <div className="image-side">
        <div className="image-container">
            <img src={aboutImage6} alt="Картинка"/>
        </div>
    </div>
    
</div>
    


       
        
       
    </>
  );
}

export default About;