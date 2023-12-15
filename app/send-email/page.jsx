'use client';

import { useState } from "react"

export default function sendEmail(){
    const[subject, setSubject] = useState('')
    const[body, setBody] = useState('')
    
    async function sendEmail(){
        try {
            await fetch ('/api/send-email', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({subject,body})
            })
            setSubject('')
            setBody('')
        } catch (err) {
            console.error(err);
        }
    }   

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div className="flex items-center justify-center">
                    <h2 className="text-2xl mb-4 font-bold">Send an Email</h2>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" 
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Body</label>
                    <textarea 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" 
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    >
                    </textarea> 
                </div>

                <div className="text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={sendEmail}
                    >
                        Send Email
                    </button>
                </div>
            </div>
        </div>
    )
}