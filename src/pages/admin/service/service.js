import firebase from "../../../firebase"

export default class AddProductService {
  static async getAdd(name, price, description) {
    firebase.firestore().collection('products').add({
      name: name,
      price: price,
      description: description
    });
  }
  static async getProductList() {
    const jewelryCollection = firebase.firestore().collection('products');
    const response = jewelryCollection.get();
    let jewelryList = [];
    (await response).docs.forEach((item) => {
      jewelryList.push({
        id: item.id,
        name: item.data().name,
        description: item.data().description,
        price: item.data().price,
      })
    })
    return jewelryList
  }
  static deleteProduct(products) {
    console.log(products)
    var del = products.id;
    console.log(del)
    firebase.firestore().collection('products').doc(products.id).delete();
  }
  static async getDetailEdit(id) {
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
  static async getEditProduct(id, name, price, description) {
    firebase.firestore().collection('products').doc(id).set({
      name: name.current.value,
      price: price.current.value,
      description: description.current.value
    })
  }
}
