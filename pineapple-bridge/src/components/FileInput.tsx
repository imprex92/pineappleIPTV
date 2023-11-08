import styles from '../styles/fileInput.module.css'
export interface IFileInputProps {
	accept: string; // MIME type(s) to accept. Example: image/*, .jpg,.png,.gif
	multiple: boolean; // Allow multiple files upload
	onChange?(files: FileList): void;
	title?: string;
	inputClasses?: string;
	labelClasses?: string;
}

export default function FileInput (props: IFileInputProps) {
  return (
	<div>
		<label className={`${props.labelClasses} ${styles.label}`} htmlFor="playlist-field">{props.title}</label>
	  	<input className={`${props.inputClasses} ${styles.input}`} type="file" name="playlist" id="playlist-field" />
	</div>
  );
}
