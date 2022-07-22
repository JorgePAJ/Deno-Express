import Express from "./Express.ts"
import Button from "./react/Button.tsx"
import {renderToString} from "react-dom/server"
import App from "./react/App.tsx"

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

app.get("/react-test", () => {
    return new Response(
        renderToString(Button()),
        {
            headers:{
                'Content-Type': 'text/html'
            }
        }
    )
})

app.get("/watch", () => {
    return new Response(
        JSON.stringify({message: 'If you see me, then it works'}),
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    )
})

app.get("/pets", () => {
    return new Response(
        JSON.stringify({Name: 'Marie', Age: '2', Color: 'Black and white', owner: "Jorge"}),
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