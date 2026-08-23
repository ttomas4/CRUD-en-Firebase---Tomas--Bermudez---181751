import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function ProductoLista() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const cancelarSuscripcion = onSnapshot(
      productosRef,
      (snapshot) => {
        const productosActualizados = snapshot.docs.map(
          (documento) => ({
            id: documento.id,
            ...documento.data()
          })
        );

        setProductos(productosActualizados);
      },
      (error) => {
        console.error(
          "Error al escuchar productos:",
          error
        );
      }
    );

    return () => cancelarSuscripcion();
  }, []);

  return (
    <section className="seccion">
      <h2>Productos</h2>

      {productos.length === 0 ? (
        <p>No hay productos registrados.</p>
      ) : (
        <div className="productos">
          {productos.map((producto) => (
            <article
              className="producto"
              key={producto.id}
            >
              <h3>{producto.nombre}</h3>

              <p>
                <strong>Precio:</strong> $
                {producto.precio}
              </p>

              <p>
                <strong>Stock:</strong>{" "}
                {producto.stock}
              </p>

              <p>
                <strong>ID:</strong> {producto.id}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductoLista;