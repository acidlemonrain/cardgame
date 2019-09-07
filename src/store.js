import Vue from 'vue'
import Vuex from 'vuex'
import { cardSet } from "./card";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
          socket:{},
    //游戏信息
          clock:10,
          gameInfo :{
            id:null,
            enemyId:null,
            turn:null,
            winner:null,
            enemyhealth:30,
            minehealth:30,
            enemytablecards:[
          ],
          enemyhandcards:6,
          tablecards:[
          ],
          handcards:[
          ]
        },
        //客户端独有信息
        listen: (event)=>{
          document.getElementById('chooseCard').style.top= event.pageY +'px';
          document.getElementById('chooseCard').style.left= event.pageX +'px';      
      },
        chooseId:null,
        choosedCard: {
          id:1,
          name:'warrir'
        },
        chooseTableCard:{

        },
        attackMode:false,
        attackedCard:null    
  },
  mutations: {
    ...{
      gameinit(state,gameInfo){     
        if(!gameInfo.handcards){
            gameInfo.handcards = state.gameInfo.handcards
            
            state.gameInfo = gameInfo
        }else{
          state.gameInfo = gameInfo
         
        }
      },
      clockUpdate(state,info){
        state.clock = info.clock
        state.gameInfo.turn = info.id
      },
      setAttackMode(state,info){
        state.attackMode=info
      },
     socketInit(state,socket){
        state.socket = socket
     },
     },
    ...cardSet
  },
})
