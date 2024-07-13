import FoodContent from "@/components/food-content"
import ImageViewer from "@/components/modal/image-viewer";
import { withHighlighter } from "@/hocs/with-highlighter";
import { useEffect,useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

/* eslint-disable react/no-unknown-property */


const khaiquatchung = [
    // khai quat chung
    {
        text: 'vùng Ba Động',
        image: 'https://buhkhkt.github.io/CHINH/v%C3%B9ng%20ba%20%C4%91%E1%BB%99ng.jpg'
    },
    {
        text: 'biển Ba Động',
        image: 'https://buhkhkt.github.io/CHINH/bi%E1%BB%83n%20ba%20%C4%91%E1%BB%99ng.jpg'
    },
    {
        text: 'cá khoai',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20d%E1%BB%93i%20d%C3%A0o.jpg'
    },
]

const nguyenlieu1 = [
    {
        text: 'Cá khoai',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai.jpg'
    },
    {
        text: 'Gạo dẻo',
        image: 'https://buhkhkt.github.io/CHINH/g%E1%BA%A1o%20d%E1%BA%BBo.jpg'
    },
    {
        text: 'Hành, hẹ, nấm rơm, tỏi',
        image: 'https://buhkhkt.github.io/CHINH/NLP%20c%C3%A1%20khoai.jpg'
    },
    {
        text: 'Bột nêm',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BB%99t%20n%C3%AAm.jpg'
    },
]

const nguyenlieu2 = [
    {
        text: 'Cá khoai',
        image: 'https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai.jpg'
    },
    {
        text: 'Rau cần, cà chua',
        image: 'https://buhkhkt.github.io/CHINH/rau%20c%E1%BA%A7n,%20c%C3%A0%20chua.jpg'
    },
    {
        text: 'Hành lá, tỏi, ớt',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%A0nh%20t%E1%BB%8Fi%20%E1%BB%9Bt.jpg'
    },
    {
        text: 'Gia vị',
        image: 'https://buhkhkt.github.io/CHINH/gia%20v%E1%BB%8B.jpg'
    },
]

const cachlambientau = [
    { text: 'sườn non', image: 'https://buhkhkt.github.io/CHINH/s%C6%B0%E1%BB%9Dn%20non.jpg' },
    { text: 'mực ống', image: 'https://buhkhkt.github.io/CHINH/m%E1%BB%B1c%20%E1%BB%91ng.jpg' },
    { text: 'tôm tít', image: 'https://buhkhkt.github.io/CHINH/t%C3%B4m%20t%C3%ADt.webp' }
]

const thuongthucthanhpham = [
    {
        text: 'trụng sơ',
        image: 'https://buhkhkt.github.io/CHINH/b%C3%BAn%20tr%E1%BB%A5ng%20n%C6%B0%E1%BB%9Bc%20s%C3%B4i.webp'
    },
    {
        text: 'rau muống chẻ',
        image: 'https://buhkhkt.github.io/CHINH/rau%20mu%E1%BB%91ng%20ch%E1%BA%BB.png'
    },
    {
        text: 'bắp chuối xắt',
        image: 'https://buhkhkt.github.io/CHINH/b%E1%BA%AFp%20chu%E1%BB%91i.jpg'
    },
    {
        text: 'xà lách xoăn',
        image: 'https://buhkhkt.github.io/CHINH/x%C3%A0%20l%C3%A1ch%20xo%C4%83n.jpg'
    },
    {
        text: 'giá đỗ',
        image: 'https://buhkhkt.github.io/CHINH/gi%C3%A1%20%C4%91%E1%BB%97.jpg'
    },
    {
        text: 'húng thơm',
        image: 'https://buhkhkt.github.io/CHINH/h%C3%BAng%20th%C6%A1m.jpg'
    }
]

const CAKHOAIMAINTV = () => {
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

    const sampleList = [...khaiquatchung, ...nguyenlieu1, ...nguyenlieu2, ...cachlambientau, ...thuongthucthanhpham];

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
            <h1 className="text-center text-4xl tracking-tight font-bold my-4">CÁ KHOAI</h1>
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
                    src="https://www.youtube.com/embed/NoVg2-G72bU?list=PLO4xYQBA1oxUbaHHxyzaKyeOkSsyQFiZi"
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
                    Cá khoai, loại cá biển {highlightText('vùng Ba Động')}, Trà Vinh, không chỉ là một món ẩm thực phổ biến, mà còn là một trải nghiệm đầy thú vị đối với những ai yêu thích hương vị biển cả tự nhiên. Khi bước chân đến bãi {highlightText('biển Ba Động')}, bạn sẽ được mắc kẹt trong vẻ đẹp hoang sơ của thiên nhiên, với cát trắng mịn và sóng biển xanh biếc. Đây là nơi mà {highlightText('cá khoai')} trở thành một phần của hệ sinh thái vùng biển này, nơi có nguồn thức ăn dồi dào giúp chúng phát triển to lớn, thịt thơm ngon và mang trong mình rất nhiều dưỡng chất. Người dân tại Ba Động đã tạo nên những bữa ăn đặc biệt từ cá khoai, từ cá khoai nấu ngót cho đến cháo cá ngót.
                </p>
                <p>
                    Mỗi món ăn đều tạo nên hương vị độc đáo với sự kết hợp tài tình giữa nguyên liệu tươi ngon và các gia vị tự nhiên. Hương vị tự nhiên, thanh ngọt và đậm đà của loại cá biển này sẽ làm bạn phải “gật đầu khen ngon”. Và điều tuyệt vời là bạn không cần phải là một người đầu bếp giỏi để thưởng thức những món ăn này, các quán ẩm thực tại Ba Động và Trà Vinh, từ những quán lớn đến những ngôi nhà hàng nhỏ xinh, đều sẵn sàng phục vụ bạn với những món cá khoai hấp dẫn. Hãy sẵn sàng để khám phá sự đa dạng của cách chế biến cá khoai và tận hưởng hương vị biển cả độc đáo mà loài cá này mang lại.
                </p>
               
            </FoodContent>    


            <FoodContent title="Các Món Ăn Phổ Biến">
                <div className="flex flex-col gap-4">
                            <div>
                                <h4 className="text-xl font-semibold">Cháo cá khoai:</h4>

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
                                        <span>Bước 1: Sơ chế nguyên liệu</span>
                                        <p>Cá khoai ta đem cắt gọt phần đầu và rửa sạch. Phần rau thơm như hành, hẹ và nấm rơm ta đem rửa sạch rồi cắt nhỏ. Tỏi ta đem đi phi thơm.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Nấu cháo</span>
                                        <p>Bắc nồi nước ta cho gạo vào nồi. Phần cháo bắt đầu sôi ta cho phần nấm rơm vào và thêm 1 muỗng canh bột nêm. Tiếp đến ta cho phần cá khoai vào. Đến cuối cùng khi cháo đã gần chín ta cho vào rau thơm và tỏi phi là ta đã hoàn tất việc nấu một nồi cháo cá khoai rồi!</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/DexZsZzYYSQ?list=PLO4xYQBA1oxUbaHHxyzaKyeOkSsyQFiZi"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: Anh Em Lang Thang</small>
                                    </div>
                                </div>
                                <h4 className="text-xl font-semibold">Cá khoai nấu ngót:</h4>
                                <div>
                                    <span className="underline">Nguyên liệu: </span>

                                    <ul>
                                        {nguyenlieu2.map((item, index) => (
                                            <li key={index}>{index + 1}. {highlightText(item.text)}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-3 mt-6">
                                    <span className="underline">Các bước thực hiện:</span>

                                    <div>
                                        <span>Bước 1: Sơ chế nguyên liệu</span>
                                        <p>Cà chua cắt nhỏ, hành lá và cần tây ta cắt phân ra thành gốc và lá. Cá khoai ta đem cắt phần đầu và rửa sạch. Các loại rau quả ta đem đi rửa sạch.</p>
                                    </div>

                                    <div>
                                        <span>Bước 2: Chế biến</span>
                                        <p>Ta cho một ít dầu ăn vào nồi và cho phần gốc hành vào phi thơm. Đến khi ta thấy phần gốc hành đã vàng ta cho thêm nước vào nồi. Tiếp đến ta cho cà chua cùng với tỏi và ớt vào nồi để làm cho phần nước thêm ngon ngọt và cay nồng hơn. Tiếp theo ta sẽ cho cá khoai vào và nêm nếm cùng với 1 muỗng canh đường, 1 muỗng canh muối, 1 muỗng cà phê bột ngọt, 1 muỗng canh hạt nêm. Vì cá khoai rất mau chín nên các bạn cần canh khoảng 5-10 phút thì cá đã chín các bạn sẽ vớt phần cá bỏ ra dĩa. Tiếp đến ta cho phần gốc hành và gốc rau cần vào trước. Sau khoảng 1-2 phút là ta có thể cho phần lá hành và lá rau cần vào. Cuối cùng bạn có thể để riêng cá khoai ở ngoài dĩa hay là bỏ vào cùng phần lẩu đều ngon.</p>
                                    </div>

                                    

                                    <div>
                                    <iframe
                                        className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/zTkQl-eayjo?list=PLO4xYQBA1oxUbaHHxyzaKyeOkSsyQFiZi"
                                        title="Thuyết trình về món Bánh canh Bến Có"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen=""
                                    ></iframe>
                                        

                                        <small className="italic block text-center">Nguồn: trích từ kênh youtube: GẤU KUTE TV</small>
                                    </div>
                                </div>
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
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%201.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%202.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%203.jpg" className="w-full h-full object-cover"/>
                   <img src="https://buhkhkt.github.io/CHINH/c%C3%A1%20khoai%20th%C6%B0%E1%BB%9Fng%20th%E1%BB%A9c%204.jpg" className="w-full h-full object-cover"/>
                </div>

                <div>
                    <p>
                        Biển cả luôn tồn tại như một kho báu vô tận của hương vị tự nhiên và nguồn thức ăn dồi dào. Tại bãi biển Ba Động, Trà Vinh, cá khoai là một phần quý giá của thực đơn biển cả độc đáo. Loại cá này, với thịt ngon, thơm béo và độ dẻo, đã trở thành nguồn cảm hứng cho nhiều món ăn hấp dẫn, trong đó cháo cá khoai và cá khoai nấu ngót là những món ăn nổi bật nhất. Một khi bạn cắn một miếng cá khoai mềm mịn, béo ngậy như hòa tan trong miệng.
                    </p>

                    <p>
                        Cá khoai không chỉ là một loại thực phẩm, mà còn là một trải nghiệm về hương vị tươi mát của biển cả. Hãy sẵn sàng để đắm chìm trong hương vị độc đáo của từng miếng cá khoai nhé.
                    </p>

                </div>
            </FoodContent>

            <section className="p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow flex flex-col gap-4 mb-4">
                <div className="flex gap-x-5 items-center">
                    {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />}
                    <div>
                    <h3 className="font-semibold text-lg text-gray-800">Giá cả: </h3>
                <p>Dao động từ 200.000đ-250.000đ/kg.</p>
                    </div>
                    {/* {role && role !== 'normal' && <img className="w-10 h-10" src={data?.data?.imageIcon} alt="" />} */}
                </div>
            </section>
            
            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
        </div>
    )
}

export default CAKHOAIMAINTV