import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase"; 

const firestore = getFirestore(app);

const Home = () => {
    const writeData = async() => {
        const result = await addDoc(collection(firestore, 'collectionName'), {
            name: "Delhi",
            pinCode: 1234,
            lat: 123,
            long: 456,
        });

        console.log("Result", result);
    }

    const makeSubCollection = async() => {
        await addDoc(collection(firestore, 'cities/23deDq5g4VRTlaKUbfgS/places'), {
            name: "This is a place",
            desc: "Awsm Desc",
            date: Date.now(),
        })
    }

  return (
    <div>
        <h1>Home</h1>
        <button onClick={writeData}>Put Data</button>
        <button onClick={makeSubCollection}>Put subData</button>
    </div>
  )
}

export default Home