new Vue({
    el: '#app',
    
    data () {
      return {
        courses:[],
        title: '',
        time: 0,
        tTime: 0
      }
    },
    
    computed: {
      totalTime(){
        return this.tTime
      }
    },
    
    methods: {
      addCourse(){
        this.tTime = Number(this.tTime) + Number(this.time)
        curse={
          title:this.title,
          time:this.time
        }
        this.courses.push(curse)
        this.title = ''
        this.time = 0
        console.log(this.courses)
      }
    }
  })