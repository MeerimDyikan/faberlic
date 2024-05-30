import './Footer.css';
import footerImg from "../../images/1 (1).svg"
import footerImg1 from "../../images/2.svg"
import footerImg2 from "../../images/3.svg"
import footerImg3 from "../../images/telegram-logo-thin-svgrepo-com.svg"
import { Link } from 'react-router-dom';
import Logo  from '../Logo/Logo';

function Footer() {
  return (
    <>
    
      <footer className="footer">
    
    <div className="container flex">
    <Logo/>
    
       <div className="company_footer flex">
      
        <nav> <h3 class="footer_tit">КОМПАНИЯ
</h3>
        <ul class="footer_li">
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=13&Itemid=5306">О Faberlic</Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=1075&Itemid=5307">Корпоративные ценности</Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=11&Itemid=5308">Центр научных разработок</Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=10&Itemid=5309">Собственное производство</Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=10&Itemid=5309">
         Новости</Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&layout=newsfeed&view=service&category=novelty">Новинки каталога
         </Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=65&Itemid=5313">
         Контакты</Link></li>

        </ul></nav>
        <nav> <h3 class="footer_tit">СЕРВИС




</h3>
        <ul footer_li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=13&Itemid=5306">Как оформить заказ</Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=1075&Itemid=5307">Оплата</Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=11&Itemid=5308">Доставка</Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=10&Itemid=5309">Возврат</Link></li>
         <li><Link to="https://faberlic.com/index.php?option=com_content&view=category&layout=blog&id=10&Itemid=5309">
        
Регистрация</Link></li>
        
        </ul></nav>
       
       </div>
            </div>
            <div className="col-md-15  footer-bottom">
                <div>
                    <div className="payment-logo">  </div>                    <div>
                    <div className="footer_icons flex">
					
            <Link className="footer_ic footer_ic-tw" to ="https://twitter.com/i/flow/login?redirect_after_login=%2Ffaberlicrussia"><img src={footerImg} alt="" /></Link>
					<Link className="footer_ic footer_ic-fb" to ="https://www.facebook.com/Faberlickyrgyzstanofficial"><img src={footerImg1} alt="" /></Link>
            <Link className="footer_ic footer_ic footer_ic-inst" to ="https://www.instagram.com/faberlic.kyrgyzstan.official"> <img src={footerImg2} alt="" /> </Link>
            <Link className="footer_ic footer_ic-tel" to ="https://t.me/official_faberlic"><img src={footerImg3} alt="" /></Link>
            </div>
					
	
                        <div className="footerCopyright">Copyright © 2024 АО «Фаберлик»</div>
                    </div>
                </div>
            </div>
            
</footer>
	
                  		
	
    </>
  );
}

export default Footer;