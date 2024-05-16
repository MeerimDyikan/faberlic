import './Footer.css';
import footerImg from "../../images/1 (1).svg"
import footerImg1 from "../../images/2.svg"
import footerImg2 from "../../images/3.svg"
import footerImg3 from "../../images/4.svg"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
    <div className="container">
        <div className="row footerContent  flex ">
            <div className="col-md-30 col-sm-40">
                		<div className="moduletable_menufooter ">
					<ul className="menu_menufooter flex" id="footer-menu "><li className="item5314 parent col-xs-60 col-sm-30 "><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=13&amp;Itemid=5306"><span>Компания</span></a><ul id="footer_item5314"><li class="item5315"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=13&amp;Itemid=5306"><span>О Faberlic</span></a></li><li className="item5318"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=1075&amp;Itemid=5307"><span>Корпоративные ценности</span></a></li><li className="item5319"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=11&amp;Itemid=5308"><span>Центр научных разработок</span></a></li><li className="item5320"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=10&amp;Itemid=5309"><span>Собственное производство</span></a></li><li className="item5321"><a href="index.php?option=com_content&amp;layout=newsfeed&amp;view=service&amp;category=news"><span>Новости</span></a></li><li className="item5322"><a href="index.php?option=com_content&amp;layout=newsfeed&amp;view=service&amp;category=novelty"><span>Новинки каталога</span></a></li><li className="item5325"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=65&amp;Itemid=5313"><span>Контакты</span></a></li></ul></li><li className="item4352 parent col-xs-60 col-sm-30"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=502&amp;Itemid=3494"><span>Сервис</span></a><ul id="footer_item4352"><li className="item4382"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=502&amp;Itemid=3494"><span>Как оформить заказ</span></a></li><li className="item4388"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=326&amp;Itemid=2409"><span>Оплата</span></a></li><li className="item5178"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=332&amp;Itemid=2415"><span>Доставка</span></a></li><li className="item5170"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=353&amp;Itemid=2442"><span>Возврат</span></a></li><li class="item4406"><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=328&amp;Itemid=2411"><span>Регистрация</span></a></li></ul></li></ul>		</div>
	
            </div>
            <div className="col-md-15 col-sm-20">
                		<div className="moduletable">
					
<ul className="footer-spec-list menu-icon">
    <li><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=379&amp;Itemid=2678"><i className="footer-icon partnership"></i>Партнерство</a></li><li><a href="index.php?option=com_geography&amp;view=geography"><i class="footer-icon point-delivery"></i>Пункты выдачи</a></li><li><a href="index.php?option=com_content&amp;view=category&amp;layout=blog&amp;id=1086&amp;Itemid=5342"><i className="footer-icon mobile-app"></i>Обучение</a></li><li><a href="index.php?option=com_flippingbook&amp;view=catalog&amp;Itemid=2071"><i className="footer-icon business-news"></i>Листать каталог</a></li></ul>		</div>
	
            </div>
            <div className="col-md-15 col-sm-20 footer-bottom">
                <div>
                    <div className="payment-logo"></div>                    <div>
                    <div className="footer_icons flex">
						<a href={footerImg}className="footer_ic footer_ic-tw">https://twitter.com/i/flow/login?redirect_after_login=%2Ffaberlicrussia</a>
						<a href={footerImg1} className="footer_ic footer_ic-fb"> https://www.facebook.com/Faberlickyrgyzstanofficial/</a>
						<a href="https://www.instagram.com/faberlic.kyrgyzstan.official"className="footer_ic footer_ic footer_ic-inst"></a>
					<Link><img src={footerImg2} alt="" /></Link>
            <Link className="footer_ic footer_ic footer_ic-inst" to ="https://www.instagram.com/faberlic.kyrgyzstan.official"> <img src={footerImg2} alt="" /> </Link>
						<a href={footerImg3} className="footer_ic footer_ic-git"></a>
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