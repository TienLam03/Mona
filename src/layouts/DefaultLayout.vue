<template>
    <Header />

    <!-- Nội dung -->
    <main>
        <slot />
    </main>

    <Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
</script>
