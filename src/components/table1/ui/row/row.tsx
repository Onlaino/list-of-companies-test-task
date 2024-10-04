import { useDispatch } from 'react-redux';
import {
	changeCompanyAddress,
	changeCompanyName,
	removeCompany,
	selectCompany,
} from '../../../../store/companiesSlice';
import { AppDispatch } from '../../../../store/store';

import styles from './row.module.css';

type RowProps = {
	id: string;
	isSelected: boolean;
	name: string;
	address: string;
};

export const Row = ({ address, id, isSelected, name }: RowProps) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div
			className={isSelected ? `${styles.row} ${styles.checked}` : styles.row}
		>
			<div className={styles.checkboxWrapper}>
				<input
					className={styles.checkbox}
					onChange={(evt) => {
						dispatch(
							selectCompany({
								id,
								isSelected: evt.target.checked,
							})
						);
					}}
					type='checkbox'
					checked={isSelected}
				/>
			</div>
			<div>
				<input
					className={styles.editableInput}
					value={name}
					onChange={(evt) => {
						dispatch(
							changeCompanyName({
								id: id,
								name: evt.target.value,
							})
						);
					}}
				/>
			</div>
			<div>
				<input
					className={styles.editableInput}
					value={address}
					onChange={(evt) => {
						dispatch(
							changeCompanyAddress({
								id: id,
								address: evt.target.value,
							})
						);
					}}
				/>
			</div>
			<div
				className={styles.remove}
				onClick={() => {
					dispatch(removeCompany({ id: id }));
				}}
			>
				&#128465;
			</div>
		</div>
	);
};
