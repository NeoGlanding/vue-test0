let app = Vue.createApp({
    data() {
        return {
            name: 'Ihsan',
            vue: 'https://v3.vuejs.org',
            godOfThunder: 'Thor Son of Odin',
            h2Element: '<h2>Superboy</h2>',
        }
    },
    methods: {
        brotherName(param) {
            return `Hello everyone, this is my brother ${param}`
        },
        vueName() {
            return this.godOfThunder
        }
    }
});

app.mount('#test-app')