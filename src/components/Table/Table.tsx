import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { TableHead } from '../TableHead/TableHead';
import { TableBody } from '../TableBody/TableBody';

import styles from './Table.module.css';

export const Table = () => {
	const { companies } = useSelector((s: RootState) => s.companies);

	return (
		<table className={styles.table}>
			<TableHead />
			<TableBody companies={companies} />
		</table>
	);
};
