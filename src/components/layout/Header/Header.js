const Header = ({children}) => {

	const className = 'header'

	return (
		<header className={className}>
			<div className={`${className}__wrapper`}>
				{children}
			</div>
		</header>
	)
}

export default Header