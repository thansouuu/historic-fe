import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'hạt nếp non',
        image: 'https://buhkhkt.github.io/CHINH/h%E1%BA%A1t%20n%E1%BA%BFp%20non.jpg'
    },
    {
        text: 'hộp cốm dẹp',
        image: 'https://buhkhkt.github.io/CHINH/h%E1%BB%99p%20c%E1%BB%91m%20d%E1%BA%B9p.jpg'
    },
    {
        text: 'cúng',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%BAng%20tr%C4%83ng.webp'
    },
    {
        text: 'sản xuất',
        image: 'https://buhkhkt.github.io/CHINH/ng%C6%B0%E1%BB%9Di%20l%C3%A0m%20c%E1%BB%91m%20d%E1%BA%B9p.jpg'
    },
    
    
]

const nguyenlieu1 = [
    {
        text: 'Gạo nếp',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20n%E1%BA%BFp%202.jpg'
    },
    
]

const nguyenlieu2 = [
    {
        text: 'Cốm dẹp',
        value: '200g',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p.webp'
    },
    {
        text: 'Dừa nạo',
        value: 'lượng đủ dùng',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20n%E1%BA%A1o.jpg'
    },
    {
        text: 'Đường cát',
        value: '100g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg'
    },
]

const nguyenlieu3 = [
    {
        text: 'Cốm dẹp',
        value: '1kg',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p.webp'
    },
    {
        text: 'Đậu xanh',
        value: '150g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20xanh.jpg'
    },
    {
        text: 'Nước cốt dừa',
        value: '800ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'Đậu phộng rang',
        value: '100g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'Lá chuối',
        value: '4-5 lá',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'Gia vị',
        value: 'Đường, muối, ống vani,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },

    
]


const nguyenlieu4 = [
    {
        text: 'Cốm dẹp',
        value: '1kg',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p.webp'
    },
    {
        text: 'Dừa nạo',
        value: '400g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20xanh.jpg'
    },
    {
        text: 'Nước cốt dừa',
        value: '800ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'Đậu phộng rang',
        value: '100g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp'
    },
    {
        text: 'Lá chuối',
        value: '4-5 lá',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'Bột năng',
        value: 'lượng đủ dùng',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C4%83ng.jpg'
    },
    {
        text: 'Gia vị',
        value: 'Đường, muối, ống vani,...',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },

    
]


const baoquan = [
    {
        text: 'lá dong riềng',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20dong%20ri%E1%BB%81ng.jpg'
    },
    {
        text: 'lá sen',
        image: 'https://buhkhkt.github.io/CHINH/l%C3%A1%20sen.jpg'
    },
    
]



const COMDEPMAINTV = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu1, ...nguyenlieu2, ...nguyenlieu3, ...nguyenlieu4, ...baoquan];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CỐM DẸP</h1>
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
                    src="https://www.youtube.com/embed/s29NRU9BXzs?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
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
                    Trà Vinh, một địa điểm đa dạng về dân tộc và văn hóa, không chỉ là có người Kinh mà còn là nơi cư ngụ của người Hoa và người Khmer. Nhờ sự đa dạng về dân tộc, ẩm thực tại đây đã trở nên vô cùng hấp dẫn và độc đáo. Trong những đặc sản nổi tiếng của Trà Vinh, cốm dẹp nổi bật lên như một biểu tượng của sự đa dạng và hòa quyện giữa các nền văn hóa.  
                </p>
                <p>
                    Cốm dẹp là món ẩm thực đặc biệt, thuần túy của người Khmer, hay còn được gọi là "Om Bóc" trong tiếng Khmer. Ai đến Trà Vinh mà không trải nghiệm hương vị tinh tế của cốm dẹp hoặc không thử bánh tét cốm dẹp thì quả là một sự thiếu sót. Cốm dẹp được chế biến từ những {highlightText('hạt nếp non')}, thu hoạch sớm và sau đó trải qua các bước ngâm, rang, giã để tạo ra hương vị độc đáo và khó quên. Không ít người khi ghé thăm Trà Vinh cũng không quên mua những {highlightText('hộp cốm dẹp')} đặc sản để dành tặng người thân và bạn bè của họ.
                </p>
                <p>
                    Nhưng cốm dẹp không chỉ đơn giản là một món ăn ngon, nó còn mang trong mình giá trị tâm linh và truyền thống văn hóa của người Khmer. Trong lễ hội Ok Om Bok, cốm dẹp được {highlightText('cúng')} tạ ơn thần mặt trăng. Lễ hội này diễn ra vào Rằm tháng 10 hàng năm để tạ ơn thần mặt trăng đã mang lại mưa thuận gió hòa, giúp mùa màng bội thu và cầu cho năm tới có thời tiết thuận lợi. Cốm dẹp là một trong những phẩm vật không thể thiếu trong lễ hội này, và nó thể hiện sự kính trọng và tôn vinh đối với thiên nhiên và nông nghiệp.
                </p>
                <p>
                    Từ một món ẩm thực mang ý nghĩa tâm linh đậm nét văn hóa của người Khmer Nam bộ, cốm dẹp đã trở thành một đặc sản nổi tiếng của Trà Vinh, thu hút mọi du khách khi đặt chân đến đây. Sự tỉ mỉ, cần cù và chịu khó của người dân Khmer trong quá trình {highlightText('sản xuất')} cốm dẹp thể hiện tinh thần làm việc và sự kiên nhẫn của họ. Ngày nay, cốm dẹp đã trở thành một biểu tượng của Trà Vinh, được nhiều người mua về làm quà hoặc để thưởng thức. Món ăn này đã trở thành một phần quan trọng trong văn hóa và kinh tế của Trà Vinh, được biết đến và yêu thích bởi người dân trong và ngoài tỉnh, thể hiện sự đa dạng và độc đáo của ẩm thực Việt Nam.
                </p>
            </FoodContent>    


            <FoodContent title="Cách Làm Cốm Dẹp">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Cách làm truyền thống:</h4>

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
                                        <span>Bước 1:Rang nếp</span>
                                        <p>Cho nếp vào chảo rang với lửa nhỏ, đảo đều tay cho đến khi nếp chín vàng, hơi cháy xém vỏ ngoài, có mùi thơm.</p>
                                    </div>
                                    <div>
                                        <span>Bước 2: Tách vỏ và ép cốm</span>
                                        <p>Cho phần nếp sau khi rang vào máy chà để tách vỏ nếp. Tiếp đến ta cho phần nếp qua máy ép. Vậy là ta đã hoàn thành được phần cốm dẹp thơm ngon mùi nếp mới.</p>
                                    </div>


                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/u8A--dlJfD0?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: THVL Tổng Hợp</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">Cốm dẹp trộn dừa:</h4>
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
                                       
                                        <p>Ta cho 200g cốm dẹp cùng với dừa nạo và đường vào tô. Sau đó ta trộn cho hỗn hợp đều lên. Trộn xong ta để khoảng 1 tiếng để không bị nhão phần cốm. Vậy là ta đã có phần cốm dẹp trộn dừa hấp dẫn rồi.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/7ASBMs8Pbdc?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: An Nhiên Vlogs</small>
                                    </div>
                                </div>


                                <h4 className="text-xl font-semibold">Bánh tét cốm dẹp nhân đậu:</h4>
                                <div>
                                    <span className="underline">Nguyên liệu: </span>

                                    <ul>
                                        {nguyenlieu3.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">Các bước thực hiện:</span>

                                    <div>
                                        <span>Bước 1: Sơ chế nguyên liệu</span>
                                        <p>Ta đem 150g đậu xanh sơ chế vo rửa cho sạch. Sàng lọc phần cốm dẹp xem hạt nào bị hư, đen ta bỏ đi.</p>
                                    </div>
                                    <div>
                                        <span>Bước 2: Làm nhân</span>
                                        <p>Ta cho đậu xanh đã sơ chế vào nồi để nấu, ta đổ nước vào hơi ngập nồi. Đến khi phần đậu sôi lên ta hớt bọt để phần nhân được trong hơn. Ta tiếp tục nấu đến khi phần nước khô lại và thấm vào hết phần đậu. Sau khi nấu xong ta đánh đều phần đậu cho mịn ra. Tiếp đến ta cho đậu xanh vào chảo cùng với 3 muỗng canh đường, một ít muối ta trộn đều lên cho hỗn hợp thấm đều. Tiếp theo ta cho vào 3 muỗng canh nước cốt dừa sên phần nhân đến khi khô lại.</p>
                                    </div>
                                    <div>
                                        <span>Bước 3: Vo nhân</span>
                                        <p>Ta đem phần nhân đi vo thành từng cục tròn đều.</p>
                                    </div>
                                    <div>
                                        <span>Bước 4: Làm phần viền bánh</span>
                                        <p>Ta cho nước cốt dừa vào nồi cùng với một ít muối, 2 muỗng canh đường. Ta nấu cho phần đường và nước cốt nóng lên và tan ra. Tiếp đến ta rưới đều nước cốt dừa vào cốm dẹp rồi ta trộn đều lên để phần cốm dẹp nở đều ra. Ta để một lát để nước cốt thấm vào thì ta sẽ nhồi đều phần cốm lên để cho nó dẻo hơn. Khi cốm đã dẻo và quyện thành khối là đã được rồi.</p>
                                    </div>
                                    <div>
                                        <span>Bước 5: Gói bánh</span>
                                        <p>Ta lấy một viên bánh ta làm dẹp ra rồi cho phần nhân vào để gói lại và vo tròn. Tiếp đến ta lăn cho phần bánh dài dài. Ta lấy lá chuối cuộn phần bánh lại rồi ta túm thành 4 góc rồi cố định bằng cọng thun. Tiếp đến ta lấy dây buộc bánh.</p>
                                    </div>

                                    <div>
                                        <span>Bước 6: Hấp bánh</span>
                                        <p>Ta chỉ cần hấp bánh trong 15 phút là đã có thể lấy bánh ra thưởng thức.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/qfjBdUsqSyA?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: ALO TRÀ VINH</small>
                                    </div>
                                </div>



                                <h4 className="text-xl font-semibold">Bánh tét cốm dẹp nhân dừa:</h4>
                                <div>
                                    <span className="underline">Nguyên liệu: </span>

                                    <ul>
                                        {nguyenlieu4.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}: {item.value}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">Các bước thực hiện:</span>

                                    <div>
                                        <span>Bước 1: Sơ chế nguyên liệu</span>
                                        <p>Sàng lọc phần cốm dẹp xem hạt nào bị hư, đen ta bỏ đi.</p>
                                    </div>
                                    <div>
                                        <span>Bước 2: Làm nhân</span>
                                        <p>Ta cho dừa vào chảo cùng với 1 chén đường và một ít muối. Tiếp theo ta trộn đều cho phần đường ngấm vào trong dừa. Ta đem phần hỗn hợp dừa đi sên cho nhân dừa khô lại. Khi phần nhân hơi khô rồi ta cho hỗn hợp bột năng pha cùng với nước vào để tạo đệ sánh quyện. Cùng với đó ta cho vào 1 ít đậu xanh, đậu phộng rang và 1 ống vani. Cuối cùng ta trộn đều để các nguyên liệu hòa quyện với nhau là ta đã hoàn tất phần nhân dừa.</p>
                                    </div>
                                    <div>
                                        <span>Bước 3: Vo nhân</span>
                                        <p>Ta đem phần nhân đi vo thành từng cục tròn đều.</p>
                                    </div>
                                    <div>
                                        <span>Bước 4: Làm phần viền bánh</span>
                                        <p>Ta cho nước cốt dừa vào nồi cùng với một ít muối, 2 muỗng canh đường. Ta nấu cho phần đường và nước cốt nóng lên và tan ra. Tiếp đến ta rưới đều nước cốt dừa vào cốm dẹp rồi ta trộn đều lên để phần cốm dẹp nở đều ra. Ta để một lát để nước cốt thấm vào thì ta sẽ nhồi đều phần cổm lên để cho nó dẻo hơn. Khi cốm đã dẻo và quyện thành khối là đã được rồi.</p>
                                    </div>
                                    <div>
                                        <span>Bước 5: Gói bánh</span>
                                        <p>Ta lấy một viên bánh ta làm dẹp ra rồi cho phần nhân vào để gói lại và vo tròn. Tiếp đến ta lăn cho phần bánh dài dài. Ta lấy lá chuối cuộn phần bánh lại rồi ta túm thành 4 góc rồi cố định bằng cọng thun. Tiếp đến ta lấy dây buộc bánh.</p>
                                    </div>

                                    <div>
                                        <span>Bước 6: Hấp bánh</span>
                                        <p>Ta chỉ cần hấp bánh trong 15 phút là đã có thể lấy bánh ra thưởng thức.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/jUDlQ4Zuud4?list=PLO4xYQBA1oxXfk9akdmDMZn-a-5U8OrHu"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: ALO TRÀ VINH</small>
                                    </div>
                                </div>

                            </div>

                            
                </div>
            </FoodContent>


            


            <FoodContent title="Thưởng Thức Thành Phẩm">

                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Khi bạn đặt chân đến Trà Vinh, không thể bỏ lỡ cơ hội thưởng thức một trong những đặc sản nổi tiếng của địa phương này - cốm dẹp. Hương vị độc đáo của cốm dẹp kết hợp với đường và dừa tạo nên một trải nghiệm ẩm thực đặc biệt. Thưởng thức cốm dẹp trộn dừa là một trải nghiệm tuyệt vời của hương vị truyền thống và hương thơm độc đáo. Khi bạn mở hộp cốm, mùi thơm ngào ngạt của cốm hòa quyện cùng hương vị ngọt ngào của nước cốt dừa làm bạn không thể cưỡng lại. Cốm dẹp, từng hạt nhỏ mềm mịn, tan trong miệng và tạo ra một kết hợp hoàn hảo với sự thơm ngon và hậu vị đặc trưng của dừa tươi.
                    </p>

                    <p>
                        Bánh tét là một món ăn truyền thống của Việt Nam, và tại Trà Vinh, bánh tét cốm dẹp là một biến thể độc đáo. Bánh được bọc trong lá chuối, có lớp cốm dẹp thơm ngon bên trong, khiến người thưởng thức được thỏa mãn vị giác.
                    </p>
                    <p>
                        Xôi cốm dẹp là một món ăn bình dân phổ biến tại Trà Vinh. Xôi được nấu từ cốm dẹp, dừa, đường, và một chút nước dừa, tạo nên một món ăn độc đáo với hương vị đậm đà và béo ngậy. Hay còn nhiều món ăn khác được làm từ cốm dẹp có mùi hương thơm ngon và độc đáo.
                    </p>

                    <p>
                        Thưởng thức cốm dẹp và các món ẩm thực từ nó không chỉ là việc trải nghiệm hương vị ngon miệng mà còn là cách để bạn khám phá và tôn vinh văn hóa, truyền thống và sự sáng tạo của người dân Trà Vinh. Đừng bỏ lỡ cơ hội tham gia vào hành trình ẩm thực độc đáo này khi bạn ghé thăm vùng đất này.
                    </p>                        
                </div>
            </FoodContent>


            <FoodContent title="Bảo Quản">

                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20b%E1%BA%A3o%20qu%E1%BA%A3n.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%E1%BB%91m%20d%E1%BA%B9p%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                   
                </div>

                <div>
                    <p>
                        Nhìn chung, cốm nên được bảo quản ở nơi khô ráo, thoáng mát và chia ra thành từng loại riêng. Không nên dự trữ quá nhiều cốm tươi ở nhiệt độ phòng vì sẽ nhanh bị hỏng. Cụ thể có những cách bảo quản cốm sau:
                    </p>
                    <div>
                        <p><b>Đối với cốm tươi dùng trong ngày:</b></p>
                        <p>
                            Để bảo quản cốm tươi cho cốm còn thơm ngon và dẻo dai thì cách tốt nhất bạn hãy gói cốm trong {highlightText('lá dong riềng')} hoặc trong {highlightText('lá sen')} mà khi mua người bán đã gói cho bạn, với cách làm này cốm sẽ không bị khô mà còn tăng thêm hương thơm của lá sen hòa quyện trong cốm.
                        </p>
                        <p>
                            Tuy nhiên, vì là cốm tươi nên tốt nhất bạn hãy sử dụng ngay trong ngày chứ không để qua đêm. Bạn nên sử dụng cốm ngay trong vòng 6 tiếng nếu để cốm ở nhiệt độ phòng vào mùa hè hoặc đầu mùa thu, vì nếu để lâu cốm sẽ bị hỏng rất nhanh do nhiệt độ cao.
                        </p>
                        <p>
                            Nếu nơi bạn để cốm ở nơi có sử dụng điều hòa dẫn tới cốm bị khô, thì bạn hãy rửa sạch tay, sau đó làm ẩm tay bằng nước lọc rồi trộn cốm thật đều lên và gói lại bằng lá sen như ban đầu là có thể sử dụng tiếp.
                        </p>
                    </div>
                    <div>
                        <p><b>Bảo quản cốm trong tủ lạnh:</b></p>
                        <p>
                            Nếu bạn muốn bảo quản cốm trong tủ lạnh để sử dụng trong thời gian lâu dài từ 6 tháng đến 1 năm thì hãy cho cốm tươi vào túi nilon hoặc hộp nhựa rồi để trong ngăn đá tủ lạnh.
                        </p>
                        <p>
                            Khi nào cần sử dụng cốm thì bạn chỉ cần lấy ra một lượng cần sử dụng, đem rải đều ra khay rồi hơ trước quạt để rã đông là có thể sử dụng được.
                        </p>
                    </div>                        
                                           
                </div>
                
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                <p>Dao động từ 25.000đ-35.000đ/500g.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            


            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default COMDEPMAINTV