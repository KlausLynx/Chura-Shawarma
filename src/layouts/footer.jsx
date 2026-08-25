import { MessagesSquare } from "lucide-react"
export const Footer = () => {
    const date = new Date()
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
                    <form  >
                        <textarea className="mb-3 border-2 rounded-md border-accent w-full border-dotted p-3 bg-amber-50" cols="30" placeholder="Share your thoughts, suggestions feedback...">

                        </textarea>
                        <button className="bg-accent p-2 rounded-md" type="button">Send Feedback</button>
                    </form>
                </div>
            <div></div>
            <div>
                &copy; <span>{ date.getFullYear()}</span> Chura de Rama's Shawarma. All rights reserved. Made with ❤️ and 🌶️
            </div>
            </div>
            </div>
            
        </footer>
    )
}