import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
}

export const Input = ({
	label,
	value,
	handleChange,
	minLength,
	name,
	placeholder,
	required,
}: InputProps) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input
				value={value}
				onChange={handleChange}
				name={name}
				placeholder={placeholder}
				required={required}
				minLength={minLength}
			/>
		</div>
	);
};
