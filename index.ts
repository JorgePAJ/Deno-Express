import { serve } from "linkTest";

serve(
    (reg) =>{
        const {pathname} = new URL(reg.url);

        if(pathname === "/"){
            return new Response(
                JSON.stringify({message: 'Hello from Deno.land!'}),
                {
                    headers:{
                    'Content-Type': 'application/json'
                    }
                }
            )
        }
        else if (pathname === "/users"){
            return new Response(
                "<h1>Users</h1>"
            )
        }

        return new Response(
            JSON.stringify({message: 'RUTA NO ENCONTRADA'}),
            {
                headers:{
                'Content-Type': 'application/json'
            }
        }
        )
    },

    {
        port:4000
    }
)