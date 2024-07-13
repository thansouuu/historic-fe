import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import clsx from "clsx";
import { Tooltip } from 'react-tooltip';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'con rươi',
        image: 'https://buhkhkt.github.io/CHINH/con%20r%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'mật ong',
        image: 'https://buhkhkt.github.io/CHINH/m%C3%A0u%20m%E1%BA%ADt%20%C3%B4ng.jpg'
    },
]

const nguyenlieu = [
    {
        text: 'Rươi',
        image: 'https://buhkhkt.github.io/CHINH/con%20r%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'Muối',
        image: 'https://buhkhkt.github.io/CHINH/mu%E1%BB%91i.jpg'
    },
    
]

const cachlambientau = [
    { text: 'sườn non', image: 'https://buhkhkt.github.io/CHINH/s%C6%B0%E1%BB%9Dn%20non.jpg' },
    { text: 'mực ống', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20%E1%BB%91ng.jpg' },
    { text: 'tôm tít', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20t%C3%ADt.webp' }
]

const thuongthucthanhpham = [
    {
        text: 'trụng sơ',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20tr%E1%BB%A5ng%20n%C6%B0%E1%BB%9Bc%20s%C3%B4i.webp'
    },
    {
        text: 'rau muống chẻ',
        image: 'https://buhkhkt.github.io/CHINH/rau%20mu%E1%BB%91ng%20ch%E1%BA%BB.png'
    },
    {
        text: 'bắp chuối xắt',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'xà lách xoăn',
        image: 'https://buhkhkt.github.io/CHINH/x%C3%A0%20l%C3%A1ch%20xo%C4%83n.jpg'
    },
    {
        text: 'giá đỗ',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%A1%20%C4%91%E1%BB%97.jpg'
    },
    {
        text: 'húng thơm',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%BAng%20th%C6%A1m.jpg'
    }
]

const NUOCMAMRUOIMAINTV = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu, ...cachlambientau, ...thuongthucthanhpham];

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
        <div className="container pb-20">
            <div className="mb-4">
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">NƯỚC MẮM RƯƠI</h1>
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
                    src="https://www.youtube.com/embed/E3TOOsl4c2M?list=PLO4xYQBA1oxUu9nptCBVmbDewjbLIGB95"
                    title="Thuyết trình về món Bánh canh Bến Có"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                ></iframe>
                </div>
            </div>

            

            
 
            <FoodContent 
                title="Khái Quát Chung"
                           
            >
                <p>
                    Trà Vinh, vùng đất phía Nam của Việt Nam, từ lâu đã nổi tiếng với nhiều món đặc sản thơm ngon và lạ miệng. Tuy nhiên, nếu bạn đã từng bước chân đến đây, chắc chắn bạn sẽ nghe về một loại nước mắm đặc biệt của vùng này, đó chính là nước mắm rươi. 
                </p>
                <p>
                    Thị xã Duyên Hải, tỉnh Trà Vinh, nổi tiếng với một loài thủy sản độc đáo- {highlightText('con rươi')}. Từ bao đời nay, người dân tại đây đã tận dụng loài thủy sản này để tạo ra một loại nước mắm rươi độc đáo. Có một giai thoại thú vị về nguồn gốc của nó, theo đó khi vua Nguyễn Ánh đang đi bôn tẩu tới xứ này, một phú hộ cung cấp cho ông ăn toàn nước mắm rươi. Sau khi lên ngôi vua, hàng năm vua Gia Long cho ghe bầu vào Nam mua nước mắm rươi về ăn, theo nghi thức cung đình gọi là {renderTooltipText('vua ngự thiện', 'vua-ngu-thien')}. Đó là lý do tại sao nước mắm rươi được gọi là "nước mắm ngự" và trở thành một sản phẩm quý giá độc đáo.
                </p>
                <p>
                    Rươi là một loài sên đất, sinh sống dưới mặt đất thuộc vùng nước mặn, ngập mặn, cập theo sông rạch và bãi bồi ven biển. Đặc điểm độc đáo của rươi là chúng chỉ xuất hiện vào khoảng tháng 10 và tháng 11 âm lịch, khiến quá trình sản xuất nước mắm rươi diễn ra một lần trong mỗi năm. Nước mắm rươi nguyên chất có {renderTooltipText('độ đạm cao', 'do-dam-cao')}, tạo ra một mùi vị thơm ngon mặn mà hơn so với nước mắm cá thông thường. Quá trình làm mắm rươi cũng đơn giản với một đôi rươi được pha trộn với muối theo tỷ lệ cố định, sau đó ủ ngoài trời. Điều này làm cho nước mắm rươi ngày càng trong và có màu vàng như {highlightText('mật ong')}, mang theo mùi thơm dịu độc đáo. Mỗi sản phẩm nước mắm rươi là một biểu tượng của công sức và mồ hôi của người làm mắm. Nhờ sự hỗ trợ của hội khuyến nông tỉnh, nước mắm rươi hiện nay được đóng chai, lọc qua máy khử trùng bằng tia UV, và đóng kín chai với nhãn thương hiệu. Điều này giúp nâng cao chất lượng nước mắm và giữ cho nó luôn tươi ngon.
                </p>
                <p>
                    Tuy nước mắm rươi chỉ sản xuất một lần trong một năm, nhưng người dân ở đây vô cùng trân trọng và chỉ khi có khách quý mới đưa ra tiếp đãi. Mỗi năm, sản phẩm nước mắm rươi được trân trọng cất giữ và mang đi mọi miền đất nước như một biểu tượng của niềm tự hào vùng đất Trà Vinh.
                </p>
            </FoodContent>    


            <FoodContent title="Cách Làm Nước Mắm Rươi">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Nguyên liệu:</h4>

                                <div>
                                   

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>
                                <h4 className="text-xl font-semibold">Các bước thực hiện:</h4>

                                <div className="flex flex-col gap-3 mt-6">
                                    

                                    <div>
                                        
                                        <p>Ta tiến hành ủ mắm. Ta cho rươi và muối vào lu với tỉ lệ 7:3 (Ví dụ như 70kg rươi sẽ sử dụng 30kg muối). Sau đó ta khuấy đều cho muối tan ra đều. Ta đợi một lát để nước lắng lên trên ta vớt bọt và sau đó đậy nắp lu thật kín ta ủ mắm trong 10 tháng. Sau khoảng 10 tháng ta sẽ tiến hành lọc mắm để chiết vào chai. Ngày nay có công nghệ tiên tiến khử trùng bằng tia UV nên việc lọc mắm cũng trở nên hiện đại và đảm bảo hơn.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/fSWtF5LdkgM?list=PLO4xYQBA1oxUu9nptCBVmbDewjbLIGB95"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: TRUYỀN HÌNH TRÀ VINH</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Thưởng Thức Thành Phẩm">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Thưởng thức nước mắm rươi không chỉ là việc ăn uống mà còn là việc tận hưởng và tôn vinh vùng đất Trà Vinh và những người dân ở đây. Đó là cách bạn được kết nối với lịch sử và văn hóa của vùng biển này và là cách bạn thể hiện lòng biết ơn và kính trọng đối với công lao của những người làm nước mắm rươi. Đầu tiên, khi bạn đưa miếng thịt cá hay hàu ngon lạnh và tươi mát đến miếng bánh tráng mỏng mịn, bạn sẽ cảm nhận được mùi thơm dịu dàng và mặn mà của nước mắm rươi. Đây là mùi của biển cả, mùi của nắng, mùi của cát trắng và sóng biển. Mỗi giọt nước mắm rươi mang theo hơi thở của biển cả, và khi bạn thưởng thức, bạn thực sự đang thả hồn vào trải nghiệm biển độc đáo này.
                    </p>

                    <p>
                        Nếu bạn có cơ hội thưởng thức nước mắm rươi Trà Vinh, hãy tận hưởng mỗi giọt và từng miếng một. Hãy cảm nhận hương vị biển cả và chia sẻ niềm tự hào về một sản phẩm duy nhất chỉ có ở vùng đất này.
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                <p>Dao động từ 50.000đ-100.000đ/500ml tùy vào chất lượng con rươi mà nước mắm có giá bán khác nhau.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

           

            
        <Tooltip
            anchorSelect=".vua-ngu-thien"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Đồ ăn cao cấp chỉ dành cho vua.
                </div>
            }
        />
        <Tooltip
            anchorSelect=".do-dam-cao"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Đề cập đến lượng protein có trong sản phẩm.
                </div>
            }
        />
            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default NUOCMAMRUOIMAINTV