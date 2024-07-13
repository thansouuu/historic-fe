import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'bông hoa',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20b%C3%B4ng%20hoa.jpeg'
    },
    {
        text: 'con cá',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20c%C3%A1%20ch%C3%A9p.webp'
    },
    {
        text: 'cơm',
        image: 'https://buhkhkt.github.io/CHINH/c%C6%A1m%20tr%E1%BA%AFng.jpg'
    },
    {
        text: 'bánh mì',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20m%C3%AC%20kh%C3%B4ng.jpg'
    },
    {
        text: 'bún',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    
]

const nguyenlieu = [
    {
        text: 'Thịt heo băm',
        value: '600g',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20heo%20b%C4%83m.webp'
    },
    {
        text: 'Lòng đỏ trứng muối',
        value: '5 cái',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%B2ng%20%C4%91%E1%BB%8F%20tr%E1%BB%A9ng%20mu%E1%BB%91i.webp'
    },
    {
        text: 'Trứng gà',
        value: '2 trứng',
        image: 'https://buhkhkt.github.io/CHINH/tr%E1%BB%A9ng%20g%C3%A0.jpg'
    },
    {
        text: 'Nấm mèo',
        value: '4g',
        image: 'https://buhkhkt.github.io/CHINH/n%E1%BA%A5m%20m%C3%A8o.webp'
    },
    {
        text: 'Giò sống',
        value: '400g',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%B2%20s%E1%BB%91ng.webp'
    },
    {
        text: 'Rượu trắng',
        value: '2 thìa canh',
        image: 'https://buhkhkt.github.io/CHINH/r%C6%B0%E1%BB%A3u%20tr%E1%BA%AFng.jpg'
    },
    {
        text: 'Cà rốt',
        value: '20g',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A0%20r%E1%BB%91t.jpeg'
    },
    {
        text: 'Đậu que',
        value: '20g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20que.jpg'
    },
    {
        text: 'Gia vị',
        value: 'thông dụng',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'trứng bắc thảo', image: 'https://buhkhkt.github.io/CHINH/tr%E1%BB%A9ng%20b%E1%BA%AFc%20th%E1%BA%A3o.jpg' },
    { text: 'tàu hũ ky', image: 'https://buhkhkt.github.io/CHINH/t%C3%A0u%20h%E1%BB%A7%20ky.jpg' },
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

const CHAHOAMAINTV = () => {
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
    
    return (
        <div className="container pb-20">
            
            <div className="mb-4">
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHẢ HOA</h1>
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
                    src="https://www.youtube.com/embed/RFyy-B8erRs?list=PLO4xYQBA1oxWXmpMIIXHWCHoS9CIj2uSV"
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
                    Chả hoa, món đặc sản đặc sắc của tỉnh Trà Vinh, thực sự là một biểu tượng của sự khéo léo và nghệ thuật trong ẩm thực. Nó không chỉ đơn thuần là một món ăn, mà còn là một tác phẩm nghệ thuật, một hiện thân của sự tinh tế và sáng tạo. Được tạo ra từ những nguyên liệu tươi ngon như thịt lợn, pate, trứng muối, trứng gà chiên, rau củ, và nấm mèo, chả hoa là một sự kết hợp độc đáo của hương vị và hình dáng. Khi nhìn vào chả hoa, người ta không thể không bị cuốn hút bởi hình dáng của nó, giống như một {highlightText('bông hoa')} vô cùng tinh tế. Với trứng muối làm trung tâm, bao quanh bởi lớp nấm mèo, giò thơm ngon và lớp trứng gà chiên vàng ươm tạo nên một tấm cuộn đẹp mắt, hòa quyện tạo nên hương vị đặc trưng của Trà Vinh.
                </p>
                <p>
                    Đặc biệt, có một phiên bản chả hoa độc đáo hình {highlightText('con cá')} . Đòn chả hoa với trứng muối làm nhân khi bày trên bàn ngày Tết, vừa đẹp mắt vừa hấp dẫn. Đây là một món ăn thực sự tuyệt vời và đa dạng, có thể được ăn kèm với {highlightText('cơm')}, {highlightText('bánh mì')} hoặc {highlightText('bún')}, đáp ứng mọi khẩu vị. Tuy quy trình làm chả hoa không dễ dàng, đòi hỏi sự tỉ mỉ và khéo léo, nhưng kết quả cuối cùng là một món ăn ngon, bổ dưỡng và đầy ấn tượng. Thịt lợn được xay nhuyễn, sau đó kết hợp cùng các thành phần khác và gói gọn trong lá chuối trước khi hấp chín. Điều này tạo ra một món ăn ngon và bổ dưỡng, làm say đắm lòng người và đây cũng là niềm tự hào của người dân Trà Vinh.
                </p>
                <p>
                    Ngoài vị ngon và hình dáng đẹp mắt, chả hoa còn có giá trị dinh dưỡng cao, chứa nhiều protein, chất béo, vitamin và khoáng chất cần thiết cho cơ thể. Nếu bạn có cơ hội đến Trà Vinh, đừng bỏ lỡ cơ hội thưởng thức món đặc sản này. Chả hoa không chỉ là một món ăn, mà còn là một tác phẩm nghệ thuật ẩm thực thể hiện sự khéo léo và tinh tế của nghệ nhân địa phương.
                </p>
            </FoodContent>    


            <FoodContent title="Cách Làm Chả Hoa">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Cách làm phổ biến:</h4>

                                <div>
                                    <span className="underline">Nguyên liệu: </span>

                                    <ul>
                                        {nguyenlieu.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">Các bước thực hiện:</span>

                                    <div>
                                        <span>Bước 1: Sơ chế nguyên liệu</span>
                                        <p>Lấy 4g nấm mèo ngâm cùng nước mát khoảng 20-30 phút để nấm mèo nở ra. Rửa sạch đậu que và cà rốt, cắt cà rốt thành các đoạn dài đều với đậu que. Bắc chảo lên bếp cho vào khoảng 200ml nước, ½ muỗng cà phê muối, cho cà rốt vào sau đó mới bật lửa lên, khi mà nước sôi thì chúng ta mới cho thêm đậu que vào. Sau 1 phút đổ nước ra cho ráo rồi xả sơ lại với nước lạnh để giữ màu rau củ tươi và dai giòn hơn. Tiếp đến cho 1 muỗng canh rượu trắng vào lòng đỏ trứng muối để khử mùi. Sau đó đem lòng đỏ trứng đi hấp từ 7-8 phút (còn nướng thì để ở nhiệt độ 160 độ C từ 9-10 phút).</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Chiên trứng làm vỏ</span>
                                        <p>Cho vào ⅕ muỗng cà phê muối và đánh đều tay để trứng tan ra. Tiếp theo cho lên bếp 1 muỗng cà phê dầu ăn. Đổ trứng lên bếp cho đều ra rồi đợi đến khi mặt trứng se lại thì nhấc khỏi bếp.</p>
                                    </div>

                                    <div>
                                        <span>Bước 3: Làm giò sống</span>
                                        <p>Nấm mèo sau khi ngâm nở thì chúng ta cắt bỏ cuống và cắt thành từng miếng nhỏ vừa rồi cho vào 400g giò sống, cho thêm ½ muỗng cà phê bột hành và ½ muỗng cà phê tiêu trắng. Sau đó trộn đều.</p>
                                    </div>

                                    <div>
                                        <span>Bước 4: Gói chả hoa ngũ sắc</span>
                                        <p>Trải miếng màng bọc thực phẩm đã được làm sạch lên bề mặt phẳng rồi xếp lớp trứng rán lên, tiếp đó là giò sống, lớp cà rốt và đậu que, đắp thêm một lớp giò sống, lớp cuối cùng là lớp cà rốt và đậu que. Cho trứng muối vào phần chính giữa ở lớp trên cùng. Cuộn tròn phần màng bọc gói chả hoa lại cho thật tròn và chặt. Sau đó chuyển phần chả hoa sang giấy bạc. Lấy dây cột lại thật chặt cả đòn chả. Đem đi hấp trong khoảng 30 phút rồi đem ra ngoài để nguội khoảng 5 tiếng để rồi mới có thể thưởng thức.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/Dpbo4DewmNI?list=PLO4xYQBA1oxWXmpMIIXHWCHoS9CIj2uSV"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: Diễm Nauy</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">Cách Làm Biến Tấu:</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.webp" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.webp" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                    Ngoài chả hoa truyền thống, hiện nay còn có nhiều loại chả hoa biến tấu khác nhau, với sự thay đổi về thành phần nguyên liệu hoặc cách chế biến. Thay vì sử dụng trứng muối, chả hoa trứng bắc thảo sử dụng {highlightText('trứng bắc thảo')} . Trứng bắc thảo có vị mặn và béo ngậy, tạo nên hương vị mới lạ cho món chả hoa. Hay chả hoa chay được làm từ các nguyên liệu chay như {highlightText('tàu hũ ky')}, nấm mèo, cà rốt, củ đậu,... thay thế cho các nguyên liệu như thịt hay trứng. Chả hoa chay có vị thanh đạm, phù hợp với những người ăn chay. Chả hoa ngũ sắc ngày nay cũng được biến tấu làm từ các nguyên liệu khác nhau, tạo nên màu sắc bắt mắt cho món ăn. Một số loại nguyên liệu được sử dụng để thay thế cho thịt lợn như là thịt bò, thịt gà, tôm,...Ngoài ra, người ta cũng có thể biến tấu chả hoa bằng cách thay đổi cách chế biến. Ví dụ, chả hoa nướng sẽ có hương vị thơm ngon và giòn hơn so với chả hoa hấp. Việc biến tấu chả hoa là một cách để tạo ra những món ăn mới lạ và hấp dẫn hơn. Những món chả hoa biến tấu này đã và đang được nhiều người yêu thích, đặc biệt là giới trẻ.
                                </p>                
                            </div>
                </div>
            </FoodContent>


            <FoodContent title="Cách Pha Nước Chấm">
                    <div className="flex flex-col gap-3 mt-2">
                        <h4 className="font-semibold">Muối tiêu chanh:</h4>
                        
                        <div>
                            <p>
                                Chúng ta đem tiêu đi rang để giữ mùi hương của tiêu. Ta hòa quyện muối hạt và muối nhuyễn đem đi rang khoảng 7-10 phút để muối khô. Tiếp đến chúng ta đem phần tiêu đã để nguội đem đi xay và cắt nhỏ lá chanh. Cuối cùng ta trộn đều các thành phần cùng hỗn hợp muối ban đầu và tiếp tục rang chúng. Chúng ta có thể cho thêm vào một ít ớt bột để tạo độ cay. Rang một lúc ta tắt bếp để nguội. Xay nhuyễn bột ngọt rồi đổ vào phần hỗn hợp muối đã rang rồi trộn đều. Thế là ta đã được hỗn hợp muối tiêu thơm ngon, lúc này chúng ta sàn lọc muối qua đồ sàn để vào hủ và bảo quản. Khi ăn chúng ta chỉ cần vắt thêm miếng chanh vào muối tiêu là đã có thể có hỗn hợp muối tiêu chanh với công thức đặc biệt này rồi.
                            </p>
                        </div>
                        <div>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/KgUqO4mHJjw?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                        
                            
                            <small className="italic block text-center">Nguồn: trích từ kênh youtube: Cười Khúc Khích</small>
                        </div>
                    </div>

                    
            </FoodContent>


            <FoodContent title="Thưởng Thức Thành Phẩm">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.webp" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Chả hoa là một món ăn đặc sản của tỉnh Trà Vinh, được nhiều người yêu thích bởi hương vị thơm ngon và đẹp mắt. Món ăn này có thể được thưởng thức theo nhiều cách khác nhau, tùy theo sở thích của mỗi người. Chả hoa truyền thống thường được ăn kèm với cơm, bánh mì hoặc bún. Khi thưởng thức, bạn có thể cắt chả hoa thành lát mỏng, chấm với muối tiêu chanh. Nước chấm cũng sẽ tạo nên sự đặc biệt trong cách ăn chả hoa vì vậy bạn nên chọn loại nước chấm ngon nhất để đạt được độ khoái cực vị giác.
                    </p>

                    

                </div>
            </FoodContent>


            <FoodContent title="Bảo Quản">

                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20hoa%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                   
                </div>

                <div>
                    <p>
                        Chả hoa là một món ăn được làm từ thịt lợn, pate, trứng muối, trứng chiên, rau củ, nấm mèo… được gói trong lá chuối và hấp chín. Để bảo quản chả hoa được lâu, bạn cần lưu ý một số điều sau. Chả hoa nên được bảo quản trong tủ lạnh, ở nhiệt độ từ 0 đến 4 độ C. Điều này sẽ giúp chả hoa tươi ngon và không bị hư hỏng. Trước khi cho vào tủ lạnh, bạn nên bọc kín chả hoa bằng màng bọc thực phẩm hoặc túi nilon để tránh bị khô và mất nước. Chả hoa có thể được bảo quản trong tủ lạnh và sử dụng trong vòng 3 ngày. Sau 3 ngày, chả hoa sẽ bắt đầu bị khô và mất đi hương vị thơm ngon. Nếu bạn muốn bảo quản chả hoa được lâu hơn, bạn có thể cho vào ngăn đá tủ lạnh. Tuy nhiên, khi sử dụng, bạn cần rã đông chả hoa tự nhiên trong tủ lạnh hoặc rã đông bằng lò vi sóng.
                    </p>

                    

                </div>
            </FoodContent>

            
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                <p>Dao động từ 27.000đ - 40.000đ.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>
            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CHAHOAMAINTV;