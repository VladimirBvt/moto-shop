import Title from '../../../../common/Title'

const Product = ({details}) => {
	
	const { image, model, name, year, price } = details
	const className = 'product'

	return (
		<div className={className}>
			<img 
				className={`${className}__image`}
				src={image} 
				alt='moto'
			/>

			<div className={`${className}__body`}>
				<Title 
					className={`${className}__title`}
					priority={3} 
				>
					{name}
				</Title>

				<p className={`${className}__copy`}>model: {model}</p>
				<p className={`${className}__copy`}>year: {year}</p>
				<p className={`${className}__copy`}>price: {price}</p>
			</div>
		</div>
	)
}

export default Product