import Reactq, { Fragment, useState } from "react";

import { useForm } from 'react-hook-form';

const EjemploUno = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()

    const [Entradas, setEntradas] = useState([])

    
    const onSubmit = (data, e) => {
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                name="titulo"
                placeholder="Ingrese título"
                className="form-control my-2"
                 {...register
                        ('titulo', { required: true })
                        
                }></input>            
                    {errors.titulo && 
                    <span className="text-danger text-small d-block mb-2">Campo Requerido</span>}
                <input
                name="descripcion"
                placeholder="Ingrese descripcion"
                className="form-control my-2"
                {...register
                    ('descripcion', { required: true })
                }
                ></input>  
                    {errors.titulo && 
                    <span className="text-danger text-small d-block mb-2">Campo Requerido</span>}

                <button className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                    Entradas.map(item => 
                    <li>{item.titulo} - {item.descripcion}</li>    
                )
                }
            </ul>
        </Fragment>
    );
}

export default EjemploUno;