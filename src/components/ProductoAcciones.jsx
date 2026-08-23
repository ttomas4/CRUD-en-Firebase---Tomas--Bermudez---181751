import {
  doc,
  setDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

import { db } from "../firebase";

function ProductoAcciones() {
  const actualizarConMerge = async () => {
    try {
      await setDoc(
        doc(db, "productos", "producto001"),
        {
          stock: 25
        },
        {
          merge: true
        }
      );

      alert(
        "Stock actualizado con setDoc + merge."
      );
    } catch (error) {
      console.error(
        "Error al actualizar con merge:",
        error
      );

      alert("No se pudo actualizar el stock.");
    }
  };

  const actualizarConUpdateDoc = async () => {
    try {
      await updateDoc(
        doc(db, "productos", "producto001"),
        {
          precio: 18000
        }
      );

      alert(
        "Precio actualizado con updateDoc."
      );
    } catch (error) {
      console.error(
        "Error al actualizar con updateDoc:",
        error
      );

      alert("No se pudo actualizar el precio.");
    }
  };

  const eliminarProducto = async () => {
    try {
      await deleteDoc(
        doc(db, "productos", "producto001")
      );

      alert("Producto eliminado correctamente.");
    } catch (error) {
      console.error(
        "Error al eliminar:",
        error
      );

      alert("No se pudo eliminar el producto.");
    }
  };

  return (
    <section className="seccion">
      <h2>Modificar y eliminar</h2>

      <div className="botones">
        <button onClick={actualizarConMerge}>
          Actualizar stock con merge
        </button>

        <button onClick={actualizarConUpdateDoc}>
          Actualizar precio con updateDoc
        </button>

        <button onClick={eliminarProducto}>
          Eliminar producto001
        </button>
      </div>
    </section>
  );
}

export default ProductoAcciones;