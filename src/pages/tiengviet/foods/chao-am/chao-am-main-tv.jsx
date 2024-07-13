/* eslint-disable no-unused-vars */
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
        text: 'cô dâu',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%B4%20d%C3%A2u.jpg'
    },
    {
        text: 'chợ',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BB%A3%20x%C6%B0a.jpg'
    },
    {
        text: 'cá lóc nuôi',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c%20nu%C3%B4i.jpg'
    },
    
]

const nguyenlieu = [
    {
        text: 'Cá lóc',
        value: '1 con',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c.jpg'
    },
    {
        text: 'Gạo dẻo',
        value: '200g',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20d%E1%BA%BBo.jpg'
    },
    {
        text: 'Mực tươi',
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20t%C6%B0%C6%A1i.jpg'
    },
    {
        text: 'Tôm khô',
        value: '50g',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20kh%C3%B4.jpg'
    },
    {
        text: 'Nguyên liệu phụ',
        value: 'Giá, hành, ngò, hành tím, đậu phộng, chanh, gừng, ớt.',
        image: 'https://buhkhkt.github.io/CHINH/NLP.jpg'
    },
    {
        text: 'Gia vị',
        value: 'Muối, đường, dầu ăn, nước chấm,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },
]

const cachlambientau = [
    { 
        text: 'cá basa', 
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20ba%20sa.jpg'
    },
    { text: 'cá sấu', image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20s%E1%BA%A5u.webp' },
    { 
        text: 'cá lăng', 
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C4%83ng.jpg' 
    },
    { text: 'Hạt lựu', image: 'https://buhkhkt.github.io/CHINH/h%E1%BA%A1t%20l%E1%BB%B1u.webp' },
    { text: 'gạo dẻo', image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20d%E1%BA%BBo.jpg' },
    { text: 'gạo lứt', image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20l%E1%BB%A9c.jpg' },
    { text: 'tôm', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA.jpg' },
    { text: 'mực', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20t%C6%B0%C6%A1i.jpg' },
    { text: 'sò điệp', image: 'https://buhkhkt.github.io/CHINH/s%C3%B2%20%C4%91i%E1%BB%87p.jpg' },
    { 
        text: 'nồi cơm điện', 
        image: 'https://buhkhkt.github.io/CHINH/ch%C3%A1o%20n%E1%BB%93i%20c%C6%A1m%20%C4%91i%E1%BB%87n.jpg' 
    },
]

const thuongthucthanhpham = [
    {
        text: 'rau đắng',
        image: 'https://buhkhkt.github.io/CHINH/rau%20%C4%91%E1%BA%AFng.jpg'
    },
    {
        text: 'giá sống',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%A1%20%C4%91%E1%BB%97.jpg'
    },
    {
        text: 'bắp chuối',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
]

const CHAOAMMAINTV = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHÁO ÁM</h1>
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
                    src="https://www.youtube.com/embed/-AAkKHxQYaw?list=PLO4xYQBA1oxU8Wh7CFDOoIq3broDVrOX3"
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
                        Tô cháo ám trong hình là một món ăn truyền thống Trà Vinh, được làm từ gạo và nước dùng. Cháo sánh mịn, tỏa ra mùi thơm hấp dẫn. Trên bề mặt cháo là một vài lát thịt cá lóc vừa ăn cùng với rau thơm băm. Tô cháo ám là một món ăn ngon và bổ dưỡng. Cháo có vị ngọt thanh, bùi béo của gạo, thịt cá lóc và rau thơm. Đây là món ăn thích hợp cho mọi người, đặc biệt là những người mới ốm dậy hoặc người già.                                       
                    </p>

                    <div>
                    <iframe className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600" title="cháo ám" frameborder="0" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/02b187e98fc24d03ab5fce9f094d32b9/embed"> </iframe>
                        
                    </div>
                </div>

            </FoodContent>
 
            <FoodContent 
                title="Khái Quát Chung"
                           
            >

                <p>
                    Cháo ám - một biểu tượng ẩm thực của Trà Vinh. Từ khi bước chân vào vùng đất này, bạn sẽ không thể không thử qua một bát cháo ám, món ăn độc đáo mà đến cả tên gọi cũng đầy thú vị.
                </p>
                <p>
                    Cháo ám không phải món ăn xa lạ, nhưng nó có một nguồn gốc và câu chuyện riêng biệt ẩn sau tên gọi này. Tên "cháo ám" chưa từng ngừng làm tò mò với những người lần đầu đặt chân tới đây. Ban đầu, nó là món cháo cá lóc, nhưng câu chuyện liên quan đã làm nên cái tên này. Trong truyền thống vùng này, trước khi trở thành {highlightText('cô dâu')}, mỗi phụ nữ sẽ phải đối mặt với một thách thức vô cùng độc đáo đó là phải nấu một nồi cháo cá lóc thơm ngon. Điều này, mặc dù đơn giản về nguyên liệu, nhưng không phải ai cũng vượt qua được thử thách này từ mẹ chồng. Do đó, nồi cháo cá lóc đã trở thành một nỗi ám ảnh cho các cô dâu trẻ, từ đó, nó được gọi là "cháo ám".  
                </p>
                <p>
                    Dù có xuất xứ từ xa xưa, món ngon này đã trải qua một hành trình dài, xuất hiện ở chợ Châu Thành vào thập niên 30. Lúc ấy, cháo ám là món ăn sáng phổ biến được bán rộng rãi tại {highlightText('chợ')} và các con đường lớn trong huyện. Mặc dù cách chế biến không phức tạp nhưng để tạo nên một bát cháo ngon, người nấu phải có kinh nghiệm trong việc lựa chọn gạo, cá và sử dụng gia vị một cách hợp lý để tạo nên hương vị đặc trưng chỉ có ở cháo ám. Điều quan trọng nhất là chọn cá lóc - nguyên liệu chính. Muốn có món cháo cá lóc ngon, cá lóc phải tươi và chắc thịt, người dân Trà Vinh thường ưa dùng {renderTooltipText('"cá lóc đồng"', 'ca-loc-dong')} để mang hương vị tự nhiên đặc trưng. Tuy nhiên, do nguồn cá ngày càng khan hiếm, người ta đã chọn {highlightText('cá lóc nuôi')} để thay thế. Ngoài cá, loại gạo thơm ngon được sử dụng cũng là một yếu tố không thể thiếu. Gạo nấu cháo thường là loại gạo nguyên, không cần rang như khi nấu cháo lòng, để giữ vị ngon tự nhiên và hương thơm đặc trưng. Khi cháo chín, nó sẽ có màu trắng tự nhiên và hấp dẫn, làm bạn nhớ mãi hương vị của đất Trà Vinh.
                </p>
                
            </FoodContent>    


            <FoodContent title="Cách Làm Cháo Ám">
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
                                        <span>Bước 1: Sơ chế cá</span>
                                        <p>Rửa sạch cá và lấy hết các phần bên trong cá, vệ sinh ruột cá. Cắt bỏ phần miệng và đuôi cá.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Luộc cá</span>
                                        <p>Bắc nồi nước. Trong thời gian chờ nước sôi ta cắt gừng thành từng sợi và mực thành từng đoạn vừa ăn. Khi nước sôi cho cá vào. Khi cá đã chín chúng ta vớt cá ra để nguội. Lọc lấy phần thịt cá khi cá đã nguội. Tiếp theo ta phi hành tím băm đến khi hành vàng đều ta sẽ bỏ cá vào. Đảo nhẹ, xào cho phần cá săn lại. Thêm một ít nước mắm và tiêu vào để thịt cá thêm đậm đà hơn.</p>
                                    </div>

                                    <div>
                                        <span>Bước 3: Nấu cháo</span>
                                        <p>Bắc nồi cháo và để khoảng 30p khi cháo đã dần sệt lại thì ta cho thêm vào nồi mực và tôm khô để tạo độ ngọt cho phần nước cháo. Sau khoảng 15-30p, cháo đã chín thì ta chuẩn bị sẵn các loại rau ăn kèm và cho cháo ra tô thưởng thức cùng với sớ thịt cá tươi ngon vừa chế biến xong.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/2DKLuCbmvc8?list=PLO4xYQBA1oxU8Wh7CFDOoIq3broDVrOX3"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                    

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: Trà Vinh</small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl font-semibold">Cách Làm Biến Tấu:</h4>   

                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20bi%E1%BA%BFn%20t%E1%BA%A5u%201.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20bi%E1%BA%BFn%20t%E1%BA%A5u%202.jpg" className="w-full h-full"/>                            
                                    </div>
                                </div> 

                                <p>                                
                                    Cháo ám, một biểu tượng ẩm thực Trà Vinh, không bao giờ ngừng mang trong mình sự đa dạng và sáng tạo. Những biến tấu táo bạo, những điểm nổi bật đặc trưng cho từng nguyên liệu và từng cách nấu đã biến cháo ám thành một bữa tiệc giao thoa giữa truyền thống và sáng tạo. Tại bản đồ ẩm thực này, loại cá lóc, dẫn đầu bởi hương vị đặc trưng của nó, có thể thay thế bởi các loại cá như {highlightText('cá basa')}, {highlightText('cá sấu')}, hoặc {highlightText('cá lăng')} để đem đến một bữa tiệc hương vị mới lạ, màu sắc đa dạng. Nước chấm, tạo nên sự hài hòa của món ăn, cũng có sự khác biệt tùy cách dùng của mỗi người. Cháo ám không còn giới hạn bởi những nguyên liệu chính. {highlightText('Hạt lựu')}, với sự giòn ngon độc đáo, đang tạo ra một sự sáng tạo thú vị trong cháo. Loại {highlightText('gạo dẻo')} hoặc {highlightText('gạo lứt')} có thể thay đổi màu sắc và thành phần dinh dưỡng của cháo ám, mà không bao giờ làm giảm đi giá trị của nó. Còn số lượng nguyên liệu, có những người đã nâng tầm món cháo ám bằng cách thêm hải sản, như {highlightText('tôm')}, {highlightText('mực')}, hoặc {highlightText('sò điệp')}, tạo ra một trải nghiệm ẩm thực tuyệt vời. Cuối cùng, có người dám bước ra khỏi nhà bếp truyền thống để nấu cháo ám bằng {highlightText('nồi cơm điện')}. Đây là sự kết hợp giữa tiện lợi hiện đại và hương vị truyền thống, tạo nên một tô cháo ám độc đáo và phù hợp với thời đại. Cháo ám không chỉ là một món ăn, nó là một hành trình sáng tạo, nơi mọi người có thể tạo ra hương vị cá nhân và biểu tượng cho vùng đất Trà Vinh.
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

                    
            </FoodContent>


            <FoodContent title="Thưởng Thức Thành Phẩm">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/ch%C3%A1o%20%C3%A1m%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    

                    <p>
                        Với món ngon Trà Vinh này, có rất nhiều cách để thực khác thưởng thức. Bạn có thể ăn cháo bình thường như cháo lòng, cháo hải sản… Hoặc bạn cũng có thể học cách ăn theo phong cách người dân địa phương để cảm nhận hương vị đặc trưng của món ăn này. Thông thường, người dân Trà Vinh sẽ trộn đều cháo và cá lóc rồi thưởng thức cho nhanh, cho gọn. Để trung hòa hương vị món ăn, người dân nơi đây sẽ ăn món cháo này cùng với {highlightText('rau đắng')}, {highlightText('giá sống')}, {highlightText('bắp chuối')} và các loại rau mùi như hành, ngò… Một điều quan trọng làm nên vị ngon đặc biệt của món cháo này, chính là nước chấm. Với món cháo ám, người ta chuộng sử dụng nước chấm pha từ nước mắm và chanh, ớt,… đánh thật đều tay, chấm cùng cá lóc. Vị ngọt của cá chấm cùng vị mặn mặn cay cay của nước chấm, tạo nên nét ngon quyến rũ, mà nói theo ngôn ngữ người miền Tây là ngon {renderTooltipText('"hết sảy"', 'het-say')}.
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                <p>Dao động từ 20.000đ-45.000đ.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            

            
            

        <Tooltip
            anchorSelect=".ca-loc-dong"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Cá lóc đồng là một loại cá nước ngọt thường được tìm thấy ở các vùng nông thôn và sông ngòi.
                </div>
            }
        />
        <Tooltip
            anchorSelect=".het-say"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Như hết ý.
                </div>
            }
        />

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default CHAOAMMAINTV