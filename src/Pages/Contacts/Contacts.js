import './Contact.css';

function Contact() {
  return (
    <>
      <div className="page-header componentheading">
        <h1>
          Контакты        </h1>

        <div className="info flex">
          <div className="right_info">          <h3 className="info_f">Реквизиты компании:</h3>
            <p className="info_p">Наименование организации:
              ООО «Фаберлик-Алатоо»</p>

            <h3 className="info_f">Юридический и фактический адрес компании:</h3>
            <p className="info_p">Кыргызстан 720010, г.Бишкек, ул. Московская 219
              ОКПО 24560761 ИНН 00412200710096 Рег. № СФ 04-57711-03 999 УГНС по ККН</p></div>

          <div className="left_info"> <h3 className="info_f">Реквизиты для оплаты в сомах:</h3>
            <p className="info_p">P/C 1180000013512411
              ЗАО «Демир Кыргыз Интернэшнл Банк»
              БИК 118005</p>

            <h3 className="info_f">Исполнительный орган:</h3>
            <p className="info_p">Директор
              Выродова Н.М.
            </p></div>


        </div>
      </div>

    </>
  );
}

export default Contact;