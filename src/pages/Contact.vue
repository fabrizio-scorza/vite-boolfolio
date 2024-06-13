<script>


export default {
    data() {
        return {
        }
    }
}

</script>

<template>

    <main class="bg-secondary">
        <section>
            <div class="container py-5 text-black">
                <h2>Contact me</h2>

                <form>
                    <div class="form-group mb-3">
                        <label class="pb-2" for="name">Name and Surname</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter yout name and surname">
                    </div>

                    <div class="form-group mb-3">
                        <label class="pb-2" for="email">Email Address</label>
                        <input type="email" class="form-control" id="email1" aria-describedby="emailHelp"
                            placeholder="Enter your email address">
                    </div>

                    <div class="form-group mb-3">
                        <label class="pb-2" for="textarea">Message</label>
                        <textarea class="form-control" id="textarea" rows="3"
                            placeholder="Type your message here"></textarea>
                    </div>

                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
            </div>
        </section>
    </main>

</template>

<style></style>