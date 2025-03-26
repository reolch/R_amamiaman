// src/components/Section/ServiceSection/ServiceSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceSection.module.css';
import PropTypes from 'prop-types';
import SnorkellingIcon from '../../../assets/icons/Snorkelling.svg';
import SeakayakIcon from '../../../assets/icons/seakayak.svg';
import BoatIcon from '../../../assets/icons/boat.svg';
import LodgingIcon from '../../../assets/icons/lodging.svg';

const iconMap = {
  snorkelling: SnorkellingIcon,
  seakayak: SeakayakIcon,
  glassboat: BoatIcon,
  lodging: LodgingIcon,
};

const ServiceCard = ({ type, title, description, link }) => {
  const Icon = iconMap[type];
  
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={Icon} alt={title} className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link to={link} className={styles.link}>
        詳しく見る
      </Link>
    </div>
  );
};

ServiceCard.propTypes = {
  type: PropTypes.oneOf(['snorkelling', 'seakayak', 'glassboat', 'lodging']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const ServiceSection = () => {
  const services = [
    {
      type: 'snorkelling',
      title: 'シュノーケリング',
      description: '透明度抜群の海で熱帯魚と泳ごう',
      link: '/services/snorkelling',
    },
    {
      type: 'seakayak',
      title: 'シーカヤック',
      description: '手つかずの自然を探検しよう',
      link: '/services/seakayak',
    },
    {
      type: 'glassboat',
      title: 'グラスボート',
      description: '美しいサンゴ礁の世界へ',
      link: '/services/glassboat',
    },
    {
      type: 'lodging',
      title: '宿泊施設',
      description: 'ゆったりとくつろげる空間',
      link: '/services/lodging',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>サービス</h2>
        <div className={styles.cardGrid}>
          {services.map((service) => (
            <ServiceCard key={service.type} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
