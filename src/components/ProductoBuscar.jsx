import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function ProductoBuscar() {
  const [producto, setProducto] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const buscarProducto = async () => {
    try {
      setMensaje("");

      const referencia = doc(
        db,
        "productos",
        "producto001"
      );

      const resultado = await getDoc(referencia);

      if (resultado.exists()) {
        setProducto({
          id: resultado.id,
          ...resultado.data()
        });
      } else {
        setProducto(null);
        setMensaje("El producto no existe.");
      }
    } catch (error) {
      console.error("Error al buscar:", error);
      setMensaje("No se pudo buscar el producto.");
    }
  };

  return (
    <section className="seccion">
      <h2>Buscar producto por ID</h2>

      <button onClick={buscarProducto}>
        Buscar producto001
      </button>

      {mensaje && <p>{mensaje}</p>}

      {producto && (
        <div className="producto-buscado">
          <h3>{producto.nombre}</h3>

          <p>
            Precio: ${producto.precio}
          </p>

          <p>
            Stock: {producto.stock}
          </p>

          <p>
            ID: {producto.id}
          </p>
        </div>
      )}
    </section>
  );
}

export default ProductoBuscar;