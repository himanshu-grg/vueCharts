<template>
    <div>
        <Chart v-if="!isLoading" :date="date" :challenge="challenge" :dats="dats"/>
        {date}{this.challenge}   
    </div>
</template>

<script type="text/javascript">
    import axios from 'axios'
    import Chart from '../components/Chart.vue'
    export default {
        name:'ContainerComp',
        components: {
            Chart
        },
        data () {
          return {
            date: [],
            challenge: [],
            dats:[2,3,9,15,3],
            isLoading: false
          }
        },
        methods: {
            async getData () {
                this.isLoading = true
                let result = await axios.get(`https://api.wirespec.dev/wirespec/stackoverflow/fetchchartdataforvuejs`)
                this.date = result.data.date
                //console.log(result.data)
                this.challenge = result.data.challenge
                this.isLoading = false
            }
        },
        mounted () {
            this.getData()
        }
    }
</script>