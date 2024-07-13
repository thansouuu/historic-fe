import FoodContent from '@/components/food-content';
import ImageViewer from '@/components/modal/image-viewer';
import { withHighlighter } from '@/hocs/with-highlighter';
import { useAuth } from '@/hooks/use-auth';
import { useEffect, useState } from 'react';


import good_icon1 from '@/assets/good/good/115729_food_icon.svg'
import good_icon2 from '@/assets/good/good/4042260_eat_food_healthy_life_organic_salad_icon.svg'
import good_icon3 from '@/assets/good/good/4053442_bowl_food_health_healthy_salad_icon.svg'
import good_icon4 from '@/assets/good/good/5730688_bat_contagion_coronavirus_eat_food_icon.svg'
import good_icon5 from '@/assets/good/good/5859161_bowl_food_middle_soup_spoon_icon.svg'
import good_icon6 from '@/assets/good/good/7322757_noodles_asian_oriental_bowl_food_icon.svg'
import good_icon7 from '@/assets/good/good/8170322_chinese_food_meal_cuisine_noodle_icon.svg'

import top_good_icon1 from '@/assets/top-good/top-good/1844701_health_nutrition_orange_citrus_food_icon.svg'
import top_good_icon2 from '@/assets/top-good/top-good/1844703_health_nutrition_pear_food_icon.svg'
import top_good_icon3 from '@/assets/top-good/top-good/1844704_nutrition_summer_watermelon_food_icon.svg'
import top_good_icon4 from '@/assets/top-good/top-good/1844705_nutrition_food_tropical_mango_icon.svg'
import top_good_icon5 from '@/assets/top-good/top-good/1844708_lemon_nutrition_citrus_food_icon.svg'
import top_good_icon6 from '@/assets/top-good/top-good/1844709_health_mythology_pomegrante_food_icon.svg'
import top_good_icon7 from '@/assets/top-good/top-good/1844710_grape_nutrition_food_icon.svg'

import best_icon1 from '@/assets/best/best/3377052_food_mun_thai_tod_icon.svg'
import best_icon2 from '@/assets/best/best/3377054_chow_food_mein_noodle_icon.svg'
import best_icon3 from '@/assets/best/best/3377055_bowl_food_noodle_ramen_icon.svg'
import best_icon4 from '@/assets/best/best/3377056_cooking_food_fried_rice_icon.svg'
import best_icon5 from '@/assets/best/best/3377057_curry_food_japan_spice_icon.svg'

const imageIconDefault = {
    'good': [good_icon1, good_icon2, good_icon3, good_icon4, good_icon5, good_icon6, good_icon7],
    'top-good': [top_good_icon1, top_good_icon2, top_good_icon3, top_good_icon4, top_good_icon5, top_good_icon6, top_good_icon7,good_icon1, good_icon2, good_icon3, good_icon4, good_icon5, good_icon6, good_icon7],
    'best': [best_icon1, best_icon2, best_icon3, best_icon4, best_icon5,top_good_icon1, top_good_icon2, top_good_icon3, top_good_icon4, top_good_icon5, top_good_icon6, top_good_icon7,good_icon1, good_icon2, good_icon3, good_icon4, good_icon5, good_icon6, good_icon7],
}

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

const DUASAPGAMETV = () => {
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
               
                    <h1 className="text-center text-3xl tracking-tight font-bold my-4">TRÒ CHƠI THỬ THÁCH</h1>
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

            

            <FoodContent title="Cách chơi trò chơi">
                <div className="flex flex-col gap-4">
                    <div>
                     

                        <div>
                            <p>
                                <ul className="list-[disclosure-closed] pl-5">
                                    <li>
                                        Đặt tên trong trò chơi là gmail mà bạn dùng trong tài khoản này : {data?.data?.email}
                                    </li>

                                    <li>
                                        Bạn sẽ nhận được bộ ảnh đặc quyền tùy theo mức hạng mà bạn đạt được:                                    
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex  flex-col gap-4 md:border-none border-t pt-4'>
                                                <span className=''>Đối với những hạng từ 4-10, sẽ nhận được bộ ảnh:</span>
                                                <ul className="list-none flex-wrap flex items-center gap-4">
                                                {
                                                    imageIconDefault['good']?.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <img src={item} alt="image-icon" className='w-10 h-10 rounded-full border border-gray-700' />
                                                            </li>
                                                        )
                                                    })
                                                }
                                                
                                            </ul>
                                            </div>
                                            <div className='flex  flex-col gap-4 md:border-none border-t pt-4'>
                                                <span className=''>Đối với những hạng từ 1-3, sẽ nhận được bộ ảnh:</span>
                                                
                                                <ul className="list-none flex-wrap flex items-center gap-4">
                                                {
                                                    imageIconDefault['top-good']?.map((item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <img src={item} alt="image-icon" className='w-10 h-10 rounded-full border border-gray-700' />
                                                            </li>
                                                        )
                                                    })
                                                }
                                                
                                            </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='mt-4'>
                                        Cuối cùng, chúc bạn chơi trò chơi vui vẻ và may mắn !
                                    </li>
                                </ul>
                            </p>
                        </div>
                        
                        
                    </div>
                </div>
                
            </FoodContent>
            <div className="mb-4">
                
                <div className="rounded-2xl shadow overflow-hidden">
                    <iframe
                    className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                    src="https://wordwall.net/embed/bddb0a71a3b142698082fa27c8e8c89a?themeId=21&templateId=69&fontStackId=0"
                    title="Thuyết trình về món Bánh canh Bến Có"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                        
                    ></iframe>
                </div>
            </div>
                        
            
            <ImageViewer isOpen={!!openImage} image={openImage} onClose={() => setOpenImage(null)} />
        </div>
    );
};

export default DUASAPGAMETV;
