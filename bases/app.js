//app
const app = Vue.createApp({
    // template: `
    // <h1> hola mundo </h1>
    //  <p> desde app.js </p>
    // 
// estado local
    data() { // todo el objeto es reactivo tambien sus propiedades
        return {
            quote: "Im Batmam",
            author: 'Bruce Wayne'
        }
    },
    // methods es una propiedad
    methods: {
        changeQuote () {
            console.log( 'hola de nuevo', )
            // this hace referencia al objeto
            this.author = 'Roberto Salama'

            this.capitalize()
        },
        capitalize () {
            this.quote = this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp')