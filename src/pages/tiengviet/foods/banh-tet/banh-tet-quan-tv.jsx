import FoodContent from '@/components/food-content';
import ImageViewer from '@/components/modal/image-viewer';
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';

function SVGFacebook() {
    return (
        <svg width="320" height="320" viewBox="0 0 29 29" style={{ width: 140, height: 140 }}>
            <path fill="#fff" d="M0 0h29v29H0z"></path>
            <path fill="#000" d="M0 0h7v1H0zM8 0h1v1H8zM10 0h1v1H10zM12 0h1v1H12zM16 0h5v1H16zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM9 1h4v1H9zM14 1h1v1H14zM18 1h1v1H18zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h3v1H8zM13 2h2v1H13zM16 2h1v1H16zM19 2h1v1H19zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM12 3h3v1H12zM17 3h1v1H17zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM11 4h4v1H11zM16 4h1v1H16zM19 4h1v1H19zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM10 5h2v1H10zM13 5h1v1H13zM19 5h1v1H19zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM10 7h1v1H10zM12 7h1v1H12zM15 7h3v1H15zM19 7h2v1H19zM0 8h4v1H0zM6 8h1v1H6zM8 8h1v1H8zM10 8h5v1H10zM16 8h4v1H16zM21 8h1v1H21zM24 8h3v1H24zM28,8 h1v1H28zM2 9h1v1H2zM5 9h1v1H5zM7 9h1v1H7zM10 9h1v1H10zM12 9h2v1H12zM16 9h1v1H16zM20 9h1v1H20zM22 9h3v1H22zM28,9 h1v1H28zM1 10h1v1H1zM4 10h1v1H4zM6 10h2v1H6zM9 10h4v1H9zM17 10h2v1H17zM21 10h1v1H21zM26 10h2v1H26zM1 11h1v1H1zM3 11h1v1H3zM9 11h2v1H9zM13 11h1v1H13zM15 11h1v1H15zM20 11h3v1H20zM24 11h1v1H24zM28,11 h1v1H28zM3 12h4v1H3zM8 12h3v1H8zM12 12h3v1H12zM17 12h1v1H17zM19 12h1v1H19zM23 12h1v1H23zM25 12h2v1H25zM4 13h2v1H4zM11 13h3v1H11zM15 13h3v1H15zM19 13h4v1H19zM26,13 h3v1H26zM0 14h4v1H0zM5 14h2v1H5zM8 14h2v1H8zM11 14h1v1H11zM13 14h1v1H13zM18 14h3v1H18zM22 14h1v1H22zM24 14h1v1H24zM26,14 h3v1H26zM0 15h1v1H0zM2 15h1v1H2zM4 15h2v1H4zM7 15h1v1H7zM11 15h1v1H11zM14 15h1v1H14zM16 15h1v1H16zM20 15h4v1H20zM27 15h1v1H27zM0 16h1v1H0zM6 16h5v1H6zM12 16h1v1H12zM14 16h2v1H14zM18 16h4v1H18zM23 16h3v1H23zM27 16h1v1H27zM1 17h1v1H1zM3 17h1v1H3zM7 17h2v1H7zM15 17h1v1H15zM18 17h1v1H18zM20 17h1v1H20zM23 17h1v1H23zM25 17h3v1H25zM0 18h1v1H0zM3 18h2v1H3zM6 18h1v1H6zM13 18h4v1H13zM20 18h1v1H20zM22 18h3v1H22zM26 18h1v1H26zM2 19h3v1H2zM8 19h1v1H8zM10 19h2v1H10zM13 19h2v1H13zM16 19h2v1H16zM19 19h1v1H19zM23 19h2v1H23zM26 19h1v1H26zM1 20h1v1H1zM4 20h3v1H4zM10 20h1v1H10zM13 20h2v1H13zM18 20h1v1H18zM20 20h7v1H20zM8 21h2v1H8zM16 21h1v1H16zM20 21h1v1H20zM24,21 h5v1H24zM0 22h7v1H0zM9 22h1v1H9zM14 22h1v1H14zM16 22h5v1H16zM22 22h1v1H22zM24 22h2v1H24zM27 22h1v1H27zM0 23h1v1H0zM6 23h1v1H6zM9 23h1v1H9zM11 23h6v1H11zM20 23h1v1H20zM24 23h2v1H24zM28,23 h1v1H28zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM11 24h1v1H11zM15 24h1v1H15zM17 24h1v1H17zM20 24h5v1H20zM26,24 h3v1H26zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h1v1H8zM11 25h1v1H11zM13 25h1v1H13zM16 25h4v1H16zM23 25h3v1H23zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h1v1H8zM12 26h1v1H12zM14 26h1v1H14zM17 26h1v1H17zM19 26h1v1H19zM23 26h1v1H23zM26 26h1v1H26zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM8 27h3v1H8zM12 27h2v1H12zM15 27h1v1H15zM18 27h1v1H18zM20 27h1v1H20zM22 27h1v1H22zM24 27h2v1H24zM27 27h1v1H27zM0 28h7v1H0zM8 28h1v1H8zM11 28h1v1H11zM18 28h3v1H18zM22 28h1v1H22zM25 28h1v1H25zM27 28h1v1H27z"></path>
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
const BANHTETQUANTV = () => {
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
            text: `"ANH SHIPPER" `,
            image: 'https://buhkhkt.github.io/CHINH/anhshipper-search.jpg',
        },
        {
            text: `"Trang"`,
            image: 'https://buhkhkt.github.io/CHINH/anhshipper-page.jpg',
        },

        {
            text: `"Nhắn tin"`,
            image: 'https://buhkhkt.github.io/CHINH/anhshipper-message.jpg',
        },
        {
            text: `"SHIPPER TRÀ VINH"`,
            image: 'https://buhkhkt.github.io/CHINH/shipper%20Tr%C3%A0%20Vinh.jpg',
        },
        {
            text: `"SHIPPER TRÀ VINH" `,
            image: 'https://buhkhkt.github.io/CHINH/shippertv-search.jpg',
        },
        

    
        {
            text: `"Trang" `,
            image: 'https://buhkhkt.github.io/CHINH/shippertv-page.jpg',
        },

        {
            text: `"Nhắn tin" `,
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
            </div>

            <FoodContent title="1.Bánh Tét Trà Cuôn Hai Lý">
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
                            {'"'}Cơ Sở Bánh Tét Trà Cuôn Hai Lý{'"'}
                        </span>
                    </div>

                    <div>
                        <div>
                            <span className="font-semibold">Địa chỉ: </span>
                            <span>Quốc lộ 53, ấp Trà Cuôn, xã Kim Hòa, Huyện Cầu Ngang, tỉnh Trà Vinh.</span>
                        </div>
                        <div className="mt-4">
                            <iframe className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.89675429658!2d106.41198167479163!3d9.8590287902393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a017fbdc2fa74f%3A0x77c77ebcf383e634!2zQsOhbmggdMOpdCBIYWkgTMO9!5e0!3m2!1svi!2s!4v1703578328247!5m2!1svi!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                        </div>
                    </div>

                    <div>
                        <p>
                            Nếu bạn đang ở gần quán hay có nhu cầu thưởng thức món ăn, bạn có thể thử một trong những cách sau để đặt đồ ăn:
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
                            src="https://www.youtube.com/embed/p12lXTyVvzY?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>                          

                           
                        </div>
                    </div>
                </div>
            </FoodContent>

            <FoodContent title="2.Bánh Tét Trà Cuôn Phúc Lộc">
                <div className="flex flex-col gap-4">
                    

                    

                    <div>
                        <div>
                            <span className="font-semibold">Địa chỉ: </span>
                            <span>Quốc lộ 60, xã Đại Phước, Huyện Càng Long, tỉnh Trà Vinh.</span>
                        </div>
                        
                    </div>

                    <div>
                        <p>
                            Nếu bạn đang ở gần quán hay có nhu cầu thưởng thức món ăn, bạn có thể thử một trong những cách sau để đặt đồ ăn:
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
                            src="https://www.youtube.com/embed/1SSu7_YBJLM?list=PLO4xYQBA1oxVCO7kROjhPy_Y2QU7Yep49"
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

export default BANHTETQUANTV;
