import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import styles from '../styles/fileInput.module.css'
import { useMessage } from '../contexts/MessageContext';

export interface IFileInputProps {
	accept: string; // MIME type(s) to accept. Example: image/*, .jpg,.png,.gif
	multiple: boolean; // Allow multiple files upload
	onChange?(files: FileList): void;
	title?: string;
	inputClasses?: string;
	labelClasses?: string;
}

export default function FileInput (props: IFileInputProps) {
	const formRef = useRef<HTMLFormElement | null>(null)
	const { t } = useTranslation()
	const { addMessage } = useMessage()
	const [file, setFile] = useState<File | null>(null)
	const [code, setCode] = useState<number | null>(null)
	const [email, setEmail] = useState<string>('')

	useEffect(() => {
		addMessage({ message: t('message.error.missing'), type: 'error' });
	}, []);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value, 10);
		if (!isNaN(value)) {
			setCode(value);
		} else {
			console.error('Invalid number input');
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files && e.target.files[0];
		setFile(selectedFile);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if(!file || !email || !code){
			addMessage({ message: t('message.error.missing'), type: 'error' });
		} else{
			const formData = new FormData();
			formData.append('m3uFile', file);
			formData.append('email', email);
			formData.append('verificationCode', code.toString());

			try {
				const response = await fetch('http://localhost:5000/upload', {
					method: 'POST',
					body: formData,
				});

				if (response.ok) {
					// Handle success, e.g., show a success message to the user
					formRef.current?.reset()
					addMessage({ message: t('message.success.upload'), type: 'info' });
				} else {
					addMessage({ message: t('message.error.upload'), type: 'error' });
				}
				} catch (error) {
					console.error('Error uploading file:', error);
					// Handle network or other errors
					addMessage({ message: t('message.error.network'), type: 'error' });
				}
		}
	}

  return (
	<div>
		<form ref={formRef} className={styles.formGroup} onSubmit={handleSubmit}>
			<div className={styles.inputGroup}>
				<input 
					className={styles.input} 
					onChange={handleEmailChange} 
					type="email" 
					name="email" 
					id="email" 
					placeholder='Enter email'
					required
				/>
				<input 
					className={styles.input} 
					onChange={handleVerificationCodeChange} 
					type="text" 
					maxLength={4} 
					minLength={4} 
					name="verificationCode" 
					id="code" 
					placeholder='4 digits code' 
					pattern="[0-9]{4}" 
					required 
					onKeyDown={(e) => { if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
						e.preventDefault();
					} }} 
					inputMode="numeric"
				/>
			</div>
			<label className={`${props.labelClasses} ${styles.label}`} htmlFor="playlist-field">
				{props.title}
			</label>
			<input 
				onChange={handleFileChange} 
				className={`${props.inputClasses} ${styles.input}`} accept={props.accept} multiple={props.multiple} 
				type="file" 
				name="m3uFile" 
				id="playlist-field" 
				required
			/>
			<small className={styles.helperText}>{t('uploader.accepted')}</small>
			<div className={styles.buttonGroup}>
				<button type="submit">{t('uploader.upload')}</button>
			</div>
		</form>
	</div>
  );
}
