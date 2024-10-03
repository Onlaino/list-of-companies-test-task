import { ICompany } from '../../store/companies';
import { TableRow } from '../TableRow/TableRow';

type TableBodyProps = {
	companies: ICompany[];
};

export const TableBody = ({ companies }: TableBodyProps) => {
	return companies.map((company) => (
		<TableRow
			key={company.id}
			address={company.address}
			name={company.name}
			id={company.id}
			isSelected={company.isSelected}
		/>
	));
};
