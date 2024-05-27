import './Delivery.css';

function Delivery() {
    return (
        <>
          <div className="delivery flex" >
            <div className="del"> <h3 className="date">СРОКИ ДОСТАВКИ</h3>
            <p className="del_p">Мы доставляем заказы от 3-х дней до недели. Сроки зависят от отдаленности Вашего региона.</p></div>
            <div className="del"> <h3 className="check">ПРОВЕРЬТЕ ЗАКАЗ</h3>
            <p className="del_p">При получении проверьте, пожалуйста, соответствие позиций заказа Вашей накладной, количество товаров и комплектность (в случае, если продукция продается наборами или комплектами)</p></div>
           
          </div>
          <div className="cond">СПОСОБЫ И УСЛОВИЯ ДОСТАВКИ</div>

          <div class="row page_ovd_menu">
<div className="col-lg-15 col-md-15 col-sm-15 col-xs-30 noPadding page_ovd_menu-items m1" data-nummenu="m1" data-show="ver1" data-title="Стоимость доставки">
<p className="page_ovd_menu-items-name">Стоимость доставки</p>
</div>

<div className="col-lg-15 col-md-15 col-sm-15 col-xs-30 noPadding page_ovd_menu-items m1 current" data-nummenu="m1" data-show="ver2" data-title="Сроки доставки">
<p className="page_ovd_menu-items-name">Сроки доставки</p>
</div>

<div className="col-lg-15 col-md-15 col-sm-15 col-xs-30 noPadding page_ovd_menu-items m1" data-nummenu="m1" data-show="ver3" data-title="Как отследить заказ">
<p className="page_ovd_menu-items-name">Как отследить заказ</p>
</div>

<div className="col-lg-15 col-md-15 col-sm-15 col-xs-30 noPadding page_ovd_menu-items m1" data-nummenu="m1" data-show="ver4" data-title="Срок хранения заказа">
<p class="page_ovd_menu-items-name">Срок хранения заказа</p>
</div>

 <div className="col-lg-15 col-md-15 col-sm-15 col-xs-30 noPadding page_ovd_menu-items m1" data-nummenu="m1" data-show="ver5" data-title="Пункты выдачи">
<p className="page_ovd_menu-items-name">Пункты выдачи</p>
</div>
</div>

	
        </>
    );
}

export default Delivery;