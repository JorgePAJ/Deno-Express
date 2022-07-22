import { serve } from "linkTest"

class Express{
    route: any = {
        GET: []
    }

    get(pathname: string, handler: () => Response | Promise<Response>){
        this.route.GET.push({
            pathname,
            handler
        })
    }

    listen(port:number, cb: () => void){
        serve(
            (req) => {
                return new Response(
                    JSON.stringify({message: 'Express'}),
                    {
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    }
                )
            },
            {
                port,
                onListen: cb
            }
        )
    }
}   

export default Express