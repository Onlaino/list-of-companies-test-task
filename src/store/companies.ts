export interface ICompany {
	id: number;
	name: string;
	address: string;
	isSelected: boolean;
}

export const initialCompanies: ICompany[] = [
	{ id: 1, name: 'Компания 1', address: 'Адрес 1', isSelected: false },
	{ id: 2, name: 'Компания 2', address: 'Адрес 2', isSelected: false },
	{ id: 3, name: 'Компания 3', address: 'Адрес 3', isSelected: false },
	{ id: 4, name: 'Компания 4', address: 'Адрес 4', isSelected: false },
	{ id: 5, name: 'Компания 5', address: 'Адрес 5', isSelected: false },
];
