import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { AppDispatch } from '@store/store';
import { ICompany } from '@store/companies';
import { addCompany } from '@store/companiesSlice';

import { Button } from '../button/button';
import { Form } from '../form/form';
import { Input } from '../input/input';

import styles from './modal.module.css';

type ModalProps = {
	onClose: () => void;
};

export const Modal = ({ onClose }: ModalProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const [companyData, setCompanyData] = useState<ICompany>({
		name: '',
		address: '',
		isSelected: false,
		id: uuidv4(),
	});

	const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (evt) => {
		evt.preventDefault();
		dispatch(addCompany(companyData));
		setCompanyData({ name: '', address: '', id: uuidv4(), isSelected: false });
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
