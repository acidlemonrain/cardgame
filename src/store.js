import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        listen: (event)=>{
          document.getElementById('chooseCard').style.top= event.pageY +'px';
          document.getElementById('chooseCard').style.left= event.pageX +'px';      
  },
        chooseId:null,
        choosedCard: {
          id:1,
          name:'warrir'
        },
        tablecards:[
          {
            id:7,
            name:'warrir'
          },
          {
            id:8,
            name:'mana'
          },
        ],
        handcards:[
          {
            id:1,
            name:'warrir'
          },
          {
            id:2,
            name:'mana'
          },
          {
            id:3,
            name:'thief'
          },
          {
            id:4,
            name:'thief'
          }
        ]
  },
  mutations: {
    carddown (state,id) {
         var thecard =  state.handcards.find(ele=>{return ele.id == id})
         state.tablecards.push(thecard)
         state.handcards =  state.handcards.filter(ele=>{ return ele.id != id })
         state.chooseId = null
    },
    cardchoose(state,card){
        state.choosedCard =card;
        state.chooseId=card.id
    },
    cardcancel(state){
      document.getElementById('card'+state.chooseId).style.opacity = 1;
      state.chooseId = null
    }
  },
  actions: {

  }
})
