console.log('test');

const sectionOne = Vue.createApp({
    data() {
        return {
            interpolation: 'interpolation',
            vueLink: 'https://vuejs.org/',
        };
    }
});
sectionOne.mount('.section-one');