import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const THIENNHIENTV = () => {
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
            text: 'Kinh',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-kinh.jpg'
        },
        {
            text: 'Khmer',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-khmer.jpg'
        },
        {
            text: 'Hoa',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-hoa.jpg'
        },
        {
            text: 'Chăm',
            image: 'https://buhkhkt.github.io/CHINH/d%C3%A2n%20t%E1%BB%99c-ch%C4%83m.jpg'
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
    


    const renderTooltipText = (text, id) => {
        return <a className={clsx('inline-block font-semibold text-[#be9f76] cursor-pointer', id)}>{text}</a>
    }

   return (
    <>
        <div className="container pb-20">
        <div className="mb-4">
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">Thiên Nhiên Trà Vinh</h1>
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
            
            <div className="grid grid-cols-2 gap-2">
                    <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%95%20th%E1%BB%A5%20ao%20b%C3%A0%20om.webp" className="w-full h-full object-cover"/>
                    <img src="https://buhkhkt.github.io/CHINH/c%C3%A2y%20%C4%91%C6%B0%E1%BB%9Dng%20h%C3%A0ng%20me.jpg" className="w-full h-full object-cover"/>
                </div>
            <div className="flex flex-col gap-4 bg-white rounded-xl overflow-hidden shadow p-4">
                <p className="text-justify break-words whitespace-pre-wrap">
                Trà Vinh, một viên ngọc tỏa sáng giữa lòng đồng bằng sông Cửu Long của Việt Nam. Trà Vinh nổi tiếng với cánh đồng lúa mênh mông, tạo nên bức tranh xanh tươi mắt trong mùa mùa màng. Ngoài ra, vườn cây trái như cây mãng cầu, cây bưởi, cây lựu, và cây cam tạo nên phong cảnh hùng vĩ và thơ mộng trong mùa hoa đua nở. Ngoài ra Trà Vinh còn được mệnh danh là "Thành phố trong rừng" với nhiều cây xanh và các cây cổ thụ hàng trăm năm tuổi. Trà Vinh có hệ sinh thái biển phong phú, đây cũng là nơi thu hút nhiều du khách đến để thưởng thức cảnh biển đẹp và tham gia vào các hoạt động thể thao biển. Khi bạn bước chân đến Trà Vinh, bạn đang bước vào một vùng đất tuyệt vời với một bức tranh thiên nhiên tuyệt đẹp.
                </p>

                
            </div>         
        </div>

        <Tooltip
            anchorSelect=".loi-bo"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Đi bộ
                </div>
            }
        />
        

        
        <Tooltip
            anchorSelect=".men-dec-oi"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Trời đất ơi
                </div>
            }
        />

        
        <Tooltip
            anchorSelect=".cha-ba"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Rất lớn
                </div>
            }
        />

        
        <Tooltip
            anchorSelect=".chua-chin-hung"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Chưa chín tới
                </div>
            }
        />

        <Tooltip
            anchorSelect=".re-re"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Chậm chạp
                </div>
            }
        />

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default THIENNHIENTV