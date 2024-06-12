<script>
import axios from 'axios';

export default {
  components: {
  },
  data() {
    return {
      projects: []
    }
  },
  methods: {
    fetchData() {
      axios.get('http://127.0.0.1:8000/api/projects').then(res => {
        this.projects = res.data.projects;
      })
    }
  },
  created() {
    this.fetchData();
  }
}

</script>

<template>

  <main>
    <section>
      <div class="container py-5">
        <div class="row aling-items-center flex-column justify-content-center">
          <div class="col-auto">
            <ul class="list-unstyled">
              <li v-for="project in projects">
                <h3><span class="text-danger">Project Title:</span> {{ project.name }}</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<style></style>