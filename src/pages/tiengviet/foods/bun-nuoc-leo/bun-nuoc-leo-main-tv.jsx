import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'dừa tươi',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20t%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'sả đập dập',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BA%A3%20%C4%91%E1%BA%ADp%20d%E1%BA%ADp.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'Bún tươi',
        value: 'vừa đủ ăn',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    {
        text: 'Mắm bò hóc',
        value: '400g',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg'
    },
    {
        text: 'Nấm rơm',
        value: '300g',
        image: 'https://buhkhkt.github.io/CHINH/n%E1%BA%A5m%20r%C6%A1m.jpg'
    },
    {
        text: 'Ngải bún',
        value: '50g',
        image: 'https://buhkhkt.github.io/CHINH/Ng%C3%A3i%20B%C3%BAn.jpg'
    },
    {
        text: 'sả cây, sả băm, ớt',
        value: 'vừa đủ ăn',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BA%A3%20c%C3%A2y%20s%E1%BA%A3%20b%C4%83m%20%E1%BB%9Bt.jpg'
    },
    {
        text: 'Huyết heo',
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/huy%E1%BA%BFt%20heo.jpg'
    },
    {
        text: 'Cá lóc',
        value: '1 con',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c.jpg'
    },
    {
        text: 'Rau ăn kèm',
        value: 'Bắp chuối, giá, hẹ,...',
        image: 'https://buhkhkt.github.io/CHINH/rau.jpg'
    },
    {
        text: 'Gia vị',
        value: 'Đường, muối, bột ngọt,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
]

const cachlambientau = [
    { text: 'Bún nước lèo chay', image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20chay.jpg' },
    
]

const thuongthucthanhpham = [
    {
        text: 'bắp chuối',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'bông súng',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%B4ng%20s%C3%BAng.jpg'
    },
    {
        text: 'nồi nước lèo',
        image: 'https://buhkhkt.github.io/CHINH/n%E1%BB%93i%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o.jpg'
    },
    {
        text: 'thịt heo quay',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20heo%20quay.jpg'
    },
    {
        text: 'huyết',
        image: 'https://buhkhkt.github.io/CHINH/huy%E1%BA%BFt%20%C4%83n%20k%C3%A8m.jpg'
    },
    {
        text: 'chả giò',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20gi%C3%B2.jpg'
    },
    {
        text: 'rau ghém',
        image: 'https://buhkhkt.github.io/CHINH/rau%20gh%C3%A9m.jpg'
    },
    {
        text: 'vị ngon khó cưỡng',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91i%E1%BB%81u%20%C4%83n%20v%E1%BB%9Bi%20b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o.jpg'
    }
]

const BUNNUOCLEOMAINTV = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÚN NƯỚC LÈO</h1>
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
                        src="https://www.youtube.com/embed/dFOMacW2sqw?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75"
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
                        Tô bún nước lèo trong ảnh có nước dùng thơm ngon với mùi hương đặc trưng của mắm bò hóc. Bún trong tô bún nước lèo là bún tươi, sợi nhỏ, mềm dai. Trong tô còn gồm các món ăn kèm khác như thịt heo quay, chả giò, huyết,...mang đến sự thơm ngon và đa dạng thành phần trong món ăn. Hay các loại rau ăn kèm như: giá đỗ, bắp chuối,... đã được rửa sạch.                                       
                    </p>

                    <div>
                        <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600" title="bún nước lèo" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/caa156d2f40a44618cefaa977181d750/embed"> </iframe>

                       
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="Khái Quát Chung"
                           
            >
                <p>
                    Món bún nước lèo ngon và đặc biệt, luôn là sự lựa chọn hàng đầu của những người yêu thực phẩm tinh túy. Đây là một món đặc sản của người Khmer, món bún nước lèo đã thăng hoa thành một tác phẩm nghệ thuật đỉnh cao, được ưa chuộng rộng rãi tại nhiều địa phương. Tuy nhiên, bún nước lèo Trà Vinh với sự đậm đà và độc đáo, khiến người thưởng thức không thể quên. Bí quyết thành công của món ăn này bắt đầu từ việc chọn lựa mắm bò hóc, một loại mắm tinh tế được tạo ra có thể bằng nhiều loại cá khác nhau. Mắm bò hóc là linh hồn của bún nước lèo, mang hương vị đặc trưng và tan chảy ngay khi tiếp xúc với nước sôi. Thợ làm mắm phải tuân theo các tiêu chuẩn khắt khe, và thường sử dụng nồi đất để nấu mắm, giữ nguyên hương vị đặc biệt. Nhiều người còn thêm vào nước lèo {highlightText('dừa tươi')} và {highlightText('sả đập dập')} để tạo ra một lớp hương thơm tinh tế.
                </p>
                <p>
                    Bún nước lèo không chỉ là một món ăn dân dã đậm đà, mà còn là một biểu tượng ẩm thực được người dân Trà Vinh tự hào trình diễn. Không chỉ thu hút du khách địa phương, món bún nước lèo đã trở thành một biểu tượng của Trà Vinh khiến du khách từ khắp nơi biết đến và phải thử một lần. Khám phá vùng đất sông nước trong buổi sớm và thưởng thức một tô bún nước lèo nóng hổi là một trải nghiệm khó quên, đưa người ta vào từng cung bậc của một cuộc hành trình vị giác.
                </p>
            </FoodContent>    


            <FoodContent title="Cách Làm Bún Nước lèo">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Cách làm truyền thống:</h4>

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
                                        <p>Sả cây đem đập cho dẹp lại để tạo hương thơm. Phần ngải bún chia làm 2 phần một phần cạo sạch vỏ rồi đem băm nhỏ cùng với ớt và cho vào chung với phần sả bằm, phần còn lại đem nướng cho thơm lên. Đem 300g nấm rơm đi vệ sinh sạch vỏ rồi đem đi rửa sạch lại. Sau đó đem nấm rơm đi cắt nhỏ. 500g huyết heo ta đem rửa sạch và cắt thành từng miếng nhỏ vừa ăn và đem luộc sơ. Lấy tất cả các loại rau ăn kèm đem đi rửa và cho vào nồi và trộn đều lên.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Luộc huyết</span>
                                        <p>Ta bắc nồi nước sôi và đem luộc sơ phần huyết qua để không bị tanh.</p>
                                    </div>

                                    <div>
                                        <span>Bước 3: Nấu nước lèo</span>
                                        <p>Cho 400g mắm bò hóc vào nồi và nấu đến khi mắm sôi và tan ra. Đến khi mắm dậy hương và tan thịt ra thì chúng ta tắt bếp. Bắc nồi nước 4 lít, cho phần xả cây đã đập vào trong nồi. Đến khi nước sôi ta cho cá lóc, phần xả bằm sau khi trộn và phần ngải bún đã nướng đập dập bỏ vào nồi. Sau khi sôi một thời gian thì phần cá trong nồi đã chín, chúng ta vớt hết tất cả cá ra và cho phần nấm rơm vào. Lược phần mắm đã nấu sôi vào nồi. Cho vào thêm 1,5 muỗng cà phê bột ngọt. Phần cá đã vớt ra chúng ta tiến hành tách thịt chúng ra và hãy nhớ là đừng để xót xương nhé. Ta cho phần huyết sau khi luộc và cá đã tách thịt vào nồi nước lèo. Vậy là chúng ta chỉ cần chờ nước sôi thêm khoảng 5 phút là có thể thưởng thức rồi.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/bWf1jgYnIxo?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                    

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: ALO TRÀ VINH</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">Cách Làm Biến Tấu:</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.jpg" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                    Bún nước lèo Trà Vinh, một món ăn biểu tượng của miền Nam Việt Nam. Cái bát bún thơm nức, nước lèo ngọt lịm tạo nên một vũ trụ hương vị không thể chối từ. Nhưng câu chuyện này không dừng ở đó. Ở vùng đất sáng tạo của con người Trà Vinh chúng ta, mọi người luôn sẵn sàng làm mới và cải tiến. Bún nước lèo Trà Vinh đã trải qua một cuộc hóa thân đầy sáng tạo, biến đổi thành vô số phiên bản để đáp ứng sở thích và nhu cầu của từng thực khách. {highlightText('Bún nước lèo chay')}, đưa tâm hồn vào món chay ngon mê mải, với nước dùng thơm ngon và tinh tế từ rau cải và nấm. Bún mắm nước lèo, thay vì nước lèo truyền thống, bún mắm đưa vào món ăn một vị mặn đậm đà, đang hòa quyện với bún và hải sản. Bún nước lèo gỏi cá và thịt nướng, một sáng tạo độc đáo, đánh thức vị giác với sự hòa quyện giữa cá sống và thịt nướng thơm phức. Bún nước lèo cá linh, hương vị đặc trưng của cá linh được lồng vào bát bún nước lèo, đem đến một cảm nhận mới mẻ. Cuối cùng, bún nước lèo kiểu đặc biệt của nhà hàng và quán ăn, là sự sáng tạo tinh tế của các đầu bếp, để đảm bảo mỗi bát bún là một tác phẩm nghệ thuật độc đáo. Bún nước lèo Trà Vinh không chỉ đơn thuần là một món ăn, mà còn là một biểu tượng của sự đa dạng, sáng tạo và sự kết hợp của nhiều hương vị khác nhau. Khi đặt chân đến Trà Vinh, bạn không chỉ thưởng thức một món ăn ngon, mà còn trải qua một cuộc hành trình khám phá sự phong phú và độc đáo trong ẩm thực đất vùng này.
                                </p>                
                            </div>
                </div>
            </FoodContent>


            <FoodContent title="Cách Pha Nước Chấm">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">Giấm ớt:</h4>
                    
                        <p>
                            Ta bắc nước cho vào ½ muỗng canh muối sau đó cho ớt vào luộc khoảng 2 phút. Cho vào 100ml giấm 1 muỗng canh đường, 1 muỗng cà phê bột ngọt khuấy cho tan đều ra. Phần ớt sau khi luộc ta đem cho vào máy xay cùng với tỏi. Xay nhuyễn sau đó cho vào cùng với hỗn hợp nước giấm vừa pha là chúng ta đã có cho mình 1 hỗn hợp giấm ớt tươi ngon để làm món ăn thêm ngon bùng nổ vị giác.
                        </p>
                    </div>
                    <div>
                    <iframe
                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                        src="https://www.youtube.com/embed/P3M0N8-0bVw?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                        title="Thuyết trình về món Bánh canh Bến Có"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen=""
                    ></iframe>
                       
                            <small className="italic block text-center">Nguồn: trích từ kênh youtube: Sống Khỏe</small>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <h4 className="font-semibold">Muối ớt:</h4>
                        <div>
                            <p>
                                Ta cho muối hột vào nồi rang. Khi vừa rang vừa đập. Đến khi muối nhuyễn và khô dần ta cho ớt xay vào cùng ta rang và đảo đều cho ớt thấm đều vào muối và hãy nhớ là đảo đều vì không đảo muối sẽ bị cháy. Sau khi hỗn hợp muối đã rang đều, ta cho bột ngọt xay nhuyễn vào. Khoảng 3-5 phút hỗn hợp muối đã có mùi thơm cay bừng lên thì ta tắt bếp và có thể bỏ vào hũ để bảo quản.
                            </p>
                        </div>
                        <div>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/zlNLGa969JY?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                            <small className="italic block text-center">Nguồn: trích từ kênh youtube: Anh Lee BTR</small>
                        </div>
                    </div>
            </FoodContent>


            <FoodContent title="Thưởng Thức Thành Phẩm">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Lấy tô, bạn chọn từng sợi bún mềm mịn, lấp đầy tô. Cho vào đó rau sống, {highlightText('bắp chuối')}, rau muống tươi ngon và {highlightText('bông súng')} giòn rụm, kết hợp tạo nên một bức tranh tự nhiên tươi đẹp. Khi bạn múc từ {highlightText('nồi nước lèo')} nóng hổi, từng giọt nước lèo xâm chiếm không gian và tạo ra một mùi thơm đặc trưng, làm nồi bún nước lèo trở nên cuốn hút hơn bao giờ hết. Người ăn có tự do để tùy chỉnh khẩu vị của mình. Có thể thêm nước giấm ớt, giúp món ăn trở nên chua cay và ngon miệng hơn.
                    </p>

                    <p>
                        Bạn cũng sẽ không thể bỏ lỡ các món ăn kèm hấp dẫn như {highlightText('thịt heo quay')} và {highlightText('huyết')}, {highlightText('chả giò')}. Thịt heo quay thơm ngon, còn huyết sẽ được vớt ra và chấm vào nước giấm ớt, tạo ra một hương vị cực kỳ thú vị. Ở Trà Vinh, những người làm bún nước lèo còn kỹ tính hơn nữa khi chế biến {highlightText('rau ghém')}, bắp chuối, rau muống và bông súng được bào nhỏ gọn, tạo ra một sự hòa quyện đặc biệt. Vào mùa điều, người ta thậm chí còn băm một ít hạt điều để trải lên rau ghém, tạo nên một {highlightText('vị ngon khó cưỡng')} . Bún nước lèo Trà Vinh không chỉ là một món ăn bình dân thông thường mà còn là một tác phẩm nghệ thuật ẩm thực đậm đà, độc đáo.
                    </p>

                    <p>
                        Khi bạn có cơ hội ghé thăm vùng đất này, hãy tạm gác lại mọi lo âu và dừng chân tại một quán ăn ven đường, gọi một tô bún nước lèo và thưởng thức, bạn sẽ hiểu rằng món ăn này không chỉ là thức ăn, mà còn là một phần không thể thiếu trong hành trình khám phá vùng đất đầy ấn tượng này. Đừng bỏ lỡ cơ hội trải nghiệm hương vị đặc sản bún nước lèo, món ăn độc đáo và tinh túy của Trà Vinh.
                    </p>

                </div>
            </div>
            </FoodContent>

            
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                        <p>Dao động từ 12.000đ-20.000đ.</p>
                        <p>Nhưng giá có thể tăng nếu bạn ăn thêm các món phụ ăn kèm như heo quay, chả giò, huyết,...</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>                                
            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BUNNUOCLEOMAINTV