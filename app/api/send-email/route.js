import { client } from "@/postmark";

export async function POST(data){
    const res = await data.json();
    const {subject, body} = res;
    // console.log({subject, body})
    client.sendEmail({
        "From": 'dbara.a12138118@umak.edu.ph',
        "To": 'dbara.a12138118@umak.edu.ph',
        "Subject": subject,
        "Textbody": body
    })
    return Response.json({res})
}