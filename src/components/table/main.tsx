import { PropsWithChildren } from 'react';
import styles from './main.module.css';
import { Body } from './ui/body/body';
import { Container } from './ui/container/container';
import { Head } from './ui/head/head';
import { Row } from './ui/row/row';


// TODO: поменять пути !!!! НЕ РАБОТАЕТ 
// TODO: props vs useSelector
// TODO: table vs Grid


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
