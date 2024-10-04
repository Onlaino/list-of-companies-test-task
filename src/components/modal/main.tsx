import { createPortal } from 'react-dom';

import { useState } from 'react';
import { Modal } from './ui/modal/modal';

import styles from './main.module.css';

export const ModalPortal = () => {
	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<>
			<span onClick={() => setShowModal(true)} className={styles.addCompany}>
				Добавить компанию +
			</span>
			{showModal &&
				createPortal(
					<Modal onClose={() => setShowModal(false)} />,
					document.body
				)}
		</>
	);
};
