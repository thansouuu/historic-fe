import FoodContent from '@/components/food-content';
import ImageViewer from '@/components/modal/image-viewer';
import { withHighlighter } from '@/hocs/with-highlighter';
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */

const khaiquatchung = [
    // khai quat chung
    {
        text: 'rây bột',
        image: 'https://buhkhkt.github.io/CHINH/su%C3%B4ng%20%C4%91u%C3%B4ng%20d%E1%BB%ABa.jpg',
    },
    {
        text: 'lá dứa',
        image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20s%C3%BA.jpg',
    },
    {
        text: 'vá',
        image: 'https://buhkhkt.github.io/CHINH/th%E1%BB%8Bt%20ba%20ch%E1%BB%89.jpg',
    },
];


const nguyenlieu = [
    {
        text: 'Bột nếp',
        value: '200g',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%E1%BA%BFp.jpg',
    },
    {
        text: 'Nước lá dứa',
        value: '120-150ml',
        image: 'https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20l%C3%A1%20d%E1%BB%A9a.webp',
    },
    {
        text: 'Dừa nạo',
        value: '150g',
        image: 'https://buhkhkt.github.io/CHINH/d%E1%BB%ABa%20n%E1%BA%A1o.jpg',
    },
    {
        text: 'Đậu phộng rang',
        value: '50g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%E1%BA%ADu%20ph%E1%BB%99ng%20rang.webp',
    },
    {
        text: 'Đường cát',
        value: '100g',
        image: 'https://buhkhkt.github.io/CHINH/%C4%91%C6%B0%E1%BB%9Dng.jpg',
    },
    {
        text: 'Bột năng',
        value: '10g',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C4%83ng.jpg',
    },
    {
        text: 'Ống vani',
        value: '1 cái',
        image: 'https://buhkhkt.github.io/CHINH/%E1%BB%91ng%20vani.jpg',
    },
];

const thuongthucthanhpham = [
    {
        text: 'trà nóng',
        image: 'https://buhkhkt.github.io/CHINH/tr%C3%A0%20n%C3%B3ng.jpg',
    },
];

const BANHRAYMAINTV = () => {
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
        const getImageIdx = sampleList.findIndex((x) => x.text.toLowerCase() === text.toLowerCase());

        if (getImageIdx > -1) {
            setOpenImage(sampleList[getImageIdx].image);
        }
    };

    const highlightText = (text) => {
        return (
            <strong className="inline relative text-[#be9f76] cursor-pointer" onClick={showImageFromText(text)}>
                {text}
            </strong>
        );
    };

    return (
        <div className="container pb-20">
            <div className="mb-4">
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÁNH RÂY</h1>
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
                        src="https://www.youtube.com/embed/GyFUF-fMIcQ?list=PLO4xYQBA1oxVtcQx91K4UbaY5yQiwcARE"
                        title="Thuyết trình về món Bánh rây"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen=""
                    ></iframe>
                </div>
            </div>

            <FoodContent title="Ảnh 3D">
                <div className="flex flex-col gap-3">
                    <p>
                        Bánh rây trong dĩa có hai loại khác nhau, một loại màu trắng ngà đây là bánh rây bằng bột bình
                        thường không pha trộn thêm với nước lá dứa để tạo màu, còn loại còn lại màu xanh lá là loại bánh
                        được pha với nước lá dứa để tạo màu và mùi thơm cho bánh ngon hơn. Bánh có mùi thơm nhẹ, vị ngọt
                        thanh, bùi béo. Dĩa bánh rây có màu sắc hài hòa, bắt mắt. Bánh mềm mịn, thơm ngon. Đây là một
                        món ăn vặt phổ biến ở Trà Vinh.
                    </p>

                    <div>
                        <iframe
                            className="w-full h-auto aspect-video overflow-hidden rounded-xl border-4 border-gray-600"
                            title="banh ray"
                            frameborder="0"
                            allowfullscreen=""
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            xr-spatial-tracking=""
                            execution-while-out-of-viewport=""
                            execution-while-not-rendered=""
                            web-share=""
                            src="https://sketchfab.com/models/d45505ad7c7748b986536cf8913bf002/embed"
                        >
                            {' '}
                        </iframe>
                    </div>
                </div>
            </FoodContent>

            <FoodContent title="Khái Quát Chung">
                <p>
                    Bánh rây - bánh truyền thống của người Khmer, nó có mặt ở nhiều tỉnh thành nơi người Khmer sinh
                    sống. Tuy nhiên hiện nay bánh rây hầu như còn lại rất hiếm và chỉ còn một số nơi bán tại Trà Vinh.
                    Trước đây, bánh có tên là “Ọm Chiếl” (cách gọi của đồng bào Khmer). Theo thời gian, dựa vào các bước
                    trong khâu chế biến mà người ta còn gọi là bánh rây hoặc bánh dứa. Gọi là bánh rây vì người ta dùng
                    một cái rổ bằng lưới để {highlightText('rây bột')} xuống chảo. Còn với tên gọi bánh dứa là bởi loại
                    bánh này muốn thơm ngon, nếp phải xay chung với {highlightText('lá dứa')} . Nguyên liệu để chế biến
                    đơn giản gồm gạo nếp, lá dứa, dừa nạo, đậu phộng và đường cát. Dụng cụ để chế biến thì chỉ cần có
                    chảo, rây lọc, {highlightText('vá')} và bếp lò. Nguyên liệu và dụng cụ tuy đơn giản nhưng để có được
                    những chiếc bánh thơm ngon, phải trải qua một quá trình chuẩn bị công phu và tỉ mỉ. Bánh rây thường
                    được bán theo kiểu mang đi.
                </p>
                <p>
                    Nếu có dịp đến Trà Vinh hay các tỉnh miền Tây, thức quà vặt bình dị này là món ăn mà du khách không
                    nên bỏ lỡ, từ đó sẽ cảm nhận được văn hóa ẩm thực của đồng bào Khmer chân thành, đôn hậu. Món bánh
                    này thường có mặt trong các mâm lễ vật dâng lên tổ tiên, ông bà trong những ngày lễ hội của người
                    dân Khmer.
                </p>
            </FoodContent>

            <FoodContent title="Cách Làm Bánh Rây">
                <div className="flex flex-col gap-4">
                    <div>
                        <h4 className="text-xl font-semibold">Nguyên liệu:</h4>

                        <div>
                            <ul>
                                {nguyenlieu.map((item, index) => (
                                    <li key={index}>
                                        {index + 1}. {highlightText(item.text)}: {item.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <h4 className="text-xl mt-5 font-semibold">Các bước thực hiện:</h4>
                        <div className="flex flex-col gap-3">
                            <div>
                                <span>Bước 1: Rang đậu phộng</span>
                                <p>
                                    Đầu tiên, rang 50gr đậu phộng trên lửa vừa cho thêm 1 muỗng cà phê muối để rang đậu
                                    phộng nhanh vàng hơn. Khi vỏ đậu phộng đã chín vàng đều thì ta bóp cho tách vỏ ra.
                                </p>
                            </div>

                            <div>
                                <span>Bước 2: Làm nhân</span>
                                <p>
                                    Lấy 150g dừa nạo trộn đều với 100g đường cát trắng rồi để 15p. Sau đó cho phần dừa
                                    vừa trộn vào chảo rồi sên đảo đều. Đến khi dừa ráo nước ta cho vào 1 ống vani sẽ
                                    giúp cho phần nhưng dậy thêm mùi thơm. Tiếp tục đảo đều đến khi dừa sệt dần thì ta
                                    cho vào đậu phộng.
                                </p>
                            </div>

                            <div>
                                <span>Bước 3: Pha bột</span>
                                <p>
                                    Cho vào tô 200gr bột nếp, 10g bột năng, 1ít muối, 150ml nước lá dứa rưới nước từ từ
                                    và trộn đều tay, bóp bột cho bột nhuyễn ra đều.
                                </p>
                            </div>

                            <div>
                                <span>Bước 4: Rây bột và cuộn nhân dừa</span>
                                <p>
                                    Rây bột qua dụng cụ rây cho tơi ra. Sau đó bật bếp nóng và rây bột đều lên chảo đậy
                                    nắp lại để khoảng 1 phút sau đó bỏ nhân vào chính giữa bánh. Rồi áp bánh lại 4 góc
                                    là chúng ta đã hoàn thành 1 cái bánh rây.
                                </p>
                            </div>

                            <div>
                                <iframe
                                    className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                    src="https://www.youtube.com/embed/REnULhFsVl4?list=PLO4xYQBA1oxVtcQx91K4UbaY5yQiwcARE"
                                    title="Cách làm món Bánh Rây"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen=""
                                ></iframe>

                                <small className="italic block text-center">
                                    Nguồn: trích từ kênh youtube: ALO TRÀ VINH
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </FoodContent>

            <FoodContent title="Thưởng Thức Thành Phẩm">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20r%C3%A2y%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <p>
                        Bánh rây - bánh dứa sau khi xé ra có độ dẻo và mềm dai, ăn vào có vị béo thơm từ lớp vỏ nếp hòa
                        quyện cùng nhân dừa ngọt bùi, vừa lạ miệng nhưng lại cực kỳ thơm ngon. Khi bánh chín tỏa mùi
                        thơm ngào ngạt và đặc trưng không lẫn vào đâu được. Khi ăn vào chắc chắn rằng bạn sẽ rất ngạc
                        nhiên bởi cái mịn, cái giòn mềm của bánh hoà lẫn vị ngọt thanh, vị béo của nếp, của dừa hay của
                        đậu phộng.
                    </p>

                    <p>
                        Càng ăn càng mê mẩn vì hương vị đặc trưng. Do bánh có lớp vỏ mỏng nên khi ăn sẽ không bị ngán,
                        bạn dùng bánh cùng {highlightText('trà nóng')} cũng rất hợp đấy!
                    </p>
                </div>
                </div>
            </FoodContent>
            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                        <p>Dao động từ 5.000đ-10.000đ.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>
            

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
        </div>
    );
};

export default BANHRAYMAINTV;