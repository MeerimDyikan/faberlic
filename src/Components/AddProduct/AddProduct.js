import { useContext, useState } from "react";
import "./AddProduct.css";
import { AppContext } from "../../App";
import { productsCollection, uploadProductPhoto } from "../../firebase";
import { addDoc } from "firebase/firestore";

export default function AddProduct({ category }) {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangePrice(event) {
    setPrice(event.target.value);
  }
  function onChangePicture(event) {
    const file = event.target.files[0];
    setPicture(file);
  }
  function onChangeDescription(event) {
    setDescription(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    if (!picture) {
      alert("Please upload an picture");
      return;
    }

    setIsSubmitting(true);
    uploadProductPhoto(picture)
      .then((pictureUrl) =>
        addDoc(productsCollection, {
          category: category.id,
          name: name,
          price: Number(price),
          image: pictureUrl,
          description: description,
          slug: name.replaceAll(" ", "-").toLowerCase(),
        })
      )
      .then(() => {
        setName("");
        setPrice(0.0);
        setPicture(null);
        setDescription("");
      })
      .catch((error) => {
        console.log("Failed to add product:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="AddProduct">
      <form onSubmit={onFormSubmit}>
        <h3>Create a new product</h3>
        <label>
          Name:
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeName}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            name="price"
            step="any"
            onChange={onChangePrice}
            min={0}
            required
          />
        </label>
        <label>
          Picture:
          <input
            type="file"
            name="picture"
            onChange={onChangePicture}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            type=""
            name="description"
            value={description}
            onChange={onChangeDescription}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
      </form>
    </div>
  );
}