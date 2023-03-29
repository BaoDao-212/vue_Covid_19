<template>
  <header>
    <nav>
      <ul>
        <div class="logo">
          <span class="label_vaccovid">VACCOVID</span>
          <span class="label_live">.LIVE</span>
          <div class="circle"></div>
        </div>
        <li>
          <router-link to="/home">COVID-19</router-link>
        </li>
        <li>
          <a href="#">VACCINE</a>
          <div class="hover_color"></div>
        </li>
        <li>
          <a href="#">TREATMENT</a>
          <div class="hover_color"></div>
        </li>
        <li>
          <a href="#">MAP</a>
          <div class="hover_color"></div>
        </li>
        <li>
          <a href="#">NEWS</a>
          <div class="hover_color"></div>
        </li>
        <li>
          <router-link to="/about">ABOUT</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "HeaderWeb",
};
</script>
<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  background-color: #21354d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  max-width: 100%;
  display: flex;
  display: row;
  height: auto;
  padding: 0 20px;
}
.label_vaccovid {
  color: aqua;
}
.label_live {
  color: #c90a0a;
}
nav ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li:not(:last-child) {
  margin-right: 20px;
}

nav a {
  color: #ded5d5;
  text-decoration: none;
  font-size: 16px;
}

nav li:hover {
  color: #007bff;
}
.hover_color {
  width: 15px;
  height: 3px;
}
nav li:hover + .hover_color {
  color: #04080c;
}
.span {
  font-size: 20px;
}
.circle {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: black;
  animation-name: zoom;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes zoom {
  from {
    transform: scale(1);
    background-color: #c90a0a;
  }
  to {
    transform: scale(1.7);
    background-color: #e13e19;
  }
}
</style>
