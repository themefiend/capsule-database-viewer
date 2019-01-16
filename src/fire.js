import firebase from 'firebase';
const config = {
	apiKey: "AIzaSyC-FgFJGFfqOAUQm7V2VAiLAXK8ygmY8KA",
	authDomain: "capsule-theme-bigcartel.firebaseapp.com",
	databaseURL: "https://capsule-theme-bigcartel.firebaseio.com",
	projectId: "capsule-theme-bigcartel",
	storageBucket: "capsule-theme-bigcartel.appspot.com",
	messagingSenderId: "110118486824"
};
const fire = firebase.initializeApp(config);
export { fire }