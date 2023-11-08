import FileInput from '../components/FileInput';
import styles from '../styles/home.module.css'

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
	<main className={styles.main}>
		<h1>Welcome to the home page!</h1>
		<FileInput accept='.m3u' multiple={false} /> 
	</main>
  );
}
