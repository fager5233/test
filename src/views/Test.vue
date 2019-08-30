<template>
  <div class="test">
    <div>
      平均值: {{getAverage}}
    </div>
    <button @click="update">加载更多</button>
    <div class="list" v-for="item in dataList" :key="item.time.getTime() + '' + item.id">
      <div>{{item.id}}</div>
      <div>{{item.data}}</div>
      <div>{{item.time}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'test',
  data () {
    return {
      // dataList: [],
      // average: ''
    }
  },
  computed: {
    ...mapGetters([
      'getAverage'
    ]),
    ...mapState([
      'dataList'
    ])
  },
  methods: {
    ...mapActions([
      'getDataCall'
    ]),
    update () {
      this.getDataCall()
    }
  },
  created () {
    this.getDataCall()
  }
}
</script>

<style scoped lang="less">

.test{

  .list{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    div:nth-child(2)  {
      color: red;
      margin: 0 10px;
    }
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}

</style>
