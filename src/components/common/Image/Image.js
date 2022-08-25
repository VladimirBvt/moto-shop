const Image = ({className, source, alternate}) => {

	return (
		<img 
			className={className} 
			src={source} 
			alt={alternate} 
		/>
	)
}

export default Image