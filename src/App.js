import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div>
      {/* Menampilkan nama yang sedang diketik di h1 */}
      <div className="name1">
      <h1 className="">{newName || "M. Rizky Abila"}</h1>
      <h1 className="">{newName || "5220411447"}</h1>
      </div>

      <div className="App">
        {/* Input untuk mengetik nama */}
        <div className="input-data">
        <input
          placeholder="Nama..."
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />

        {/* Input untuk mengetik umur */}
        <input
          type="number"
          placeholder="umur..."
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        />
        </div>

        <button onClick={createUser}>Create User</button>

        {users.map((user) => {
          return (
            <div key={user.id} className="box-data">
              <h1 className="data-update">Nama: {user.name}</h1>
              <h1 className="data-update">Umur: {user.age}</h1>
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
               className="btn-data-update">
                Increase Age
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
                className="btn-data-update">
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
