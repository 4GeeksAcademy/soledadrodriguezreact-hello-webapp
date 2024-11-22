import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-light justify-content-end mb-3 me-3">
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success ">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
