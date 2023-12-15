import { client } from "@/postmark";

export async function POST(data){
    const res = await data.json();
    const {name, age} = res;
    // console.log({subject, body})
    client.sendEmailWithTemplate({
        "TemplateModel": 
        "From": 'dbara.a12138118@umak.edu.ph',
        "To": 'dbara.a12138118@umak.edu.ph',
        : name,
        "Textbody": age
    })
    return Response.json({res})
}