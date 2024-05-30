import { useContext } from "react";
import { AppContext } from "../../App";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../firebase";
export default function DeleteProduct({ product }) {
  const { user } = useContext(AppContext);
  if (!user || !user.isAdmin) {
    return null;
  }
  function onDeleteClick() {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    const image = ref(storage, product.image);
    deleteObject(image)
      .then(() => {
        deleteDoc(doc(db, "products", product.id));
      })
      .catch((error) => {
        console.log("Failed to delete product image:", error);
      });
  }
  return (
    <button className="DeleteProduct" onClick={onDeleteClick}>X</button>
  );
}