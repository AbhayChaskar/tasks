const Myfunc=(props)=>{
    return(
        <div>
            <h3 style={{color:"white",backgroundColor:"salmon"}}>My function Component</h3>
            
            <table border='1'>
            <thead>
            <tr>
                <th>Product Id</th>
                <th>Product Name </th>
                <th>Price </th>
                <th>Quantity</th>
                <th>Features</th>
            </tr>
            </thead>
            <tbody>
            {props.myproductdata.map(productData=>
            <tr>
                <td>{productData.pid}</td>
                <td>{productData.pname}</td>
                <td>{productData.price}</td>
                <td>{productData.quantity}</td>
                <td>{productData.features}</td>
            </tr>
            )}
        </tbody>
    </table>
        </div>
    )
}
export default Myfunc;