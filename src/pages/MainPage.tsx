import { useDispatch, useSelector } from 'react-redux';
import { Table } from '../components/table1/main';
import { AppDispatch, RootState } from '../store/store';
import { useScrollRows } from '../hooks/useScrollRows';
import { Loader } from '../components/Loader/Loader';
import { useState } from 'react';
import {
	deselectAllCompanies,
	removeSelectedCompanies,
	selectAllCompanies,
} from '../store/companiesSlice';

export const MainPage = () => {
	const { companies } = useSelector((s: RootState) => s.companies);
	const { loading, visibleCompanies } = useScrollRows(companies);

	const [isChecked, setIsChecked] = useState<boolean>(false);
	const dispatch = useDispatch<AppDispatch>();

	const handleChangeCheckbox = () => {
		setIsChecked(!isChecked);
		if (isChecked) {
			dispatch(deselectAllCompanies());
		} else {
			dispatch(selectAllCompanies());
		}
	};

	const handleRemoveSelectedCompanies = () => {
		dispatch(removeSelectedCompanies());
	};

	return (
		<>
			<Table>
				<Table.Head
					handleChangeCheckbox={handleChangeCheckbox}
					handleRemoveSelectedCompanies={handleRemoveSelectedCompanies}
				/>
				<Table.Body companies={visibleCompanies} />
			</Table>
			{loading && <Loader />}
		</>
	);
};
