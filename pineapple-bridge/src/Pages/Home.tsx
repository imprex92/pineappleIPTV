import FileInput from '../components/FileInput';
import styles from '../styles/home.module.css';
import { useTranslation } from 'react-i18next';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
	const { t } = useTranslation()
	const handleFileChange = (files: FileList) => {
		console.log('Selected file', files);
		
	}

  return (
	<main className={styles.main}>
		<h1>{t('uploader.title')}</h1>
		<FileInput accept='.m3u' multiple={false} onChange={handleFileChange} />
	</main>
  );
}
