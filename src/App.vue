<template>
  <main id="app">
    <aside>
      <header>
        <img src="@/assets/user.png" alt="">
        <h1>Beta Tester</h1>
        <span>Development Beta</span>
      </header>

      <nav>
        <router-link to="/">Dashboard</router-link>
        <router-link to="/income">Income Statements</router-link>
        <router-link to="/charts">Charts</router-link>
        <router-link to="/reports">Reports</router-link>
        <router-link to="/settings">Settings</router-link>

      </nav>
    </aside>




    <router-view />
  </main>
</template>


<style lang="scss">
@import "./ux/system";
@import "./ux/material";
@import "./ux/main";



</style>
