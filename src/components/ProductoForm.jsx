import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function ProductoForm() {
  const agregarConAddDoc = async () => {
    try {
      const docRef = await addDoc(collection(db, "productos"), {
        nombre: "Teclado",
        precio: 25000,
        stock: 10
      });

      alert(`Producto creado con ID automático: ${docRef.id}`);
    } catch (error) {
      console.error("Error al crear con addDoc:", error);
      alert("No se pudo crear el producto.");
    }
  };

  const agregarConSetDoc = async () => {
    try {
      await setDoc(doc(db, "productos", "producto001"), {
        nombre: "Mouse",
        precio: 15000,
        stock: 20
      });

      alert("Producto creado con ID: producto001");
    } catch (error) {
      console.error("Error al crear con setDoc:", error);
      alert("No se pudo crear el producto.");
    }
  };

  return (
    <section className="seccion">
      <h2>Crear productos</h2>

      <div className="botones">
        <button onClick={agregarConAddDoc}>
          Crear con addDoc
        </button>

        <button onClick={agregarConSetDoc}>
          Crear con setDoc
        </button>
      </div>
    </section>
  );
}

export default ProductoForm;