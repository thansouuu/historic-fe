
import quesstion_anwser from "@/configs/quesstion_anwser"
import { useAuth } from "@/hooks/use-auth";
import { useEffect, useState } from "react"
import chatbot from '@/assets/chatbot.jpg'
const ChatBox =({anwser}) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    return (
        <div className=" flex gap-4 max-w-[90%] md:max-w-[70%]">
            <img src={chatbot}
                alt="chatavatar" 
                className="w-[25px] h-[25px] rounded-full object-cover"
            />
            <div className="text-white p-2 rounded bg-gray-700">
                {loading ? "loading..." : (anwser || 'Tôi không có câu trả lời.')}
            </div>
        </div>
    )
}
const MessageQuestion =({message}) => {
    
    const {data} = useAuth()
    
    return (
        <div className="flex justify-end">
            <div className=" flex gap-4 max-w-[90%] md:max-w-[60%]">

                <div className="bg-gray-200 p-2 rounded text-gray-700">
                    {message} {JSON.stringify()}
                </div>
                <img src={data?.data?.avatar || 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'}
                    alt="chatavatar" 
                    className="w-[25px] h-[25px] rounded-full"
                />
            </div>
        </div>
    )
}


const QandA = ({question, anwser}) => {
    return (
        <div className="flex flex-col gap-4">
            <MessageQuestion message={question}/>
            <ChatBox anwser={anwser}/>
        </div>
    )
}

const Question = () => {
    const [result, setResult] = useState( [] );
    const [foodName, setFoodName] = useState( "" );
    const [session1, setSession1] = useState( "" );
    const [session2, setSession2] = useState( "" );
    const [session3, setSession3] = useState( "" );

    const getDefault = (obj, key) => {
        if(!obj) return []
        return obj[key] ? Object.keys(obj[key]) : Object.keys(Object.keys(obj)[0]);
    }

    const handleSubmit = () => {
        setResult(
            [
                ...result,
                {
                    question: session3,
                    anwser: quesstion_anwser[foodName][session1][session2][session3],
                }
            ]
        )
    }

    useEffect(() => {
        setFoodName(Object.keys(quesstion_anwser)[0])
        setSession1(Object.keys(quesstion_anwser[Object.keys(quesstion_anwser)[0]])[0])
        setSession2(Object.keys(quesstion_anwser[Object.keys(quesstion_anwser)[0]][Object.keys(quesstion_anwser[Object.keys(quesstion_anwser)[0]])[0]])[0])
        setSession3(Object.keys(quesstion_anwser[Object.keys(quesstion_anwser)[0]][Object.keys(quesstion_anwser[Object.keys(quesstion_anwser)[0]])[0]][Object.keys(quesstion_anwser[Object.keys(quesstion_anwser)[0]][Object.keys(quesstion_anwser[Object.keys(quesstion_anwser)[0]])[0]])[0]])[0])
    },[])


    const handleFoodNameChange = value => {
        setFoodName(value)
        
        // handleSession1Change(Object.keys(quesstion_anwser[value])[0]) 

        setSession1(Object.keys(quesstion_anwser[value])[0]);
        
        setSession2(Object.keys(quesstion_anwser[value][Object.keys(quesstion_anwser[value])[0]])[0])
        setSession3(Object.keys(quesstion_anwser[value][Object.keys(quesstion_anwser[value])[0]][Object.keys(quesstion_anwser[value][Object.keys(quesstion_anwser[value])[0]])[0]])[0])

        // handleSession1Change(Object.keys(quesstion_anwser[value])[0])
    
    }

    const handleSession1Change = value => {
        setSession1(value)
        // handleSession2Change(Object.keys(quesstion_anwser[foodName][value])[0])
        setSession2(Object.keys(quesstion_anwser[foodName][value])[0]);
        setSession3(Object.keys(quesstion_anwser[foodName][value][Object.keys(quesstion_anwser[foodName][value])[0]])[0])
        // handleSession2Change(Object.keys(quesstion_anwser[foodName][value])[0])
    }

    const handleSession2Change = value => {
        setSession2(value)
        setSession3(Object.keys(quesstion_anwser[foodName][session1][value])[0]);
    }


    return (
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col gap-4">
            <div className="bg-white rounded p-4 flex flex-col gap-4">
                <div className="h-[500px] overflow-y-auto p-4 border-2 rounded border-gray-200 flex flex-col gap-4">
                    {result.map((item, index) => (
                         <QandA key={index}
                            question={item.question}
                            anwser={item.anwser}
                        />
                    ))}
                    
                </div>
                <div className="flex items-center flex-col md:flex-row justify-end gap-4 border-2 rounded-lg border-gray-200 p-2 flex-wrap">
                    <button className="inline-flex items-center justify-center px-6 py-2 font-sans font-semibold tracking-wide text-white bg-red-500 rounded-lg md:mr-auto"
                        value={foodName}
                            onClick={()=>setResult([])}
                    >
                        Xóa nội dung
                    </button>
                    <select name="food_name" id="food_name" className="rounded-lg border-gray-400"
                        onChange={e=>handleFoodNameChange(e.target.value)}
                    >
                        {
                            Object.keys(quesstion_anwser).map((key) => {
                                return (
                                    <option value={key} key={key}>{key}</option>
                                )
                            })
                        }
                    </select>
                    <select name="session1" id="session1" className="rounded-lg border-gray-400"
                        value={session1}
                        disabled={foodName ? false: true}
                        onChange={e=>handleSession1Change(e.target.value)}
                    >
                        {
                            foodName && getDefault(quesstion_anwser, foodName)?.map((key) => {
                                return (
                                    <option value={key} key={key}>{key}</option>
                                )
                            })
                        }
                    </select>
                    <select name="session2" id="session2" className="rounded-lg border-gray-400"
                        value={session2}
                        disabled={session1 ? false: true}
                        onChange={e=>handleSession2Change(e.target.value)}
                    >
                        {
                            session1 && getDefault(quesstion_anwser[foodName], session1)?.map((key) => {
                                return (
                                    <option value={key} key={key}>{key}</option>
                                )
                            })
                            
                        }
                    </select>
                    <select name="session3" id="session3" className="rounded-lg max-w-[250px] border-gray-400"
                        value={session3}
                        disabled={session2 ? false: true}
                        onChange={e=>setSession3(e.target.value)}
                    >
                        {
                            session2 && getDefault(quesstion_anwser[foodName][session1], session2)?.map((key) => {
                                return (
                                    <option value={key} key={key}>{key}</option>
                                )
                            })
                        }
                    </select>
                    <button className="inline-flex items-center justify-center px-6 py-2 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg"
                        onClick={handleSubmit}
                    >
                        Áp dụng
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Question