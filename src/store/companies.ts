export interface ICompany {
	id: number;
	name: string;
	address: string;
	isSelected: boolean;
}

export const initialCompanies: ICompany[] = [
	{ id: 1, name: 'Qrst', address: 'Ленина 5', isSelected: false },
	{ id: 2, name: 'Mnop', address: 'Карла Маркса 12', isSelected: false },
	{ id: 3, name: 'Ijkl', address: 'Гороховая 77', isSelected: false },
	{ id: 4, name: 'Efgh', address: 'Гатчинская 21', isSelected: false },
	{ id: 5, name: 'Abcd', address: 'Купчинская 4', isSelected: false },
];
