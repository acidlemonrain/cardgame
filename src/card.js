module.exports.cardSet = {

    //选择攻击牌
    setChooseTableCard(state,info){
      state.chooseTableCard=info
    },
    //选择被攻击牌
    setAttackedCard(state,info){
      state.attackedCard=info
    },
    // tablecardChoose(state,card){
    //     state.chooseTableCard = card 
    // },
    //战场牌添加
    carddown (state,id) {
         var thecard =  state.gameInfo.handcards.find(ele=>{return ele.id == id})
         state.gameInfo.tablecards.push(thecard)
         state.gameInfo.handcards =  state.gameInfo.handcards.filter(ele=>{ return ele.id != id })
         state.chooseId = null
    },
        //确定预先牌
    cardchoose(state,card){
        state.choosedCard =card;
        state.chooseId =card.id
    },
       //取消预选牌
    cardcancel(state){
        document.getElementById('card'+state.chooseId).style.opacity = 1;
        state.chooseId = null
    },
    //牌牌pk 更新状态
    cardPK(state,info){
        let {attacker ,attacked} = info
        //attacked  update
        attacked.health =  attacked.health -attacker.attack;
        if(attacked.health<=0){
            state.gameInfo.enemytablecards =  state.gameInfo.enemytablecards.filter(ele=>{ return ele.id != attacked.id })
            state.attackedCard= null
        }else{
            state.gameInfo.enemytablecards =  state.gameInfo.enemytablecards.filter(ele=>{ return ele.id != attacked.id })
            state.gameInfo.enemytablecards.push(attacked)
        }
        //attacker update
        attacker.health = attacker.health - attacked.arm
        if(attacker.health<=0){
            state.gameInfo.tablecards =  state.gameInfo.tablecards.filter(ele=>{ return ele.id != attacker.id })
        }else{
            state.gameInfo.tablecards =  state.gameInfo.tablecards.filter(ele=>{ return ele.id != attacker.id })
            state.gameInfo.tablecards.push(attacker)
        }
    }
}