import firebase from "../../../firebase";

export default class TovarService {

  static async getDetail(id) {
    var tovar = {};
    var docRef = firebase.firestore().collection('products').doc(id);
    await docRef.get().then((doc) => {
      tovar = {
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        price: doc.data().price
      }

    });

    return tovar;
  }
}
