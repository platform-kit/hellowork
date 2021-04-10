<template>
  <Layout> </Layout>
</template>

<script>
export default {
  async mounted() {
    if (window.location.href.includes("admin")) {
      window.location.replace("/?admin");
    } else {
      window.location.replace("/");
    }
  },
};
</script>