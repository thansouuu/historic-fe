import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
const LICHSUTV= () => {
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">Lịch Sử Hình Thành</h1>
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
                    Trải qua những thăng trầm vì bị chi phối bởi những quy luật kiến tạo địa chất cùng những lần 'biển tiến, biển lùi', vùng đất có tên gọi 'Trà Vang' - tiền thân của tỉnh Trà Vinh sau này đã được hình thành từ lâu đời. Vào thời kỳ đó, Trà Vinh vẫn còn là một vùng đất rất hoang vu, các loại cây rừng trùm lên những giồng đất, những đầm lầy và mạng lưới sông rạch chằng chịt, dân cư thưa thớt. Từ năm 1732 đến năm 1900, vùng đất Trà Vinh thuộc quyền cai quản của các chúa Nguyễn, rồi nhà Nguyễn. Trong giai đoạn này, vùng đất Trà Vinh đã trải qua nhiều biến động lịch sử, nhưng vẫn giữ được nét văn hóa đặc trưng của các dân tộc sinh sống trên địa bàn. Ngày 20/12/1899, Toàn quyền Đông Dương Doumer ký nghị định đổi tên gọi tiểu khu thành tỉnh. Từ đây {renderTooltipText('Nam Kỳ lục tỉnh', 'Nam-Ky-luc-tinh')}, cũ được phân chia lại thành 10 tỉnh mới, tỉnh Vĩnh Long cũ được tách ra thành 3 tỉnh mới: Vĩnh Long, Bến Tre, Trà Vinh. Năm 1900 tên gọi tỉnh Trà Vinh sử dụng chính thức được sử dụng đến năm 1951. Từ năm 1951 đến năm 1976, Trà Vinh và Vĩnh Long được sáp nhập với nhau và đổi tên nhiều lần như Vĩnh Trà, Vĩnh Bình, Cửu Long. Ngày 5/5/1992 đã ra quyết định tách tỉnh Cửu Long thành 2 tỉnh Trà Vinh và Vĩnh Long. Tỉnh Trà Vinh chính thức đi vào hoạt động và phát triển cho đến ngày nay.
                </p>
                
            </div>         
        </div>

        <Tooltip
            anchorSelect=".Nam-Ky-luc-tinh"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Nam Kỳ Lục tỉnh (hay Lục tỉnh), là tên gọi của vùng Nam Bộ vào đầu thời nhà Nguyễn
                </div>
            }
        />


        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default LICHSUTV