import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const DIALYTV= () => {
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
            text: 'khá bằng phẳng',
            image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BB%8Ba%20h%C3%ACnh%20b%E1%BA%B1ng%20ph%E1%BA%B3ng.jpg'
        },
        {
            text: 'màu mỡ và mùn bãi',
            image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%A5t%20m%C3%A0u%20m%E1%BB%A1.jpg'
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">Địa Lý Và Địa Hình</h1>
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
            {/*  */}
           
           
                <div className="grid grid-cols-2 gap-2">
                    <img src="https://buhkhkt.github.io/CHINH/%C4%91%E1%BB%93ng%20b%E1%BA%B1ng%20scl.png" className="w-full h-full object-cover"/>
                    <img src="https://buhkhkt.github.io/CHINH/ban%20do%20tra%20vinh.jpg" className="w-full h-full object-cover"/>
                    
                </div>
                    
                
                
                
                <p className="text-justify break-words whitespace-pre-wrap">
                    Trà Vinh là một trong 12 tỉnh thuộc Đồng bằng sông Cửu Long. Trà Vinh tiếp giáp với các tỉnh Bến Tre, Sóc Trăng và tỉnh Vĩnh Long, phía Đông là biển Đông. Có đường bờ biển dài 65km. Tỉnh Trà Vinh có tổng diện tích tự nhiên là 2.390,8 km2, với 9 đơn vị hành chính trực thuộc, bao gồm: Thành phố Trà Vinh, Thị xã Duyên Hải và 7 huyện: Càng Long, Châu Thành, Cầu Kè, Tiểu Cần, Cầu Ngang, Trà Cú, Duyên Hải.
                </p>
                <p className="text-justify break-words whitespace-pre-wrap">
                    Địa hình của tỉnh này {highlightText(`khá bằng phẳng`)} và không có đồi núi. Tỉnh Trà Vinh được chia bởi mạng lưới sông và kênh rất phong phú, gồm hai con sông lớn là sông Tiền và sông Hậu, cùng với nhiều con kênh nhỏ và rừng ngập mặn. Đất đai ở Trà Vinh rất{' '}
                    {highlightText(`màu mỡ và mùn bãi`)}, được bồi đắp bởi lớp phù sa từ 2 con sông lớn, tạo điều kiện tốt cho trồng trọt và sản xuất nông nghiệp. Ngoài ra, Trà Vinh cũng có một số bãi biển, cồn và cù lao là điểm đến du lịch thu hút khách tham quan.
                </p>

                <div className="grid grid-cols-2 gap-2">
                    <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%93n%20c%C3%B9%20lao.jpg" className="w-full h-full object-cover"/>
                    <img src="https://buhkhkt.github.io/CHINH/bi%E1%BB%83n%20ba%20%C4%91%E1%BB%99ng.jpg" className="w-full h-full object-cover"/>
                </div>
            </div>         
        </div>

        

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default DIALYTV