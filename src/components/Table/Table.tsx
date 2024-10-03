import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { Loader } from '../Loader/Loader';
import { TableBody } from '../TableBody/TableBody';
import { TableHead } from '../TableHead/TableHead';

import styles from './Table.module.css';
import { useScrollRows } from '../../hooks/useScrollRows';

// TODO: реализовать механизм добавления компании.
// TODO: поменять пути
// TODO: Readme.md как запускать проект, ссылка на версел, объяснение принятых решений (объяснить архитектуру и.т.д)
// TODO: в ридми добавить варианты добавления компаний
// TODO: добавление компании - модалка + ОПИСАНИЕ ПОЧЕМУ МОДАЛКА 
// TODO: добавить метатеги
// TODO: props vs useSelector
// TODO: table vs Grid

export const Table = () => {
	const { companies } = useSelector((s: RootState) => s.companies);
	const { loading, visibleCompanies } = useScrollRows(companies);

	return (
		<>
			<div className={styles.table}>
				<TableHead />
				<TableBody companies={visibleCompanies} />
			</div>
			{loading && <Loader />}
		</>
	);
};
