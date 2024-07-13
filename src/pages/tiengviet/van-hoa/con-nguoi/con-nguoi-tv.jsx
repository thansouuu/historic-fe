import ImageViewer from "@/components/modal/image-viewer";
import clsx from "clsx";
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';


const ConNguoiTV = () => {
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">Đặc Điểm Con Người</h1>
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
                    Trà Vinh là một tỉnh ven biển thuộc vùng Đồng bằng sông Cửu Long, Việt Nam. Với dân số hơn 1 triệu người, là nơi sinh sống của nhiều dân tộc:{' '}
                    {highlightText('Kinh')}, {highlightText('Khmer')}, {highlightText('Hoa')}, {highlightText('Chăm')} ,... Mỗi dân tộc đều có những nét văn hóa đặc trưng riêng. Người Trà Vinh nổi tiếng là hiền hòa, chân chất, hiếu khách. Họ sống gần gũi với thiên nhiên, chan hòa với con người. Trong giao tiếp, người Trà Vinh thường sử dụng ngôn ngữ địa phương, mang đậm chất Nam Bộ. Ta có thể kể đến một số từ ngữ như: {' '} 
                    {renderTooltipText('lội bộ', 'loi-bo')}, {renderTooltipText('mèn đéc ơi', 'men-dec-oi')}, {renderTooltipText('chà bá', 'cha-ba')}, {renderTooltipText('chưa chín hung', 'chua-chin-hung')},{' '}
                    {renderTooltipText('rề rề', 're-re')},... Họ cũng rất cởi mở và thân thiện, sẵn sàng giúp đỡ người khác. Trong các dịp lễ hội, người Trà Vinh thường tổ chức các lễ hội dân gian, mang đậm bản sắc văn hóa của dân tộc. Người Trà Vinh thường tổ chức các bữa tiệc để mời khách, thể hiện lòng hiếu khách của mình. Họ luôn đoàn kết, giúp đỡ lẫn nhau trong cuộc sống. Mọi người luôn sẵn sàng chia sẻ những khó khăn, hoạn nạn với nhau. Người Trà Vinh là những người đáng quý, họ đã góp phần tạo nên một vùng đất Trà Vinh hiền hòa, tươi đẹp. Nếu có dịp đến với Trà Vinh, bạn sẽ được trải nghiệm một nền văn hóa đa dạng và phong phú, cũng như được đón tiếp bởi những con người thân thiện, hiếu khách.
                </p>

                <div className="grid grid-cols-2 gap-2">
                    <img src="https://buhkhkt.github.io/CHINH/ng%C6%B0%E1%BB%9Di%20gi%E1%BA%A3n%20d%E1%BB%8B%201.jpg" className="w-full h-full object-cover"/>
                    <img src="https://buhkhkt.github.io/CHINH/ng%C6%B0%E1%BB%9Di%20gi%E1%BA%A3n%20d%E1%BB%8B%202.jpg" className="w-full h-full object-cover"/>
                </div>
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
            anchorSelect=".re-re"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Chậm chạp
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
            anchorSelect=".cha-ba"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Rất lớn
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

        

      

        

        <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
    </>
   )
}

export default ConNguoiTV