<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue'

export default {
    components: {
        ProjectCard,
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

    <main class="bg-secondary">
        <section>
            <div class="container py-5">
                <h2 class="text-black pb-4">My <span class="text-warning">Bool</span>folio: Projects </h2>
                <ul class="list-unstyled row row-cols-3 row-gap-5">
                    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
                </ul>
            </div>
        </section>
    </main>

</template>

<style></style>