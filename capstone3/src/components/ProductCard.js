import '../styles/ProductsCard.css'

export default function ProductCard({ProductProp}){
	console.log('ProductCard props:', ProductProp);
	const { picture, name, description, price } = ProductProp;

	return (
		<div className="product-card">
			{
				<img className="picture" src={picture} />
			}
			<h1 className="name">{name}</h1>
			<h2 className="description">{description}</h2>
			<h2 className="price">{price}</h2>
		</div>
	)
} 