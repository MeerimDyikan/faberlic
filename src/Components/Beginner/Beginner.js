import './Beginner.css';

import imgBeginner from "../../images/news_8_2024_650x455_ru_ru.jpg"

function Beginner() {
  return (
    <>
    <div className="new flex">
        <div className="image"><img src={imgBeginner} alt="" /></div>
        <div className="para">
            <h3>Набор продуктов FABERLIC HOME в подарок!</h3>
            <p className="para_t">Всем, кто зарегистрируется в Faberlic с 20 мая по 9 июня 2024 г. и совершит покупку в периоде №08/2024, дарим средство для чистки духовок и плит «Сила цитрусов» (30119), средство для очищения ванной комнаты «Антиналет» (30220), концентрированное моющее средство «Универсальное» (30217) по следующему каталогу с 10 по 30 июня 2024 г. </p>
        </div>
    </div>
   
 
       
      
  
    </>
  );
}

export default Beginner;