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
		}
		if (!isChecked) {
			dispatch(selectAllCompanies());
		}
	};

	const handleRemoveSelectedCompanies = () => {
		dispatch(removeSelectedCompanies());
	};

	return (
		<thead className={styles.head}>
			<tr className={styles.row}>
				<td>
					<input
						className={styles.selectCompanies}
						onChange={handleChangeCheckbox}
						type='checkbox'
					/>
					Выделить все
				</td>
				<td colSpan={2}>Компании</td>
				<td
					onClick={handleRemoveSelectedCompanies}
					rowSpan={1}
					className={styles.deleteSelected}
				>
					Удалить выбранное <span>&#128465;</span>
				</td>
			</tr>
		</thead>
	);
};
