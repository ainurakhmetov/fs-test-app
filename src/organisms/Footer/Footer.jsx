import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.socialList}>
      <li>
        <a className={styles.socialButton} href="https://vk.com/marvel_dc">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15">
            <path fill="#FFF" d="M16.138 11.51c.956-.309 2.18 2.04 3.483 2.939.978.681 1.727.534 1.727.534l3.473-.05s1.815-.112.957-1.554c-.071-.12-.503-1.069-2.585-3.022-2.177-2.043-1.882-1.712.739-5.244 1.597-2.153 2.236-3.468 2.036-4.028-.192-.539-1.365-.399-1.365-.399L20.69.713c-.381.001-.704.119-.851.515-.003.004-.621 1.666-1.445 3.079-1.741 2.989-2.436 3.148-2.724 2.961-.661-.433-.494-1.737-.494-2.664 0-2.897.432-4.105-.846-4.417-.427-.104-.739-.172-1.828-.182-1.392-.021-2.574 0-3.244.329-.445.223-.786.712-.579.74.26.035.843.16 1.155.586.401.552.389 1.789.389 1.789s.229 3.411-.54 3.834c-.528.29-1.25-.302-2.803-3.016-.793-1.388-1.392-2.922-1.392-2.922s-.116-.285-.326-.441c-.25-.185-.6-.244-.6-.244L.848.684S.29.7.085.946c-.182.218-.015.668-.015.668s2.909 6.881 6.203 10.347c3.02 3.182 6.452 2.971 6.452 2.971h1.555s.469-.054.709-.312c.224-.24.214-.691.214-.691s-.031-2.109.935-2.419z" />
          </svg>
        </a>
      </li>
      <li>
        <a className={styles.socialButton} href="https://www.facebook.com/MarvelRussia">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22">
            <path fill="#FFF" d="M12 4V0H8a4 4 0 0 0-4 4v4H0v4h4v10h4V12h4V8H8V4h4z" />
          </svg>
        </a>
      </li>
      <li>
        <a className={styles.socialButton} href="https://www.instagram.com/marvel">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
            <path fill="#FFF" d="M18 0H3C1.35 0 0 1.35 0 3v15c0 1.65 1.35 3 3 3h15c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zm-7.5 7c1.93 0 3.5 1.57 3.5 3.5S12.43 14 10.5 14 7 12.43 7 10.5 8.57 7 10.5 7zM18 18H3V9h1.181A6.504 6.504 0 0 0 4 10.5a6.5 6.5 0 1 0 13 0 6.45 6.45 0 0 0-.181-1.5H18v9zm0-11h-4V3h4v4z" />
          </svg>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
