import { useState, useEffect } from 'react';
import '../styles/AdminProducts.css';
import Swal from 'sweetalert2';

import CreateProductModal from '../components/CreateProductModal';

export default function AdminProducts(){
	// Render Products
	const [products, setProducts] = useState([]);

	// Create Product
	const [createName, setCreateName] = useState('');
	const [createDescription, setCreateDescription] = useState('');
	const [createPrice, setCreatePrice] = useState(0);
	const [createPicture, setCreatePicture] = useState('');

	// Gets Active Products
	useEffect(() => {
		fetch('http://localhost:4000/products/active')
		.then(res => res.json())
		.then(data => {
			setProducts(data);
		});
	}, []);

	// Create Product
	const createProduct = () => {
		fetch(`http://localhost:4000/products/createProduct`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				name: createName,
				description: createDescription,
				price: createPrice,
				picture: createPicture
			})
		})
		.then(res => res.json())
		.then(data => {
			if (data){
				Swal.fire({
					title: "Created Product Successfully",
					icon: "success",
					text: "The product is now created and posted."
				}).then(() => {
		        	window.location.reload();
		        })
			} else {
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "An error has occured. Please try again later."
				})
			}
		})
	}


	// Delete Product
	const deleteProduct = (productId) => {
		fetch(`http://localhost:4000/products/delete/${productId}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			if (data){
				Swal.fire({
					title: "Deleted Successfully",
					icon: "success",
					text: "The product is now deleted."
				}).then(() => {
		        	window.location.reload();
		        })
			} else {
				Swal.fire({
					title: "Error",
					icon: "error",
					text: "An error has occured. Please try again later."
				})
			}
		})
	}

	return (
		<>
			<CreateProductModal />
			<div className="admin-dashboard">
				<div>
					<h1>Admin Dashboard</h1>
					<div className="general-actions">
						<button className="create-product">Create Product</button>
					</div>
				</div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Price</th>
							<th>Availability</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
						<tr key={product._id}>
							<td>{product.name}</td>
							<td>{product.description}</td>
							<td>{product.price}</td>
							<td>{product.isActive ? 'Available' : 'Not Available'}</td>
							<td>
								{/* Add your action buttons or links here */}
								<button className="edit">Edit</button>
								<button className="delete" onClick={() => deleteProduct(product._id)}>Delete</button>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
  );
}