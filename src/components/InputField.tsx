import {ChangeEvent} from "react";

type Props = {
	value: string,
	onChange?: (changeEvent: ChangeEvent<HTMLInputElement>) => void,
	className?: string,
	children: string,
}
const InputField = ({ value, onChange, className, children}: Props) => {
	return (
		<>
			<label className="block text-xs font-medium text-gray-200">
				{children}
			</label>
			<input
				type="text"
				className={`mt-1 grow rounded-md border-[1px] border-white/20 bg-purple-900/50 p-2 text-sm text-white shadow-sm ${className || ""}`}
				value={value}
				onChange={onChange}
			/>
		</>
	)
}

export default InputField;