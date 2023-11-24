import styles from '../styles/messageCenter.module.css'

interface MessageProps {
	message: string;
}

export const InfoMessage: React.FC<MessageProps> = ({ message }) => {
	return (
		<div className={styles.infoMessage}>
			{message}
		</div>
	)
}
export const WarningMessage: React.FC<MessageProps> = ({ message }) => {
	return (
		<div className={styles.warningMessage}>
			{message}
		</div>
	)
}
export const ErrorMessage: React.FC<MessageProps> = ({ message }) => {
	return (
		<div className={styles.errorMessage}>
			{message}
		</div>
	)
}