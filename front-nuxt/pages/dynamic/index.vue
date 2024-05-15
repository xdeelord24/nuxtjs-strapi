<template>
<div>
    <nuxt-link :to="{ path: `/dynamic/${item.id}` }">View Item 1</nuxt-link>
    <nuxt-link :to="{ path: `/dynamic/${2}` }">View Item 2</nuxt-link>
    <nuxt-link :to="{ path: `/dynamic/${3}` }">View Item 3</nuxt-link>
</div>
</template>

<script>
export default {
    data() {
        return {
            item: {
                id: 1, // example item id
            },
        };
    },
};
</script>
