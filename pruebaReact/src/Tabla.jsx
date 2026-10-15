function Tabla (){
    return(
        <section>
            <tr>
                <th>Enfoque imperativo</th>
                <th>Enfoque declarativo</th>
            </tr>
            <tr>
                <td>
                    Indicamos pasos que deben ejecutarse
                </td>
                <td>Describimos el resultado que queremos obtener</td>
            </tr>
            <tr>
                <td>Modificamos explicitamente el DOM</td>
                <td>Describimos la interfaz a través de datos</td>
            </tr>
            <tr>
                <td>Nos ocupamos de las operaciones necesarias para actualizar la UI</td>
                <td>React gestiona las actualizaciones de la interfaz</td>
            </tr>

        </section>
    )

}

export default Tabla;