const Button = ({text, onClick}: { text: string, onClick?: () => void}) => {
	return (
		<button
			className="bg-purple-400 px-5 py-3 rounded-full hover:bg-purple-500"
			onClick={onClick}
		>
			{text}
		</button>
	)
}

export default Button;