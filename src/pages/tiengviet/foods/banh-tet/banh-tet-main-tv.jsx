import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';
import clsx from "clsx";

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'nếp trộn đậu phộng',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20t%C3%A2y%20ninh.jpg'
    },
    {
        text: 'bánh tét hạt điều',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20h%E1%BA%A1t%20%C4%91i%E1%BB%81u.jpg'
    },
    {
        text: 'bánh tét lá cẩm',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20l%C3%A1%20c%E1%BA%A9m.jpg'
    },
    {
        text: 'bánh tét cốm dẹp',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20c%E1%BB%91m%20d%E1%BA%B9p.jpg'
    },
    {
        text: 'dây lát',
        image: 'https://buhkhkt.github.io/CHINH/d%C3%A2y%20l%C3%A1t.jpg'
    },
]

const nguyenlieu = [
    {
        text: 'Gạo nếp',
        value: '2kg',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20n%E1%BA%BFp.jpg'
    },
    {
        text: 'Nước cốt dừa',
        value: '500ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20c%E1%BB%91t%20d%E1%BB%ABa.jpg'
    },
    {
        text: 'Nước lá dứa',
        value: '500ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20l%C3%A1%20d%E1%BB%A9a.webp'
    },
    {
        text: 'Thịt ba chỉ',
        value: '500g',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20ba%20ch%E1%BB%89.jpg'
    },
    {
        text: 'Trứng muối',
        value: 'vài quả',
        image: 'https://buhkhkt.github.io/CHINH/tr%E1%BB%A9ng%20mu%E1%BB%91i.jpg'
    },
    {
        text: 'Đậu xanh',
        value: '400g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20xanh.jpg'
    },
    {
        text: 'Chuối xiêm',
        value: '10 trái',
        image: 'https://buhkhkt.github.io/CHINH/chu%E1%BB%91i%20xi%C3%AAm.jpg'
    },
    {
        text: 'Nguyên liệu phụ',
        value: 'Hành tím, tỏi',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%A0nh%20t%C3%ADm%20t%E1%BB%8Fi.jpg'
    },
    {
        text: 'Gia vị',
        value: 'Muối, đường, gia vị ướp thịt, hạt nêm, bột ngọt, tiêu xay,...',
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
        text: 'thịt kho hột vịt',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20kho%20h%E1%BB%99t%20v%E1%BB%8Bt.jpg'
    },
    {
        text: 'củ kiệu',
        image: 'https://buhkhkt.github.io/CHINH/c%E1%BB%A7%20ki%E1%BB%87u.jpg'
    },
    {
        text: 'dưa muối',
        image: 'https://buhkhkt.github.io/CHINH/d%C6%B0a%20mu%E1%BB%91i.webp'
    },
    {
        text: 'chả lụa',
        image: 'https://buhkhkt.github.io/CHINH/ch%E1%BA%A3%20l%E1%BB%A5a.jpeg'
    },
    
]

const BANHTETMAINTV = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÁNH TÉT TRÀ CUÔN</h1>
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
                        src="https://www.youtube.com/embed/lEnyxytD8kU?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
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
                    Bánh tét- là một loại bánh có từ lâu đời của người dân Việt Nam chúng ta. Từ xưa món bánh tét thường có mặt trong các ngày lễ tết ở Việt Nam. Mỗi địa phương ở đồng bằng sông Cửu Long thường sẽ tạo ra loại bánh tét phù hợp với từng khu vực của mình. Bánh tét hiện nay đã trở thành đặc sản của nhiều địa phương ở miền Nam, mỗi nơi đều mang trong mình một câu chuyện về hương vị riêng biệt. Bình Dương và Tây Ninh nổi tiếng với bánh tét hấp dẫn từ {highlightText('nếp trộn đậu phộng')}, Đồng Nai gây ấn tượng với {highlightText('bánh tét hạt điều')}, Cần Thơ thì là món {highlightText('bánh tét lá cẩm')} độc đáo, và Sóc Trăng có {highlightText('bánh tét cốm dẹp')} thì ở Trà Vinh có bánh tét Trà Cuôn. Theo lưu truyền của người dân Trà Vinh, món bánh tét này do một người Khmer là bà Thạch Thị Lết ở huyện Cầu Ngang, gói bán để mưu sinh. Đến nay, món bánh này đã có lịch sử đến 80 năm, trở thành đặc sản miền Tây được cư dân địa phương và du khách khắp nơi yêu thích. Món bánh này mang trong nó một hương vị đặc biệt, cuốn hút và độc đáo, đủ để khiến    bất kỳ ai nếm thử đều phải mê mẩn. Bánh tét Trà Cuôn không chỉ là một món ngon, mà nó còn đại diện cho sự tự hào và truyền thống ẩm thực của Trà Vinh.
                </p>
                <p>
                    Để tạo ra chiếc bánh tét hoàn hảo, người làm bánh phải trải qua một quá trình hết sức cầu kỳ, tìm kiếm những thành phần tinh túy nhất để tạo nên một tác phẩm nghệ thuật ẩm thực. Ngay từ vẻ ngoài, bánh tét Trà Cuôn khi bạn cầm trên tay, bạn sẽ cảm nhận sự {renderTooltipText('"chắc nịch"', 'chac-nich')} và cân đối. Lớp lá bọc bánh được buộc chặt bằng {highlightText('dây lát')} và gắn với tấm nhãn làm cho thương hiệu "Bánh tét Trà Cuôn" tỏa sáng. Khi bạn cởi lớp lá ra, bạn sẽ bất ngờ trước lớp nếp mềm mịn, đậm đà, bọc lấy lớp nhân hấp dẫn với đậu xanh vàng óng, thịt mỡ mềm mịn, tôm khô thơm béo và trứng muối hòa quyện tạo nên một tác phẩm nghệ thuật ẩm thực tuyệt vời. Mỗi miếng bánh khiến bạn tan chảy, bởi lớp nếp mềm mịn, không quá cứng, cũng không quá dẻo, kết hợp với hương vị béo ngậy của đậu xanh, thịt mỡ, trứng muối và tôm khô. Tất cả tạo nên một cảm giác thăng hoa tuyệt vời đối với vị giác của bạn, đem lại cảm giác ngất ngây. Nhưng bánh tét Trà Cuôn không chỉ cuốn hút bởi hương vị tuyệt vời, mà còn bởi giá trị dinh dưỡng tốt cho sức khỏe. Đậu xanh mang tính mát, giải nhiệt và thanh lọc cơ thể, trong khi nhân bánh cung cấp nhiều calo và chất đạm, đảm bảo cung cấp đủ dinh dưỡng cho mọi người.
                </p>
                <p>
                    Bánh tét Trà Cuôn không chỉ là món ăn ngon mà còn là biểu tượng của văn hóa và niềm tự hào ẩm thực của Trà Vinh.
                </p>
            </FoodContent>    
            

            <FoodContent title="Cách Làm Bánh Tét">
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

                                <div className="flex flex-col gap-3 mt-6">
                                    <h4 className="text-xl font-semibold">Cách làm Bánh tét nhân thịt:</h4>
                                    <div>
                                        <span>Bước 1: Sơ chế nguyên liệu</span>
                                        <p>Vo sạch 2kg gạo nếp. Tiếp theo đem 400g đậu xanh đi vo sạch. Lấy phần lòng đỏ trứng muối rửa với rượu trắng và đem hấp với dầu mè để phần lòng đỏ trứng muối chín đều.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Ngâm gạo nếp, đậu xanh</span>
                                        <p>Nếp sau khi vo sạch ta cho thêm nước vào cùng với 1 muỗng cà phê muối. Ngâm nếp qua đêm khoảng 10 tiếng. Phần đậu xanh sau khi vo cũng cho thêm nước vào và ngâm trong khoảng 3-4 tiếng. Sau khoảng 3-4 tiếng đậu xanh đã nở nhiều ta chắt nước ra và để cho đậu xanh ráo nước. Sau 1 đêm cho nếp ra rổ để ráo nước và xả lại với nước sạch.</p>
                                    </div>

                                    <div>
                                        <span>Bước 3: Nấu nhân đậu</span>
                                        <p>Cho phần đậu xanh vào nồi nấu cùng với 1 muỗng cà phê muối, 1 muỗng canh dầu ăn, 800ml nước đậy nắp kín và nấu cho đậu xanh sôi lên. Sau khi đậu xanh sôi ta sẽ giở nấp ra và vớt phần bọt nổi lên trên, tiếp tục đậy nắp lại nhưng không đậy kín để hở một lỗ thoáng khí nhỏ. Sau khoảng 15 phút nữa thì đậu xanh cạn nước, ta đậy nắp kín lại và tiếp tục nấu thêm khoảng 10 phút nữa. Cho vào nồi đậu xanh 1 muỗng canh đường rồi khuấy đều xong tắt bếp. Khuấy xong ta đổ đậu xanh ra sửng chờ cho đậu xanh nguội sẽ khô lại.</p>
                                    </div>

                                    <div>
                                        <span>Bước 4: Làm nhân thịt</span>
                                        <p>Cắt 500g thịt ba chỉ thành các lát mỏng, lát càng mỏng càng ngon. Sau khi cắt xong ta tiến hành ướp thịt bằng cách cho thêm vào 1 muỗng canh đường, 1 muỗng cà phê hạt nêm, 1 muỗng cà phê tiêu xay, cho phần hành tím và tỏi xay vào cùng, 1 xíu bột ngọt, để trong khoảng 30 phút. Phần thịt đã ướp ta đem đi chiên sơ áp chảo để thịt thơm và săn chắc lại.</p>
                                    </div>

                                    <div>
                                        <span>Bước 5: Xào gạo nếp</span>
                                        <p>Cho 500ml nước lá dứa vào trong chảo, 500ml nước cốt dừa, 100g đường, 30g muối. Khi hỗn hợp đã sôi ta cho phần gạo nếp vào và đảo đều để nếp rút hết phần nước cốt dừa và nước lá dứa vào.</p>
                                    </div>
                                    <div>
                                        <span>Bước 6: Gói bánh</span>
                                        <p>Sau khi đậu xanh đã khô ta cho nhân lên trên màng bọc thực phẩm dàn đều phần nhân ra rồi sau đó để thịt cùng với trứng muối lên trên rồi túm hai đầu nhân lại cho nó vuông vuông. Ta xếp lá chuối thành các lớp ngoài và trong sau đó ta cho phần nếp lên dàn mỏng ra. Tiếp theo cho phần nhân vừa gói xong lên rồi bọc 2 đầu bánh lại ốp thật chặt tay để bánh đều. Cuối cùng ta lấy dây buộc chặt bánh cố định lại.</p>
                                    </div>

                                    <div>
                                        <span>Bước 7: Hấp bánh</span>
                                        <p>Với cách hấp bánh truyền thống ta có thể cho bánh vào nồi hấp và lót lá chuối sau đó đổ nước vào đầy nối cùng với bánh tét. Tuy nhiên cách hấp này có thể tốn rất nhiều thời gian từ 8-9 tiếng. Vì vậy chúng ta có thể áp dụng cách làm sau để tiết kiệm thời gian hơn mà hương vị bánh không hề thay đổi.</p>
                                        <p>Bắc 1 nồi hấp cách thủy cho nước vào và để cho nước sôi. Khi nước đã sôi ta cho phần bánh vào trên nồi đậy kín nắp. Khoảng 1 tiếng sau ta giở nắp ra và trở mặt bánh cho đều. Rồi tiếp tục đậy kín nắp và hấp thêm khoảng 1,5-2 tiếng nữa. Đủ thời gian thì chúng ta tắt bếp và đậy kín nắp hầm bánh qua đêm để phần nhân chín đều và nếp mềm dẻo hơn.</p>
                                    </div>

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/9JnfVfHX5BY?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                    

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: ALO TRÀ VINH</small>
                                    </div>



                                    <h4 className="text-xl font-semibold">Cách làm Bánh tét nhân chuối:</h4>
                                    <div>
                                        <span>Bước 1: Sơ chế nguyên liệu</span>
                                        <p>Vo sạch 2kg gạo nếp.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Ngâm gạo nếp</span>
                                        <p>Nếp sau khi vo sạch ta cho thêm nước vào cùng với 1 muỗng cà phê muối. Ngâm nếp qua đêm khoảng 10 tiếng. Sau 1 đêm cho nếp ra rổ để ráo nước và xả lại với nước sạch.</p>
                                    </div>

                                    <div>
                                        <span>Bước 3: Nấu nhân chuối</span>
                                        <p>Lấy chuối xiêm vào tô và cho vào 3 muỗng canh đường, 1 muỗng cà phê muối, 1 ít rượu trắng trộn đều. Để phần chuối đã trộn qua ướp trong 1-8 tiếng.</p>
                                    </div>

                                    <div>
                                        <span>Bước 4: Xào gạo nếp</span>
                                        <p>Cho 500ml nước lá dứa vào trong chảo, 500ml nước cốt dừa, 100g đường, 30g muối. Khi hỗn hợp đã sôi ta cho phần gạo nếp vào và đảo đều để nếp rút hết phần nước cốt dừa và nước lá dứa vào.</p>
                                    </div>

                                    <div>
                                        <span>Bước 5: Gói bánh</span>
                                        <p>Ta xếp lá chuối thành các lớp ngoài và trong sau đó ta cho phần nếp lên dàn mỏng ra. Tiếp theo cho phần nhân chuối vừa ướp lên trên rồi bọc 2 đầu bánh lại ốp thật chặt tay để bánh đều. Cuối cùng ta lấy dây buộc chặt bánh cố định lại.</p>
                                    </div>
                                    <div>
                                        <span>Bước 6: Hấp bánh</span>
                                        <p>Với cách hấp bánh truyền thống ta có thể cho bánh vào nồi hấp và lót lá chuối sau đó đổ nước vào đầy nối cùng với bánh tét. Tuy nhiên cách hấp này có thể tốn rất nhiều thời gian từ 8-9 tiếng. Vì vậy chúng ta có thể áp dụng cách làm sau để tiết kiệm thời gian hơn mà hương vị bánh không hề thay đổi.</p>
                                        <p>Bắc 1 nồi hấp cách thủy cho nước vào và để cho nước sôi. Khi nước đã sôi ta cho phần bánh vào trên nồi đậy kín nắp. Khoảng 1 tiếng sau ta giở nắp ra và trở mặt bánh cho đều. Rồi tiếp tục đậy kín nắp và hấp thêm khoảng 1,5-2 tiếng nữa. Đủ thời gian thì chúng ta tắt bếp và đậy kín nắp hầm bánh qua đêm để chuối chín đẹp và nếp mềm dẻo hơn.</p>
                                    </div>
                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/kWbP_KyRizg?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
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
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201%20.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20tr%C3%A0%20cu%C3%B4n%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Không chỉ thơm ngon đậm vị mà bánh tét Trà Cuôn còn là món ăn có rất nhiều cách thưởng thức độc đáo. Nếu về Trà Vinh ăn Tết, bạn hãy thử ăn bánh tét và {highlightText('thịt kho hột vịt')} hoặc là ăn bánh tét với {highlightText('củ kiệu')}.
                    </p>

                    <p>
                        Ngoài ra, bạn cũng có thể ăn cùng {highlightText('dưa muối')} để tăng thêm cảm giác ngon miệng. Hay ta có thể thưởng thức bánh tét với {highlightText('chả lụa')} hay đem chiên dầu rồi mới ăn cũng là cách để bạn làm mới món bánh này. Và dù là ăn bánh riêng lẻ kiểu truyền thống hay làm mới thì hương vị bánh tét Trà Cuôn vẫn vẹn nguyên, đậm đà như chính vẻ đẹp của văn hóa, con người miền Tây.
                    </p>

                </div>
                </div>
            </FoodContent>

            <FoodContent title="Bảo Quản">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20b%E1%BA%A3o%20qu%E1%BA%A3n%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20t%C3%A9t%20b%E1%BA%A3o%20qu%E1%BA%A3n%202.jpg" className="w-full h-full object-cover"/>
                  
                </div>

                <div>
                    <p>
                        Bánh tét nếu bảo quản ở nhiệt độ phòng chỉ có thể đảm bảo tầm 1-2 ngày. Để có thể giữ được chất lượng bánh tét sau khi mua về nhà, bạn có thể bảo quản bánh ở ngăn mát tủ lạnh. Đối với cách này, bạn có thể bảo quản bánh từ 3-4 ngày. Ngoài ra, bạn có thể cho bánh tét lên ngăn đông của tủ lạnh, bảo quản được tới 6 tháng. Khi ăn bạn có thể rã đông và hấp cách thủy là có thể thưởng thức ngay. Với cách bảo quản này, bạn sẽ không lo bánh sẽ bị hư, chua khi ăn không kịp.
                    </p>

                    
                </div>
            </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                        <p>Dao động từ 70.000-150.000đ/đòn.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>

            

        
        <Tooltip
            anchorSelect=".chac-nich"
            content={
                <div className="max-w-[300px] md:max-w-none">
                    Rắn chắc đến mức như được dồn nén chặt
                </div>
            }
        />

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />

        </div>
    )
}

export default BANHTETMAINTV