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
        text: 'cua biển',
        image: 'https://buhkhkt.github.io/CHINH/cua%20bi%E1%BB%83n.jpg'
    },
    {
        text: 'ba khía',
        image: 'https://buhkhkt.github.io/CHINH/ba%20kh%C3%ADa.jpg'
    },
    {
        text: 'buồn bã',
        image: 'https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20bu%E1%BB%93n.webp'
    },
    {
        text: 'gạch chù ụ',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1ch%20ch%C3%B9%20%E1%BB%A5.webp'
    },
    {
        text: 'sốt me',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20s%E1%BB%91t%20me.jpg'
    },
]

const nguyenlieu = [
    {
        text: 'Chù ụ',
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/con%20ch%C3%B9%20%E1%BB%A5.webp'
    },
    {
        text: 'Nước cốt me',
        value: '1/2 chén',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20me.jpg'
    },
    {
        text: 'Tỏi',
        value: '1 củ',
        image: 'https://buhkhkt.github.io/CHINH/t%E1%BB%8Fi.jpg'
    },
    {
        text: 'Gia vị',
        value: 'Dầu ăn, đường, nước mắm,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
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

const CHUUMAINTV = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHÙ Ụ</h1>
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
                    src="https://www.youtube.com/embed/rIr91wK3C3k?list=PLO4xYQBA1oxU0vKk9WkupETKeffWYbgqm"
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
                    Chù ụ rang me cái tên có vẻ lạ lẫm nhưng không ít người đã có cơ hội thưởng thức món ăn độc đáo này. Đây là một bí quyết ẩm thực đặc biệt của người dân Trà Vinh, một đặc sản mà bạn chắc chắn phải thử một lần khi đặt chân đến đây. Trà Vinh, với vẻ đẹp của bãi biển và hương vị đặc sản độc đáo, là điểm đến thú vị và hấp dẫn cho mọi du khách. Trong danh sách những món ngon từ biển, không thể không nhắc đến {highlightText('cua biển')}, {highlightText('ba khía')} và chù ụ.  
                </p>
                <p>
                    Chù ụ nổi bật với hương vị độc đáo và quyến rũ. Thật khó mà nhận biết được sự khác nhau giữa chù ụ và ba khía, đều thuộc loại {renderTooltipText('giáp xác', 'giap-xac')}, với vỏ mai sần sùi và thân thể mập mạp. Một điểm đặc trưng đáng chú ý là khuôn mặt của chù ụ, lúc nào cũng tràn đầy sự {highlightText('buồn bã')} . Có lẽ chính nét này đã thúc đẩy người dân đặt cho nó cái tên độc đáo như vậy. Chù ụ thường sinh sống ở vùng {renderTooltipText('nước lợ', 'nuoc-lo')}, rừng ven biển, nhưng số lượng lớn nhất được tìm thấy là ở vùng biển Trà Vinh, và từ chúng, người dân đã tạo ra nhiều món ăn thơm ngon. Tuy nhiên, có bốn món ăn chủ yếu là nướng, luộc, hấp bia và rang me. Trong số này, chù ụ rang me được coi là món ăn đẳng cấp và nổi bật nhất, đồng nghĩa với hương vị hấp dẫn nhất.
                </p>
                <p>
                    Tháng 4 âm lịch là thời điểm hoàn hảo để thưởng thức chù ụ rang me, khi chúng đang trong giai đoạn {renderTooltipText('thoát xác', 'thoat-xac')}, thịt thơm ngon, mềm mịn và hấp dẫn đỉnh điểm. Đây cũng là cơ hội để trải nghiệm vị biển tuyệt vời và thực phẩm tươi ngon của vùng đất này. Tạo ra món ngon chù ụ rang me đòi hỏi nhiều công phu và sự tỉ mỉ của người nấu. Hương thơm đặc trưng lan tỏa từ thịt chù ụ mềm mại, vị giòn của vỏ chù ụ, và sự béo ngậy của {highlightText('gạch chù ụ')}, hòa quyện hoàn hảo với chút hương chua ngọt của {highlightText('sốt me')} . Tất cả tạo nên một trải nghiệm ẩm thực tuyệt vời, khiến thực khách không thể cưỡng lại.
                </p>
                <p>
                    Trà Vinh không chỉ mang đến những trải nghiệm du lịch thú vị và kỳ diệu, mà còn là nơi bạn có cơ hội thưởng thức những món ngon độc đáo. Và chù ụ rang me với hương vị tuyệt vời, đóng góp vào việc xây dựng "thương hiệu vàng" của vùng đất Trà Vinh trong lòng mọi du khách.
                </p>
            </FoodContent>    


            <FoodContent title="Cách Làm Chù Ụ Rang Me">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Nguyên liệu:</h4>

                                <div>
                                    

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <h4 className="text-xl font-semibold">Các bước thực hiện:</h4>
                                <div className="flex flex-col gap-3 mt-6">
                                   

                                    <div>
                                        <span>Bước 1: Sơ chế nguyên liệu</span>
                                        <p>Ngâm chù ụ với nước đá. Tiếp đến ta tách phần mai ra rồi lấy gạch chù ụ để qua tô, đồng thời cắt bỏ đầu ngoe của chù ụ.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Làm nước sốt me</span>
                                        <p>Ta đổ vào tô khoảng 100ml nước ấm và rồi dầm phần me ra cho tan đều trong nước. Ta cho vào tô 2 muỗng canh đường, 2 muỗng canh nước mắm và rồi trộn đều cho đường và nước mắm hòa tan.</p>
                                    </div>

                                    <div>
                                        <span>Bước 3: Chiên chù ụ</span>
                                        <p>Ta bắt chảo lên cho dầu ăn vào chảo. Đợi đến khi dầu nóng lên ta cho chù ụ vào chiên sơ cho vàng đều thì ta gấp ra đĩa.</p>
                                    </div>
                                    
                                    <div>
                                        <span>Bước 4: Rang me chù ụ</span>
                                        <p>Ta cho vào nồi một ít dầu ăn và cùng với tỏi băm rồi ta phi thơm tỏi. Tiếp đó ta cho phần gạch chù ụ lúc đầu đã lấy được vào cùng. Đến khi ta thấy hỗn hợp bắt đầu sôi ta cho phần sốt me vào. Cuối cùng ta chỉ cần cho phần chù ụ vào và đảo đều tay cho chù ụ thấm đều gia vị là ta đã hoàn tất món chù ụ rang me thơm ngon.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/FUnper4j3VM?list=PLO4xYQBA1oxU0vKk9WkupETKeffWYbgqm"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: Đặng Huyền</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            

            <FoodContent title="Thưởng Thức Thành Phẩm">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.png" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%B9%20%E1%BB%A5%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Một đĩa chù ụ rang me, mỗi chi tiết được chăm chút tận tâm, nằm trước mắt với màu vàng óng rạng ngời. Đây là một bữa ăn độc lạ, mê hoặc từ cảm giác hương thơm quyến rũ đến hương vị đỉnh cao. Mùi thơm tươi ngon và đặc biệt từ từng miếng thịt chù ụ, bám dai dai giữa các vùng nhỏ xíu, tạo nên sự kết hợp tinh tế với vị giòn tan của vỏ chù ụ.
                    </p>

                    <p>
                        Sự sền sệt, hòa quyện giữa vị chua ngọt của sốt me và thịt chù ụ, tạo ra một trải nghiệm hương vị đặc sắc. Những mùi thơm tỏi và hành, nhẹ nhàng, đậm đà, hoàn thiện tuyệt vời cho bữa tiệc thịnh soạn này.
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                <p>Dao động từ 100.000-150.000đ/đĩa.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            
        <Tooltip
            anchorSelect=".giap-xac"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Là nhóm động vật có vỏ bọc bên ngoài cơ thể khá chắc chắn (gọi là giáp), và có nhiều chân.
                </div>
            }
        />
            
        <Tooltip
            anchorSelect=".nuoc-lo"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Là sự pha trộn giữa nước mặn và nước ngọt.
                </div>
            }
        />


        <Tooltip
            anchorSelect=".thoat-xac"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Là giai đoạn động vật lột bỏ vỏ bọc bên ngoài để phát triển và tăng kích thước.
                </div>
            }
        />



            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CHUUMAINTV