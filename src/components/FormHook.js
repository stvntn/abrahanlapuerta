import React, {Fragment} from 'react';

import { useForm } from "react-hook-form";

const FormHook = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    className="form-control my-2"
                    {...register("titulo", {
                        required: true, message: 'Titulo obligatorio'
                       
                      })
                    }
                />
                
                <button className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>
    );
}

export default FormHook;