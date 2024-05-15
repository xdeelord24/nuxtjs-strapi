<template>
<div>
    <h1>Item Details</h1>
    <p>Item ID: {{ itemId }}</p>
</div>
</template>

<script>
export default {
    async asyncData({
        params
    }) {
        const itemId = params.id;
        // Fetch data based on itemId if needed
        return {
            itemId
        };
    }
}
</script>
