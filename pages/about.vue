<script>
/* import { NuxtLayout } from '/layouts/default_layout'; */

export default {
    name: 'AboutPage'
}
</script>

<template>
    <!-- <div id="navbar">
<a class="active" href="/">folllits</a>
</div> -->
<AppHeader/>
<div class="about">
        <h1>About Us</h1>
        <p>Welcome to our application. Here is some information about us.</p>
    </div>
    <div style="height:10000px;"></div>
</template>

<style scoped>
.about {
    padding: 20px;
}

.about h1 {
    font-size: 2em;
    margin-bottom: 10px;
}

.about p {
    font-size: 1.2em;
}
</style>