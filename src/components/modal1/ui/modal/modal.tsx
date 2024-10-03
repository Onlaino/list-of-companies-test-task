import React, { useId, useState } from 'react';
import { ICompany } from '../../../../store/companies';
import { Button } from '../button/button';
import { Form } from '../form/form';
import { Input } from '../input/input';

import styles from './modal.module.css';
import { AppDispatch } from '../../../../store/store';
import { useDispatch } from 'react-redux';
import { addCompany } from '../../../../store/companiesSlice';

type ModalProps = {
	onClose: () => void;
};

// TODO: починить тип id 

export const Modal = ({ onClose }: ModalProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const newId = useId();
	const [companyData, setCompanyData] = useState<ICompany>({
		name: '',
		address: '',
		isSelected: false,
		id: newId,
	});

	const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (evt) => {
		evt.preventDefault();
		dispatch(addCompany(companyData));
		setCompanyData({ name: '', address: '', id: 0, isSelected: false });
	};

	const handleChangeName = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setCompanyData({ ...companyData, name: evt.target.value });
	};

	const handleChangeAddress = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setCompanyData({ ...companyData, address: evt.target.value });
	};

	return (
		<div className={styles.wrapper}>
			<section className={styles.modal}>
				<Modal.Button className={styles.button} onClick={onClose}>
					Скрыть окно
				</Modal.Button>
				<Modal.Form className={styles.form} onHandleSubmit={handleSubmitForm}>
					<Modal.Input
						className={styles.input}
						handleChange={handleChangeName}
						label='Введите наименование компании'
						minLength={3}
						name='name'
						placeholder='Название'
						required={true}
						value={companyData.name}
					/>
					<Modal.Input
						className={styles.input}
						handleChange={handleChangeAddress}
						label='Введите адрес компании'
						minLength={3}
						name='address'
						placeholder='Адрес'
						required={true}
						value={companyData.address}
					/>
					<Modal.Button className={styles.button} type='submit'>
						Добавить компанию
					</Modal.Button>
				</Modal.Form>
			</section>
		</div>
	);
};

Modal.Form = Form;
Modal.Input = Input;
Modal.Button = Button;
