import FileInput from '../components/FileInput';
import styles from '../styles/home.module.css'

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
	const handleFileChange = (files: FileList) => {
		console.log('Selected file', files);
		
	}

  return (
	<main className={styles.main}>
		<h1>Select the playlist you want to upload</h1>
		<FileInput accept='.m3u' multiple={false} onChange={handleFileChange} /> 
	</main>
  );
}
