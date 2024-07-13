import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'cá lóc',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20l%C3%B3c.jpg'
    },
    {
        text: 'cá sặc',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20s%E1%BA%B7c.jpg'
    },
    {
        text: 'cá rô phi',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20r%C3%B4%20phi.webp'
    },
    {
        text: 'cá linh',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20linh.jpg'
    },
    {
        text: 'dân dã',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20b%C3%B2%20h%C3%B3c%20b%C3%ACnh%20d%E1%BB%8B.jpg'
    },
    {
        text: 'mâm cỗ',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20b%C3%B2%20h%C3%B3c%20m%C3%A2m%20c%E1%BB%97.jpg',
    },
    {
        text: 'nước chấm',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20b%C3%B2%20h%C3%B3c%20n%C6%B0%E1%BB%9Bc%20ch%E1%BA%A5m.jpg'
    },
    {
        text: 'bún num bò chóc',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20num%20b%C3%B2%20ch%C3%B3c.jpg'
    }, 
    {
        text: 'lẩu mắm',
        image: 'https://buhkhkt.github.io/CHINH/l%E1%BA%A9u%20m%E1%BA%AFm.jpg'
    },
    {
        text: 'mắm kho thịt ba chỉ',
        image: 'https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20kho%20th%E1%BB%8Bt.jpg'
    },
    {
        text: 'Bạc Liêu',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20b%E1%BA%A1c%20li%C3%AAu.jpg'
    },
    {
        text: 'Sóc Trăng',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20n%C6%B0%E1%BB%9Bc%20l%C3%A8o%20s%C3%B3c%20tr%C4%83ng.jpg',
    },
]

const nguyenlieu = [
    {
        text: 'Cá sặc ',
        value: 'Cá lóc, cá phi, cá linh,...',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20s%E1%BA%B7c++.jpg'
    },
    {
        text: 'Cơm nguội',
        value: 'Lượng vừa đủ',
        image: 'https://buhkhkt.github.io/CHINH/c%C6%A1m%20ngu%E1%BB%99i.jpg'
    },
    {
        text: 'Thính gạo',
        value: 'Lượng vừa đủ',
        image: 'https://buhkhkt.github.io/CHINH/th%C3%ADnh%20g%E1%BA%A1o.jpg'
    },
    {
        text: 'Gia vị',
        value: 'Đường, muối,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },
]


const thuongthucthanhpham = [
    {
        text: 'ngải bún',
        image: 'https://buhkhkt.github.io/CHINH/Ng%C3%A3i%20B%C3%BAn.jpg'
    },
    {
        text: 'sả',
        image: 'https://buhkhkt.github.io/CHINH/s%E1%BA%A3%20%C4%91%E1%BA%ADp%20d%E1%BA%ADp.jpg'
    },
    
]

const MAMBOHOCMAINTV = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">MẮM BÒ HÓC</h1>
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
                    src="https://www.youtube.com/embed/17y-0vontvk?list=PLO4xYQBA1oxVQmeSFBdRlBfD4Y37TpQgc"
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
                    Trà Vinh, một tỉnh thuộc đồng bằng sông Cửu Long, được bao bọc bởi hai nhánh sông Tiền và sông Hậu nên có nguồn nước ngọt thuận lợi cho việc đánh bắt và nuôi trồng thủy hải sản. Trong đó, tôm và cá là những sản vật được thiên nhiên ban tặng cho vùng đất này. Nhờ nguồn nguyên liệu dồi dào mà các sản phẩm từ cá cũng rất phát triển, nổi bật là mắm. Làm mắm trở thành nghề phổ biến của người dân nơi đây. Trong số những loại mắm cá ở Trà Vinh, độc đáo nhất vẫn là mắm bò hóc. Mắm bò hóc (prahok hay pro hoc) là một món ăn gắn liền với người Khmer ở Campuchia cũng như người Khmer ở Nam Bộ từ bao đời nay. Mắm bò hóc được chế biến khá công phu từ các loại cá nước ngọt vùng sông nước như {highlightText('cá lóc')}, {highlightText('cá sặc')}, {highlightText('cá rô phi')}, {highlightText('cá linh')} … Mắm bò hóc, tuy là món ăn dân dã, bình dị nhưng đã “đốn tim” không ít du khách ngay lần đầu tiên thưởng thức.
                </p>
                <p>
                    Có cơ hội đi du lịch Trà Vinh, du khách nên ghé thăm nhà dân để tìm hiểu về cách làm mắm bò hóc. Những người có kinh nghiệm làm mắm gia truyền ở đây cho rằng, cách làm mắm bò hóc không quá khó nhưng phải trải qua nhiều công đoạn. Mắm bò hóc đã trở thành món ăn quen thuộc trong đời sống hàng ngày của người dân Khmer từ bữa cơm {highlightText('dân dã')} đến {highlightText('mâm cỗ')} ngày lễ, tết. Không dừng lại ở vị trí là món ăn đặc trưng của riêng người Khmer mà mắm bò hóc còn trở thành đặc sản Trà Vinh. Mắm bò hóc trộn với chanh, đường, tỏi, ớt làm {highlightText('nước chấm')} cho các món rau luộc, bánh cuốn… đều rất ngon.
                </p>
                <p>
                    Ngoài sử dụng ăn sống, mắm bò hóc còn là một nguyên liệu quan trọng làm nên hương vị độc đáo cho các món ăn như bún nước lèo, {highlightText('bún num bò chóc')}, {highlightText('lẩu mắm')}, {highlightText('mắm kho thịt ba chỉ')} … Món ăn đậm đà hương vị mắm bò hóc nhất phải kể đến là bún nước lèo. Nhắc đến bún nước lèo ở miền Tây, có rất nhiều thương hiệu nổi tiếng như bún nước lèo Trà Vinh, bún nước lèo {highlightText('Bạc Liêu')}, bún nước lèo {highlightText('Sóc Trăng')} … Tuy nhiên đặc trưng của bún nước lèo Trà Vinh là việc sử dụng mắm bò hóc để nấu nước dùng. Mỗi địa phương lại có những cách biến tấu khác nhau để phù hợp khẩu vị của từng người. Nhiều nơi còn thay thế mắm bò hóc bằng mắm {highlightText('cá linh')}, {highlightText('cá sặc')}… khi nấu bún. Riêng với bún nước lèo của người Khmer ở Trà Vinh thì lúc nào cũng sử dụng món mắm bò hóc đậm đà này.
                </p>
            </FoodContent>    


            <FoodContent title="Cách Làm Mắm Bò Hóc">
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
                                        <p>Ta đem đánh vảy, cắt bỏ đầu cá và đem đi rửa sạch.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Phơi khô cá</span>
                                        <p>Phần cá rửa xong ta để ráo nước và đem đi phơi hãy lưu ý khi phơi nhớ phủ miếng vải ở trên màng trên tránh để bị ruồi bu và phơi trong khoảng 18-24 tiếng đến khi nào cá bốc mùi.</p>
                                    </div>

                                    <div>
                                        <span>Bước 3: Trộn mắm</span>
                                        <p>Sau khi lấy cá vào ta đổ cá vào thao và tiến hành trộn cùng với thính gạo, muối, đường và cơm nguội và trộn đều. Cuối cùng ta cho mắm vào trong hộp tuy nhiên cần phải để đó khoảng 3 tháng sau ta mới có thể sử dụng.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/1xRIhM5seaI?list=PLO4xYQBA1oxVQmeSFBdRlBfD4Y37TpQgc"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: Mắm bò hóc Vlog</small>
                                    </div>
                                </div>
                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Thưởng Thức Thành Phẩm">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.webp" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/m%E1%BA%AFm%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Mắm bò hóc còn là gia vị quan trọng làm nên hương vị đậm đà cho các món ăn như: bún num bò chóc, bún nước lèo, bún mắm… Khi ngửi mùi thơm của nước lèo thì sẽ không thể cưỡng lại được bởi mùi vị đậm đà của mắm, cái hương thơm của {highlightText('ngải bún')}, {highlightText('sả')}, … Các nguyên liệu đó hòa cùng với mắm bò hóc làm nên nước lèo có vị ngọt đậm đà, vị chua thanh thanh rất đặc trưng. Rau củ chấm với mắm bò hóc thì quả là tuyệt vời và có lẽ sẽ ăn hết cơm vì vị đậm đà của mắm hòa quyện và hương thơm thoang thoảng.
                    </p>

                    <p>
                        Món này sẽ rất thích hợp khi ăn vào những ngày thời tiết se lạnh đấy. Hay người ta còn có thể ăn mắm bò hóc để chấm khi cuộn bánh tráng với bún, rau, thịt để đậm đà hương vị cho món ăn.
                    </p>

                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                <p>Dao động từ 90.000đ-120.000đ/500g.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default MAMBOHOCMAINTV