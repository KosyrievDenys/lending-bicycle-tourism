import React, { useState } from 'react';

//libs
import cn from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";

//components
import { SwiperButtons } from "./assets/components/SwiperButtons/SwiperButtons";

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
import adaptive from './assets/images/adaptive.png';

const tel = '+38-00-785-77-33';
const email = '1@1.com';

const dates = [
  { date: '3 вересня', seats: '3 місця', price: 3500 },
  { date: '5 вересня', price: 2500 },
  { date: '6 вересня', price: 4500 },
  { date: '28 вересня', seats: '8 місць', price: 5500 },
];

const faq = [
  {
    question: 'У меня нет своего велосипеда, а поехать в тур хочется, как мне быть?',
    answer: 'Вы можете отправиться в  велотур как на своем велосипеде, так и на арендованном у нас. Стоимость аренды велосипеда у нас составляет 500 руб + залог (1000 руб). К велосипеду также предоставляется шлем. По завершению поездки залог возвращается в полном объеме.'
  },
  {
    question: 'Смогу ли я проехать весь веломаршрут без какой-либо особой физической подготовки?',
    // answer: 'Вы можете отправиться в  велотур как на своем велосипеде, так и на арендованном у нас. Стоимость аренды велосипеда у нас составляет 500 руб + залог (1000 руб). К велосипеду также предоставляется шлем. По завершению поездки залог возвращается в полном объеме.'
  },
  {
    question: 'Сколько времени займет вся поездка от подножия горы до ее вершины?',
    // answer: 'Вы можете отправиться в  велотур как на своем велосипеде, так и на арендованном у нас. Стоимость аренды велосипеда у нас составляет 500 руб + залог (1000 руб). К велосипеду также предоставляется шлем. По завершению поездки залог возвращается в полном объеме.'
  },
  {
    question: 'Сколько человек в группе и кто нас будет сопровождать?',
    // answer: 'Вы можете отправиться в  велотур как на своем велосипеде, так и на арендованном у нас. Стоимость аренды велосипеда у нас составляет 500 руб + залог (1000 руб). К велосипеду также предоставляется шлем. По завершению поездки залог возвращается в полном объеме.'
  },
];

const validationSchema = yup.object().shape({
  name: yup.string().required("Введіть ім'я"),
  phone: yup.string().required('Введіть номер телефону'),
});


export const App = () => {

  const [formMessage, setFormMessage] = useState(false);
  const [openAnswer, setOpenAnswer] = useState(false);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={cn('container', styles.container)}>
          <div className={styles.content}>
            <div className={styles.left}>
              <p>Bikeingora</p>
              <img src={bicycleIcon} alt='' />
            </div>
            <div className={styles.right}>
              <a href={`tel:${tel}`}>{tel}</a>
              <a href='#' className='btn'>Забронювати</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.banner}>
          <div className={cn('container', styles.container)}>
            <div className={styles.content}>
              <img src={adaptive} alt='' className='cover' />
              <h1>Велотур в горы</h1>
              <div className={styles.desktop}>
                Совершите незабываемое путешествие на вершину горы с вашим двухколесным другом!
                <a href='#' className='btn'>Забронювати</a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mobBanner}>
          <div className='container'>
            <div className={styles.desktop}>
              <img src={formBack} alt='' className='cover' />
              Совершите незабываемое путешествие на вершину горы с вашим двухколесным другом!
              <a href='#' className='btn'>Забронювати</a>
            </div>
          </div>
        </section>
        <section className={styles.description}>
          <div className={cn('container', styles.container)}>
            <div className={styles.content}>
              <div className={styles.block}>
                <div className={styles.img}>
                  <img src={bicycle} alt='' />
                </div>
                <div className={styles.text}>
                  <h3>Безпека</h3>
                  <p>
                    В велопутешествии вас будет сопровождать профессиональный тренер- гид, который не позволит вам
                    получить травму
                  </p>
                </div>
              </div>
              <div className={styles.block}>
                <div className={styles.img}>
                  <img src={heart} alt='' />
                </div>
                <div className={styles.text}>
                  <h3>Незабутні емоції</h3>
                  <p>
                    Свежий горный воздух, голубое небо, солнце и двухколесный друг рядом. Что может быть лучше?
                  </p>
                </div>
              </div>
              <div className={styles.block}>
                <div className={styles.img}>
                  <img src={price} alt='' />
                </div>
                <div className={styles.text}>
                  <h3>Доступна ціна</h3>
                  <p>
                    Стоимость путешествия вас приятно удивит. Такую велопрогулку может позволить себе каждый!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.reviews}>
          <div className={cn('container', styles.container)}>
            <div className={styles.content}>
              <h2 className={styles.title}>Відгуки наших клієнтів</h2>
              <img src={adaptive} alt='' className={cn(styles.right, 'cover')} />
              <div className={styles.left}>
                <img src={reviewsBack} alt='' className={cn(styles.back, 'cover')} />
                <h2>Відгуки наших клієнтів</h2>
                <Swiper
                  className='swiper-reviews'
                  slidesPerView={1}
                  centeredSlides={true}
                  grabCursor={true}
                  spaceBetween={20}
                  navigation={true}
                  pagination={true}
                  modules={[Navigation, Pagination]}
                >
                  <SwiperSlide
                    className={styles.slide}
                  >
                    “Прекрасная велопрогулка по горной местности в чудесной компании! Привез с собой массу положительных
                    эмоций и красивых фотографий!”
                    <h3>Андрій Шварц</h3>
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.slide}
                  >
                    “Прекрасная велопрогулка по горной местности в чудесной компании! Привез с собой массу положительных
                    эмоций и красивых фотографий!”
                    <h3>Андрій Шварц</h3>
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.slide}
                  >
                    “Прекрасная велопрогулка по горной местности в чудесной компании! Привез с собой массу положительных
                    эмоций и красивых фотографий!”
                    <h3>Андрій Шварц</h3>
                  </SwiperSlide>
                  <SwiperSlide
                    className={styles.slide}
                  >
                    “Прекрасная велопрогулка по горной местности в чудесной компании! Привез с собой массу положительных
                    эмоций и красивых фотографий!”
                    <h3>Андрій Шварц</h3>
                  </SwiperSlide>
                  <SwiperButtons />
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className={cn('container', styles.container)}>
            <h2>Особливості туру</h2>
            <div className={styles.content}>
              <img src={adaptive} alt='' className={cn('cover', styles.left)} />
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
          <div className={cn('container', styles.container)}>
            <h2>Найближчі дати заїздів у вересні:</h2>
            <div className={styles.content}>
              {dates.map((date, index) => (
                <div className={styles.block} key={index}>
                  <div>{date.date}</div>
                  <div className={cn(date.seats && styles.seats)}>
                    Залишилось {date.seats}</div>
                  <div>{date.price}</div>
                </div>
              ))}
            </div>
            <a href='#' className='btn'>Забронювати</a>
          </div>
        </section>
        <section className={styles.faq}>
          <div className={cn('container', styles.container)}>
            <h2>FAQ</h2>
            <ul>
              {faq.map((question, index) => (
                <li className={styles.select} key={index}>
                  <div
                    className={styles.question}
                  >
                    {question.question}
                    <img src={arrow} alt='' />
                  </div>
                  <div className={styles.answer}>
                    {question.answer}
                  </div>
                </li>))}
            </ul>
          </div>
        </section>
        <section className={styles.communication}>
          <div className={cn('container', styles.container)}>
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
                  <Form className={styles.form}>
                    <div className={cn('container', styles.container)}>
                      <label>
                        <h3>Ім'я</h3>
                        <Field
                          name='name'
                          type='text'
                          placeholder='Як до вас звертатись?'
                        />
                        {errors.name && touched.name && (
                          <span className={styles.error}>{errors.name}</span>
                        )}
                      </label>
                      <label>
                        <h3>Телефон</h3>
                        <Field
                          name='phone'
                          type='text'
                        />
                        {errors.phone && touched.phone && (
                          <span className={styles.error}>{errors.phone}</span>
                        )}
                      </label>
                      {!formMessage && <div
                        className={styles.addMessage}
                        onClick={() => setFormMessage(true)}>
                        + Добавити повідомлення
                      </div>}
                      {formMessage && <label>
                        <h3>Повідомлення</h3>
                        <Field
                          name='message'
                          type='text'
                        />
                      </label>}
                      <button type='submit' className='btn'>
                        Відправити
                      </button>
                      <p>
                        Натискаючи на кнопки ви погоджуєтесь з
                        <a href='#'>Політикою конфіденційності</a>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className={styles.contacts}>
                <div className='container'>
                  <img src={formBack} alt='' className={cn('cover', styles.back)} />
                  <ul>
                    <li><h3>Наші контакти:</h3></li>
                    <li><a href={`tel:${tel}`}>{tel}</a></li>
                    <li><a href={`email:${email}`}>{email}</a></li>
                    <li><a href='#'>Да Вінчі</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>@ Bikeingora Inc</footer>
    </div>
  );
}

