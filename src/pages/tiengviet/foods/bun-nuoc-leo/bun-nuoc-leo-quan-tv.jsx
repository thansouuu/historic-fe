import FoodContent from '@/components/food-content';
import ImageViewer from '@/components/modal/image-viewer';
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';

function SVGFacebook() {
    return (
        <svg width="320" height="320" viewBox="0 0 29 29" style={{ width: 140, height: 140 }}>
            <path fill="#fff" d="M0 0h29v29H0z"></path>
           <path fill="#000" d="M0 0h7v1H0zM8 0h1v1H8zM11 0h2v1H11zM15 0h2v1H15zM18 0h1v1H18zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM8 1h3v1H8zM12 1h3v1H12zM16 1h3v1H16zM20 1h1v1H20zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM10 2h3v1H10zM14 2h6v1H14zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM10 3h1v1H10zM14 3h1v1H14zM17 3h2v1H17zM20 3h1v1H20zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h4v1H8zM13 4h3v1H13zM18 4h1v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h1v1H8zM11 5h1v1H11zM15 5h1v1H15zM17 5h2v1H17zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h1v1H8zM10 7h3v1H10zM14 7h3v1H14zM19 7h1v1H19zM0 8h3v1H0zM5 8h2v1H5zM8 8h3v1H8zM13 8h2v1H13zM16 8h1v1H16zM19 8h6v1H19zM27,8 h2v1H27zM2 9h4v1H2zM7 9h4v1H7zM13 9h2v1H13zM18 9h1v1H18zM20 9h4v1H20zM27,9 h2v1H27zM2 10h1v1H2zM4 10h1v1H4zM6 10h3v1H6zM11 10h1v1H11zM15 10h1v1H15zM17 10h1v1H17zM19 10h1v1H19zM22 10h1v1H22zM24 10h3v1H24zM28,10 h1v1H28zM1 11h3v1H1zM7 11h3v1H7zM13 11h1v1H13zM18 11h4v1H18zM24 11h2v1H24zM1 12h1v1H1zM6 12h2v1H6zM9 12h1v1H9zM11 12h3v1H11zM15 12h2v1H15zM20 12h1v1H20zM22 12h1v1H22zM28,12 h1v1H28zM3 13h1v1H3zM5 13h1v1H5zM12 13h1v1H12zM15 13h3v1H15zM19 13h1v1H19zM21 13h3v1H21zM27,13 h2v1H27zM0 14h1v1H0zM4 14h1v1H4zM6 14h4v1H6zM12 14h5v1H12zM19 14h1v1H19zM21 14h3v1H21zM28,14 h1v1H28zM0 15h2v1H0zM3 15h2v1H3zM7 15h2v1H7zM11 15h2v1H11zM14 15h2v1H14zM18 15h1v1H18zM20 15h1v1H20zM22 15h3v1H22zM0 16h1v1H0zM2 16h1v1H2zM4 16h1v1H4zM6 16h1v1H6zM8 16h2v1H8zM13 16h4v1H13zM20 16h1v1H20zM22 16h2v1H22zM28,16 h1v1H28zM2 17h1v1H2zM8 17h1v1H8zM10 17h1v1H10zM13 17h2v1H13zM16 17h1v1H16zM19 17h2v1H19zM22 17h2v1H22zM26,17 h3v1H26zM0 18h2v1H0zM3 18h1v1H3zM5 18h2v1H5zM9 18h1v1H9zM11 18h1v1H11zM15 18h1v1H15zM18 18h2v1H18zM24 18h2v1H24zM28,18 h1v1H28zM3 19h1v1H3zM8 19h1v1H8zM10 19h1v1H10zM13 19h1v1H13zM15 19h2v1H15zM18 19h3v1H18zM24 19h1v1H24zM0 20h2v1H0zM3 20h2v1H3zM6 20h2v1H6zM9 20h1v1H9zM11 20h3v1H11zM16 20h1v1H16zM20 20h6v1H20zM27 20h1v1H27zM8 21h1v1H8zM12 21h1v1H12zM15 21h3v1H15zM20 21h1v1H20zM24 21h3v1H24zM28,21 h1v1H28zM0 22h7v1H0zM9 22h2v1H9zM12 22h4v1H12zM17 22h1v1H17zM20 22h1v1H20zM22 22h1v1H22zM24 22h1v1H24zM28,22 h1v1H28zM0 23h1v1H0zM6 23h1v1H6zM8 23h1v1H8zM10 23h3v1H10zM14 23h2v1H14zM19 23h2v1H19zM24 23h1v1H24zM28,23 h1v1H28zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM10 24h1v1H10zM13 24h4v1H13zM19 24h7v1H19zM27,24 h2v1H27zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM10 25h1v1H10zM13 25h2v1H13zM16 25h1v1H16zM19 25h2v1H19zM24 25h3v1H24zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h1v1H8zM10 26h2v1H10zM15 26h1v1H15zM17 26h1v1H17zM19 26h3v1H19zM24 26h1v1H24zM27,26 h2v1H27zM0 27h1v1H0zM6 27h1v1H6zM8 27h3v1H8zM13 27h1v1H13zM15 27h2v1H15zM18 27h1v1H18zM20 27h3v1H20zM25 27h1v1H25zM0 28h7v1H0zM8 28h2v1H8zM11 28h3v1H11zM16 28h1v1H16zM20 28h2v1H20zM24 28h1v1H24zM28,28 h1v1H28z"></path>
        </svg>
    );
}

function CallTo({ phonenumber }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <a className="text-black font-semibold phonenumber-1 cursor-pointer" onClick={() => setIsOpen(true)}>
                {phonenumber}
            </a>
            <ImageViewer isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <a href={`tel:${phonenumber}`} className='flex items-center gap-2 outline-none'>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>

                    Gọi
                </a>
            </ImageViewer>
        </>
    );
}

/* eslint-disable react/no-unknown-property */
const BUNNUOCLEOQUANTV = () => {
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

    const [isOpenPhoneNumber, setIsOpenPhoneNumber] = useState(null);

    const sampleList = [
        {
            text: `"ANH SHIPPER"`,
            image: 'https://buhkhkt.github.io/CHINH/anh%20shipper.jpg',
        },
        {
            text: `"ANH SHIPPER " `,
            image: 'https://buhkhkt.github.io/CHINH/anhshipper-search.jpg',
        },
        {
            text: `"ទំព័រ"`,
            image: 'https://buhkhkt.github.io/CHINH/anhshipper-page.jpg',
        },

        {
            text: `"សារ"`,
            image: 'https://buhkhkt.github.io/CHINH/anhshipper-message.jpg',
        },
        {
            text: `"SHIPPER TRÀ VINH"`,
            image: 'https://buhkhkt.github.io/CHINH/shipper%20Tr%C3%A0%20Vinh.jpg',
        },
        {
            text: `"SHIPPER TRÀ VINH " `,
            image: 'https://buhkhkt.github.io/CHINH/shippertv-search.jpg',
        },
        

    
        {
            text: `"ទំព័រ" `,
            image: 'https://buhkhkt.github.io/CHINH/shippertv-page.jpg',
        },

        {
            text: `"សារ" `,
            image: 'https://buhkhkt.github.io/CHINH/shippertv-message.jpg',
        },
    ];

    const showImageFromText = (text) => () => {
        const getImageIdx = sampleList.findIndex((x) => x.text.toLowerCase() === text.toLowerCase());

        if (getImageIdx > -1) {
            setOpenImage(sampleList[getImageIdx].image);
        }
    };

    const highlightText = (text) => {
        return (
            <span
                className="inline relative text-[#be9f76] font-semibold italic cursor-pointer"
                onClick={showImageFromText(text)}
            >
                {text}
            </span>
        );
    };

    return (
        <div className="container pb-20">
            <div className="mb-4">
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHỖ ĂN NỔI TIẾNG</h1>
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
                {/* <h1 className="text-center text-4xl tracking-tight font-bold my-4">QUÁN ĂN NỔI TIẾNG</h1> */}
            </div>

            <FoodContent title="1.Bún Nước Lèo Cô Ba">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold self-baseline">Mã QR Facebook</span>
                        <div className="flex justify-center">
                            <SVGFacebook />
                        </div>
                    </div>

                    <div>
                        <span className="font-semibold">Hoặc </span>tìm kiếm:{' '}
                        <span>
                            {'"'}Bún nước lèo CÔ BA{'"'}
                        </span>
                    </div>

                    <div>
                        <div>
                            <span className="font-semibold">Địa chỉ: </span>
                            <span>Đường 19-5, Khóm 8, Phường 7, Thành phố Trà Vinh, tỉnh Trà Vinh.</span>
                        </div>
                        <div className="mt-4">
                        <iframe className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31439.4153427241!2d106.31291444244808!3d9.940038842113825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a017174dcef61f%3A0x2e17d0aa268425b6!2zQsOaTiBOxq_hu5pDIEzDiE8gQ8OUIEJB!5e0!3m2!1svi!2s!4v1703584394930!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                           
                        </div>
                    </div>

                    <div>
                        <p>
                            Nếu bạn đang ở gần quán hay có nhu cầu thưởng thức món ăn, bạn có thể thử một trong những
                            cách sau để đặt đồ ăn:
                        </p>
                        <ul className="list-[disclosure-closed] pl-5">
                            <li>
                                Cách 1: Đặt đồ ăn qua dịch vụ{' '}
                                <div className="text-center">{highlightText(`"ANH SHIPPER"`)}</div>
                                <div>
                                    <ul className="list-none">
                                        <li>Phí vận chuyển: tùy theo quãng đường giao.</li>
                                        <li>
                                            Số điện thoại: <CallTo phonenumber="0989529949" />
                                        </li>
                                        <li>
                                            Facebook: Tìm kiếm {highlightText(`"ANH SHIPPER" `)}, trong {highlightText(`"Trang"`)} và bấm vô nút{' '}
                                            {highlightText(`"Nhắn tin"`)} để đặt hàng.
                                        </li>
                                    </ul>    
                                </div>
                            </li>

                            <li>
                                Cách 2: Đặt đồ ăn qua dịch vụ{' '}
                                <div className="text-center">
                                    <span className="font-semibold italic">{highlightText(`"SHIPPER TRÀ VINH"`)}</span>
                                </div>
                                <div>
                                    <ul className="list-none">
                                        <li>Phí vận chuyển: tùy theo quãng đường giao</li>
                                        <li>
                                            Số điện thoại: <CallTo phonenumber="0961111232" />
                                        </li>
                                        <li>
                                            Facebook: Tìm kiếm {highlightText(`"SHIPPER TRÀ VINH" `)}, trong {highlightText(`"Trang" `)}và bấm vô nút{' '}
                                            {highlightText(`"Nhắn tin" `)}để đặt hàng.
                                        </li>
                                    </ul>

                                    
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl mb-4">Một số clip review bạn có thể xem:</h3>

                        <div className="flex flex-col gap-4">
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/UxLhKTssXhc?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/P52RwIkE-QE?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                            
                        </div>
                    </div>
                </div>
            </FoodContent>

            <FoodContent title="2.Bún Nước Lèo Dũng Chưởng">
                <div className="flex flex-col gap-4">
                    

                    

                    <div>
                        <div>
                            <span className="font-semibold">Địa chỉ: </span>
                            <span>Đường Đồng Khởi, Phường 6, Thành phố Trà Vinh, tỉnh Trà Vinh.</span>
                        </div>
                        <div className="mt-4">
                            <iframe className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31440.537289536154!2d106.32202984244076!3d9.928364844331954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a01727a5f8d18f%3A0x398d46bf2b3e841a!2zQsO6biBuxrDhu5tjIGzDqG8gRMWpbmcgQ2jGsOG7n25n!5e0!3m2!1svi!2s!4v1703584458697!5m2!1svi!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                           
                        </div>
                    </div>

                    <div>
                        <p>
                            Nếu bạn đang ở gần quán hay có nhu cầu thưởng thức món ăn, bạn có thể thử một trong những
                            cách sau để đặt đồ ăn:
                        </p>
                        <ul className="list-[disclosure-closed] pl-5">
                            <li>
                                Cách 1: Đặt đồ ăn qua dịch vụ{' '}
                                <div className="text-center">{highlightText(`"ANH SHIPPER"`)}</div>
                                <div>
                                    <ul className="list-none">
                                        <li>Phí vận chuyển: tùy theo quãng đường giao.</li>
                                        <li>
                                            Số điện thoại: <CallTo phonenumber="0989529949" />
                                        </li>
                                        <li>
                                            Facebook: Tìm kiếm {highlightText(`"ANH SHIPPER" `)}, trong {highlightText(`"Trang"`)} và bấm vô nút{' '}
                                            {highlightText(`"Nhắn tin"`)} để đặt hàng.
                                        </li>
                                    </ul>    
                                </div>
                            </li>

                            <li>
                                Cách 2: Đặt đồ ăn qua dịch vụ{' '}
                                <div className="text-center">
                                    <span className="font-semibold italic">{highlightText(`"SHIPPER TRÀ VINH"`)}</span>
                                </div>
                                <div>
                                    <ul className="list-none">
                                        <li>Phí vận chuyển: tùy theo quãng đường giao</li>
                                        <li>
                                            Số điện thoại: <CallTo phonenumber="0961111232" />
                                        </li>
                                        <li>
                                            Facebook: Tìm kiếm {highlightText(`"SHIPPER TRÀ VINH" `)}, trong {highlightText(`"Trang" `)}và bấm vô nút{' '}
                                            {highlightText(`"Nhắn tin" `)}để đặt hàng.
                                        </li>
                                    </ul>

                                    
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl mb-4">Một số clip review bạn có thể xem:</h3>

                        <div className="flex flex-col gap-4">
                        <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/XJTgQfNm4Fs?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                            <iframe
                            className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                            src="https://www.youtube.com/embed/BHd2Sxo91cg?list=PLO4xYQBA1oxWIkVTOcy5cPvi4Jxyfgp75"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>
                        </div>
                    </div>
                </div>
            </FoodContent>

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
        </div>
    );
};

export default BUNNUOCLEOQUANTV;
