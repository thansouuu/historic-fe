import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'quanh nhà',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20xung%20quanh%20nh%C3%A0.webp'
    },
    {
        text: 'ngoại hình',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20h%C3%ACnh%20th%C3%B9.webp'
    },
    {
        text: 'Cây',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A2y%20qu%C3%A1ch.jpg'
    },
    {
        text: 'vỏ ngoài',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20gi%C3%A0.jpg'
    },
    {
        text: 'Quách non',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20non.jpg'
    },
]

const nguyenlieu1 = [
    {
        text: 'Trái quách',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A1i%20qu%C3%A1ch.jpg'
    },
    {
        text: 'Đường',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
    {
        text: 'Nước đá',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C3%A1%20nhuy%E1%BB%85n.jpg'
    },
]

const nguyenlieu2 = [
    {
        text: 'Quách',
        value:'6 trái',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A1i%20qu%C3%A1ch.jpg'
    },
    {
        text: 'Rượu gạo',
        value:'4 lít',
        image: 'https://buhkhkt.github.io/CHINH/r%C6%B0%E1%BB%A3u%20g%E1%BA%A1o.jpg'
    },
]


const thuongthucthanhpham = [
    {
        text: 'xà lách',
        image: 'https://buhkhkt.github.io/CHINH/x%C3%A0%20l%C3%A1ch%20xo%C4%83n.jpg'
    },
    {
        text: 'cải thảo',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BA%A3i%20th%E1%BA%A3o.jpg'
    },
    {
        text: 'bông súng',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%B4ng%20s%C3%BAng.jpg'
    },
    {
        text: 'lát khế',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1t%20kh%E1%BA%BF%20chua.webp'
    },
    {
        text: 'chuối chát',
        image: 'https://buhkhkt.github.io/CHINH/chu%E1%BB%91i%20ch%C3%A1t.jpg'
    },
    {
        text: 'mắm cá sặc',
        image: 'https://buhkhkt.github.io/CHINH/h%E1%BB%A7%20m%E1%BA%AFm.jpg'
    },
    {
        text: 'quách dầm',
        image: 'https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20d%E1%BA%A7m.jpg'
    },
    {
        text: 'Rượu quách',
        image: 'https://buhkhkt.github.io/CHINH/r%C6%B0%E1%BB%A3u%20qu%C3%A1ch.jpg'
    },
]

const TRAIQUACHMAINTV = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu1,...nguyenlieu2, ...thuongthucthanhpham];

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
        <div className="container pb-20">
            <div className="mb-4">
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">TRÁI QUÁCH</h1>
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
                <div className="h-3"></div>
                <div className="rounded-2xl shadow overflow-hidden">
                <iframe
                    className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                    src="https://www.youtube.com/embed/FwNdP9Ihfqw?list=PLO4xYQBA1oxVp9yMDErgwbDnEAVTYTX_-"
                    title="Thuyết trình về món Bánh canh Bến Có"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                ></iframe>
                    
                </div>
            </div>

            

            <FoodContent 
                title="Ảnh 3D" 
            >
                <div className="flex flex-col gap-3">

                    <p>                   
                        Trong bức ảnh, ta có thể thấy hai nửa quả quách vỏ dày với hai màu khác nhau vì quả quách trong ảnh chưa quá chín. Nửa bên của quả quách có màu xám trắng, là phần chưa chín, loang lổ những hạt li ti. Phần thịt quả bên trong có màu trắng, ăn giòn, vị chua. Nửa bên còn lại của quả quách có màu nâu sẫm, là phần đã chín, thịt quả bên trong nhiều hạt và sợi cứng. Khi ăn, có vị ngọt thanh, hơi chát, mùi thơm đặc trưng.              
                    </p>

                    <div>
                    <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600"title="trái quách" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/bef92e4318e7449cab88c1df175774ce/embed">
                        
                         </iframe>
                        
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="Khái Quát Chung"
                           
            >
                <p>
                    Quách, loài cây kén đất, đi khắp từ Bắc tới Nam, cũng chỉ thấy trái quách xuất hiện ở khu vực đồng bằng sông Cửu Long. Đây là một loài cây đặc biệt, không phổ biến và ít nơi trồng được. Cây quách thường được trồng nhiều ở Cầu Kè, Trà Vinh, thường xen lẫn với các loại cây ăn trái khác. Đặc biệt, người Khmer yêu thích trồng cây quách xung {highlightText('quanh nhà')} để tạo bóng mát và có cơ hội thưởng thức trái thơm ngon.
                </p>
                <p>
                    Trái quách, còn gọi là gáo, không có vẻ {highlightText('ngoại hình')} lôi cuốn. Nhưng chính vị hương đặc biệt của nó khiến người ta mê mẩn và không thể dứt ra. Cây quách thuộc họ cần thăng và thích môi trường không ngập nước. {highlightText('Cây')} cao khoảng 7-10m và sau khoảng 4 năm trồng, nó bắt đầu cho trái, với thời gian trồng càng lâu, số lượng trái càng nhiều. Quả quách có hình dáng tròn, nhỏ hơn cỡ quả bóng đá nhựa, có vỏ màu xám trắng và da nhám. Mùa quách chín thường rơi vào tháng Chạp và tháng Giêng. Khi quả chín, ruột trái sẽ đen và có nhiều hạt nhỏ như đầu đũa, tự rụng vào ban đêm. Mặc dù rơi từ độ cao, nhưng không dễ bị vỡ vì vỏ vẫn rất cứng. Do đó, việc thu hoạch quách không phải là công việc khó khăn như các loại quả khác. Người dân Trà Vinh thường đợi quách rụng chín mới thu hoạch, vì nếu hái quá sớm và ướp giấm cho chín, quả cũng không thơm ngon như chín trên cây.
                </p>
                <p>
                    Khi quách đạt độ chín mong muốn, người ta thường không ăn ngay, mà để trái chín kỹ, để {highlightText('vỏ ngoài')} mốc trắng và mềm đi một chút, sau đó mới ăn. Ăn trái quách ngay cũng được, nhưng hương vị lúc này không phải là tốt nhất. {highlightText('Quách non')} có vị chua và chát. Để trái quách chín càng lâu, ruột trái sẽ càng sậm màu và hương thơm càng nổi bật.
                </p>
                <p>
                    Ngoài việc là một loại trái ngon, trong dân gian, trái quách còn được biết đến với nhiều công dụng y tế như giải nhiệt, chữa táo bón, tiêu chảy, viêm phế quản, tăng cường gân cốt, bổ thận và nhiều tác dụng khác. Vì vậy, các món ngon từ quách- một loại quả bình dị, thường được ưa chuộng trong đời sống của người dân miệt vườn. Thông thường, có ba cách chế biến trái quách: ăn kèm cùng mắm, dầm thành sinh tố, hoặc ngâm vào rượu.    
                </p>
            </FoodContent>    


            <FoodContent title="Một Số Món Phổ Biến">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Sinh tố quách dầm:</h4>

                                <div>
                                    <span className="underline">Nguyên liệu: </span>

                                    <ul>
                                        {nguyenlieu1.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">Các bước thực hiện:</span>

                                    <div>
                                        <span>Bước 1: Tách thịt quách</span>
                                        <p>Ta đập vỏ quách ra và lấy muỗng nạo phần thịt quách cho vào ly.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Chế biến</span>
                                        <p>Ta cho vào đó 2 muỗng cà phê đường. Nếu bạn muốn có thể cho vào một ít nước để dễ dầm hơn. Ta dầm cho đường tan ra vào quách. Sau đó ta chỉ cần cho nước đá vào là có thể thưởng thức rồi.</p>
                                    </div>

                                    
                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/pat5ambYTEw?list=PLO4xYQBA1oxVp9yMDErgwbDnEAVTYTX_-"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                    

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: GẤU KUTE TV</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">Rượu quách:</h4>

                                <div>
                                    <span className="underline">Nguyên liệu: </span>

                                    <ul>
                                        {nguyenlieu2.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">Các bước thực hiện:</span>

                                    <div>
                                        <span>Bước 1: Sơ chế nguyên liệu</span>
                                        <p>Ta lau sạch vỏ các trái quách.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Ngâm rượu</span>
                                        <p>Ta đập dập các trái quách cho vào trong hủ. Cho vào hủ 4 lít rượu gạo và ta để trong 1 tháng để có một keo rượu quách thơm mát.</p>
                                    </div>

                                    
                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/tG7A1Gr9dfE?list=PLO4xYQBA1oxVp9yMDErgwbDnEAVTYTX_-"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: HỮU QUỐC MÓN NGON DỄ LÀM</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Thưởng Thức Thành Phẩm">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Quách là một món ăn đa dạng với nhiều cách thưởng thức để mang đến những hương vị khác nhau. Khi cuốn các loại rau sống ({highlightText('xà lách')},{' '}
                        {highlightText('cải thảo')}, {highlightText('bông súng')})  cùng {highlightText('lát khế')}, chua hay {highlightText('chuối chát')}, vào {highlightText('mắm cá sặc')}, cá chốt, cá chẽm pha cay, ngọt, người Trà Vinh thường cuốn chung với ruột quách làm nhân. Cách thưởng thức dân dã, đậm chất Nam Bộ cực kỳ hấp dẫn vì mang đến cho thực khách những trải nghiệm vị giác tuyệt vời. Từng miếng cơm quách chua thanh đặc sệt hòa quyện với mắm chấm đậm đà, lát khế chua, rau sống mát giòn, thơm thoảng cứ thấm dần vào khoang miệng. Bữa ăn vì thế mà thanh nhẹ, bớt phần ngán ngấy.
                    </p>

                    <p>
                        Một món đặc biệt được yêu thích trong mùa hè là {highlightText('quách dầm')} sinh tố. Ruột quách được dầm với nước, đá bào, đường, sữa cho ra ly sinh tố giải khát được nhiều người ưa chuộng. Cho một miếng quách đưa vào miệng, thực khách hãy từ tốn nhai để cảm nhận độ giòn giòn, béo béo, chua chua, ngọt ngọt của hạt quách và thấy mùi thơm đặc trưng vấn vít quanh mũi. Tất cả hòa cùng vị ngọt ngậy của đường, sữa, đá bào mát lạnh dần lan tỏa trong miệng đánh thức vị giác và mang lại cảm giác sảng khoái, thích thú cho bạn. Với một ly sinh tố quách dầm, những trưa hè oi bức dường như được xua tan.
                    </p>

                    <p>
                    {highlightText('Rượu quách')} cũng là một trong những món đặc sản đáng tự hào của người dân Trà Vinh. Những dịp đón khách quý, gia chủ thường mang rượu quách ra thiết đãi như một cách thể hiện sự hiếu khách, tấm thịnh tình của mình.
                    </p>

                </div>
            </FoodContent>



            <FoodContent title="Bảo Quản">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/qu%C3%A1ch%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                
                </div>

                <div>
                    <p>
                        Với mỗi trái quách chín ta có thể để ngoài nhiệt độ phòng 2-3 ngày để đạt được độ chín nhất định và bảo quản được trong 1 tuần.
                    </p>
                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                <p>Dao động từ 30.000đ – 40.000đ/kg.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default TRAIQUACHMAINTV