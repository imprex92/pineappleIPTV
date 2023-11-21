import supportedLngs from '../utils/supportedLanguages.json'
import i18next from 'i18next';
export interface ILanguageSelectorProps {
}

export default function LanguageSelector (props: ILanguageSelectorProps) {
	console.log(i18next.language);
	
  return (
	<div>
	  <select name="localeSelector" id="language-selector">
		{
			Object.values(supportedLngs).map((lang: string, index: number) => (
				<option key={index}>{lang}</option>
			))
		}
	  </select>
	</div>
  );
}
