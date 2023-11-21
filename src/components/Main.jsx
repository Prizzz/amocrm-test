import React from 'react';

function Main() {
  return (
    <main className="content">
      <section className="info" aria-label="Информация о продукте">
        <div className="info__heading">
          <h1 className="info__heading-title">Зарабатывайте больше 
            <span className="gradient fw_900"> c&nbsp;<span className="uppercase">Welbex</span></span>
          </h1>
          <p className="info__heading-subtitle">Развиваем и&nbsp;контролируем продажи за&nbsp;вас</p>
        </div>
        <div className="info__gifts info__gifts_desktop">
          <p className="info__gifts-title">Вместе с&nbsp;
            <span className="gradient uppercase montserrat fw_600">бесплатной консультацией</span> мы дарим:
          </p>
          <ul className="info__gifts-list">
            <li className="info__gift">
              <h2 className="info__gift-title">Виджеты</h2>
              <p className="info__gift-subtitle">30 готовых решений</p>
            </li>
            <li className="info__gift">
              <h2 className="info__gift-title">Dashboard</h2>
              <p className="info__gift-subtitle">с показателями вашего бизнеса</p>
            </li>
            <li className="info__gift">
              <h2 className="info__gift-title">Skype аудит</h2>
              <p className="info__gift-subtitle">отдела продаж и&nbsp;CRM системы</p>
            </li>
            <li className="info__gift">
              <h2 className="info__gift-title">35 дней</h2>
              <p className="info__gift-subtitle">использования CRM</p>
            </li>
          </ul>
          <button className="info__get-consult" type="button">Получить консультацию</button> 
        </div>
        <div className="info__gifts info__gifts_mobile">
          <p className="info__gifts-title">Вместе с&nbsp;
            <span className="gradient">бесплатной консультацией</span> мы дарим:
          </p>
          <ul className="info__gifts-list">
            <li className="info__gift">
              <p className="info__gift-subtitle">Skype аудит</p>
            </li>
            <li className="info__gift">
              <p className="info__gift-subtitle">30 виджетов</p>
            </li>
            <li className="info__gift">
              <p className="info__gift-subtitle">Dashboard</p>
            </li>
            <li className="info__gift">
              <p className="info__gift-subtitle">месяц amocrm</p>
            </li>
          </ul>
        </div>
      </section>
      <div className="content__decoration-1"></div>
      <div className="content__decoration-2"></div>
      <div className="content__decoration-3"></div>
      <div className="content__decoration-4"></div>
      <div className="content__decoration-5"></div>
      <div className="content__decoration-6"></div>
    </main>
  )
}

export default Main;