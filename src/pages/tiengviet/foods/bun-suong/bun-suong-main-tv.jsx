import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'hình dáng',
        image: 'https://buhkhkt.github.io/CHINH/su%C3%B4ng%20%C4%91u%C3%B4ng%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'tôm',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA.jpg'
    },
    {
        text: 'thịt ba chỉ',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20ba%20ch%E1%BB%89.jpg'
    },
    {
        text: 'bún',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    {
        text: 'bột năng',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C4%83ng.jpg'
    },
    {
        text: 'dầu điều',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BA%A7u%20%C4%91i%E1%BB%81u.jpg',
    },
    {
        text: 'tương hạt',
        image: 'https://buhkhkt.github.io/CHINH/t%C6%B0%C6%A1ng%20h%E1%BA%A1t.jpg'
    },
    {
        text: 'me',
        image: 'https://buhkhkt.github.io/CHINH/me%20chua.jpg'
    }, 
]

const nguyenlieu = [
    {
        text: 'Tôm sú',
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA%20t%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'Tôm khô',
        value: '30g',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20kh%C3%B4.jpg'
    },
    {
        text: 'Sườn / Thịt xương heo',
        value: '1kg',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20s%C6%B0%E1%BB%9Dn%20heo.jpg'
    },
    {
        text: 'Bún tươi',
        value: '3kg',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp'
    },
    {
        text: 'Củ cải trắng',
        value: '300g',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%A7%20c%E1%BA%A3i%20tr%E1%BA%AFng.jpg'
    },
    {
        text: 'Đường phèn',
        value: '25g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng%20ph%C3%A8n.jpg'
    },
    {
        text: 'Lòng trắng trứng gà',
        value: '1 cái',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%B2ng%20tr%E1%BA%AFng%20tr%E1%BB%A9ng%20g%C3%A0.png'
    },
    {
        text: 'Nguyên liệu phụ',
        value: 'Tương hột, tỏi, hành tây, hành tím, rau thơm, hành lá, ngò rí; Chanh, ớt, giá sống, rau thơm tùy sở thích',
        image: 'https://buhkhkt.github.io/CHINH/B%C3%9AN%20SU%C3%94NG%20NLP.jpg'
    },
    {
        text: 'Gia vị',
        value: 'Muối, đường, dầu ăn, bột nêm gà, nước mắm,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    }
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

const BUNSUONGMAINTV = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÚN SUÔNG</h1>
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
                    src="https://www.youtube.com/embed/qesE5OAuKns?list=PLO4xYQBA1oxWOFFUkwDngz78iTEFjkoIg"
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
                        Tô bún suông trong hình có nước dùng với màu vàng nhạt, tỏa mùi thơm của xương heo và gia vị. Nước dùng có vị ngọt thanh, đậm đà. Nhiều sợi suông nổi lên trên mặt nước dùng. Sợi suông có vị ngọt thanh, hơi dai. Ở trong tô còn có một các miếng thịt ba chỉ lát mỏng và da heo cùng với xương heo. Thịt mềm ngọt, có vị béo ngậy. Ngoài ra, trong tô còn có thêm một ít giá đỗ, rau mùi.                                       
                    </p>

                    <div>
                        <iframe 
                        className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600"
                        
                        title="bún suông" 
                        allowfullscreen 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true" 
                        allow="autoplay; fullscreen; xr-spatial-tracking" 
                        xr-spatial-tracking 
                        execution-while-out-of-viewport 
                        execution-while-not-rendered 
                        web-share 
                        src="https://sketchfab.com/models/ed5c62ee4ac0416e956a01ccfe68d7a9/embed" 
                    />
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="Khái Quát Chung"
                           
            >
                <p>
                    Là một vùng đất có nền ẩm thực giao thoa của ba dân tộc Kinh, Hoa, Khmer, đến Trà Vinh mà không thưởng thức những món ăn đặc sản nơi đây thì thật là phí một chuyến đi. Vậy bạn đã thử qua món bún suông chưa? Bún suông còn được biết đến với một tên gọi dân dã khác là bún đuông. Cái tên gắn liền với món ăn này đã có từ lâu, đến nỗi những người cao tuổi nhất cũng không rõ đâu là nguồn gốc thực sự của cái tên bún suông. Họ chỉ biết rằng đây là món ăn dân dã có từ lâu đời và được người dân truyền từ đời này qua đời khác tại quê hương.  
                </p>
                <p>
                    Một giả thuyết được nhiều người đồng tình nhất đó là bắt nguồn từ chả tôm - thành phần nổi bật nhất làm nên món ăn này. {highlightText('Hình dáng')} của chả tôm trong món bún suông được nặn thuôn thuôn với màu vàng nhạt trông khá giống như con đuông dừa. Có lẽ đây cũng là ý tưởng để ra đời tên gọi món bún đuông, sau này đọc lại thành bún suông. Bún suông cơ bản gồm các thành phần chính là {highlightText('bún')}, {highlightText('tôm')} và {highlightText('thịt ba chỉ')} . Như đã đề cập ở trên, phần quan trọng nhất để làm nên món bún này chính là chả tôm nên yếu tố tiên quyết của một tô bún suông ngon chính là phải có phần chả tôm đạt chất lượng. Để làm ra được những sợi chả tôm ngon cần chọn những con tôm tươi, mập mạp. Tôm cùng với tỏi, hành khô băm nhuyễn sẽ cho ra thành phẩm hỗn hợp sánh mịn. Sau khi nêm gia vị với hạt tiêu, muối, {highlightText('bột năng')} và {highlightText('dầu điều')} để tạo thêm sắc vàng bắt mắt, người làm phải tiếp tục quết hỗn hợp nhằm tạo được độ dai của chả. Cuối cùng, chả tôm sẽ được nặn thành từng sợi thuôn dài, có thể bỏ thẳng vào nồi nước dùng đang sôi hoặc chiên qua trước với dầu ăn. Nước lèo của bún suông cũng có điểm khác biệt với các loại bún phở khác. Không chỉ được ninh bởi xương mà phần nước của bún suông còn có thêm vị của {highlightText('tương hạt')} và chút chua chua của {highlightText('me')}, tạo nên sắc nâu đặc trưng khác với nước dùng thanh trong bình thường.
                </p>
                <p>
                    Bún suông là một món ăn ngon và bổ dưỡng. Món ăn này là một dấu ấn đậm nét của nền ẩm thực Trà Vinh đồng thời cũng mang đậm hương vị của ẩm thực miền Tây Nam Bộ.
                </p>
            </FoodContent>    


            <FoodContent title="Cách Làm Bún Suông">
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
                                        <span>Bước 1: Sơ chế nguyên liệu </span>
                                        <p>1kg sườn đem rửa sạch với giấm muối. Đem hành tây đi nướng 6 phút. Đem 500g tôm đi rửa sạch với nước đá và muối. Dùng khăn sạch thấm cho tôm khô. Cắt nhỏ hành ngò. Đem hành đi phi thơm.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Làm suông tôm</span>
                                        <p>Cho tôm vào máy xay sau đó thêm vào 1 muỗng cà phê hạt nêm gà, 1 ít đường, 1 ít tiêu và xay đều. Cho tôm vào màng bọc rồi bỏ tủ đông đá. Cho tỏi, hành, ớt xay thật nhuyễn. Sau 30 phút lấy tôm ra giã dập tạo độ kết dính. Sau khi đập khoảng 2 phút cho vào 1 lòng trắng trứng, ½ muỗng canh tinh bột bắp, ½ muỗng cà phê bột nổi trộn đều và tiếp tục giã dập thêm 5 phút. Cho chả tôm vào bọc cắt đầu rồi nặn thành từng cọng suông vừa ăn vào nồi nước sôi.</p>
                                    </div>

                                    <div>
                                        <span>Bước 3: Nấu nước dùng</span>
                                        <p>Bắc 3 lít nước sau đó bỏ sườn vào. Cho vào nồi thêm 1 muỗng canh muối, 1 muỗng canh đường, củ hành sau khi nướng. Vớt bọt đều để giúp nước dùng trong hơn không bị đục. Sau khi vớt hết bọt châm thêm vào 1 lít nước lạnh và tiếp tục vớt sạch bọt. Cho thêm vào nồi củ cải trắng, 30g tôm khô. Để nước sôi khoảng 10 phút ta tắt lửa đậy nắp và để nồi qua đêm để nước thanh và ngọt hơn. Qua một đêm ta sẽ vớt phần củ cải trắng và hành tây ra. Thêm vào nồi 25g đường phèn, 1 muỗng cà phê muối, 1,5 muỗng cà phê hạt nêm, ½ muỗng cà phê bột ngọt, tiếp tục vớt sạch bọt. Cho vào nồi thêm 1 ít tiêu xay.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/ht0FcSAFXtA?list=PLO4xYQBA1oxWOFFUkwDngz78iTEFjkoIg"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: Vành Khuyên Lê</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">Cách Làm Biến Tấu:</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.jpg" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                    Sau này món bún suông không rập khuôn làm theo một cách truyền thống nữa mà đã có một số nơi biến tấu món ăn trở nên hấp dẫn với nhiều thành phần hơn như có vài chỗ có {highlightText('sườn non')}, {highlightText('mực ống')}, {highlightText('tôm tít')} ,...hay là có nơi thì làm cọng suông theo dạng dài như cọng bún màu trong hơn so với vài nơi thì làm suông theo kiểu mập mạp dày dặn với màu sắc đậm hơn. Nước dùng thì tùy nơi có cách ninh xương khác nhau nên độ ngọt của nước dùng có đôi phần khác biệt nhưng không đáng kể. Người ta hay nói tinh hoa của món ăn sẽ nằm ở phần nước chấm vì vậy cách pha nước chấm tạo nên độ đặc trưng thơm ngon cũng là một cách để giữ chân khách hàng. Ta có thể ăn bún suông với nước mắm ớt cắt lát vài nơi còn có thêm tỏi, hay tương đen để chấm thịt, tôm, tương đen có thể bỏ thêm đậu phộng để tạo thêm phần thơm ngon cho nước chấm. Với nhiều cách làm khác nhau nhưng nhìn chung hương vị của bún suông không thay đổi chỉ là khác về thành phần tạo nên nó và tùy “gu” ẩm thực của mỗi người khác nhau mà chọn cách làm bún khác nhau.
                                </p>                
                            </div>
                </div>
            </FoodContent>


            <FoodContent title="Cách Pha Nước Chấm">
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">Nước mắm: </h4>
                        <div className="grid grid-cols-2 gap-2">
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%201.webp" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%202.jpg" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%203.jpg" className="w-full h-full object-cover"/>
                        <img src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%204.jpg" className="w-full h-full object-cover"/>

                        </div>

                        <p>
                            Nước mắm nguyên chất. Thường sẽ có dĩa chanh ớt và ta sẽ có thể cho chanh ớt vào tùy khẩu vị mỗi người.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <h4 className="font-semibold">Tương: </h4>
                        <div>
                            <p>
                                Phi thơm phần hành, tỏi, ớt đã xay nhuyễn rồi cho vào phần chả tôm và trộn thật đều tay. Cho vào máy xay 2 muỗng canh tương hột rồi xay đều. Cho tương hột sau khi xay vào cùng với hành phi thơm sau đó bỏ thêm vào 1,5 muỗng canh đường, ⅓ muỗng cà phê bột ngọt.
                            </p>
                        </div>
                        <div>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/xJU03f2h67g?list=PLO4xYQBA1oxVV5IWiuEnXVAAWxb0kVdWI"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                            
                            <small className="italic block text-center">Nguồn: trích từ kênh youtube: Vành Khuyên Lê</small>
                        </div>
                    </div>
            </FoodContent>


            <FoodContent title="Thưởng Thức Thành Phẩm">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%BAn%20su%C3%B4ng%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Bún đem {highlightText('trụng sơ')} với nước nóng và cho vào tô cùng tôm, giò heo, thịt ba chỉ và suông. Tiếp đó chang nước vào tô bún và có thể kèm thêm nước mắm ớt cắt lát hoặc tương đen để chấm thịt, tôm… Các loại rau sống ngon thường ăn kèm với bún suông là: {highlightText('rau muống chẻ')}, {highlightText('bắp chuối xắt')}, {highlightText('xà lách xoăn')}, {highlightText('giá đỗ')} và {highlightText('húng thơm')} …
                    </p>

                    <p>
                        Nước lèo của bún suông có vị ngọt thanh của tôm, thịt, củ cải trắng, vị chua thanh của chanh hoặc me, vị đậm đà của tương hạt, nước mắm, muối, hạt nêm. Suông bún có vị dai giòn, ngọt thơm của tôm. Tất cả hòa huyện tạo nên một sự thơm ngon gây ấn tượng.
                    </p>

                </div>
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

export default BUNSUONGMAINTV