import firebase from '@/utilities/firebase'

export default function(next, store) {
      
    firebase.auth().getRedirectResult()
    .then(
      () => {
        const u = firebase.auth().currentUser;
        store.dispatch('login/setIsLogged', true);
        store.dispatch('login/setUser', u);
        if (!u) {
          next({path: '/'});
          store.dispatch("login/toggleLogin");
        } else {
          next()
        }
      })
    .catch( (err) => {
      console.log(err);
    });    
  }