<template>
    <!-- start sider baner -->
    <SliderBanner />
    <!-- end sider baner -->

    <!-- start YTETOT -->
    <SectionService />

    <!-- end YTETOT -->

    <!-- start co so vat chat -->
    <QualityService />
    <!-- end co so vat chat -->
    <!-- start member -->
    <SectionMember />
    <!-- end member -->
</template>

<script setup>
import SectionService from './components/SectionService/SectionService.vue';
import SliderBanner from './components/SliderBanner/SliderBanner.vue';
import QualityService from './components/QualityService/QualityService.vue';
import SectionMember from './components/SectionMember/SectionMember.vue';
</script>
