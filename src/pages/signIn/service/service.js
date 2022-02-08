import firebase from "../../../firebase";

export default class SignInService {
  static async getSignIn(mail, pass) {
    var user = {};
    var users;
    await firebase.auth().signInWithEmailAndPassword(mail, pass)
      .then((resp) => {
        users = resp.user.uid
      });
    var docRef = firebase.firestore().collection('users').doc(users);
    await docRef.get().then((doc) => {
      user = {
        id: doc.id,
        firstName: doc.data().first_name,
        lastName: doc.data().last_name,
      }
    })
    return user;
  }
}
