import helloWorld from './src/helloWorld'

helloWorld.install = Vue => {
    Vue.component(helloWorld.name, helloWorld)
}

export default helloWorld