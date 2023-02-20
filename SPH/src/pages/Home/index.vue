<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <TodayRecommend/>
        <RankList/>
        <GuessYouLike/>
        <FsFloor v-for="floor in floorList" :key="floor.id" :list = 'floor'/>
        <FsBrand/>
    </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import RankList from './RankList'
import GuessYouLike from './GuessYouLike'
import FsFloor from './FsFloor'
import FsBrand from './FsBrand'
import {mapState} from 'vuex'
export default {
    name:'FsHome',
    components:{ListContainer,TodayRecommend,RankList,GuessYouLike,FsFloor,FsBrand},
    mounted(){
        //派发actions，获取floor组件的数据
        this.$store.dispatch('getFloorList')
    },
    computed:{
        ...mapState({
            floorList:(state)=>{
                return state.home.floorList
            }
        })
    }
}
</script>

<style>

</style>