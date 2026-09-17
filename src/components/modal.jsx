import { FaTimes, FaShoppingCart  } from "react-icons/fa"
import { FiSend } from "react-icons/fi";
import { useState } from "react";

export const CartModal = ({ scrolltomenu, isOpen, onView, cartItems, onChange }) =>  {
    const [viewCart, setViewCart] = useState(false)
    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.qty 
    }, 0)
    const removeFromCart = (index) => {
        const updatedCart = [...cartItems]
        updatedCart.splice(index, 1)
        onChange(updatedCart)
        if (updatedCart.length === 0) {
            onView(false)
        }
    }

    const sendOrderToWhatsapp = (cartItems)=> {
        const PHONE = import.meta.env.VITE_PHONE_NUMBER
        console.log(cartItems)
        const messageArray = cartItems.map(cartItem => (
            `${cartItem.qty}x  ${cartItem.name} - ${cartItem.price}`
        ))
        const orderTotal = cartItems.reduce((acc, run) => acc + run.qty * run.price, 0);
        const messageText = messageArray.join('\n');
        const message = `New Order🛒\n\n${messageText}\n\nTotal:${orderTotal}`;
        console.log(message)
        const encodedMessage = encodeURIComponent(message);
        console.log(encodedMessage)
        window.open(`https://wa.me/${PHONE}?text=${encodedMessage}`, '_blank');
        onChange([])
        setViewCart(false)
        onView(false)
        window.scrollTo({ top: 0, behavior: 'smooth', block: 'start' });
    }

    return (
        <>
            {
                viewCart && (
                    <div className={`fixed backdrop-blur-sm inset-0 z-50 flex items-center justify-center ${viewCart ? 'block' : 'hidden'}`}>
                        <div>
                            <div className="bg-amber-100 rounded-lg z-10 w-sm md:w-2xl">
                                <div className="bg-brand flex justify-between rounded-t-lg p-6 items-center mb-4">
                                    <div className="flex items-center gap-2">
                                        <FaShoppingCart size={22} />
                                        <h2 className="text-lg font-bold">Your Cart <span>({cartItems.length})</span></h2>
                                    </div>
                                    
                                    <button onClick={() => setViewCart(false)} className="text-gray-500 hover:text-gray-700 cursor-pointer transition duration-300">
                                        <FaTimes size={20}/>
                                    </button>
                                </div>
                                <div className="px-6 overflow-y-auto">
                                    {cartItems.length === 0 ? (
                                        <div className=" my-6 flex flex-col gap-6 items-center justify-center">
                                            <FaShoppingCart size={170} className="opacity-70" />
                                            <p className="text-text text-2xl">Your cart is empty.</p>
                                            <div>
                                                <button>
                                                    <span onClick={() => {setViewCart(false); scrolltomenu()}} className=" inline-block mt-4 bg-accent cursor-pointer text-white px-4 py-2 rounded hover:bg-text hover:scale-105 transition-all">
                                                        Order a Shawarma from the Menu
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        
                                    ) : (
                                        <div className="mb-6">
                                            <ul className="space-y-2 overflow-auto max-h-44">
                                                {cartItems.map((item, index) => (
                                                    <li key={index} className="border-b p-2 flex justify-between items-center">
                                                        <div className="flex justify-center items-center gap-4">
                                                            <div>
                                                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className="font-medium">{item.name}</span>
                                                                <span className="text-gray-500"> Quantity: {item.qty}</span>
                                                                <span className="text-gray-500"> Price: {(item.price / item.qty)} x {item.qty} = {item.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</span>
                                                            </div>
                                                        </div>

                                                        <button onClick={() => removeFromCart(index)} className="flex items-center gap-2 text-red-500 hover:text-red-700 cursor-pointer transition duration-300">
                                                            <span className="text-red-500 hover:text-red-700 cursor-pointer transition duration-300"></span>
                                                                Remove
                                                        </button>
                                                    </li>
                                                ))} 
                                            </ul>

                                            <div className="my-4 md:mb-6 flex flex-col justify-center items-center font-extrabold md:text-xl">
                                                <div className="flex gap-3 justify-between items-center text-xl md:text-2xl">
                                                    <span className="font-bold ">Total: </span>
                                                    <span className="text-text">
                                                        {totalPrice.toLocaleString( 'en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                    </span>
                                                </div>

                                                <div className="w-full flex justify-center items-center">
                                                    <button onClick={ ()=> sendOrderToWhatsapp(cartItems)} className="flex gap-5 justify-center items-center w-10/12 mt-4 bg-accent cursor-pointer text-white px-4 py-2 rounded hover:bg-text hover:scale-110 transition-all">
                                                        <FiSend className="inline mr-2" />
                                                        Send Order Via WhatsApp
                                                    </button>
                                                </div>
                                            </div>

                                            <aside>
                                                <strong>Note:</strong> <em>Please ensure that you have WhatsApp installed on your device to send the order.</em> 
                                            </aside>
                                        </div>
                                    
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                isOpen && (
                    <div className="fixed top-0 right-0 z-40 md:z-50 flex items-start justify-end p-4">
                        <div className="bg-amber-100 rounded-lg p-4 sm:p-6 z-10 w-fit min-w-[16rem] max-w-[90vw] md:max-w-md max-h-[35vh] md:max-h-[28vh] flex flex-col">
                            <div>
                                <h2 className="text-base md:text-lg font-bold mb-4 flex items-center gap-2">
                                    <FaShoppingCart /> Cart Summary <span>({cartItems.length})</span>
                                </h2>
                            </div>

                            <div className="flex-1 overflow-hidden">
                                {cartItems.length === 0 ? (
                                    <p className="text-gray-500">Your cart is empty.</p>
                                ) : (
                                    <ul className="space-y-2 overflow-y-auto max-h-[10vh] sm:max-h-10">
                                        {cartItems.map((item, index) => (
                                            <li key={index} className="border-b py-2 flex flex-col gap-2">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-gray-500"> - Qty: {item.qty}</span>
                                                <span className="text-gray-500"> - {item.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div>
                                <div className="mt-4 flex justify-between items-center font-extrabold md:text-xl">
                                    <span className="font-bold">Total: </span>
                                    <span className="text-text">
                                        {totalPrice.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </span>
                                </div>

                                <button onClick={() => setViewCart(prev => !prev)}
                                    className="mt-4 bg-accent cursor-pointer text-white px-4 py-2 rounded hover:bg-text hover:scale-110 transition-all w-full"
                                >
                                    View Cart
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}