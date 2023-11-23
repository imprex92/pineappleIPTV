import { useState } from 'react'
import styles from '../styles/fileInput.module.css'
import { useTranslation } from 'react-i18next';
export interface IFileInputProps {
	accept: string; // MIME type(s) to accept. Example: image/*, .jpg,.png,.gif
	multiple: boolean; // Allow multiple files upload
	onChange?(files: FileList): void;
	title?: string;
	inputClasses?: string;
	labelClasses?: string;
}

export default function FileInput (props: IFileInputProps) {
	const { t } = useTranslation()
	const [file, setFile] = useState<File | null>(null)
	const [code, setCode] = useState<number | null>(null)
	const [email, setEmail] = useState<string>('')

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
			alert(t('input.error.missing'))
			return;
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
					alert('Upload successful!');
				} else {
					// Handle errors, e.g., show an error message to the user
					alert('Upload failed. Please try again.');
				}
				} catch (error) {
				console.error('Error uploading file:', error);
				// Handle network or other errors
				alert('An error occurred. Please try again later.');
				}
		}
	}

  return (
	<div>
		<form onSubmit={handleSubmit}>
			<label className={`${props.labelClasses} ${styles.label}`} htmlFor="playlist-field">{props.title}</label>
			<input onChange={handleFileChange} className={`${props.inputClasses} ${styles.input}`} accept={props.accept} multiple={props.multiple} type="file" name="m3uFile" id="playlist-field" />
			<small className={styles.helperText}>{t('uploader.accepted')}</small>
			<input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Enter email' />
			<input onChange={handleVerificationCodeChange} type="number" maxLength={4} minLength={4} name="verificationCode" id="code" placeholder='4 digits code' />
			<button type="submit">Upload</button>
		</form>
	</div>
  );
}
