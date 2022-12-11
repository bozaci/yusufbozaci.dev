/* eslint-disable no-undef */
import React from 'react';
import { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import useSwiperRef from 'hooks/useSwiperRef';

import Image from '../Image';

import 'swiper/css';
import './WorkPages.scss';

type pagesType = {
  image: string;
  title: string;
};

interface IWorkPagesProps {
  pages: pagesType[];
}

const WorkPages: NextPage<IWorkPagesProps> = ({ pages }) => {
  const [prevEl, prevElRef] = useSwiperRef<HTMLDivElement>();
  const [nextEl, nextElRef] = useSwiperRef<HTMLDivElement>();

  return (
    <div className="c-work-pages">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        navigation={{
          prevEl,
          nextEl,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
        }}
        className="u-overflow-initial"
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index}>
            <div className="c-work-pages__item">
              <Image
                src={require(`assets/images/works/${page.image}`)}
                alt={page.title}
                className="c-work-pages__img"
              />
              <span className="c-work-pages__text">{page.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="c-work-pages__navigation">
        <div
          ref={prevElRef}
          className="c-work-pages__navigation-item--prev c-work-pages__navigation-item"
        >
          <i className="ri-arrow-left-s-line"></i>
        </div>

        <div
          ref={nextElRef}
          className="c-work-pages__navigation-item--next c-work-pages__navigation-item"
        >
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>
    </div>
  );
};

export default WorkPages;
