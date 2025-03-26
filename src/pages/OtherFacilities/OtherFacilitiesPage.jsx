import React from 'react';
import styles from './OtherFacilitiesPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';

import item1 from '../../assets/images/pages/施設紹介/シャワー室.jpg';
import item2 from '../../assets/images/pages/施設紹介/ロビー.jpg';

const OtherFacilitiesPage = () => {
  return (
    <main className={styles.section} aria-labelledby="lodging-page-heading">
      <div className={styles.container}>
        {/* ページタイトル */}
        <h1 id="lodging-page-heading" className={styles.title}>
          施設紹介
        </h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            アクティビティ体験後にはシャワー室をご利用いただけます。
          </p>
        </div>

        <div className={styles.imageGrid}>
          <div className={styles.imageItem}>
            <img src={item1} alt="シャワー室" />
          </div>
          <div className={styles.imageItem}>
            <img src={item2} alt="ロビー" />
          </div>
        </div>

        {/* ソーシャルシェア */}
        <SocialShare />
      </div>
    </main>
  );
};

export default OtherFacilitiesPage;
