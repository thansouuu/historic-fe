// import FoodContent from '@/components/food-content';
// import ImageViewer from '@/components/modal/image-viewer';
// import { withHighlighter } from '@/hocs/with-highlighter';
// import { useAuth } from '@/hooks/use-auth';
// import { useEffect, useState } from 'react';

// /* eslint-disable react/no-unknown-property */

// const khaiquatchung = [
//     // khai quat chung
//     {
//         text: 'Thành phố Hồ Chí Minh',
//         image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20tphcm.jpg',
//     },
// ];

// const nguyenlieu = [
//     {
//         text: 'giò heo',
//         image: 'https://buhkhkt.github.io/CHINH/gi%C3%B2%20heo.webp',
//     },
//     {
//         text: 'xương ống',
//         image: 'https://buhkhkt.github.io/CHINH/x%C6%B0%C6%A1ng%20%E1%BB%91ng%20heo.webp',
//     },
//     {
//         text: 'bánh canh',
//         image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp',
//     },
//     {
//         text: 'bột gạo',
//         image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20g%E1%BA%A1o.jpg',
//     },
//     {
//         text: 'lòng heo',
//         image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99%20l%C3%B2ng%20heo.jpg',
//     },
//     {
//         text: 'gia vị',
//         image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg',
//     },
// ];

// const BANHCANHMAINTV = () => {
//     const { data, isLoggedIn } = useAuth();
//     const [mainBackground, setMainBackground] = useState('');
//     const [borderBackground, setBorderBackground] = useState('');
//     const role = data?.data?.role;
//     useEffect(() => { 
//         if (data && role && isLoggedIn) {
//             if (role === 'good') {
//                 setMainBackground('/main/top3.svg');
//                 setBorderBackground('/border/top3.svg');
//             }
//             if (role === 'best') {
//                 setMainBackground('/main/top1.png');
//                 setBorderBackground('/border/top1.svg');
//             }
//             if (role === 'top-good') {
//                 setMainBackground('/main/top2.svg');
//                 setBorderBackground('/border/top2.svg');
//             }
//         }
//     }, [role, isLoggedIn]);
//     const [openImage, setOpenImage] = useState(false);

//     const sampleList = [...khaiquatchung, ...nguyenlieu];

//     const showImageFromText = (text) => () => {
//         const getImageIdx = sampleList.findIndex((x) => x.text.toLowerCase() === text.toLowerCase());

//         if (getImageIdx > -1) {
//             setOpenImage(sampleList[getImageIdx].image);
//         }
//     };

//     const highlightText = (text) => {
//         return (
//             <strong className="inline relative text-[#be9f76] cursor-pointer" onClick={showImageFromText(text)}>
//                 {text}
//             </strong>
//         );
//     };

//     return (
//         <div className="container pb-20">
            
//             <div className="mb-4">
//                 <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÁNH CANH BẾN CÓ</h1>
//                 <div className="text-center">
//                     {role && role !== 'normal' && (
//                         <div className="right-main_icon flex justify-center gap-x-5">
//                             <img className="w-10 h-10" src={mainBackground} alt="" />
//                             <img className="w-10 h-10" src={mainBackground} alt="" />
//                             <img className="w-10 h-10" src={mainBackground} alt="" />
//                             <img className="w-10 h-10" src={mainBackground} alt="" />  
//                         </div>
//                     )}
//                 </div>
//                 <div className="h-3"></div>
//                 <div className="rounded-2xl shadow overflow-hidden">
//                     <iframe
//                         className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
//                         src="https://www.youtube.com/embed/u_4ZhHpReuE?list=PLO4xYQBA1oxVDRzXzjLUPhnlEC5JMx628"
//                         title="Thuyết trình về món Bánh canh Bến Có"
//                         frameborder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         allowfullscreen=""
//                     ></iframe>
                   
//                 </div>
//             </div>


//             <FoodContent title="Khái Quát Chung">
//                 <p>
//                     Bánh canh là món ăn phổ biến của miền Tây Nam Bộ. Tùy theo khẩu vị và nguyên liệu, bạn có thể thấy
//                     có nhiều loại bánh canh khác nhau. Tuy nhiên, khi nhắc đến Trà Vinh, không thể không nói đến món
//                     bánh canh Bến Có gia truyền. Bánh canh Bến Có trở thành biểu tượng ẩm thực ở nơi đây suốt hơn 20
//                     năm. Được nằm trong danh sách thực đơn của người dân Trà Vinh từ lâu, món bánh canh này đã thu hút
//                     du khách từ khắp nơi. Hương vị đặc trưng của món ăn này sẽ khiến bất kỳ ai thử qua đều ấn tượng sâu
//                     sắc và muốn quay lại thêm lần nữa.
//                 </p>
//                 <p>
//                     Câu chuyện bắt đầu từ những năm 1980, khi một bà mẹ có sáu người con mở một gánh bánh canh ngay bên
//                     cầu Bến Có. Với lòng đam mê và bí quyết gia truyền, họ đã từng bước phát triển kinh doanh của mình.
//                     Sau khi người mẹ qua đời, sáu người con đã tiếp tục nối nghiệp và phát triển thương hiệu bánh canh
//                     Bến Có. Hiện nay, thương hiệu bánh canh Bến Có đã trở nên nổi tiếng và mở rộng cả vào các tỉnh miền
//                     Tây ra đến {highlightText('Thành phố Hồ Chí Minh')} và tham gia vào các sự kiện liên quan đến ẩm
//                     thực trên toàn quốc. Món bánh canh này đã trở thành biểu tượng của Trà Vinh và điểm dừng chân không
//                     thể bỏ lỡ cho du khách khi đến đây.
//                 </p>
//             </FoodContent>
            
//             <FoodContent title="Cách Làm Bánh Canh Bến Có">
//                 <div className="flex flex-col gap-4">
//                     <div>
//                         <h4 className="text-xl font-semibold">Nguyên liệu:</h4>

//                         <div>
//                             <p>
//                                 Để chế biến được món bánh canh Bến Có mang đặc trưng mảnh đất Trà Vinh. Bạn cần chuẩn bị
//                                 một số nguyên liệu sạch gồm: {highlightText('giò heo')}, thêm chút{' '}
//                                 {highlightText('xương ống')} để nước dùng ngọt hơn, {highlightText('bánh canh')} làm từ{' '}
//                                 {highlightText('bột gạo')}, một ít {highlightText('lòng heo')} gồm tim, gan, cật. Cùng{' '}
//                                 {highlightText('gia vị')} truyền thống hằng ngày như: muối, đường, bột ngọt, nước mắm,
//                                 ớt, tiêu, hành, ngò.
//                             </p>
//                         </div>
//                         <h4 className="text-xl font-semibold">Các bước thực hiện:</h4>
//                         <div>
//                             <p>
//                                 Trải qua hàng thế kỷ, ẩm thực Việt Nam đã phát triển với sự đa dạng và phong phú về
//                                 hương vị. Trong đó, món bánh canh Bến Có nổi tiếng với sự đặc biệt và hương vị riêng
//                                 biệt mà không thể biết được cách làm. Món ăn này đã trở thành một biểu tượng văn hóa ẩm
//                                 thực độc đáo, thu hút thực khách từ khắp nơi tới thử và khám phá. Món bánh canh Bến Có
//                                 không chỉ ngon mà còn là một biểu tượng của tinh hoa ẩm thực và sự kỳ diệu của sự kết
//                                 hợp giữa nguyên liệu độc đáo và bí quyết gia truyền. Chắc chắn rằng bất kỳ thực khách
//                                 nào đã từng thử món này đều sẽ bị cuốn hút bởi hương vị độc đáo này.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </FoodContent>
            

//             <FoodContent title="Cách Pha Nước Chấm">
//                 <div className="flex flex-col gap-3">
//                     <h4 className="font-semibold">Nước mắm: </h4>
//                     <div className="grid grid-cols-2 gap-2">
//                         <img
//                             src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%201.webp"
//                             className="w-full h-full object-cover"
//                         />
//                         <img
//                             src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%202.jpg"
//                             className="w-full h-full object-cover"
//                         />
//                         <img
//                             src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%203.jpg"
//                             className="w-full h-full object-cover"
//                         />
//                         <img
//                             src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%204.jpg"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     <p>
//                         Nước mắm nguyên chất. Thường sẽ có dĩa chanh ớt và ta sẽ có thể cho chanh ớt vào tùy khẩu vị mỗi
//                         người.
//                     </p>
//                 </div>
//             </FoodContent>

//             <FoodContent title="Thưởng Thức Thành Phẩm">
//             <div className="flex flex-col gap-3">
//                 <div className="grid grid-cols-2 gap-4">
//                     <img
//                         src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg"
//                         className="w-full h-full object-cover"
//                     />
//                     <img
//                         src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.webp"
//                         className="w-full h-full object-cover"
//                     />
//                     <img
//                         src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.webp"
//                         className="w-full h-full object-cover"
//                     />
//                     <img
//                         src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 <div>
//                     <p>
//                         Để thưởng thức trọn vẹn tô bánh canh Bến Có không thể thiếu các thành phần ăn kèm như thịt nạc,
//                         giò heo, lòng heo gồm cật, gan, phèo, tim… và một ít rau ghém. Để có một tô bánh canh đầy đủ,
//                         khi ăn cho bánh canh chần qua nước sôi rồi bỏ vào tô, xếp thịt, lòng heo, hành lá, tiêu lên phía
//                         trên; chan nước dùng ngập mặt bánh và ngon nhất khi còn nóng.
//                     </p>

//                     <p>
//                         Đối với người miền Tây một gia vị không thể bỏ qua đó chính là chén nước mắm nguyên chất kèm
//                         thêm vài lát ớt đỏ tươi để tạo cho hương vị thêm đậm đà. Chính vị đậm đà của nước chấm cộng
//                         hưởng với các nguyên liệu làm cho món ăn dân dã này trở nên tròn vị, thơm ngon hơn bao giờ hết.
//                     </p>
//                 </div>
//             </div>
//             </FoodContent>


           
               
//             <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
//                 <div className="flex gap-x-5 items-center">
//                     {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
//                     <div>
//                         <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
//                         <p>Dao động từ 45.000đ-55.000đ/tô.</p>
//                     </div>
//                     {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
//                 </div>
//             </section>

//             <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
//         </div>
//     );
// };

// export default BANHCANHMAINTV;

import FoodContent from '@/components/food-content';
import ImageViewer from '@/components/modal/image-viewer';
import { withHighlighter } from '@/hocs/with-highlighter';
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';

/* eslint-disable react/no-unknown-property */

const khaiquatchung = [
    // khai quat chung
    {
        text: 'Thành phố Hồ Chí Minh',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20tphcm.jpg',
    },
];

const nguyenlieu = [
    {
        text: 'giò heo',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%B2%20heo.webp',
    },
    {
        text: 'xương ống',
        image: 'https://buhkhkt.github.io/CHINH/x%C6%B0%C6%A1ng%20%E1%BB%91ng%20heo.webp',
    },
    {
        text: 'bánh canh',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20t%C6%B0%C6%A1i.webp',
    },
    {
        text: 'bột gạo',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20g%E1%BA%A1o.jpg',
    },
    {
        text: 'lòng heo',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99%20l%C3%B2ng%20heo.jpg',
    },
    {
        text: 'gia vị',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg',
    },
];

const BANHCANHMAINTV = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu];

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
                
                
                <div className="rounded-2xl shadow overflow-hidden">
                    <iframe
                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                        src="https://www.youtube.com/embed/u_4ZhHpReuE?list=PLO4xYQBA1oxVDRzXzjLUPhnlEC5JMx628"
                        title="Thuyết trình về món Bánh canh Bến Có"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen=""
                    ></iframe>
                   
                </div>
                <div className="h-3"></div>
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
                <h1 className="text-center text-4xl tracking-tight font-bold my-4">BÁNH CANH BẾN CÓ</h1>
            </div>


            <FoodContent title="Sơ lược tiểu sử">
                <p>
                    - Là người thôn Nguyệt Lãng, huyện Vĩnh Trị (nay thuộc xã Bình Phú, huyện Càng Long, tỉnh Trà Vinh)
                    - Tên thật là Thạch Duyên (Duồn), tục danh Tà Duồn, gốc người Khmer, vì có công nên được Nhà Nguyễn ban cho tên họ là Nguyễn Văn Tồn
                    - Theo Đại Nam liệt truyện, Thống chế Nguyễn Văn Tồn có một người con Yên Vy.. 
                </p>
                <p>
                    Câu chuyện bắt đầu từ những năm 1980, khi một bà mẹ có sáu người con mở một gánh bánh canh ngay bên
                    cầu Bến Có. Với lòng đam mê và bí quyết gia truyền, họ đã từng bước phát triển kinh doanh của mình.
                    Sau khi người mẹ qua đời, sáu người con đã tiếp tục nối nghiệp và phát triển thương hiệu bánh canh
                    Bến Có. Hiện nay, thương hiệu bánh canh Bến Có đã trở nên nổi tiếng và mở rộng cả vào các tỉnh miền
                    Tây ra đến {highlightText('Thành phố Hồ Chí Minh')} và tham gia vào các sự kiện liên quan đến ẩm
                    thực trên toàn quốc. Món bánh canh này đã trở thành biểu tượng của Trà Vinh và điểm dừng chân không
                    thể bỏ lỡ cho du khách khi đến đây.
                </p>
            </FoodContent>
            
            <FoodContent title="Sự nghiệp kháng chiến">
                <div className="flex flex-col gap-4">
                    <div>
                       
                        <div>
                            <p>
                            - Năm 1780, chúa Nguyễn là Nguyễn Ánh lánh nạn vào Nam. Ông hết lòng phò chúa Nguyễn, lập nhiều dạo quân gồm hàng nghìn người Kinh, Khmer, vừa dựng đồn trấn giữ ở Trà Vang, Cầu Chông, Cầu Kè, Trà Ôn, Mang Thít, vừa giúp dân khai hoang, mở rộng vùng đất Cầu Kè, Trà Ôn (thuộc đạo Trấn Giang).

                            - Tháng 2/1784, chúa Nguyễn Ánh buộc phải sang Xiêm La cầu viện. Nguyễn Văn Tồn là người Khmer duy nhất theo chúa sang Vọng Các (nước Xiêm La) với chức Cai đội

                            - Tháng 6/1784, chúa rời Xiêm La đem quân về Gia Định mưu cuộc khôi phục, nhưng thế và lực quân Tây Sơn vẫn còn rất mạnh nên lại phải sang Vọng Các lần thứ hai vào tháng 3/1785. Ông tiếp tục được theo hầu chúa Nguyễn Ánh và “mùa thu năm Đinh Mùi, (ông) từ Xiêm La trở về”. Ngay sau khi về nước, ông cùng Hồ Văn Bôi, Nguyễn Văn Trị, Trương Phúc Giáo phối hợp với Lê Văn Quân đánh quân Tây Sơn ở bảo Ba Lai (10) (thuộc huyện Bình Đại, tỉnh Bến Tre) và giành thắng lợi lớn, bèn thừa thắng tiến đóng ở Mỹ Tho (tỉnh Tiền Giang).
                            - Tháng 9-1787, chúa Nguyễn Ánh cho Nguyễn Văn Tồn làm Thuộc nội Cai đội để cai quản đồn Xiêm binh.Trong thời gian làm Thống quản nơi đây, ông đã huy động nhân dân Khmer khai khẩn đất hoang theo phương thức đào ao, lên liếp, chọn giồng, lập nhiều phum sóc mới, phát triển sản xuất và bảo vệ cuộc sống yên bình cho nhân dân. 

                            - Tháng 10/1787, ông cùng đội quân của mình liên kết với Tôn Thất Huy, Tôn Thất Hội và Lê Văn Quân đánh lui quân Tây Sơn ở Ba Lai (lần thứ hai), Mỹ Lung, Ba Giòng (Tam Phụ), buộc tướng Phạm Văn Tham phải rút quân khỏi Mỹ Tho về Sài Gòn.

                            - Tháng giêng 1795, Ốc Nha Diệp và Ốc Nha Oa, làm chánh phó trưởng chi quản các hiệu đội phiên binh 1.500 người, theo Nguyễn Văn Tồn đến Bà Rịa để theo việc quân”.

                            - Tháng 11/1796, Nguyễn Văn Tồn đem bộ thuộc của mình phối hợp với các cánh quân của dinh Bình Thuận bao vây và tiến đánh bọn phản loạn của Toàn Phù, tù trưởng Ba Phủ thuộc Thuận Thành. Hai bên chiến giữ giằng co, mãi tới tháng 2-1797, với sự tăng viện quân lương, quân của chúa Nguyễn Ánh mới giành được thắng lợi 

                            - Cuối năm 1798, Nguyễn Văn Tồn cùng đội Xiêm binh đã tham gia vào những trận đánh quân Tây Sơn ở thành Quy Nhơn. Sau khi chiếm được thành, ông được lưu lại trấn giữ thành Bình Định.

                            - Năm Tân Dậu (1801), thành (Bình Định) bị hãm, giặc bắt được, Tồn giả cách vì giặc hết sức đánh, quân ta vẫy về, Tồn không đoái hoài, giặc lấy làm tin. Tồn bèn thừa cơ quay về với ta

                            - Năm 1802, ông được thăng chức Thống chế Điều bát, đóng quân tại Trà Ôn, quản lí hai phủ Trà Vinh, Mang Thít thuộc dinh Vĩnh Trấn. Ngoài việc tổ chức khai hoang, đầy mạnh sản xuất, ông còn chăm lo việc rèn luyện quân binh, lập nhà thì võ (còn gọi Nhà Thí) để chọn nhân tài giúp nước.  

                            - Tháng 8/1808, vua Gia Long cho “triệu Thống quản đồn Xiêm quân là Nguyễn Văn Tồn đem bọn trưởng chi trưởng hiệu quân sở bộ về Kinh. Đến nơi, thưởng cho tiền theo thứ bực khác nhau, ở hơn một năm rồi cho về

                            - Năm 1810, ông cùng Thoại Ngọc Hầu dẫn đại binh sang chiến đấu với quân Xiêm ở thành Longvek (Cao Mên). Thắng trận, ông được cử ở lại Nam Vang để giúp vua Cao Miên Ang Chan II (Nặc Chân). 

                            - Tháng 5-1812, vua Gia Long đã “hạ lệnh cho Mạc Văn Tô đem quân tiến đóng ở Quang Hóa, mà sai Đào Quang Lý dời giữ Xỉ Khê và Thống quản đồn Uy Viễn là Nguyễn Văn Tồn giữ Thông Bình (thuộc đất Tây Ninh ngày nay)”, cùng nhau đắp lũy, tiếp ứng cho nhau, khiến quân địch sợ không dám phạm, buộc phải rút lui. 

                            - Năm 1813, ông trở về nước, lại cai quản vùng Trà Ôn, Cầu Kè, Trà Vinh.
                            - Từ năm 1818 đến năm 1820, ông là trợ thủ đắc lực cho Thống chế Khâm sai Nguyễn Văn Thoại trong việc huy động lực lượng Kinh, Khmer đào kinh Long Xuyên – Rạch Giá (Thoại Hà) và kinh Châu Đốc - Hà Tiên (Vĩnh Tế).
                            - Năm 1819, ông được triều đình bổ vào chức Điều bát nhung vụ, dẫn một đoàn dân binh Khmer khoảng 500 người, đến Châu Đốc để cùng với Thoại Ngọc Hầu, Tuyên Trung Hầu lo việc đào kinh Vĩnh Tế.
                            - 27/2/1820, ông bị bệnh mất tại Trà Ôn (Vĩnh Long).


                            </p>
                        </div>
                        
                    </div>
                </div>
            </FoodContent>
            

            <FoodContent title="Các thành tựu">
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-2">
                        <img
                            src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%201.webp"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%202.jpg"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%203.jpg"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="https://buhkhkt.github.io/CHINH/n%C6%B0%E1%BB%9Bc%20m%E1%BA%AFm%204.jpg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p>
                    - Là một danh tướng và nhà khai hoang đầu thời nhà Nguyễn trong lịch sử Việt Nam.
                    - Ông có công lớn trong việc giúp Thoại Ngọc Hầu chỉ huy quân dân đào kênh Vĩnh Tế (Châu Đốc, An Giang) và giúp dân nhiều vùng trong tỉnh Vĩnh Long & Trà Vinh khai khẩn đất hoang, thành lập nhiều xóm làng.

                    - Năm 1828, vua Minh Mạng sắc phong ông là Trung đẳng thần, hàm ân Trung Dũng Thiên Trực, tước Dung Ngọc hầu. Vợ ông cũng được ban mỹ tự là Hiền Thục Chi Thần Thống Chế Đại Quan.

                    </p>
                </div>
            </FoodContent>

            <FoodContent title="Tưởng nhớ">
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.webp"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.webp"
                        className="w-full h-full object-cover"
                    />
                    <img
                        src="https://buhkhkt.github.io/CHINH/b%C3%A1nh%20canh%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <p>
                        - Chức danh Thống chế Điều bát[7] của ông, hiện nay đã được dùng để đặt tên cho một con đường dài và rộng tại thị trấn Trà Ôn (Vĩnh Long).

                        - Khu lăng Tiền quân Thống chế Điều bát  ở giồng Thanh Bạch - ấp Mỹ Hòa - xã Thiện Mỹ – huyện Trà Ôn – tỉnh Vĩnh Long. Khu lăng được trùng tu nhiều lần và đã được Bộ Văn hóa-Thông tin xếp hạng di tích Lịch sử Văn hóa cấp Quốc gia vào ngày 13 tháng 2 năm 1996 (Quyết định số 310-QĐ ngày 13/2/1996).
                    </p>

                    
                </div>
            </div>
            </FoodContent>
            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
            
            <div>
            Thẻ
            </div>
            <div>
            Nhận xét,xem bình luận
            </div>
            
        </div>
    );
};

export default BANHCANHMAINTV;