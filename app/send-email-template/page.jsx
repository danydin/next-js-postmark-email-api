'use client';

import { useState } from "react"

export default function sendEmail(){
    const[name, setName] = useState('')
    const[age, setAge] = useState('')
    
    async function sendEmailTemplate(){
        try {
            await fetch ('/api/send-email-template', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({name,age})
            })
            setName('')
            setAge('')
        } catch (err) {
            console.error(err);
        }
    }   

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div className="flex items-center justify-center">
                    <h2 className="text-2xl mb-4 font-bold">Send a Template Email</h2>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                <div className="text-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={sendEmailTemplate}
                    >
                        Send Email Template
                    </button>
                </div>
            </div>
        </div>
    )
}