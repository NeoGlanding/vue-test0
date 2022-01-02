let app = Vue.createApp({
    data() {
        return {
            name: 'Ihsan',
            vue: 'https://v3.vuejs.org'
        }
    },
    methods: {
        brotherName(param) {
            return `Hello everyone, this is my brother ${param}`
        }
    }
});

app.mount('#test-app')