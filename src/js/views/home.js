import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Contacto from "../component/contacto";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="container mt-5 ">
			<div className="row">
				<div className="col me-3">
					<Link to="/nuevo-contacto">
						<button className=" btn btn-success ">Add new contact</button>
					</Link>
				</div>
			</div>
			<div className="row mt-3">
				<div className="align-self-center">
				{store.contacts.map((value) => {
						return <Contacto nombre={value.name} domicilio={value.address} telefono={value.phone} mail={value.email}/>
					})};
				</div>
			</div>
		</div>
	)
};
