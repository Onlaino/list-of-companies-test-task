import { FormHTMLAttributes, ReactNode } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	onHandleSubmit: React.FormEventHandler<HTMLFormElement>;
	children: ReactNode;
}

export const Form = ({ className, children, onHandleSubmit }: FormProps) => {
	return (
		<form className={className} onSubmit={onHandleSubmit}>
			{children}
		</form>
	);
};
