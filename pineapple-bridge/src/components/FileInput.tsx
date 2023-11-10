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
	const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!!props.onChange && event?.target?.files) {
			props.onChange(event.target.files);
		}
	}

  return (
	<div>
		<label className={`${props.labelClasses} ${styles.label}`} htmlFor="playlist-field">{props.title}</label>
	  	<input onChange={handleFile} className={`${props.inputClasses} ${styles.input}`} accept={props.accept} multiple={props.multiple} type="file" name="playlist" id="playlist-field" />
		<small className={styles.helperText}>only .m3u files allowed</small>
	</div>
  );
}
