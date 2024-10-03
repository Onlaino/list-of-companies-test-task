import { useId, useState } from 'react';
import { addCompany } from '../../store/companiesSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { ICompany } from '../../store/companies';

export const Modal = () => {
	const dispatch = useDispatch<AppDispatch>();
	const newId = useId();
	const [companyData, setCompanyData] = useState<ICompany>({
		name: '',
		address: '',
		isSelected: false,
		id: Number(newId),
	});

	return (
		<div>
			<form
				onSubmit={() => {
					dispatch(addCompany(companyData));
				}}
			>
				<div>
					<label htmlFor='name'>Введите наименование компании</label>
					<input
						value={companyData.name}
						onChange={(evt) =>
							setCompanyData({ ...companyData, name: evt.target.value })
						}
						name='name'
						placeholder='Название'
						required
						minLength={3}
					/>
				</div>
				<div>
					<label htmlFor='address'>Введите адрес компании</label>
					<input
						value={companyData.address}
						onChange={(evt) =>
							setCompanyData({ ...companyData, address: evt.target.value })
						}
						name='address'
						placeholder='Адрес'
						required
						minLength={3}
					/>
				</div>
				<button type='submit'>Добавить</button>
			</form>
		</div>
	);
};
