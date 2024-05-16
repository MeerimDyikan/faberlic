import './Footer.css';
import footerImg from "../../images/1 (1).svg"
import footerImg1 from "../../images/2.svg"
import footerImg2 from "../../images/3.svg"
import footerImg3 from "../../images/telegram-logo-thin-svgrepo-com.svg"
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <footer className="footer">
    <div className="container">
        <div className="row footerContent  flex ">
            <div className="col-md-30 col-sm-40">
                		<div className="moduletable_menufooter "> 
					<ul className="menu_menufooter ">
          <h3>КОМПАНИЯ</h3>
            <li>О Faberlic</li>
            <li>Корпоративные ценности</li> 
            <li>Центр научных разработок</li>
             <li>Собственное производство</li>
             <li>Новости</li>
              <li>Новинки каталога</li> 
              <li>Контакты</li>
              <Link className="Catalogue" to ="https://faberlic.com/index.php?option=com_flippingbook&view=catalog"> </Link>
               </ul>
	
            </div>  </div>
            <div className="col-md-15 col-sm-20">
                		<div className="moduletable">
					
<ul className="footer-spec-list menu-icon">
    <li><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=379&amp;Itemid=2678"><i className="footer-icon partnership"></i>Партнерство</a></li><li><a href="index.php?option=com_geography&amp;view=geography"><i class="footer-icon point-delivery"></i>Пункты выдачи</a></li><li><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=1086&amp;Itemid=5342"><i className="footer-icon mobile-app"></i>Обучение</a></li><li><a href="index.php?option=com_flippingbook&amp;view=catalog&amp;Itemid=2071"><i className="footer-icon business-news"></i>Листать каталог</a></li></ul>		</div>
	
            </div>
            <div className="col-md-15 col-sm-20 footer-bottom">
                <div>
                    <div className="payment-logo"></div>                    <div>
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
        </div>
    </div>
</footer>
    </>
  );
}

export default Footer;