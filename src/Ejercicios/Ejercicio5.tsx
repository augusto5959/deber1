import { useState } from 'react';

export const Ejercicio5 = () => {
    //hook useState: cambiar el stado de un valor o un compenente
    const [valorContador, setValorContador] = useState<number>(0); //valor inicial del estado

    //funcion manipular el valor del contador
    const cambiarContador = (numero: number) => {
        //llamar funcion del hook useState
        setValorContador(valorContador + numero);
    };

    return (
        <div>
            <h3>
                Contador:<small>{valorContador}</small>
            </h3>
            <button onClick={() => cambiarContador(5)} className="btn btn-primary">
                +5
            </button>
            &nbsp;
            <button onClick={() => cambiarContador(-5)} className="btn btn-primary">
                -5
            </button>
        </div>
    );
};
