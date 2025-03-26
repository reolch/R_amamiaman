// src/components/ContactPage/ContactPage.jsx
import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ContactPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote';



const ContactPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className={styles.section} aria-labelledby="contact-page-heading">
      <div className={styles.container}>
        <h1 id="contact-page-heading" className={styles.title}>
          お問い合わせ
        </h1>

        <form 
          action="https://ssgform.com/s/WSyiPsc5nBUb" 
          method="post" 
          className={styles.form}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="お名前"
              required
              className={styles.input}
              aria-required="true"
              placeholder="山田 太郎"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="メールアドレス"
              required
              className={styles.input}
              aria-required="true"
              placeholder="example@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              メッセージ
            </label>
            <textarea
              id="message"
              name="メッセージ"
              required
              className={styles.textarea}
              aria-required="true"
              placeholder="お問い合わせ内容をご記入ください"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={styles.button}
          >
            送信する
          </button>
        </form>

        <FooterNote text="お問い合わせいただいてから、2営業日以内にご返信いたします。" />
      </div>
      <SocialShare />
    </main>
  );
};

export default ContactPage;
