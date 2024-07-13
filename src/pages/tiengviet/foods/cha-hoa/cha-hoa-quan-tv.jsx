import FoodContent from '@/components/food-content';
import ImageViewer from '@/components/modal/image-viewer';
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';

function SVGFacebook() {
    return (
        <svg width="320" height="320" viewBox="0 0 29 29" style={{ width: 140, height: 140 }}>
            <path fill="#fff" d="M0 0h29v29H0z"></path>
           <path fill="#000" d="M0 0h7v1H0zM8 0h4v1H8zM13 0h3v1H13zM17 0h2v1H17zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM11 1h5v1H11zM18 1h3v1H18zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h1v1H9zM11 2h1v1H11zM13 2h2v1H13zM19 2h1v1H19zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM10 3h2v1H10zM14 3h2v1H14zM17 3h1v1H17zM19 3h2v1H19zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM10 4h4v1H10zM15 4h1v1H15zM18 4h2v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM9 5h1v1H9zM11 5h1v1H11zM13 5h2v1H13zM17 5h2v1H17zM20 5h1v1H20zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h2v1H8zM12 7h1v1H12zM14 7h1v1H14zM18 7h1v1H18zM20 7h1v1H20zM0 8h2v1H0zM3 8h2v1H3zM6 8h1v1H6zM9 8h1v1H9zM12 8h6v1H12zM19 8h1v1H19zM22 8h1v1H22zM28,8 h1v1H28zM0 9h1v1H0zM2 9h2v1H2zM5 9h1v1H5zM8 9h1v1H8zM10 9h1v1H10zM14 9h1v1H14zM17 9h2v1H17zM21 9h1v1H21zM23 9h2v1H23zM26 9h2v1H26zM0 10h1v1H0zM4 10h1v1H4zM6 10h1v1H6zM8 10h2v1H8zM12 10h1v1H12zM14 10h1v1H14zM24 10h1v1H24zM26 10h1v1H26zM1 11h1v1H1zM4 11h2v1H4zM14 11h2v1H14zM17 11h1v1H17zM19 11h5v1H19zM25 11h1v1H25zM28,11 h1v1H28zM0 12h1v1H0zM3 12h1v1H3zM6 12h1v1H6zM8 12h3v1H8zM13 12h2v1H13zM16 12h1v1H16zM20 12h1v1H20zM22 12h1v1H22zM28,12 h1v1H28zM0 13h4v1H0zM5 13h1v1H5zM7 13h2v1H7zM10 13h1v1H10zM12 13h1v1H12zM18 13h1v1H18zM20,13 h9v1H20zM2 14h5v1H2zM9 14h1v1H9zM14 14h2v1H14zM18 14h5v1H18zM26 14h1v1H26zM28,14 h1v1H28zM1 15h1v1H1zM3 15h1v1H3zM7 15h1v1H7zM9 15h2v1H9zM12 15h3v1H12zM16 15h1v1H16zM23 15h1v1H23zM26 15h1v1H26zM28,15 h1v1H28zM0 16h2v1H0zM6 16h1v1H6zM9 16h4v1H9zM16 16h2v1H16zM19 16h2v1H19zM23 16h1v1H23zM25 16h1v1H25zM0 17h1v1H0zM2 17h3v1H2zM9 17h1v1H9zM11 17h1v1H11zM15 17h1v1H15zM18 17h3v1H18zM24 17h1v1H24zM26 17h2v1H26zM0 18h7v1H0zM8 18h1v1H8zM12 18h4v1H12zM19 18h1v1H19zM24 18h2v1H24zM28,18 h1v1H28zM0 19h6v1H0zM11 19h1v1H11zM13 19h1v1H13zM16 19h1v1H16zM18 19h1v1H18zM25 19h2v1H25zM0 20h3v1H0zM6 20h2v1H6zM10 20h2v1H10zM13 20h1v1H13zM15 20h1v1H15zM17 20h1v1H17zM20 20h8v1H20zM8 21h2v1H8zM12 21h2v1H12zM15 21h1v1H15zM18 21h1v1H18zM20 21h1v1H20zM24 21h2v1H24zM0 22h7v1H0zM9 22h3v1H9zM13 22h1v1H13zM15 22h1v1H15zM17 22h4v1H17zM22 22h1v1H22zM24 22h2v1H24zM0 23h1v1H0zM6 23h1v1H6zM11 23h3v1H11zM16 23h2v1H16zM19 23h2v1H19zM24 23h1v1H24zM27,23 h2v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h1v1H8zM11 24h3v1H11zM16 24h1v1H16zM19 24h7v1H19zM27,24 h2v1H27zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h1v1H8zM13 25h6v1H13zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM10 26h4v1H10zM15 26h2v1H15zM19 26h1v1H19zM21 26h1v1H21zM23 26h2v1H23zM26,26 h3v1H26zM0 27h1v1H0zM6 27h1v1H6zM8 27h4v1H8zM21 27h1v1H21zM24 27h3v1H24zM28,27 h1v1H28zM0 28h7v1H0zM8 28h3v1H8zM14 28h4v1H14zM19 28h4v1H19zM24 28h2v1H24z"></path>
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
const CHAHOAQUANTV = () => {
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
        {
            text: 'Chợ Trà Vinh',
            image: 'https://buhkhkt.github.io/CHINH/ch%E1%BB%A3%20Tr%C3%A0%20Vinh.jpg',
        }
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CHỖ BÁN NỔI TIẾNG</h1>
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

            <FoodContent title="1.Chả Hoa Năm Thụy">
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
                            {'"'}Chả Hoa Năm Thụy{'"'}
                        </span>
                    </div>

                    <div>
                        <div>
                            <span className="font-semibold">Địa chỉ: </span>
                            <span>44 Phạm Thái Bường, Phường 3, Thành phố Trà Vinh, tỉnh Trà Vinh.</span>
                        </div>
                        <div className="mt-4">
                            <iframe className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9817454617223!2d106.34022016395588!3d9.935476552351275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a01a748cd17663%3A0x1c8b020033a16216!2zQ0jhuqIgSE9BIE7Egk0gVEhV4bu0!5e0!3m2!1svi!2s!4v1703594016209!5m2!1svi!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        
                            
                           
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
                            src="https://www.youtube.com/embed/FjOQnx3M68M?list=PLO4xYQBA1oxWXmpMIIXHWCHoS9CIj2uSV"
                            title="Thuyết trình về món Bánh canh Bến Có"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen=""
                        ></iframe>

                            
                        </div>
                    </div>
                </div>
            </FoodContent>

            <FoodContent title="2.Những Chỗ Khác">
                <div className="flex flex-col gap-4">
                    <div>
                        <p>
                            Chả hoa Trà Vinh có thể được mua tại các chợ, siêu thị hoặc các cửa hàng đặc sản ở Trà Vinh, tiêu biểu như 
                            {' '}{highlightText(`Chợ Trà Vinh`)}.
                        </p>
                    </div>

                    

                    <div>
                        <div>
                            <span className="font-semibold">Địa chỉ: </span>
                            <span>Phường 3, Thành phố Trà Vinh, tỉnh Trà Vinh.</span>
                        </div>
                        <div className="mt-4">
                            <iframe className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.984864018418!2d106.3406513747927!3d9.93521699016688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a017543aee1d03%3A0xd4993464099847f5!2zQ2jhu6MgVHLDoCBWaW5oLCBQaMaw4budbmcgMywgVHLDoCBWaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1703594292220!5m2!1svi!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            
                           
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

                    
                </div>
            </FoodContent>

            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
        </div>
    );
};

export default CHAHOAQUANTV;
