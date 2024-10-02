import { ICompany } from '../../store/companies';
import { TableRow } from '../TableRow/TableRow';

type TableBodyProps = {
	companies: ICompany[];
};

export const TableBody = ({ companies }: TableBodyProps) => {
	return (
		<tbody>
			{companies.map((company) => (
				<TableRow key={company.id} company={company} />
			))}
		</tbody>
	);
};
