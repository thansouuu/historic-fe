import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const KHIHAUTV= () => {
    const { data, isLoggedIn } = useAuth();
    const [mainBackground, setMainBackground] = useState('');
    const [borderBackground, setBorderBackground] = useState('');
    const role = data?.data?.role;
    useEffect(() => {
        if (data && role && isLoggedIn) {
            if (role === 'good') {
                setMainBackground('/main/top3.svg');
                setBorderBackground('/border/top3.svg');
            }
            if (role === 'best') {
                setMainBackground('/main/top1.png');
                setBorderBackground('/border/top1.svg');
            }
            if (role === 'top-good') {
                setMainBackground('/main/top2.svg');
                setBorderBackground('/border/top2.svg');
            }
        }
    }, [role, isLoggedIn]);
    const [openImage, setOpenImage] = useState(false);

    const sampleList = [
        {
            text: 'mùa mưa',
            image: 'https://buhkhkt.github.io/CHINH/m%C3%B9a%20m%C6%B0a.jpg'
        },
        {
            text: 'mùa khô',
            image: 'https://buhkhkt.github.io/CHINH/m%C3%B9a%20kh%C3%B4.jpg'
        },
        {
            text: 'sản xuất',
            image: 'https://buhkhkt.github.io/CHINH/m%C6%B0a%20%E1%BA%A3nh%20h%C6%B0%E1%BB%9Fng%20s%E1%BA%A3n%20xu%E1%BA%A5t.jpg'
        },
        {
            text: 'đời sống',
            image: 'https://buhkhkt.github.io/CHINH/nh%C3%A0%20t%E1%BB%91c%20n%E1%BB%91c.jpg'
        }
    ];

    const showImageFromText = (text) => () => {
       const getImageIdx = sampleList.findIndex(x => x.text.toLowerCase() === text.toLowerCase());

       if (getImageIdx > -1) {
            setOpenImage(sampleList[getImageIdx].image);
       }
    }

    const highlightText = (text) => {
        return <strong className="inline relative text-[#be9f76] cursor-pointer" onClick={showImageFromText(text)}>{text}</strong>
    }
    
   return (
    <>
        <div className="container pb-20">
        <div className="mb-4">
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">Đặc Điểm Khí Hậu</h1>
                <div className="text-center">
                    {role && role !== 'normal' && (
                        <div className="right-main_icon flex justify-center gap-x-5">
                            <img className="w-10 h-10" src={mainBackground} alt="" />
                            <img className="w-10 h-10" src={mainBackground} alt="" />
                            <img className="w-10 h-10" src={mainBackground} alt="" />
                            <img className="w-10 h-10" src={mainBackground} alt="" />  
                        </div>
                    )}
                </div>
            </div>
             

            <div className="flex flex-col gap-4 bg-white rounded-xl overflow-hidden shadow p-4">
                <p className="text-justify break-words whitespace-pre-wrap">
                    Tỉnh Trà Vinh nằm trong vùng khí hậu nhiệt đới gió mùa cận xích đạo nóng ẩm. Khí hậu được chia làm 2 mùa rõ rệt: {highlightText(`mùa mưa`)}, {highlightText(`mùa khô`)}. Nhiệt độ trung bình của tỉnh Trà Vinh hàng năm từ 25 - 27 độ C. Lượng mưa ở tỉnh thuộc mức trung bình thấp và không ổn định. Có độ ẩm trung bình năm dao động từ 83 - 85%, các tháng khô nhất tập trung vào tháng 2 và tháng 3. Trà Vinh chịu ảnh hưởng của rìa bão hay áp thấp nhiệt đới, ảnh hưởng lớn đến {highlightText(`sản xuất`)} và {highlightText(`đời sống`)} của dân cư vùng ven biển.
                </p>
                

                
            </div>         
        </div>

        

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default KHIHAUTV