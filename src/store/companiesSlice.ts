import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICompany, initialCompanies } from './companies';

type CompaniesState = {
	companies: ICompany[];
};

const initialState: CompaniesState = {
	companies: initialCompanies,
};

export const companiesSlice = createSlice({
	name: 'companies',
	initialState,
	reducers: {
		addCompany(state, action: PayloadAction<ICompany>) {
			state.companies.push(action.payload);
		},

		removeCompany(state, action: PayloadAction<{ id: string }>) {
			state.companies = state.companies.filter(
				(company) => company.id !== action.payload.id
			);
		},

		removeSelectedCompanies(state) {
			state.companies = state.companies.filter((company) => company.isSelected !== true);
		},

		changeCompanyAddress(
			state,
			action: PayloadAction<{ id: string; address: string }>
		) {
			const editableCompany = state.companies.find(
				(company) => company.id === action.payload.id
			);
			if (editableCompany) {
				editableCompany.address = action.payload.address;
			}
		},

		changeCompanyName(
			state,
			action: PayloadAction<{ id: string; name: string }>
		) {
			const editableCompany = state.companies.find(
				(company) => company.id === action.payload.id
			);
			if (editableCompany) {
				editableCompany.name = action.payload.name;
			}
		},

		selectCompany(
			state,
			action: PayloadAction<{ id: string; isSelected: boolean }>
		) {
			const company = state.companies.find(
				(company) => company.id === action.payload.id
			);
			if (company) {
				company.isSelected = !company.isSelected;
			}
		},

		selectAllCompanies(state) {
			state.companies.forEach((company) => {
				company.isSelected = true;
			});
		},

		deselectAllCompanies(state) {
			state.companies.forEach((company) => {
				company.isSelected = false;
			});
		},
	},
});

export const {
	addCompany,
	removeCompany,
	selectCompany,
	selectAllCompanies,
	changeCompanyAddress,
	removeSelectedCompanies,
	changeCompanyName,
	deselectAllCompanies,
} = companiesSlice.actions;
export default companiesSlice.reducer;
