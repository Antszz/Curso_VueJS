Vue.component('CoinDetail',{
  props: ['coin'],
  data(){
    return{
       showPrices: false,
       value: 0
    }
  },

  computed: {
    title(){
      return `${this.coin.name} - ${this.coin.symbol}`
    },
    convertedValue(){
      if(!this.value){
        return 0;
      }
      return this.value / this.coin.price
    }
  },

  methods: {
    toggleShowPrices(){
      this.showPrices = !this.showPrices
    }
  },
  
  template: `
  <div>
    <img @mouseout="toggleShowPrices" @mouseover="toggleShowPrices" v-bind:src = "coin.img" v-bind:alt="coin.name">
    <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
      {{coin.title}}
      <span v-if="coin.changePercent > 0" >👍</span>
      <span v-else-if="coin.changePercent < 0" >😒</span>
      <span v-else>🤞</span>

      <span v-show="coin.changePercent > 0" >👍</span>
      <span v-show="coin.changePercent < 0" >😒</span>
      <span v-show="coin.changePercent === 0" >🤞</span>

      <span @click="toggleShowPrices">{{showPrices ? '🐵' : '🙈'}}</span>
    </h1>
    <input type="number" v-model="value">
    <span>{{ convertedValue }}</span>

    <ul v-show=showPrices>
      <li v-bind:class="{orange: p.value === coin.price, red:p.value < coin.price, green: p.value > coin.price}" v-for="(p, i) in coin.pricesWithDays" v-bind:key="p.day">
        {{ p.day }} - {{p.value}}
      </li>
    </ul>
  </div>
  `
})

new Vue({
  el: '#app',
  data(){
    return{
      btc:{
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 8400,
        pricesWithDays:[
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 1400 },
          { day: 'Miercoles', value: 3400 },
          { day: 'Jueves', value: 9900 },
          { day: 'Viernes', value: 5400 },
          { day: 'Sabado', value: 6400 },
          { day: 'Domingo', value: 7400 },
        ],
      },
      color: 'f4f4f4',

    }
  },

  // methods: {
  //   toggleShowPrices(){
  //     this.showPrices = !this.showPrices
  //     this.color = this.color.split('').reverse().join('')
  //   }
  // }

})