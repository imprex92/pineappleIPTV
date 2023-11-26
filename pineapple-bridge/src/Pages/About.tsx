import { t } from 'i18next';
import styles from '../styles/aboutus.module.css'

export interface IAboutProps {
}

export default function About () {
  return (
	<div className={styles.wrapper}>
  <h1 className={styles.heading}>{t('welcome.heading')}</h1>

  <h2>{t('about.heading')}</h2>

  <p className={styles.paragraf}><span className={styles.highlight}>{t('about.whatIsIPTV')}</span><br/>
    {t('about.welcomeDescription')}</p>

  <p className={styles.paragraf}><span className={styles.highlight}>{t('about.whatMakesIPTVSpecial')}</span><br/>
    {t('about.specialDescription')}</p>

  <p className={styles.paragraf}><span className={styles.highlight}>{t('about.howItWorks')}</span></p>

  <ul className={styles.list}>
    <li className={styles.listItem}><span className={styles.highlight}>{t('about.uploadPlaylist')}</span> {t('about.chooseLanguage')}</li>
    <li className={styles.listItem}><span className={styles.highlight}>{t('about.setEmailCode')}</span> {t('about.securityNote')}</li>
    <li className={styles.listItem}><span className={styles.highlight}>{t('about.downloadToLGSmartTV')}</span> {t('about.enjoyChannels')}</li>
  </ul>

  <p className={styles.paragraf}><span className={styles.highlight}>{t('about.whyPineappleIPTV')}</span></p>

  <ul className={styles.list}>
    <li className={styles.listItem}><span className={styles.highlight}>{t('about.userFriendly')}</span> {t('about.userFriendlyDescription')}</li>
    <li className={styles.listItem}><span className={styles.highlight}>{t('about.secureStorage')}</span> {t('about.secureStorageDescription')}</li>
    <li className={styles.listItem}><span className={styles.highlight}>{t('about.multilingualSupport')}</span> {t('about.multilingualSupportDescription')}</li>
  </ul>

  <p className={styles.paragraf}><span className={styles.highlight}>{t('about.joinCommunity')}</span><br/>
    {t('about.soloEndeavor')}</p>

  <p className={styles.paragraf}><span className={styles.highlight}>{t('about.getInTouch')}</span><br/>
    {t('about.contactInfo')}</p>

  <p className={styles.paragraf}>{t('about.happyWatching')} <span className={styles.highlight}>🍍✨</span></p>

</div>
  );
}
