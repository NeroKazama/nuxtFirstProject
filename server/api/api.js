export default defineEventHandler( async (event) => {

    //handle query paramss

    const { name } = getQuery(event)

    //handle post data

    const { age } = await readBody(event)


    //Api Call with private key

    // const { data } = await $fetch('url with api key')

    return {
       message:  `Hello ${name} with age: ${age}`
    }
})