import React from 'react'

const Contacto = (props) => {
    return (

        <div className=" container card mt-3 ms-3" >        
            <div className="row g-0" >
                <div className="col-md-3 row  align-items-center">
              <img src="https://static.wikia.nocookie.net/lossimpson/images/b/bd/Eleanor_Abernathy.png/revision/latest?cb=20110619013023&path-prefix=es" className=" img-thumbnail rounded-circle m-2" style={{width: 150}} alt="..." />

                </div>
                <div className="col-md-9 text-start row align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">Domicilio: {props.domicilio} </p>
                        <p className="card-text">Teléfono: {props.telefono} </p>
                        <p className="card-text">Mail: {props.mail} </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contacto