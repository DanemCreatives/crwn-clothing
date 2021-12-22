import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
import Header from "./components/Header/header.component";
import HomePage from "./pages/Homepage/homepage.component";
import Hats from "./pages/Hats/hats.component";
import Shop from "./pages/Shop/shop.component";
import SignInAndSignUp from "./pages/SignInAndSignUp/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentDidUpdate() {
    // console.log(this.state.currentUser);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/hats" element={<Hats />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
