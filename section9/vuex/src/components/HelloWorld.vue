<template>
  <div>
    <!-- <button @click="increment">+</button> -->
    <button @click="incrementAction">+</button>
    <button @click="addCount">+10</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    // ミューテーションを直接呼び出す方法
    // increment(){
    //   this.$store.commit('increment') // commitでmutationを呼び出す
    // },
    // addCount(){
    //   this.$store.commit('addCount', { 
    //     value: 10
    //    })
    // }

    // アクションを介してミューテーションを呼び出す方法
    // increment(){
    //   this.$store.dispatch('incrementAction')
    // },

    // Mapヘルパー
    // 今回はmacActionsだが、mapState・mapMutations・mapGettersもある
    // Mapヘルパーはスプレッド構文で展開することで、$storeを仲介せずにアクションを呼び出せる。
    // つまりactions内のメソッドをmethodsに展開する。これにより$storeを仲介せずにアクションを呼び出せる。
    // 例: this.incrementActionでincrementActionを呼び出せる。ただし引数ありの場合は、別途ラップするメソッドを用意する必要がある。
    ...mapActions(['incrementAction', 'addCountAction']),

    // mapActionsで引数なしならこの3行と同じ意味
    // incrementAction(){
    //   this.$store.dispatch('incrementAction')
    // },

    // mapActionsでこのコードが生成される
    // これだと引数を渡せない
    // addCountAction(){
    //   this.$store.dispatch('addCountAction')
    // },
    
    // addCount(){
    //   this.$store.dispatch('addCountAction', {
    //     value: 10
    //   }),

    // mapActionsで引数を取る場合は
    // 別メソッドを用意し、this.action名(引数)でOK
    addCount(){
      this.addCountAction( {
        value: 10
      })
    }
  }
}
</script>

