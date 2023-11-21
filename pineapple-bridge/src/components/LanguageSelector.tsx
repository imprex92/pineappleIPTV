import supportedLngs from '../utils/supportedLanguages.json'
import i18next from 'i18next';
import styles from '../styles/languageSelector.module.css'

export interface ILanguageSelectorProps {
}

export default function LanguageSelector () {
	const currentLanguage: string = i18next.language
	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		i18next.changeLanguage(e.target.value)
		.then(() => {
			console.info('Language changed')
		})
		.catch((error) => {
			console.error('Error changing language', error)
		})
	}
	
  return (
	<div className={styles.wrapper}>
	  <select className={styles.select} onChange={(e) => handleLanguageChange(e)} defaultValue={currentLanguage} name="localeSelector" id="language-selector">
		{
			Object.values(supportedLngs).map((lang: string, index: number) => (
				<option value={lang} key={index}>{lang}</option>
			))
		}
	  </select>
	</div>
  );
}
