import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { TableBody } from '../TableBody/TableBody';
import { TableHead } from '../TableHead/TableHead';
import { Loader } from '../Loader/Loader';

import { useScrollRows } from '../../hooks/useScrollRows';

import styles from './Table.module.css';

export const Table = () => {
	const { companies } = useSelector((s: RootState) => s.companies);
	const { loading, visibleCompanies } = useScrollRows(companies);

	return (
		<>
			<table className={styles.table}>
				<TableHead />
				<TableBody companies={visibleCompanies} />
			</table>
			{loading && <Loader />}
		</>
	);
};
