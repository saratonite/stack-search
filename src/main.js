import Vue from 'vue'
import VueRouter from 'vue-router';



/* Base css */
var BaseCss = require('spectre.css');

/* Import custom components */

import Home from './pages/Home'
import NotFound from './pages/404'


Vue.use(VueRouter)
var router = new VueRouter();

router.map({
    '/': {
        component: Home
    },
    '*':{

      component:NotFound

    }
})


var app =  Vue.extend({
});

router.start(app,'#app')

/* eslint-disable no-new */
