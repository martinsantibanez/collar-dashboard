<template>
    <div>
        Logging out...
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    created: async function() {
        //console.log(this.$store);
        await this.$store.dispatch('auth/logout');
        // console.log(this.$router);
        this.$router.push('/');
    }
}
</script>
