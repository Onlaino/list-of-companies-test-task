import { ModalPortal } from '../../../modal/main';
import styles from './head.module.css';

type HeadProps = {
	handleChangeCheckbox: () => void;
	handleRemoveSelectedCompanies: () => void;
};

export const Head = ({
	handleChangeCheckbox,
	handleRemoveSelectedCompanies,
}: HeadProps) => {
	
	return (
		<div className={styles.row}>
			<div>
				<input
					name='selectAll'
					className={styles.selectCompanies}
					onChange={handleChangeCheckbox}
					type='checkbox'
				/>
				<span>Выделить все</span>
			</div>
			<div>
				Компании&nbsp;|&nbsp;
				<ModalPortal />
				{/* <span className={styles.addCompany}>Добавить компанию +</span> */}
			</div>
			<div
				onClick={handleRemoveSelectedCompanies}
				className={styles.deleteSelected}
			>
				<p>Удалить выбранное</p> <span>&#128465;</span>
			</div>
		</div>
	);
};
