import FoodContent from '@/components/food-content';
import ImageViewer from '@/components/modal/image-viewer';
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Tooltip } from 'react-tooltip';

function SVGFacebook1() {
    return (
        <svg width="320" height="320" viewBox="0 0 29 29" style={{ width: 140, height: 140 }}>
            <path fill="#fff" d="M0 0h29v29H0z"></path>
            <path d="M0 0h7v1H0zm8 0h4v1H8zm5 0h3v1h-3zm5 0h1v1h-1zm4 0h7v1h-7zM0 1h1v1H0zm6 0h1v1H6zm5 0h5v1h-5zm6 0h1v1h-1zm2 0h1v1h-1zm3 0h1v1h-1zm6 0h1v1h-1zM0 2h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm3 0h1v1H9zm2 0h1v1h-1zm2 0h2v1h-2zm5 0h3v1h-3zm4 0h1v1h-1zm2 0h3v1h-3zm4 0h1v1h-1zM0 3h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm4 0h2v1h-2zm4 0h2v1h-2zm3 0h1v1h-1zm5 0h1v1h-1zm2 0h3v1h-3zm4 0h1v1h-1zM0 4h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm4 0h4v1h-4zm5 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm3 0h1v1h-1zm2 0h3v1h-3zm4 0h1v1h-1zM0 5h1v1H0zm6 0h1v1H6zm3 0h1v1H9zm2 0h1v1h-1zm2 0h2v1h-2zm5 0h1v1h-1zm4 0h1v1h-1zm6 0h1v1h-1zM0 6h7v1H0zm8 0h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h7v1h-7zM8 7h2v1H8zm4 0h1v1h-1zm2 0h1v1h-1zm6 0h1v1h-1zM0 8h2v1H0zm3 0h2v1H3zm3 0h1v1H6zm3 0h1v1H9zm3 0h6v1h-6zm7 0h1v1h-1zm3 0h1v1h-1zm6 0h1v1h-1zM0 9h1v1H0zm3 0h1v1H3zm2 0h1v1H5zm2 0h2v1H7zm3 0h1v1h-1zm4 0h1v1h-1zm7 0h1v1h-1zm2 0h2v1h-2zm3 0h2v1h-2zM0 10h1v1H0zm3 0h2v1H3zm3 0h1v1H6zm2 0h2v1H8zm4 0h1v1h-1zm2 0h1v1h-1zm3 0h1v1h-1zm7 0h1v1h-1zm2 0h1v1h-1zM0 11h1v1H0zm2 0h1v1H2zm2 0h1v1H4zm3 0h2v1H7zm7 0h2v1h-2zm3 0h1v1h-1zm2 0h5v1h-5zm6 0h1v1h-1zm3 0h1v1h-1zM1 12h7v1H1zm8 0h2v1H9zm4 0h2v1h-2zm3 0h1v1h-1zm4 0h1v1h-1zm2 0h1v1h-1zm6 0h1v1h-1zM0 13h1v1H0zm2 0h2v1H2zm3 0h1v1H5zm5 0h1v1h-1zm2 0h1v1h-1zm5 0h2v1h-2zm3 0h9v1h-9zM2 14h2v1H2zm3 0h2v1H5zm3 0h1v1H8zm2 0h1v1h-1zm4 0h4v1h-4zm5 0h4v1h-4zm7 0h1v1h-1zm2 0h1v1h-1zM0 15h2v1H0zm4 0h2v1H4zm3 0h1v1H7zm2 0h1v1H9zm3 0h4v1h-4zm11 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zM0 16h3v1H0zm5 0h2v1H5zm3 0h1v1H8zm2 0h3v1h-3zm9 0h2v1h-2zm4 0h1v1h-1zm2 0h1v1h-1zM0 17h2v1H0zm3 0h2v1H3zm4 0h1v1H7zm2 0h1v1H9zm2 0h1v1h-1zm4 0h1v1h-1zm3 0h3v1h-3zm6 0h1v1h-1zm2 0h2v1h-2zM0 18h2v1H0zm4 0h1v1H4zm2 0h3v1H6zm6 0h4v1h-4zm7 0h1v1h-1zm5 0h2v1h-2zm4 0h1v1h-1zM0 19h2v1H0zm3 0h2v1H3zm6 0h3v1H9zm4 0h1v1h-1zm5 0h1v1h-1zm7 0h2v1h-2zM0 20h2v1H0zm6 0h1v1H6zm3 0h1v1H9zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h3v1h-3zm5 0h8v1h-8zM8 21h3v1H8zm4 0h2v1h-2zm3 0h1v1h-1zm3 0h1v1h-1zm2 0h1v1h-1zm4 0h2v1h-2zM0 22h7v1H0zm9 0h3v1H9zm4 0h1v1h-1zm2 0h1v1h-1zm4 0h2v1h-2zm3 0h1v1h-1zm2 0h2v1h-2zM0 23h1v1H0zm6 0h1v1H6zm4 0h4v1h-4zm5 0h1v1h-1zm2 0h1v1h-1zm2 0h2v1h-2zm5 0h1v1h-1zm3 0h2v1h-2zM0 24h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm2 0h2v1H8zm3 0h3v1h-3zm4 0h1v1h-1zm2 0h1v1h-1zm2 0h7v1h-7zm8 0h2v1h-2zM0 25h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm2 0h1v1H8zm2 0h1v1h-1zm3 0h2v1h-2zm3 0h1v1h-1zm2 0h1v1h-1zm10 0h1v1h-1zM0 26h1v1H0zm2 0h3v1H2zm4 0h1v1H6zm5 0h3v1h-3zm4 0h1v1h-1zm4 0h1v1h-1zm2 0h1v1h-1zm2 0h2v1h-2zm3 0h3v1h-3zM0 27h1v1H0zm6 0h1v1H6zm2 0h2v1H8zm3 0h1v1h-1zm7 0h1v1h-1zm3 0h1v1h-1zm3 0h3v1h-3zm4 0h1v1h-1zM0 28h7v1H0zm8 0h2v1H8zm6 0h3v1h-3zm5 0h4v1h-4zm5 0h2v1h-2z"></path>
        </svg>
    );
}


function SVGFacebook2() {
    return (
        <svg width="320" height="320" viewBox="0 0 29 29" style={{ width: 140, height: 140 }}>
            <path fill="#fff" d="M0 0h29v29H0z"></path>
            <path fill="#000" d="M0 0h7v1H0zM8 0h1v1H8zM11 0h2v1H11zM15 0h2v1H15zM18 0h1v1H18zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM9 1h2v1H9zM16 1h2v1H16zM19 1h1v1H19zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM10 2h1v1H10zM12 2h1v1H12zM15 2h2v1H15zM18 2h3v1H18zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM12 3h1v1H12zM16 3h2v1H16zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h1v1H9zM11 4h1v1H11zM14 4h4v1H14zM19 4h1v1H19zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM10 5h1v1H10zM12 5h1v1H12zM15 5h2v1H15zM18 5h1v1H18zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h1v1H8zM10 7h2v1H10zM13 7h1v1H13zM15 7h2v1H15zM20 7h1v1H20zM0 8h2v1H0zM3 8h2v1H3zM6 8h1v1H6zM9 8h3v1H9zM13 8h1v1H13zM16 8h2v1H16zM19 8h1v1H19zM22 8h1v1H22zM28,8 h1v1H28zM2 9h1v1H2zM4 9h2v1H4zM7 9h1v1H7zM9 9h1v1H9zM12 9h2v1H12zM16 9h1v1H16zM21 9h1v1H21zM23 9h2v1H23zM26 9h2v1H26zM0 10h3v1H0zM6 10h1v1H6zM10 10h2v1H10zM13 10h1v1H13zM15 10h1v1H15zM17 10h1v1H17zM24 10h1v1H24zM26 10h1v1H26zM1 11h3v1H1zM7 11h7v1H7zM15 11h1v1H15zM17 11h1v1H17zM19 11h5v1H19zM25 11h1v1H25zM28,11 h1v1H28zM1 12h1v1H1zM3 12h4v1H3zM9 12h1v1H9zM11 12h3v1H11zM16 12h1v1H16zM20 12h1v1H20zM22 12h1v1H22zM28,12 h1v1H28zM0 13h1v1H0zM5 13h1v1H5zM7 13h2v1H7zM13 13h6v1H13zM20,13 h9v1H20zM0 14h1v1H0zM2 14h1v1H2zM4 14h1v1H4zM6 14h1v1H6zM8 14h6v1H8zM15 14h1v1H15zM17 14h1v1H17zM19 14h4v1H19zM26 14h1v1H26zM28,14 h1v1H28zM3 15h3v1H3zM8 15h2v1H8zM11 15h1v1H11zM23 15h1v1H23zM26 15h1v1H26zM28,15 h1v1H28zM0 16h1v1H0zM3 16h1v1H3zM6 16h1v1H6zM10 16h1v1H10zM14 16h2v1H14zM19 16h2v1H19zM23 16h1v1H23zM25 16h1v1H25zM0 17h3v1H0zM10 17h6v1H10zM18 17h3v1H18zM24 17h1v1H24zM26 17h2v1H26zM0 18h2v1H0zM3 18h2v1H3zM6 18h2v1H6zM11 18h1v1H11zM15 18h1v1H15zM19 18h1v1H19zM24 18h2v1H24zM28,18 h1v1H28zM0 19h3v1H0zM12 19h1v1H12zM14 19h1v1H14zM18 19h1v1H18zM25 19h2v1H25zM0 20h5v1H0zM6 20h2v1H6zM10 20h1v1H10zM12 20h3v1H12zM17 20h1v1H17zM20 20h8v1H20zM8 21h1v1H8zM14 21h1v1H14zM18 21h1v1H18zM20 21h1v1H20zM24 21h2v1H24zM0 22h7v1H0zM9 22h2v1H9zM12 22h1v1H12zM14 22h3v1H14zM19 22h2v1H19zM22 22h1v1H22zM24 22h2v1H24zM0 23h1v1H0zM6 23h1v1H6zM9 23h1v1H9zM14 23h1v1H14zM16 23h2v1H16zM19 23h2v1H19zM24 23h1v1H24zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h2v1H8zM13 24h2v1H13zM16 24h2v1H16zM19 24h7v1H19zM27,24 h2v1H27zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h3v1H8zM12 25h1v1H12zM15 25h4v1H15zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM10 26h1v1H10zM14 26h2v1H14zM18 26h2v1H18zM21 26h1v1H21zM23 26h2v1H23zM26,26 h3v1H26zM0 27h1v1H0zM6 27h1v1H6zM8 27h1v1H8zM10 27h1v1H10zM12 27h3v1H12zM18 27h1v1H18zM21 27h1v1H21zM24 27h3v1H24zM28,27 h1v1H28zM0 28h7v1H0zM8 28h5v1H8zM15 28h2v1H15zM19 28h4v1H19zM24 28h2v1H24z"></path>
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

//disable react/no-unknown-property */
const BUNSUONGQUANTV = () => {
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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">QUÁN ĂN NỔI TIẾNG</h1>
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

            <FoodContent title="1.Bún Suông Dư Vân">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold self-baseline">Mã QR Facebook</span>
                        <div className="flex justify-center">
                            <SVGFacebook1 />
                        </div>
                    </div>

                    <div>
                        <span className="font-semibold">Hoặc </span>tìm kiếm:{' '}
                        <span>
                            {'"'}Bún suông DƯ VÂN since 1986{'"'}
                        </span>
                    </div>

                    <div>
                        <div>
                            <span className="font-semibold">Địa chỉ: </span>
                            <span>644 Võ Nguyên Giáp, Khóm 1, Phường 8, Thành phố Trà Vinh, tỉnh Trà Vinh.</span>
                        </div>
                        <div className="mt-4">
                            <iframe
                                className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2134023983367!2d106.31478855285823!3d9.916177088409997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a017e9bbbcac73%3A0x132724c5d39cea82!2zQsO6biBzdcO0bmcgRMavIFbDgk4gc2luY2UgMTk4NiAtIMSQ4bq3YyBz4bqjbiBUcsOgIFZpbmggduG7m2kgY8O0bmcgdGjhu6ljIGdpYSB0cnV54buBbg!5e0!3m2!1svi!2s!4v1698251125781!5m2!1svi!2s"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
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
                                src="https://www.youtube.com/embed/_GKJNVyH6bI?list=PLO4xYQBA1oxWOFFUkwDngz78iTEFjkoIg"
                                title="Review quán Bún suông Dư vân 1"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen=""
                            ></iframe>
                            <iframe
                                className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                src="https://www.youtube.com/embed/RqrI9S24YVI?list=PLO4xYQBA1oxWOFFUkwDngz78iTEFjkoIg"
                                title="Review quán Bún suông Dư vân 1"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen=""
                            ></iframe>
                            
                        </div>
                    </div>
                </div>
            </FoodContent>

            <FoodContent title="2.Bún Suông Hùi Yến">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold self-baseline">Mã QR Facebook</span>
                        <div className="flex justify-center">
                            <SVGFacebook2 />
                        </div>
                    </div>

                    <div>
                        <span className="font-semibold">Hoặc </span>tìm kiếm:{' '}
                        <span>
                            {'"'}Bún suông Hùi Yến{'"'}
                        </span>
                    </div>

                    <div>
                        <div>
                            <span className="font-semibold">Địa chỉ: </span>
                            <span>56/4 Hùng Vương, Khóm 3, Phường 4, Thành phố Trà Vinh, tỉnh Trà Vinh.</span>
                        </div>
                        <div className="mt-4">
                            <iframe
                                className="w-full h-auto aspect-square border-4 border-gray-600 rounded-xl overflow-hidden"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9568575045964!2d106.33976047480975!3d9.937547774106669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a017563f0bbff7%3A0xd27972836cb9e408!2zQsO6biBTdcO0bmcgSMOZSSBZ4bq-TiAtIMSQ4bq3YyBz4bqjbiBUcsOgIFZpbmg!5e0!3m2!1svi!2s!4v1698316885395!5m2!1svi!2s"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
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
                                src="https://www.youtube.com/embed/XA_eZpsA8mQ?list=PLO4xYQBA1oxWOFFUkwDngz78iTEFjkoIg"
                                title="Review quán Bún suông Dư vân 1"
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

export default BUNSUONGQUANTV;
