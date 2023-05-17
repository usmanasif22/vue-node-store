<template>
  <div id="navbar">
    <div id="brand">
      <img :src="logo" alt="SiteLogo" />
    </div>
    <div class="navlinks">
      <ul>
        <li>Expert Sourcing</li>
        <li>Contact Manufacturing</li>
        <li>Buy</li>
        <li>Financing</li>
        <li>About Us</li>
      </ul>
    </div>
    <div class="nav-buttons">
      <div id="register">
        <button id="registerBtn">Register</button>
      </div>
      <div id="signin">
        <button id="signinBtn">
          <img
            id="signicon"
            src="https://thebuyhive.com/buy/img/user.fe2d5af3.svg"
            alt="signinlogo"
          />
          Sign In
        </button>
      </div>
      <div id="cart">
        <span>
          <svg
            id="carticon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              fill="#81d2ab"
            ></path>
            {" "}
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../../assets/logo.png";
export default {
  data() {
    return {
      logo: img
    };
  }
};
</script>
<style scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
#brand {
  cursor: pointer;
}
.navlinks {
  display: flex;
  margin: 0px 20px;
}
.navlinks ul {
  display: flex;
  list-style: none;
}
.navlinks li {
  margin: 0 30px;
  cursor: pointer;
}
.nav-buttons {
  padding-bottom: 10px;
}
.nav-buttons button {
  background-color: #ffffff;
  height: 35px;
  width: 100px;
  border-radius: 20px;
  border: 1px solid #81d2ab;
  font-size: 1em;
  font-weight: 700;
  color: #81d2ab;
}
#signin {
  display: inline-block;
}
#signinBtn {
  width: 120px;
  cursor: pointer;
  position: relative;
  text-align: right;
  padding-right: 15px;
  outline: none;
}
#signicon {
  position: absolute;
  left: 20px;
  bottom: 5px;
  height: 25px;
  width: 23px;
  cursor: pointer;
}
#register {
  display: inline-block;
}
#registerBtn {
  border: 1px solid #55b3ca;
  color: #55b3ca;
  cursor: pointer;
  outline: none;
}
#cart {
  display: inline-block;
  padding: 10px 5px;
}
#carticon {
  color: rgb(129, 210, 171);
  margin-left: 10px;
  width: 40px;
  height: 25px;
  cursor: pointer;
  position: relative;
  top: 7px;
  left: 1px;
}
</style>
