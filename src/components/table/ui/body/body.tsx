import { ICompany } from '@store/companies';
import { Row } from '../row/row';

type TableBodyProps = {
	companies: ICompany[];
};

export const Body = ({ companies }: TableBodyProps) => {
	return companies.map((company) => (
		<Row
			key={company.id}
			address={company.address}
			name={company.name}
			id={company.id}
			isSelected={company.isSelected}
		/>
	));
};
