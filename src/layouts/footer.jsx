import { MessagesSquare } from "lucide-react"
import { useState, useEffect } from "react"
export const Footer = () => {
    const [feedBackValue, setFeedBackValue] = useState('')
    
    useEffect(() => {
        console.log(feedBackValue)
    }, [feedBackValue])

    const sendFeedback = async (e) => {
        e.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback: feedBackValue })
        }
        await fetch('https://formspree.io/f/moeqwpok', options)

        alert('Thank you for your feedback! We appreciate your input and will use it to improve our service.')

        setFeedBackValue('') // Clear the textarea after submission
    }
    return (
        <footer>
            <div className="pt-6">
                <div className="border-8 mx-3 border-text rounded-t-2xl opacity-80 "></div>
                    <div className=" flex flex-col gap-4 max-w-2xl mt-3 mx-3 md:mx-auto p-3">
                        <div className="flex text-accent md:text-xl text-center m-3 justify-center gap-2">
                            <MessagesSquare/>
                            <h3>We Value Your feedback</h3>
                        </div>

                    <div className="bg-amber-100 p-4 rounded-md">
                        <details>
                            <summary className="text-xl cursor-pointer hover:text-brand">Write your suggestions</summary>
                            <p>We take all suggestions seriously. Your feedback helps us improve our service and better serve you!</p>
                        </details>
                    </div>

                <div >
                    <form onSubmit={sendFeedback}>
                        <textarea className="mb-3 border-2 rounded-md border-accent w-full border-dotted p-3 bg-amber-50" cols="30" placeholder="Share your thoughts, suggestions feedback..." onChange={(e) => setFeedBackValue(e.target.value) }>
                        </textarea>
                        <button className="bg-accent cursor-pointer p-2 rounded-md" type="submit">Send Feedback</button>
                    </form>
                </div>
            <div></div>
            <div>
                &copy; <span>{ new Date().getFullYear()}</span> Chura de Rama's Shawarma. All rights reserved. Made with ❤️ and 🌶️
            </div>
            </div>
            </div>
            
        </footer>
    )
}