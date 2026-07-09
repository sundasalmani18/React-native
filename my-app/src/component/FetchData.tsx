// import { View, Text } from 'react-native'
// import React from 'react'
//   import { doc, getDoc } from "firebase/firestore";

// const FetchData = () => {



// const getUserData = async () => {
//   try {
//     const uid = auth.currentUser?.uid;

//     if (!uid) return;

//     const userRef = doc(db, "users", uid);
//     const userSnap = await getDoc(userRef);

//     if (userSnap.exists()) {
//       const data = userSnap.data();

//       console.log("Name:", data.name);
//       console.log("Address:", data.address);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
//   return (
//     <View>
//       <Text>FetchData</Text>
//     </View>
//   )
// }

// export default FetchData