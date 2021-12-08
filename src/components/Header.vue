<template>
  <header
    class="
      text-center
      bg-gradient-to-r
      from-green-700
      to-blue-500
      text-white
      p-4
      mb-10
    "
  >
    <div class="text-3xl md:text-5xl font-bold mb-3">
      <i class="fa fa-viruses"></i> Covid-19 Tracker
    </div>

    <p>
      API by
      <a class="text-blue-300" href="https://covid19api.com" target="_blank"
        >covid19api.com</a
      >, Frontend by
      <a
        class="text-yellow-200"
        href="https://github.com/humble-barnacle001/vue-covid-tracker"
        target="_blank"
        ><i class="fab fa-github"></i> humble-barnacle001</a
      >
    </p>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
