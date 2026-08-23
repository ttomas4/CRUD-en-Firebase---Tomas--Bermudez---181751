import { doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

function ProductoEditar() {
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

      console.log("Stock actualizado con merge");
    } catch (error) {
      console.error("Error al actualizar:", error);
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

      console.log("Precio actualizado con updateDoc");
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  const eliminarProducto = async () => {
    try {
      await deleteDoc(
        doc(db, "productos", "producto001")
      );

      console.log("Producto eliminado");
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <div>
      <h2>Modificar productos</h2>

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
  );
}

export default ProductoEditar;