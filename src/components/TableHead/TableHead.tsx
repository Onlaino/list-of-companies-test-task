import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	deselectAllCompanies,
	removeSelectedCompanies,
	selectAllCompanies,
} from '../../store/companiesSlice';
import { AppDispatch } from '../../store/store';

import styles from './TableHead.module.css';

export const TableHead = () => {
	const [isChecked, setIsChecked] = useState<boolean>();
	const dispatch = useDispatch<AppDispatch>();

	const handleChangeCheckbox = () => {
		setIsChecked(!isChecked);
		if (isChecked) {
			dispatch(deselectAllCompanies());
		} else {
			dispatch(selectAllCompanies());
		}
	};

	const handleRemoveSelectedCompanies = () => {
		dispatch(removeSelectedCompanies());
	};

	return (
		<div className={styles.row}>
			<div >
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
				<span className={styles.addCompany}>Добавить компанию +</span>
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
