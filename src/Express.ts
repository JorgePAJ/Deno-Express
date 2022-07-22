import { serve } from "linkTest"

class Express{
    route: any = {
        GET: [],
        POST: []
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
                const {pathname} = new URL(req.url);

                const find = this.route.GET.find((route: any) => route.pathname === pathname)

                if(!find){
                    return new Response(
                        JSON.stringify({message: 'Route not found'}),
                        {
                            headers:{
                                'Content-Type': 'application/json'
                            }
                })}

                return find.handler(req)
            },
            {
                port,
                onListen: cb
            }
        )
    }
}   

export default Express