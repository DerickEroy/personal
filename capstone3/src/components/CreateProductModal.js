import '../styles/CreateProductModal.css';

export default function CreateProductModal() {
	return (
		<div className="create-product-modal">
			<form>
				<label className="name">
					Name
					<input
					type="text"
					name="name"
					required
					 />
				</label>
				<label className="price">
					Price
					<input
					type="number"
					name="price"
					required
					 />
				</label>
				<label className="picture">
					Picture
					<input
					type="text"
					name="picture"
					required
					 />
				</label>
				<label className="description">
				Description
				<textarea rows="5"></textarea>
				</label>
			</form>
		</div>
	)
}