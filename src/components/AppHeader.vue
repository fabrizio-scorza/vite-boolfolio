<script>

export default {
  data() {
    return {
    }
  }
}

</script>

<template>

  <header>
    <section class="bg-dark">
      <div class="container py-3 text-success d-flex justify-content-between align-items-baseline">
        <h1><span class="text-warning">Bool</span>folio</h1>
        <ul class="list-unstyled d-flex gap-3">
          <li>
            <RouterLink to="/" class="link-success">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/portfolio" class="link-success">Portfolio</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="link-success">About</RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </header>

</template>

<style></style>