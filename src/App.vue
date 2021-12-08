<template>
  <Header />
  <div class="container mb-5 py-4">
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
};
</script>
