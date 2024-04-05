<template>
    <div v-for="jop in jops" :key="jop.id">
            <router-link :to="{name:'jopdetail',params:{id:jop.id}}">
                <div class="bg-gray-200 px-5  py-2 rounded-sm cursor-pointer mx-20 my-3" >
                    {{jop.title}}
                </div>
            </router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jops:[],
        }
    },
    mounted(){
        fetch('http://localhost:3000/jops')
        .then(res=>res.json())
        .then(data =>{
            this.jops = data
            })
        .catch(err=>{console.log(err)})
    }
}
</script>

<style>

</style>