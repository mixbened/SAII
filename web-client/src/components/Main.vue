<template>
    <div>
        <h1><router-link to="/add"><i class="material-icons create">add_circle_outline</i></router-link>Knowledge</h1>
        <b-alert v-if="deletedVisible" show variant="warning" class="fixed-bottom ease-in">Deleted Knowledge</b-alert>
        <b-container>
            <b-row class="m-3 p-2 knowledge mw-50" v-bind:key="index" v-for="(item,index) in knowledgeList">
                <b-col>{{ item.Content }} <b-badge @click="filterKnowledgeList(item.Category)">{{ item.Category }}</b-badge></b-col>
                <span class="delete" cols="1"><i @click="deleteKnowledge(item.id)" class="material-icons">clear</i></span>
            </b-row>
        </b-container>
        <b-button class="m-5 pr-5 pl-5" variant="outline-primary" id="resetButton" v-if="filter" @click="reset">Clear Filter</b-button>
    </div>
</template>

<script>
import store from '@/store/firebase'
import utils from '@/utils/utils'

export default {
  name: 'Main',
  data(){
      return {
          deletedVisible: false,
          knowledgeList: [],
          originalKnowledgeList: [],
          filter: false
      }
  },
  components: {
  },
  created(){
    this.getKnowledge()
  },
  methods: {
      deleteKnowledge: function(id){
          // delete from FS
          store.deleteKnowledge(id).then(response => {
              console.log(response)
          }).catch(err => console.log(`Error in deleting Knowledge: ${err}`))
          // delete from current list
          this.knowledgeList.splice(this.knowledgeList.findIndex(el => el.id === id),1)
          this.deletedVisible = true
          setTimeout(() => this.deletedVisible = false, 1500)
      },
      getKnowledge: function(){
        store.getKnowledge().then(response => {
            this.knowledgeList = utils.createListfromObj(response)
        }).catch(err => console.log(`Error in getting Knowledge: ${err}`))
      },
      showDelete: function(){

      },
      filterKnowledgeList: function(category){
        // save all knowledge entries - for reset (but check if originals already saved)
        // console.log('Original: ', originalKnowledgeList, knowledgeList)
        if(!this.originalKnowledgeList.length) this.originalKnowledgeList = this.knowledgeList
        // filter
        let filteredKnowledgeList = this.knowledgeList.filter(el => el.Category === category);
        // console.log("Filtered: ", filteredKnowledgeList)
        // set new state with filtered knowledge
        this.knowledgeList = filteredKnowledgeList;
        this.filter = true;
      },
      reset: function(){
        this.knowledgeList = this.originalKnowledgeList
        this.filter = false
      }
  }
}
</script>

<style>
.knowledge {
  cursor: pointer;
  position: relative;
  background: rgba(230, 242, 255, 0.8);
}
.fixedBottom {
  position: fixed;
  bottom: 0;
}
.delete {
  position: absolute;
  opacity: 0;
  color: rgba(255, 0, 0, 0.77);
  border-radius: 5px;
  transition: 1s;
  display: flex;
  align-items: center;
  width: 50%;
  /* height: 100%; */
}

.delete:hover {
  opacity: 1;
}

.create {
  font-size: 0.8em;
  position: absolute;
  left: 0;
  padding: 0.2em 1em;
  cursor: pointer;
}
.invisible {
  opacity: 1;
}
.ease-in {
  transition: 5s;
}
</style>
