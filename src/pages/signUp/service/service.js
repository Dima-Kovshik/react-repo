import firebase from "../../../firebase";

export default class SignUpService {
  static getSignUp(email, password, first_name, last_name) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        firebase.firestore().collection('users').doc(resp.user.uid).set({
          first_name: first_name,
          last_name: last_name,
          role: "user"
        })
      })
  }
}
