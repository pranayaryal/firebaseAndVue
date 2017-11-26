import firebase from 'firebase'

var config = {

  apiKey: 'AIzaSyCfXZkJqSzxKGKVPYt6KmQfwgCGFrABF5Q',
  authDomain: 'cropchat-8e61e.firebaseapp.com',
  databaseURL: 'https://cropchat-8e61e.firebaseio.com',
  projectId: 'cropchat-8e61e',
  storageBucket: 'cropchat-8e61e.appspot.com',
  messagingSenderId: '49068731583'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
