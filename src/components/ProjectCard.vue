<script>

export default {
    components: {
    },
    props: ['project'],
    data() {
        return {
        }
    }
}

</script>

<template>
    <li class="col">
        <div class="card">
            <div class="card-header bg-success">
                <h1 class="fs-3 text-black">{{ project.name }}</h1>
            </div>
            <div class="card-body bg-dark d-flex flex-column justify-content-between">
                <p class="card-text text-white">
                    {{ project.description ? project.description : 'No Description founded' }}
                </p>
                <a class="link-success" :href="project.link"> {{ project.link }}</a>
            </div>
            <div class="card-footer bg-success text-black">
                <p class="fs-4"> {{ project.type.name }}</p>
                <ul class="list-unstyled d-flex gap-2 flex-wrap">
                    <li v-for="tecnology in project.technologies"> {{ tecnology.name }}</li>
                </ul>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.card {
    min-height: 400px;
}
</style>