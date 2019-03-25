<template>
    <div>
        <h2><router-link to="/"><i class="material-icons create">keyboard_backspace</i></router-link>Add</h2>
        <b-container>
            <b-row>
              <b-col class="mt-3">
                <h6>Content</h6>
                <b-form-input v-model="knowledgeContent" type="text" />
              </b-col>
            </b-row>
            <b-row>
              <b-col class="mt-3">
                <h6>Category</h6>
                <b-form-select v-model="knowledgeCategory" :options="categoryOptions" />
              </b-col>
            </b-row>
        </b-container>
        <b-button class="m-5 pr-5 pl-5" variant="outline-primary" @click="postKnowledge">Save</b-button>
    </div>
</template>

<script>
import store from '@/store/firebase.js'

export default {
  name: 'Add',
  components: {
  },
  data(){
      return {
          knowledgeContent: '',
          knowledgeCategory: '',
          categoryOptions: [
            { value: "Eduaction", text: "Education"},
            { vlaue: "Life", text: "Life"},
            { vlaue: "Love", text: "Love"},
            { value: "Julia Activities", text: "Julia Activities"},
            { value: "Tech", text: "Tech" }
          ]
      }
  },
  methods: {
    postKnowledge: function(){
        if(this.knowledgeContent && this.knowledgeCategory){
            const newData = {
                "Content": this.knowledgeContent,
                "Category": this.knowledgeCategory
            }
            store.postKnowledge(newData).then(response => {
                // console.log(response)
                this.knowledgeCategory = '',
                this.knowledgeContent = ''
            })
        } else {
            alert('Type in some Content')
        }
    }
  }
}
</script>

<style scoped>
</style>
