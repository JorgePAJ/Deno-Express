import Express from "./Express.ts"

const app = new Express()

app.get("/", () => {
    return new Response(
        JSON.stringify({message: 'Hello from index'}),
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    )
})

app.listen(
    4003,
    () => {
        console.log("Servidor corriendo en el puerto 4003")
    }
)