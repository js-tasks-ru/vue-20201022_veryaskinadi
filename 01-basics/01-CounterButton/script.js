import Vue from './vue.esm.browser.js';

const app = new Vue({
    el: '#app',
    data: {
        num: 0
    },
    methods: {
        count: function() {
            this.num += 1;
        }
    }
})