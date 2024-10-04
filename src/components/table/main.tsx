import { PropsWithChildren } from 'react';
import styles from './main.module.css';
import { Body } from './ui/body/body';
import { Container } from './ui/container/container';
import { Head } from './ui/head/head';
import { Row } from './ui/row/row';


// TODO: поменять пути !!!! НЕ РАБОТАЕТ 
// TODO: Readme.md как запускать проект, ссылка на версел, объяснение принятых решений (объяснить архитектуру и.т.д)
// TODO: в ридми добавить варианты добавления компаний
// TODO: добавление компании - модалка + ОПИСАНИЕ ПОЧЕМУ МОДАЛКА 
// TODO: props vs useSelector
// TODO: table vs Grid

// TODO: Написать документацию с описанием решений

export const Table = ({ children }: PropsWithChildren) => {
	return (
		<Container>
			<div className={styles.table}>{children}</div>
		</Container>
	);
};

Table.Head = Head;
Table.Row = Row;
Table.Body = Body;
