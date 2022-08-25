import { API_BASE_URL } from './api/api'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Title from './components/common/Title'
import Main from './components/layout/Main'
import Image from './components/common/Image'
import banner from './assets/banner.webp'
import Products from './components/layout/Products'
import Preloader from './components/layout/Preloader/Preloader'

const App = () => {

	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch(API_BASE_URL + '.json')
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error(error))
	}, [])

	useEffect(() => {
		if (data) {
			const timerID = setTimeout(() => setIsLoading(false), 3000)
			return () => clearTimeout(timerID)
		}
	}, [data])

	useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<>
			{isLoading && <Preloader/>}
			
			<Header>
				{!isLoading && data.title && (
					<Title className='header__title'>
						{data.title.content}
					</Title>
				)}
			</Header>

			<Main>
				{data?.banner && (
					<Image
						className='image'
						source={data.banner.source}
						alternate={data.banner.alternate}
					/>
				)}
				
				{data?.products.length > 0 && (
					<Products products={data.products} />
				)}
			</Main>
		</>
	)
}

export default App