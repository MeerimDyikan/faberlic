import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom'
import imgLogo from "../../images/logo.jpg"
function Header() {
  return (
    <header className="Header row">
      
        <div className="col-lg-24 col-sm-20 col-xs-20 noPadding">

           
<ul className="locationMenu">
<li className="dropdown">
<span className="headerLocation headerLocationCountry" id="btnCountry" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span >&nbsp;</span>
    <a href="" className="locationItem">KG</a>    
</span>

<div className="popupLocation popupCountry dropdown-menu" aria-labelledby="btnCountry">

    <h4>Выбор местоположения</h4>
        <div />
        <div className="wrapList jsScrollCountry" >        
        </div>
</div>
</li>

<li className="dropdown">
<span className="headerLocation headerLocationLang" id="btnLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<a href="" className="locationItem">ru</a>
</span>

<div class="popupLocation popupLang dropdown-menu" aria-labelledby="btnLang">
    <h4>Выберите язык</h4>
    <div >
        <div class="wrapList jsScrollLang  scrollLangUnit" >
            
        <div class="jspContainer" ><div class="jspPane" ><ol data-type="language">                <li class="" data-id="ru">Русский - RU</li> <li className="" data-id="ky">Кыргыз тили - KY</li>            </ol></div></div></div>
     </div>
</div>
</li>
</ul>
<form id="fllocation" action="" method="post">
<input type="hidden" name="r" value="1000034185671"/>
<input type="hidden" name="lang" value=""/>
</form>

<div class="clear"></div><div className="modal fade" id="modal-of-change-bs" tabindex="-1" role="dialog" aria-labelledby="modal-of-change-bsLabel" aria-hidden="true">
					<div className="modal-dialog ">
						<div className="modal-content"><div class="modal-header">	<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>	<h4 class="modal-title" id="modal-of-change-bsLabel">&nbsp;</h4>
						</div><div className="modal-body">
							<div class="modal-of-change-bs_content">
    <div className="content-header">
        <h1>Смена региона</h1>
    </div>
    <div className="content-body">
        <p>Вы пытаетесь выбрать регион другой версии сайта. В случае перехода, вам придется набирать товары в корзину заново.</p>
    </div>
    <div className="content-button">
        <a id="modal-of-change-bs_btn-continue">Перейти</a>
        <button id="modal-of-change-bs_btn-close" type="button" className="" data-dismiss="modal" aria-hidden="true">Остаться</button>
    </div>
</div>

							</div></div>
					</div>
				</div>

            <div className="headerPromo">
                        <a href="index.php?option=com_content&amp;view=service&amp;layout=content&amp;content=welcome" className="promoLink" target="_blank">Новым Консультантам</a>
    
            </div>

            <div className="navbar-header">
                <a href="#menumobile_hamburger" id="toggle_menumobile_hamburger" className="navbar-toggle collapsed" data-toggle="collapse" data-parent="#menumobile" aria-expanded="false">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </a>
            </div>
        </div>

        <div className="col-lg-12 col-sm-20 col-xs-20">
                            <a href="/" className="headerLogo"> <img src={imgLogo} alt=""/></a>
        </div>

        <div className="col-lg-24 col-sm-20 col-xs-20">
    <div className="headerLk dropdown">
        <div className="lkLogin" id="btnLogin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="jQuery.FLCookies.set('login_form_shown',1,{expires:0});">
            <span className="lkLoginBtn">Вход</span>
        </div>
        <div id="popupFormAuth" className="popupAuth dropdown-menu" aria-labelledby="btnLogin">
            <div className="loginForm" data-url_login="/index.php?option=com_ajax&amp;jsonrpc=Loginauth" data-url_recovery="/index.php?option=com_ajax&amp;jsonrpc=Password"><form className="floginForm" data-toggle="validator" role="form" data-focus="false" novalidate="true" data-gtm-form-interact-id="0">
                        <div className="loginFormBlock formBlock">
                            <div className="loginHeader">Личный кабинет</div>
                            <div className="bindSocialBlock">
                                    <div className="otherBlock">
                                        <div className="form-group">
                                            <h3>Найдены пользователи с похожим профилем:</h3>
                                            <div className="other"></div>
                                            <hr/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label classNAme="checkbox-label">
                                            <input className="checkbox" name="social_bind" value="0" type="radio"/> <b>У меня другой аккаунт</b> <span className="checkmark"></span>
                                        </label>
                                    </div>
                                <div className="socialActions">
                                    <p className="upper">или</p>
                                    <a target="_parent" href="/index.php?option=com_flform&amp;idform=514" className="btn btn-primary but_invert ">Зарегистрироваться</a>
                                </div>
                            </div>
                            <div className="form-group inputLoginBlock">
                                <label className="control-label">Введите номер покупателя / телефона</label>
                                <input name="login" type="text" required=""/>
                                Номер телефона должен быть подтверждён и введён в формате +79991112233
                            </div>
                            <div className="passwordLoginBlock">
                                <div className="form-group">
                                    <label className="control-label">Введите ключ</label>
                                    <div className="password-eye-toggle">
                                        <input name="password" type="password" required="" data-gtm-form-interact-field-id="0"/>
                                        <span className="eye-toggle close-eye" title="Показать пароль"></span>
                                    </div>
                                </div>
                                <label className="form-group checkbox-label">
                                    <input name="remember" checked="checked" className="checkbox" type="checkbox"/> Запомнить меня <span className="checkmark"></span>
                                </label>
                            <div className="message"></div>
                            <input type="submit" className="btn btn-primary" value="Войти"/>
                            <span className="loginBtn openRemind">Забыли данные для входа?</span>
                            <a target="_parent" href="/index.php?option=com_flform&amp;idform=514" className="forgotLoginBtn">Зарегистрироваться</a>
                            </div>
                        </div>
                        <div className="loginsuccessFormBlock formBlock">
                            <div className="loginHeader">Личный кабинет</div>
                            <div className="message_success"></div>
                            <div className="waitingforupdate">Ожидайте, сейчас страница будет обновлена.</div>
                            <div className="loginBtn openRefresh">Обновить страницу</div>
                        </div>
                    </form><form className="fremindForm" data-toggle="validator" role="form" novalidate="true">
                        <div className="remindFormBlock formBlock">
                            <div className="loginHeader">Напомнить данные для входа</div>
                            <div className="form-group">
                                <label className="control-label">Введите номер телефона</label>
                                <input name="remind" type="text" required=""/>
                                   Номер телефона должен быть подтверждён и введён в формате +79991112233
                            </div>
                            <div className="message"></div>
                            <input type="submit" className="btn btn-primary disabled" value="Получить"/> <span className="loginBtn openLogin">Назад</span></div>
                    </form><input type="hidden" className="registration_url" value="/index.php?option=com_flform&amp;idform=514"/><div className="loginLoading"><span><i className="fa fa-spinner fa-pulse"></i></span></div></div>        </div>
        <a href="/index.php?option=com_flform&amp;idform=514&amp;lang=ru" className="lkReg">Регистрация</a>
    </div>
     <div className="headerLk otherIcons">
        <a href="/index.php?option=com_flippingbook&amp;view=catalog&amp;Itemid=2071&amp;lang=ru" rel="tooltip" title="Flash-Каталог" className="headerIcons lkBook"></a>     
     <a id="flbasket" href="/index.php?option=com_catalog&amp;view=cart&amp;lang=ru" title="" class="headerIcons lkBasket " data-full-cart="Кол-во товаров: #1" data-empty-cart="В корзине пока нет товаров" data-toggle="popover" data-html="true" data-trigger="hover" data-placement="bottom" data-content="<div class='basketPopover'>
<div class='noGoodsInBasket'>В корзине пока нет товаров</div>
                            <div class='bpv_buttonHost'><a href='/index.php?option=com_catalog&amp;view=cart&amp;lang=ru' class='btn btn-primary btn-xs'>В корзину</a></div>        
                                    </div>" data-original-title=""></a>    </div>
</div>

    
     
    </header>
  );
}

export default Header;