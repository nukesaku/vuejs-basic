<template>
  <div>
    スタブ
    <div v-for="book in stub" :key="book.title">
      <p>{{book.title}}</p>
      <p>{{book.author}}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import EventBus from '@/lib/EventBus.js'

export default{
  setup(){
    let stub = ref([
        {
          title:'stubタイトル',
          author:'stub著者1'
        }
    ])

    onMounted(() => {
      console.log('mounted')
      EventBus.on('event-truck', (e) => {
        console.log('event-truckをon...')
        console.log(e)
        stub.value = e
      })
    })

    return {
      stub
    }
  },
  methods:{
    parentMethod(e){
      console.log(e)
    }
  },
  provide(){
    return {
      userName: '親で設定した値'
    }
  },
  mounted(){
    console.log('mounted')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
