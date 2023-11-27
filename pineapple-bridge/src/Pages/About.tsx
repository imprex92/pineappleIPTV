import { useTranslation } from 'react-i18next';
import styles from '../styles/aboutus.module.css'

export interface IAboutProps {
}

export default function About () {
	const { t } = useTranslation()
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
			<li className={styles.listItem}><span className={styles.highlight}>{t('about.uploadPlaylist')}</span> <span>{t('about.chooseLanguage')}</span></li>
			<li className={styles.listItem}><span className={styles.highlight}>{t('about.setEmailCode')}</span> <span>{t('about.securityNote')}</span></li>
			<li className={styles.listItem}><span className={styles.highlight}>{t('about.downloadToLGSmartTV')}</span> <span>{t('about.enjoyChannels')}</span></li>
		</ul>

		<p className={styles.paragraf}><span className={styles.highlight}>{t('about.whyPineappleIPTV')}</span></p>

		<ul className={styles.list}>
			<li className={styles.listItem}><span className={styles.highlight}>{t('about.userFriendly')}</span> <span>{t('about.userFriendlyDescription')}</span></li>
			<li className={styles.listItem}><span className={styles.highlight}>{t('about.secureStorage')}</span> <span>{t('about.secureStorageDescription')}</span></li>
			<li className={styles.listItem}><span className={styles.highlight}>{t('about.multilingualSupport')}</span> <span>{t('about.multilingualSupportDescription')}</span></li>
		</ul>

		<p className={styles.paragraf}><span className={styles.highlight}>{t('about.joinCommunity')}</span><br/>
			{t('about.soloEndeavor')}</p>

		<p className={styles.paragraf}><span className={styles.highlight}>{t('about.getInTouch')}</span><br/>
			{t('about.contactInfo')}</p>

		<p className={styles.paragraf}>{t('about.happyWatching')} <span className={styles.highlight}>🍍✨</span></p>

	</div>
  );
}
