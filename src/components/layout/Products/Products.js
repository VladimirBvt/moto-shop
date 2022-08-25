import Product from './components/Product'

const Products = ({ products }) => {

	const className = 'products'

	return (
		<section className={className}>
			<div className={`${className}__wrapper`}>
				{products.length > 0 && products.map((product) => (
					<Product
						key={product.id}
						details={product}
					/>
				))}
			</div>
		</section>
	)
}

export default Products