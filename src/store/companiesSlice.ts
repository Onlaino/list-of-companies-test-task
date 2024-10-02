import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICompany } from './companies';

type CompaniesState = {
	companies: ICompany[];
};

const initialState: CompaniesState = {
	companies: [],
};

export const companiesSlice = createSlice({
	name: 'companies',
	initialState,
	reducers: {
		addCompany(state, action: PayloadAction<ICompany>) {
			state.companies.push(action.payload);
		},
		removeCompany(state, action: PayloadAction<{ id: number }>) {
			return state.companies.filter(
				(company) => company.id !== action.payload.id
			);
		},
		selectCompany(state, action: PayloadAction<{ id: number }>) {
			const company = state.companies.find(
				(company) => company.id === action.payload.id
			);
			if (company) {
				company.isSelected = !company.isSelected;
			}
		},
		selectAllCompanies(state) {
			state.companies.forEach((company) => {
				company.isSelected = !company.isSelected;
			});
		},
	},
});

export const { addCompany, removeCompany, selectCompany, selectAllCompanies } =
	companiesSlice.actions;
export default companiesSlice.reducer;
