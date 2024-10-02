import { useDispatch } from 'react-redux';
import { ICompany } from '../../store/companies';
import {
	changeCompanyAddress,
	changeCompanyName,
	removeCompany,
	selectCompany,
} from '../../store/companiesSlice';
import { AppDispatch } from '../../store/store';

import styles from './TableRow.module.css';

type CompanyRowProps = {
	company: ICompany;
};

export const TableRow = ({ company }: CompanyRowProps) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<tr
			key={company.id}
			className={
				company.isSelected ? `${styles.row} ${styles.checked}` : styles.row
			}
		>
			<td>
				<input
					className={styles.checkbox}
					onChange={(evt) => {
						dispatch(
							selectCompany({
								id: company.id,
								isSelected: evt.target.checked,
							})
						);
					}}
					type='checkbox'
					checked={company.isSelected}
				/>
			</td>
			<td>
				<input
					className={styles.editableInput}
					value={company.name}
					onChange={(evt) => {
						dispatch(
							changeCompanyName({
								id: company.id,
								name: evt.target.value,
							})
						);
					}}
				/>
			</td>
			<td>
				<input
					className={styles.editableInput}
					value={company.address}
					onChange={(evt) => {
						dispatch(
							changeCompanyAddress({
								id: company.id,
								address: evt.target.value,
							})
						);
					}}
				/>
			</td>
			<td
				className={styles.remove}
				onClick={() => {
					dispatch(removeCompany({ id: company.id }));
				}}
			>
				&#128465;
			</td>
		</tr>
	);
};
