<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>ref: {{ nameRef }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.author[0] }}</p>
    <p>reactiveToRefs: {{ titleToRef }}</p>
    <p>reactiveToRefs: {{ authorToRef[1] }}</p>
    <button @click="btnClick">クリック</button>
    <p>computed: {{ totalPrice }}</p>
    <div>watch: <input v-model="search"></div>
    <div>watchEffect: <input v-model="searchEffect"></div>
    <div>arrayToRef: {{ arrayToRef[0] }}</div>
    <button @click="test()">test()</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, // vue3ではrefなどはimportしないと使えない
computed, watch, watchEffect, onMounted } from 'vue'

export default {
  setup(){
    let name = '大谷'
    const age = 30
    const nameRef = ref('錦織') // プリミティブな値をリアクティブにする。reference.

    const book = reactive({
      title: 'タイトル',
      author: ['大谷', '伊藤']
    })

    const booktoRefs = reactive({
      titleToRef: 'タイトル2',
      authorToRef: ['大谷2', '伊藤2'],
      numberToRef: 100
    })

    const arrayToRef = []

    const item = reactive({
      price: 100,
      number: 1
      })

    const totalPrice = computed(()=>{
      return item.price * item.number
    })

    const btnClick = e => {
      console.log(book.title)
      console.log(e)
    }

    const search = ref('')
    watch(search, (newValue, prevValue) => {
      console.log(`watch: ${search.value}`)
      console.log(`new: ${newValue}`)
      console.log(`prev: ${prevValue}`)
    } ) 

    const searchEffect = ref('')
    watchEffect(()=>{
      console.log(`watchEffect: ${searchEffect.value}`)
    })

    onMounted(()=>{
      console.log('onMounted')
    })

    console.log('setup')
    console.log(this) // undefined
    console.log(nameRef) // RefImpl => これはrefでラッピングしたオブジェクト。
    console.log(nameRef.value) // スクリプトの中で使うときはvalueで値を取得
  return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(booktoRefs),
      btnClick,
      item,
      totalPrice,
      search,
      searchEffect,
      arrayToRef
    }
  },
  data(){
    return {
      number:1,
      sports: 'サッカー'
    }
  },
  created(){
    console.log('created')
    this.arrayToRef = [1,2,3]
    this.numberToRef = 200
    console.log(this)
  },
  methods:{
    test(){
      this.arrayToRef = [4,5,6]
      console.log('test')
    }
  },
  mounted(){
    console.log('mounted')
  }
}
</script>

<style>

</style>