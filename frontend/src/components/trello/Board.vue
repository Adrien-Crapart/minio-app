<template>
    <div>
        {{ board }}
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'TrelloPage',
    components: {
        
    },
    computed: mapState(['board']),
    methods: {
        
    },
    created() {
        
    }
}
</script>