import calculator from './src/calculator.vue'

calculator.install = Vue => {
    Vue.component(calculator.name, calculator)
}

export default calculator