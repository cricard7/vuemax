<template>
    
    <div>
        <h1>AboutRouter.vue</h1>
        <p> Vue router is installed in the terminal by running 
            <code>
                npm install --save vue-router
            </code>
        </p>
        <p>See main.js where we import router and use Vue.use to load the plugin </p>
        <p>The routes themselves can be set up in main.js or can be placed in a 
            seperate file - see routes.js
        </p>
        <p> router-link tag has some attributes to control its behaviour.
            'tag' can be used to make router-link product an element other than anchor tag.
            Default is an anchor tag. 
            'active-class' can be used to set  what class should show up when the route is active.
            Adding the "exact" attribute to router-link will make sure the url suffix exactly matches.
            See udemy section 16 - 229 for explaination on exact.

        </p>

        <p> 
            routes can be changed from from javascript by calling <code>$router.push('/nameOfRoute') </code>
        </p>
        <p> We can access data 'params' passed in through the url by using $route.params.nameofparam. See routes.js  </p>
        <p> Routes can pass data by props <a href="https://medium.com/vue-by-example/learn-quickly-passing-params-as-props-with-vue-router-f4905735b747">https://medium.com/vue-by-example/learn-quickly-passing-params-as-props-with-vue-router-f4905735b747</a></p>
        

        <div>
            <button class="btn btn-primary" @click="toSecondRoute"> Navigate to second route </button>
        </div>
        <hr>
        <h3> about child </h3>
        <p> Child components can be registered in the routes.js by using the children key. router-view tag is then used to render the template</p>
        
        <ul class="nav nav-pills">
            <router-link tag="li" to="/about" class="nav-link" active-class="active" exact>child1</router-link>
            <router-link tag="li" to="/about/two" class="nav-link" active-class="active" exact>child2</router-link>
            <router-link tag="li" :to="{name: 'childthree', params: {ID: 1, formdata: sampleData}}" class="nav-link" active-class="active" exact>child3</router-link>
        </ul>
       <p>Data is passed from aboutRouter to its child route component, childthree using params. See aboutRouter.vue. Note data passed in this way is not present in the URL.</p>
        
		<p>we can also pass data into the router-view. See AboutRouter.vue</p>
        <router-view :formdata= sampleData> </router-view>
    
    </div>

</template>

<script>

// to be able to pass info to the eventBus we need to import it in files that access it
    import { eventBus } from '../main.js';

export default {
	name: 'aboutRouter',
    data: function(){
        return {
            // aboutRouter sampleData bassed to aboutchildthree via props
        sampleData: [
				{
					"__metadata": {
						"id": "07cfb9a7-3f39-429d-b0a8-e74d49dab1b5",
						"uri": "https://progsp.manitoba-ehealth.ca/ccmb/clinical_pub/podp/hostProj/_api/Web/Lists(guid'0e1ae392-7150-4016-a572-fc5e82b78863')/Items(1)",
						"etag": "\"5\"",
						"type": "SP.Data.SpTutorialListItem"
					},
					"SpLookup": {
						"results": [
							{
								"__metadata": {
									"id": "90ebb9f9-e100-46d8-8683-9ed00f843f6d",
									"type": "SP.Data.SpTutorialParentListItem"
								},
								"Title": "Second",
								"ID": 2
        },
							{
								"__metadata": {
									"id": "292795a7-abe1-4d58-8032-8164d54dd453",
									"type": "SP.Data.SpTutorialParentListItem"
								},
								"Title": "Third",
								"ID": 3
        },
							{
								"__metadata": {
									"id": "6a662623-cde9-44af-b64e-993c24ff691f",
									"type": "SP.Data.SpTutorialParentListItem"
								},
								"Title": "First",
								"ID": 1
        }
      ]
					},
					"SpPerson": {
						"__metadata": {
							"id": "a910bf32-4313-4b41-a4d8-3ef9e3ddf4f9",
							"type": "SP.Data.UserInfoItem"
						},
						"Name": "i:0#.w|ntdwrha\\cricard",
						"Title": "Chad Ricard"
					},
					"Id": 1,
					"Title": "num one",
					"SpMultiline": "<div>This is line one\n<br>This is line two</div>",
					"SpChoice": "Enter Choice #1",
					"SpNumber": 1,
					"SpCurrency": 1,
					"SpDateTime": "2018-04-03T05:00:00Z",
					"SpCheckbox": false,
					"SpUrl": {
						"__metadata": {
							"type": "SP.FieldUrlValue"
						},
						"Description": "https://progsp.manitoba-ehealth.ca/ccmb/clinical_pub/podp/fmt/Document%20Review%20Workflow/Brentuximab%20vedotin%20for%20maintenance%20tx%20post%20ASCT/pcodr_brentuximab_adcetris_hl_post-asct_resub_fn_rec.pdf",
						"Url": "https://progsp.manitoba-ehealth.ca/ccmb/clinical_pub/podp/fmt/Document%20Review%20Workflow/Brentuximab%20vedotin%20for%20maintenance%20tx%20post%20ASCT/pcodr_brentuximab_adcetris_hl_post-asct_resub_fn_rec.pdf"
					},
					"ID": 1
  },
				{
					"__metadata": {
						"id": "5ff7f70d-1d0a-4bdf-91df-07a25b55c8c7",
						"uri": "https://progsp.manitoba-ehealth.ca/ccmb/clinical_pub/podp/hostProj/_api/Web/Lists(guid'0e1ae392-7150-4016-a572-fc5e82b78863')/Items(2)",
						"etag": "\"16\"",
						"type": "SP.Data.SpTutorialListItem"
					},
					"SpLookup": {
						"results": [
							{
								"__metadata": {
									"id": "00a99632-c698-4d68-9205-ccac9cdd9035",
									"type": "SP.Data.SpTutorialParentListItem"
								},
								"Title": "First",
								"ID": 1
        }
      ]
					},
					"SpPerson": {
						"__metadata": {
							"id": "9d914230-cd79-4d15-b4dc-92d805faab6b",
							"type": "SP.Data.UserInfoItem"
						},
						"Name": "i:0#.w|ntdwrha\\cricard",
						"Title": "Chad Ricard"
					},
					"Id": 2,
					"Title": "num two",
					"SpMultiline": "<div><font face=\"Palatino Linotype\" size=\"1\" color=\"black\"><u>Prostate Cancer, Castration-Resistant, Advanced; No prior chemotherapy</u> <strong>(February 2014)</strong></font></div>\n\n\n\n<div>&#160;</div>\n\n\n\n<div><font face=\"Palatino Linotype\" size=\"1\" color=\"black\">For the treatment of patients with&#58;</font></div>\n\n\n\n<ul>\n\n <ul>\n\n  <li><font face=\"Palatino Linotype\" size=\"1\" color=\"black\">Histologically confirmed Metastatic Castrate-Resistant Prostate Cancer that is asymptomatic or mildly symptomatic, <strong>AND</strong></font></li>\n\n  <li><font face=\"Palatino Linotype\" size=\"1\" color=\"black\">Disease progression after prior androgen deprivation therapy, as defined by the Prostate Cancer Working Group (two consecutive increases in PSA concentration OR radiographic evidence of disease progression in soft tissue or bone), <strong>AND</strong></font></li>\n\n  <li><font face=\"Palatino Linotype\" size=\"1\" color=\"black\">An Eastern Cooperative Oncology Group (ECOG) performance status of 1 or less, <strong>AND</strong></font></li>\n\n  <li><font face=\"Palatino Linotype\" size=\"1\" color=\"black\">No prior chemotherapy for Metastatic Castrate-Resistant Prostate Cancer.</font></li>\n\n </ul>\n\n</ul>\n\n\n\n<div>&#160;</div>\n\n\n\n<div><font face=\"Palatino Linotype\" size=\"1\" color=\"black\"><u>Exclusion criteria&#58;</u></font></div>\n\n\n\n<ul>\n\n <ul>\n\n  <li><font face=\"Palatino Linotype\" size=\"1\" color=\"black\">Disease progression during previous treatment with enzalutamide</font></li>\n\n </ul>\n\n</ul>\n\n\n\n<div>&#160;</div>\n\n\n\n<div><font face=\"Palatino Linotype\" size=\"1\" color=\"black\">Abiraterone may only be prescribed by Genitourinary DSG Medical Oncologists; and Urologic Oncologists, and Radiation Oncologists as designated by the Genitourinary DSG.</font></div>\n\n\n\n<div>&#160;</div>\n\n\n\n<div><font face=\"Palatino Linotype\" size=\"1\" color=\"black\">Disease status must be reassessed every 3 months via PSA, cancer related symptoms, and/or radiographic imaging. &#160;Further renewal will be granted only if disease response is documented after initial reassessment.</font></div>\n\n\n\n<div>&#160;</div>\n\n\n\n<div><font face=\"Palatino Linotype\" size=\"1\" color=\"black\"><u>Reference&#58; &#160;</u></font></div>\n\n\n\n<div><font face=\"Palatino Linotype\" size=\"1\" color=\"black\">Ryan CJ, Smith MS, et al. &#160;“Abiraterone in Metastatic Prostate Cancer without Previous Chemotherapy.” &#160;<em>N Engl J Med</em> 2013; 368(2)&#58;138-48.</font></div>",
					"SpChoice": "Enter Choice #3",
					"SpNumber": 2,
					"SpCurrency": 2,
					"SpDateTime": "2018-04-04T05:00:00Z",
					"SpCheckbox": true,
					"SpUrl": {
						"__metadata": {
							"type": "SP.FieldUrlValue"
						},
						"Description": "https://progsp.manitoba-ehealth.ca/ccmb/clinical_pub/podp/formulary/CCMB%20Provincial%20Oncology%20Drug%20Formulary.pdf",
						"Url": "https://progsp.manitoba-ehealth.ca/ccmb/clinical_pub/podp/formulary/CCMB%20Provincial%20Oncology%20Drug%20Formulary.pdf"
					},
					"ID": 2
  }]
        
        }

    } ,

    props: {

        name: {
            type: String
        }
    },
    methods: {

        toSecondRoute (){
           
           this.$router.push('/second');
            
        }
    }

}
</script>

<style scoped>


</style>
