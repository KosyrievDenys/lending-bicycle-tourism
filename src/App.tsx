import React, { useState } from 'react';

//libs
import cn from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination } from "swiper";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

//assets
import styles from './App.module.scss';
import arrow from './assets/images/icons/arrow.svg';
import bicycleIcon from './assets/images/icons/bicycle.svg';
import banner from './assets/images/banner.jpg';
import features from './assets/images/features.jpg';
import reviews from './assets/images/reviews.jpg';
import bicycle from './assets/images/bicycle.png';
import formBack from './assets/images/form-back.png';
import heart from './assets/images/heart.png';
import price from './assets/images/price.png';
import reviewsBack from './assets/images/reviews-back.png';

const tel = '+38-00-785-77-33';
const email = '1@1.com';

const dates = [
  { date: '3 вересня', seats: '3 місця', price: 3500 },
  { date: '5 вересня', price: 2500 },
  { date: '6 вересня', price: 4500 },
  { date: '7 вересня', seats: '8 місць', price: 5500 },
];

const faq = [
  {
    question: 'У меня нет своего велосипеда, а поехать в тур хочется, как мне быть?',
    answer: 'Вы можете отправиться в  велотур как на своем велосипеде, так и на арендованном у нас. Стоимость аренды велосипеда у нас составляет 500 руб + залог (1000 руб). К велосипеду также предоставляется шлем. По завершению поездки залог возвращается в полном объеме.'
  },
  {
    question: 'Смогу ли я проехать весь веломаршрут без какой-либо особой физической подготовки?',
    answer: 'Вы можете отправиться в  велотур как на своем велосипеде, так и на арендованном у нас. Стоимость аренды велосипеда у нас составляет 500 руб + залог (1000 руб). К велосипеду также предоставляется шлем. По завершению поездки залог возвращается в полном объеме.'
  },
  {
    question: 'Сколько времени займет вся поездка от подножия горы до ее вершины?',
    answer: 'Вы можете отправиться в  велотур как на своем велосипеде, так и на арендованном у нас. Стоимость аренды велосипеда у нас составляет 500 руб + залог (1000 руб). К велосипеду также предоставляется шлем. По завершению поездки залог возвращается в полном объеме.'
  },
  {
    question: 'Сколько человек в группе и кто нас будет сопровождать?',
    answer: 'Вы можете отправиться в  велотур как на своем велосипеде, так и на арендованном у нас. Стоимость аренды велосипеда у нас составляет 500 руб + залог (1000 руб). К велосипеду также предоставляется шлем. По завершению поездки залог возвращается в полном объеме.'
  },
];

const validationSchema = yup.object().shape({
  name: yup.string().required("Введіть ім'я"),
  phone: yup.string().required('Введіть номер телефону'),
});


export const App = () => {

  const [formMessage, setFormMessage] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.left}>
              Bikeingora
              <img src={bicycleIcon} alt='' />
            </div>
            <div className={styles.right}>
              <a href={`tel:${tel}`}>{tel}</a>
              <a href='#' className={styles.btn}>Забронювати</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.banner}>
          <img src={banner} alt='' />
          <div className='container'>
            <h1>Велотур в горы</h1>
            <div className={styles.desktop}>
              Совершите незабываемое путешествие на вершину горы с вашим двухколесным другом!
              <a href='#' className={styles.btn}>Забронювати</a>
            </div>
          </div>
        </section>
        <div className={styles.mobBanner}>
          <img src={formBack} alt='' />
          <div className={styles.desktop}>
            Совершите незабываемое путешествие на вершину горы с вашим двухколесным другом!
            <a href='#' className={styles.btn}>Забронювати</a>
          </div>
        </div>
        <section className={styles.description}>
          <div className='container'>
            <div className={styles.content}>
              <div>
                <img src={bicycle} alt='' />
                <h3>Безпека</h3>
                <p>
                  В велопутешествии вас будет сопровождать профессиональный тренер- гид, который не позволит вам
                  получить травму
                </p>
              </div>
              <div>
                <img src={heart} alt='' />
                <h3>Незабутні емоції</h3>
                <p>
                  Свежий горный воздух, голубое небо, солнце и двухколесный друг рядом. Что может быть лучше?
                </p>
              </div>
              <div>
                <img src={price} alt='' />
                <h3>Доступна ціна</h3>
                <p>
                  Стоимость путешествия вас приятно удивит. Такую велопрогулку может позволить себе каждый!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.reviews}>
          <div className='container'>
            <div className={styles.content}>
              <div className={styles.left}>
                <img src={reviewsBack} alt='' />
                <h2>Відгуки наших клієнтів</h2>
                <Swiper
                  slidesPerView={1}
                  centeredSlides={true}
                  grabCursor={true}
                  spaceBetween={20}
                  navigation={true}
                  pagination={true}
                  modules={[Navigation, Pagination]}
                >
                  <SwiperSlide>
                    “Прекрасная велопрогулка по горной местности в чудесной компании! Привез с собой массу положительных
                    эмоций и красивых фотографий!”
                    <h3>Андрій Шварц</h3>
                  </SwiperSlide>
                  <SwiperSlide>
                    “Прекрасная велопрогулка по горной местности в чудесной компании! Привез с собой массу положительных
                    эмоций и красивых фотографий!”
                    <h3>Андрій Шварц</h3>
                  </SwiperSlide>
                  <SwiperSlide>
                    “Прекрасная велопрогулка по горной местности в чудесной компании! Привез с собой массу положительных
                    эмоций и красивых фотографий!”
                    <h3>Андрій Шварц</h3>
                  </SwiperSlide>
                </Swiper>
              </div>
              <img src={reviews} alt='' className={styles.right} />
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className='container'>
            <h2>Особливості туру</h2>
            <div className={styles.content}>
              <img src={features} alt='' />
              <ul>
                <li>Велопрогулка совершается на вашем или арендованном у нас велосипеде.</li>
                <li>Маршрут пролегает по горной местности с набором высоты до 750 метров.</li>
                <li>Путь покорится практичеки каждому, даже с невысокой физической подготовкой.</li>
                <li>Можно поехать всей семьей! К нашей велопрогулке допускаются дети от 12 лет, в сопровождении
                  взрослых
                </li>
                <li>На протяжении всего маршрута вас будет сопровождать профессиональный тренер-гид.</li>
                <li>Не упустите возможность покорить вершину горы и насладиться потрясающим видом!</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.dates}>
          <div className='container'>
            <h2>Найближчі дати заїздів у вересні:</h2>
            <div className={styles.content}>
              {dates.map((date, index) => (
                <div className={styles.block} key={index}>
                  <div>{date.date}</div>
                  <div className={styles.seats}>{date.seats}</div>
                  <div>{date.price}</div>
                </div>
              ))}
            </div>
            <a href='#' className={styles.btn}>Забронювати</a>
          </div>
        </section>
        <section className={styles.faq}>
          <div className='container'>
            <h2>FAQ</h2>
            {faq.map((question, index) => (
              <div className={styles.select} key={index}>
                <div className={styles.question}>
                  {question.question}
                  <img src={arrow} alt='' />
                </div>
                <div className={styles.answer}>
                  {question.answer}
                </div>
              </div>))}
          </div>
        </section>
        <section className={styles.communication}>
          <div className='container'>
            <h2>Зв'язок з нами</h2>
            <div className={styles.content}>
              <Formik
                validationSchema={validationSchema}
                initialValues={{
                  name: '',
                  phone: '',
                  message: '',
                }}
                onSubmit={values => console.log(values)}
              >
                {({ errors, touched }) => (
                  <Form>
                    <label>
                      <span>Ім'я</span>
                      <Field
                        name='name'
                        type='text'
                        description='Як до вас звертатись?'
                      />
                      {errors.name && touched.name && (
                        <span className={styles.error}>{errors.name}</span>
                      )}
                    </label>
                    <label>
                      <span>Телефон</span>
                      <Field
                        name='phone'
                        type='text'
                      />
                      {errors.phone && touched.phone && (
                        <span className={styles.error}>{errors.phone}</span>
                      )}
                    </label>
                    {!formMessage && <div onClick={() => setFormMessage(true)}>
                      + Добавити повідомлення
                    </div>}
                    {formMessage && <label>
                      <span>Повідомлення</span>
                      <Field
                        name='message'
                        type='text'
                      />
                    </label>}
                    <button type='submit' className={styles.btn}>
                      Відправити
                    </button>
                    <p>
                      Натискаючи на кнопки ви погоджуєтесь з
                      <a href='#'>Політикою конфіденційності</a>
                    </p>
                  </Form>
                )}
              </Formik>
              <div className={styles.contacts}>
                <img src={formBack} alt='' />
                <div>
                  <a href={`tel:${tel}`}>{tel}</a>
                  <a href={`email:${email}`}>{email}</a>
                  <a href='#'>Да Вінчі</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>@ Bikeingora Inc</footer>
    </div>
  );
}

