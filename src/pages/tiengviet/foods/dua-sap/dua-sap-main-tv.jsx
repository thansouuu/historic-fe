import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'dạng sệt',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20s%E1%BB%87t.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'Dừa sáp Trà Vinh',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p.jpeg'
    },
    {
        text: 'Sữa đặc',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BB%AFa%20%C4%91%E1%BA%B7c.jpg'
    },
    {
        text: 'Đường',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
    {
        text: 'Đậu phộng rang giòn',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'Đá lạnh',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C3%A1%20nhuy%E1%BB%85n.jpg'
    },
]





const thuongthucthanhpham = [
    {
        text: 'ký ức',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A8o%20c%C3%A2y%20d%E1%BB%ABa.jpg'
    },
    
]

const DUASAPMAINTV = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu, ...thuongthucthanhpham];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">DỪA SÁP</h1>
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
                    src="https://www.youtube.com/embed/6L-ddiscTCc?list=PLO4xYQBA1oxWEFlhmVAXkvvoPRKnUFdAF"
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
                    Dừa sáp là một loại quả độc đáo. Tên gọi này xuất phát từ sự tuyệt vời của lớp thịt dừa, mềm mịn và béo ngậy. Loại quả này lần đầu được khám phá vào khoảng thập niên 60 của thế kỷ 20 tại tỉnh Trà Vinh, nằm ở miền Tây Việt Nam - một vùng đất nổi tiếng với sự đa dạng của loại dừa thơm ngon và kỳ diệu. Tại Trà Vinh, với điều kiện khí hậu và đất đai đặc biệt đã tạo ra một biến đổi di truyền độc đáo, chỉ xuất hiện ở đây. Dừa sáp không thể trồng ở bất kỳ nơi nào khác, điều này làm cho nó trở nên đặc biệt và quý hiếm.
                </p>
                <p>
                    Giá trị của nó vượt xa hơn so với dừa thông thường. Điều đặc biệt là trong quá trình tạo giống dừa sáp, những quả không có sáp được lựa chọn để làm giống, bởi chúng có khả năng tạo ra phôi thai. Những quả dừa có sáp, mặc dù ngon miệng nhưng lại không thể trở thành giống, chúng được sử dụng để tạo ra sản phẩm thơm ngon khác.
                </p>
                <p>
                    Nếu bạn từng được thưởng thức dừa sáp, bạn sẽ đắm chìm trong vị ngọt ngào, đầy béo của nước dừa {highlightText('dạng sệt')} vô cùng đặc biệt. Tuy nhiên, loại quả này thường chỉ cho ra rất ít quả, chỉ khoảng 2 đến 3 quả trên mỗi cây dừa. Điều này làm cho chúng trở nên hiếm hoi và đắt đỏ nhưng cũng làm nổi bật giá trị và sự độc đáo của dừa sáp, một kho báu của vùng đất Trà Vinh.
                </p>
            </FoodContent>    


            <FoodContent title="Cách Làm Phổ Biến">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Thưởng thức trực tiếp:</h4>
                                <div>
                                    <p>
                                        Cách đơn giản nhất để cảm nhận trọn vẹn được hương vị của dừa dạng sáp đó là dùng trực tiếp. Khi ăn bạn có thể cảm nhận rõ vị béo ngọt, hương thơm của dừa lan tỏa trong miệng. Lớp cơm dừa dẻo sền sệt và đặc ruột chính là điểm đặc biệt khiến ai đã nếm thử cũng sẽ nhớ mãi không quên.
                                    </p>
                                </div>


                                <h4 className="text-xl font-semibold">Dừa sáp dầm sữa đá:</h4>
                                <div>
                                    <span className="underline">Nguyên liệu: </span>

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">Các bước thực hiện:</span>

                                    <div>
                                        <span>Bước 1:Sơ chế dừa sáp</span>
                                        <p>Lột vỏ và bổ đôi trái dừa. Tiếp đến ta tách trái dừa và nạo hết phần cơm dừa bỏ vào tô.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2:Chế biến dừa</span>
                                        <p>Cho vào tô khoảng 1 muỗng canh đường, sữa đặc và rồi trộn đều. Sau khi trộn ta chỉ cần cho phần dừa đã trộn vào ly cùng nước đá và một ít đậu phộng là ta đã có thể thưởng thức rồi.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/bhIlQBAe6RM?list=PLO4xYQBA1oxWEFlhmVAXkvvoPRKnUFdAF"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: LEO COOKING</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">Sinh tố dừa sáp:</h4>
                                <div>
                                    <span className="underline">Nguyên liệu: </span>

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">Các bước thực hiện:</span>

                                    <div>
                                        <span>Bước 1:Sơ chế dừa sáp</span>
                                        <p>Bổ đôi trái dừa. Tiếp đến ta tách hết phần cơm dừa ra ngoài tô.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2:Xay sinh tố</span>
                                        <p>Cho cơm dừa vào máy xay sinh tố cùng với sữa đặc, 3 muỗng canh đường. Sau đó ta đậy nắpvà xay đến khi dừa nhuyễn đều. Tiếp đến ta cho thêm đá nhuyễn vào xay cùng. Cứ tiếp tục xay và cho thêm đá nhuyễn vào khi phần trước đã hoà tan đều. Đến khi ta thấy phần sinh tố của ta đủ sệt thì dừng lại. Cuối cùng chỉ cần cho ra ly và thưởng thức.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/70u-eSqKAF4?list=PLO4xYQBA1oxWEFlhmVAXkvvoPRKnUFdAF"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: Tôi là ngườ Bến Tre</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Thưởng Thức Thành Phẩm">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Dừa sáp-một biểu tượng ẩm thực vô cùng độc đáo của Trà Vinh. Hương thơm của dừa sáp không giống bất cứ loại dừa nào khác. Ngay khi dao đâm vào vỏ dày của trái dừa hương thơm ngọt ngào, đậy béo tự nhiên bung lên, đánh thức mọi giác quan. Khi ta thưởng thức miếng thịt dừa mềm mịn, vị ngọt tinh tế bắt đầu làm say đắm từng vị giác. Không phải mỗi loại dừa đều có khả năng mang lại cảm giác đặc biệt như thế này. Đây là một sự kết hợp tuyệt vời của hương vị và mùi hương tự nhiên.
                    </p>

                    <p>
                        Dừa sáp Trà Vinh không chỉ là một loại thực phẩm, nó là một tác phẩm nghệ thuật của thiên nhiên. Sự quý hiếm của nó khiến trải nghiệm thưởng thức trở nên đặc biệt hơn. Đây là một loại thực phẩm có giá trị cao và độc đáo và điều này thêm phần thú vị cho việc thử nếm dừa sáp. Ngoài việc kích thích các giác quan, dừa sáp còn gợi nhớ những {highlightText('ký ức')} về miền quê miền Tây Việt Nam, nơi loại dừa này được trồng và thu hoạch.
                    </p>
                                            
                    <p>
                        Thưởng thức dừa sáp là một cách để kết nối với văn hóa và sự đặc sản, độc đáo của khu vực đó là một cảm giác thật sự rất tuyệt vời. Thưởng thức dừa sáp Trà Vinh còn là một hành trình trải nghiệm vẻ đẹp và độc đáo của Trà Vinh, qua những trải nghiệm mang những cảm xúc không thể nào quên.
                    </p>

                </div>
            </FoodContent>



            <FoodContent title="Bảo Quản">

                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20s%C3%A1p%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                   
                </div>

                <div>
                    <p>
                        Với một trái dừa sáp vừa mới hái xuống từ trên cây thì bạn có thể bảo quản từ 15 – 20 ngày ở nhiệt độ phòng. Nếu muốn kéo dài thời gian bảo quản, bạn cho dừa sáp vào ngăn mát tủ lạnh sẽ giữ được khoảng 25 – 30 ngày. Với trái dừa sáp đã tách thịt, bạn có thể bảo quản dừa trong khoảng 3 ngày ở ngăn mát tủ lạnh hoặc ngăn đá trong 1 tuần. Tuy nhiên, để thưởng thức nguyên vẹn hương vị tươi mới và ngon ngọt của loại trái cây quý hiếm này bạn nên sử dụng ngay trong khoảng 10 ngày. Bảo quản quá lâu sẽ khiến dừa sáp mất đi hương vị tươi ngon, phần cơm dừa cũng không được dẻo như lúc mới hái.
                    </p>

                    

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                <p>Dao động từ 100.000đ-300.000đ/quả tùy chất lượng mỗi quả.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>



            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default DUASAPMAINTV