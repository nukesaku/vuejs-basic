import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 初期値
    count: 0,
    users:[
      {id:1, name:'大谷', isVisible: true },
      {id:2, name:'ダルビッシュ', isVisible: false },
      {id:3, name:'錦織', isVisible: true },
    ]
  },
  // computed同様でキャッシュが残る
  // computed内で呼び出す
  // 呼び出し方法
  // └ プロパティスタイル: this.$store.getters.visibleUsers <= これが推奨(キャッシュされるから)
  // └ メソッドスタイル: this.$store.getters.visibleUsers()
  // gettersはcomputedと同じようにアロー関数で書くことが多い
  getters: { // ゲッターの役割はstateの値を取得すること。computedと同じようにキャッシュが残る
    // visibleUsers( state ){
    //   // またcomputedと同じくreturnで値を返す必要がある
    //   return state.users.filter( user => user.isVisible)
    // }
    // プロパティスタイルの場合は以下のように書く
    // 第1引数は必ずstateを受け取る。これはミューテーションと同じ
    // 特徴としては第1引数を除いて、引数を受け取ることができない
    visibleUsers: state => state.users.filter( user => user.isVisible),
    
    // メソッドスタイルの場合は以下のように書く
    // 特徴としては引数を受け取ることができる
    // カリー化を使うと以下のように書ける
    // getUserById: state => id => {
    //   return state.users.find( user => user.id === id )
    // }
    // カリー化を使わない場合は以下のように書く
    getUserById: state => {
      return function (id) {
        return state.users.find( user => user.id === id )
      }
    }
  },
  // methods内で呼び出す
  // 呼び出し: this.$store.commit('increment')
  mutations: { // ミューテーションの役割はstateの値を変更すること。同期処理・履歴
    increment( state ){ // 引数は必ずstateを受け取る必要がある。ミューテーションを通る事で履歴に残る
      state.count++
    },
    addCount( state, payload ){ // 第２引数はオブジェクト。ペイロードとは荷物の意味、つまりデータ本体のこと。payloadはobjectにすべき。
      state.count += payload.value
    }
  },
  // ミューテーションと同じくmethods内で呼び出す
  // 同期・非同期でactions/mutationsを使い分けると混乱の元
  // 同期処理でもactions->mutations->stateの流れで書くこと。
  // 呼び出し: this.$store.dispatch('incrementAction')
  actions: { // アクションの役割はミューテーションをコミットすること。非同期処理。履歴が残らない。
    // 第1引数はcontextが渡される。
    //  incrementAction( context ){ // contextはobject。context.commitでミューテーションをコミットする
    //    context.commit('increment')
    //  },
    // contextを分割代入すると以下のように書ける。基本的にはこちらの書き方が使われる。
     incrementAction( { commit }){ 
       commit('increment')
     },
     // 第２引数はコンポーネントから渡される値。
     addCountAction( { commit }, payload ){
        commit('addCount', payload)
     }
  },
  modules: {
    auth
  }
})
