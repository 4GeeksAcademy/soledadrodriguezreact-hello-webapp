import React from "react";
import { Link, useParams } from "react-router-dom";

export const EditarContacto = () => {
	const params = useParams()
	console.log(params);
	return (
		<div className="container container-sm mt-3 ">
			<h1 className="text-center">Edit contact</h1>
			<form>
				<div className="mb-3">
					<label htmlFor="fullName" className="form-label" >Full Name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Full Name" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
				</div>
				<div className="mb-3">
					<label htmlFor="phone" className="form-label" >Phone</label>
					<input type="text" className="form-control" id="phone" placeholder="Enter phone" />
				</div>
				<div className="mb-3">
					<label htmlFor="address" className="form-label" >Adress</label>
					<input type="text" className="form-control" id="address" placeholder="Enter address" />
				</div>
				<div className="d-grid gap-2">
					<button type="submit" className="btn btn-primary">Save</button>
				</div>
				<Link to="/home">or get back to contacts</Link>
			</form>
		</div>

	);
};