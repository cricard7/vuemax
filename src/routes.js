import aboutRouter from './components/aboutRouter.vue';
import secondRoute from './components/secondRoute.vue'

// all routes serverd by vue-router need to be imported here

//child routes
import aboutchild from "./components/about/aboutchild.vue";
import aboutchildtwo from "./components/about/aboutchildtwo.vue";
import aboutchildthree from "./components/about/aboutchildthree.vue";


export const routes = [
    { path: '/about', component: aboutRouter , children: [
        {path: '', component: aboutchild},
        {path: '/about/two', component: aboutchildtwo},
        {path: '/about/three/:ID', component: aboutchildthree, name: "childthree", props: true}
    ]},
    { path: '/second', component: secondRoute},
    { path: '*', redirect: '/about'} // when we receive a url that is not described above route to /about
]

// /about/:id  above allows for an id to be passed in through the url
// if the id is not present then the component will not render
// the id is accessed in our component using $route.params.nameofparam

// an alternative is to use props to pass in the id
// to do this the following would be used
// { path: '/about/:id', component: aboutRouter, props: true}
// when set up this way, if the component has a prop named id then the id in the url will be passed to it.

//https://stackoverflow.com/questions/47239742/vue-js-passing-array-from-one-page-to-another
// https://medium.com/vue-by-example/learn-quickly-passing-params-as-props-with-vue-router-f4905735b747