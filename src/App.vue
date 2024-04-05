
<template>
  <header>
    <div class="wrapper">
      <p class="text-red-400">yhenew addis</p>
        <div class="text-red-400">
          <router-link to="/" class="p-1">Home</router-link>
          <router-link to="/about" class="p-1">about</router-link>
          <router-link :to="{name:'jop'}" class="p-1">jop</router-link>
        </div>
        <div>
          <input type="text" v-model="names">
          <h1>List</h1>
          <div v-for="name in searchedData" :key="name">{{name}}</div>
        </div>
        <button @click="stop">Stop</button>
      <router-view/>
    </div>
  </header>
</template>
<script >
import { computed, ref, watch, watchEffect } from 'vue'
export default{
setup(){
    const names = ref('')
    const age = ref(23)
    const list = ref(['abebe','alemu','aabebe','aallemu'])

    const searchedData = computed(()=>{
      return list.value.filter((name)=>name.includes(names.value))
    })
    
    const stop_watch = watch(names,()=>{
      console.log('printed')
    })
    const stop_effect = watchEffect(()=>{
      console.log('watchEffect',names.value)
    })

    const stop = ()=>{
    stop_watch()
    stop_effect()
    }
    return {
      names,age,searchedData,stop
    }
},
}
  // methods:{
  //   redirect(){this.$router.push({name:'home'})},
  //   back(){this.$router.go(-1)},
  //   forward(){this.$router.go(1)}
  // }
</script>
<style scoped>
a.router-link-exact-active{
  color: aqua;
}
</style>
