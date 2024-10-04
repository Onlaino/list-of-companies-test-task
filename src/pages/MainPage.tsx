import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader/Loader';
import { Table } from '../components/table1/main';
import { useScrollRows } from '../hooks/useScrollRows';
import {
	deselectAllCompanies,
	removeSelectedCompanies,
	selectAllCompanies,
} from '../store/companiesSlice';
import { AppDispatch, RootState } from '../store/store';

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
				{loading && <Loader />}
			</Table>
		</>
	);
};
