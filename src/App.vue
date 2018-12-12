<template>
  <div>
    <h1> hello! this is rendered from App.vue </h1>
    <p> status: {{status}}</p>
    <div><a href='http://google.com/' data-intro='Hello step one!'>Link to google</a></div>
    <hr>
    <h1> status widget</h1>
    <status-widg></status-widg>
    <hr>

    <h1 data-intro="Hi Step Two"> This is the hello world widget which is registered locally</h1>
    <hello-world v-for="n in 5" :key="n">{{n}}</hello-world>

    <hr>

    <parent-comp></parent-comp>

    <div class="jumbotron" id="router">
      <h1> Vue Router </h1>
      <p> Routing in vue js is done by installing the vue router plugin </p>
      <p> Routing replaces portions of your application with specific vues </p>
      <p> using a router view tag we can put the active route in place in this template</p>
      <p> router-link tag is used to create links to our routes</p>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link tag="a" to="/about" class="nav-link" active-class="active" exact href="#">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/second" class="nav-link" active-class="active" href="#">Second Route</router-link>
        </li>
      </ul>

      <!-- the router-view tag is where the vue router places content based on the URL -->
      <!-- routes.js is used in this app to configure the route -->
      <router-view> </router-view>

      <alist></alist>

      <h1> query parameters</h1>
      <p>Query parameters can be used in the URL to pass additional data</p>
      <p>Take a look at this router link for syntax

        <router-link tag="a" :to="{name: 'childthree', params: {ID: 3}, query: { a: 100, b: 'somestring'}}" class="nav-link">
          move to childthee route, set param ID to 3 and add query parameter a=100 and b='somestring'
        </router-link>
      </p>
      <p>We can access data 'query' passed in through the url by using $route.query.nameofparam. See this section of
        App.vue </p>
      <p>value of a: {{ $route.query.a}}</p>
      <p>value of b: {{ $route.query.b}}</p>

      <h1>Watching for changes to params or query params on a page</h1>
      <p>If params or query changes on the page but the component is not re-rendered (ie you are not navigating to the
        component) then we need to
        watch for changes to params or query. This is done by setting watch on $route. If we do not watch for these
        changes then the value of the parameters
        in the component do not actually change. See App.vue. Udemy lesson 233 - Reacting to Changes in Route
        Parameters.
      </p>

      <h1>redirecting</h1>
      <p>routes can be redirected based on what is typed in the URL. There are many options for this (lesson 242
        udemy).
        One way to catch all routes not described in router is to add the following path

        <code> { path: '*', redirect: '/'}</code>
        See routes.js
      </p>
    </div>

    <div class="jumbotron">
      <h1>Slots</h1>
      <p>Slots can be used to pass info into a component. This is most useful when passing markup html.
        Otherwise we could just use props.
      </p>
      <p>To enable slot content to be passed in, simple include &lt; slot &gt; content &lt; /slot &gt; in the child
        component</p>

      <slots>

        <h2>h2 Info passed into slots</h2>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>

      </slots>

      <h1>Named slots</h1>

      <p>slots can have assigned names by adding a slot attribute to the component. In the component the slot tag is
        given a matching name attribute. See App.vue and slots.vue</p>

      <slots>
        <h1 slot="title"> some info passed into the title slot</h1>
        <h4 slot="content"> Some info passed into the content slot</h4>
      </slots>

      <p>if a blank slot tag is included in the component by default vue js will put any info passed in without a slot
        attribute into the blank tag. Also any info written in the slot tag will be show by default if nothing is
        passed in.</p>
      <slots>
      </slots>

    </div>

    <div class="jumbotron">
      <h1>Component Tag</h1>

      <p>the component tag can be used to dynamically render components based on the name of the component.</p>
      <p>see App.vue - In the example below the component tag is used to render either the hello-world component or
        slots component. It is bound dynamically to a reactive property using :is</p>
      <p><button type="button" @click="activeComponent = 'hello-world'">hello-world</button></p>
      <p><button type="button" @click="activeComponent = 'slots'">slots</button></p>

      <!--to prevent component from being destroyed when it goes off screen -->
      <keep-alive>
        <component :is="activeComponent"></component>
      </keep-alive>
      <p>to prevent the component from being destroyed when it is switched, wrap the component tag in keep-alive tags</p>
      <p>there are two lifecycle hooks that can be run on the components that are dynamically rendered: "deactivated()"
        and "activated()". see HelloWorld.vue</p>
    </div>


    <div class="jumbotron">
      <h1>vue-tour</h1>

      <button type="button" class="btn btn-primary" @click="startTour">Start Tour </button>
      <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is
        'v-step-0'.</div>
      <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is
        'v-step-1'.</div>
      <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its ID
        is 'v-step-2'.</div>

      <v-tour name="myTour" :steps="steps">

        <template slot-scope="tour">

          <v-step v-if="tour.currentStep === index" v-for="(step, index) of tour.steps" :key="index" :step="step"
            :previous-step="tour.previousStep" :next-step="tour.nextStep" :stop="tour.stop" :isFirst="tour.isFirst"
            :isLast="tour.isLast">
            <template>
              <div slot="actions">
                <h2>{{status}} </h2>
                <button @click="tour.previousStep" type="button" class="btn btn-primary">!!Previous step</button>
                <button @click="tour.nextStep" type="button" class="btn btn-primary">Next step using type=button</button>
                <button @click="tour.stop" type="button" class="btn btn-primary">stop using type=button</button>
              </div>
            </template>
          </v-step>

        </template>

      </v-tour>


    </div>

    <div class="jumbotron">
      <h1>Mixins</h1>
      <p>mixins can be used to share code between components such as data, methods, lifecycle hooks etc.</p>
      <p>Simply make and object containing the info that would be contained in a component then used the mixins key on
        any components that want to use it.</p>
      <p>Warning that there are mergin rules if duplicate data or method names exist.</p>
      <p><a href="https://vuejs.org/v2/guide/mixins.html" target="_blank">https://vuejs.org/v2/guide/mixins.html</a></p>

      <br>
      <p>See App.vue and mixin.js where the mixin key is used to generate this text: </p>
      <!-- This data and method are stored in mixin.js and registered as a mixin on the App.vue instance using the mixins key-->
      <p>data from mixin: <code> {{mixinName}} </code></p>
      <p>method from the mixin: <code>{{allCaps(mixinName)}}</code></p>
    </div>

    <div class="jumbotron">
      <h1 class="transitionh1">Transitions</h1>
      <p class="transitionp">test</p>
      <p>the transition tag can be added around an element to have vue js to animate elements when v-show or v-if it
        tiggered </p>
      <p>Add a transition element around a single html element and give it a name property</p>
      <p>Vue JS will add four css classess when the element is shown</p>
      <ul>
        <li>.name-enter - this class shows for one frame. It should have css such as setting opacity to 0</li>
        <li>.name-enter-acive - this class runs for the duration of that animation depending on what is put in the css
          for this class</li>
        <li>.name-leave - one frame as with enter</li>
        <li>.name-leave-active - for the duration of the leave animation.</li>
      </ul>

      <button @click="transitionshow = !transitionshow" type="button"> Toggle element</button>

      <transition name="testanimate">
        <div v-if="transitionshow" class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </transition>
    
    
    </div>

  </div>
</template>

<script>
  // in the example above, status-widg is able to be used because it is registered as a global component with Vue.component inside main.js

  // we can also register a component, such as the HelloWorld.vue component to be registered locally only. See the import below just before export default.
  // the component is then regiestered locally inide the export default with the components key.

  // the App.vue file serves as the root instance that renders the app.
  import hello from './components/HelloWorld.vue';
  import parent1 from './components/ParentComponent.vue';
  import alist from './components/examplelist.vue';
  import slots from './components/slots.vue';


  //mixin import 

  import {
    someMixin
  } from './js/mixin.js';

  export default {

    // this is how mixins are used

    mixins: [someMixin],

    created() {

      //introJs().start();


    },
    name: 'App',
    // the contents of a vue instance go here. App.vue is working like a component, so data must be a function that returns an object
    data: function () {
      return {
        transitionshow: false,

        activeComponent: "hello-world",
        status: "critical",

        steps: [{
            target: '#v-step-0', // We're using document.querySelector() under the hood
            content: `Discover <strong>Vue Tour</strong>!`
          },
          {
            target: '.v-step-1',
            content: 'An awesome plugin made with Vue.js!'
          },
          {
            target: '[data-v-step="2"]',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'top'
            }
          }
        ]
      }

    },

    components: {
      "hello-world": hello,
      "parent-comp": parent1,
      "alist": alist,
      "slots": slots
    },

    mounted() {
      // TODO: Hide me after the first visit so returning users don't get annoyed!
      // vue-tour

    },
    methods: {
      startTour() {
        this.$tours['myTour'].start()
      }
    }

  }
</script>