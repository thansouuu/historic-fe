/* eslint-disable no-unused-vars */
import RootLayout from '@/layouts/root-layout';
import CreateFeedback from '@/pages/tiengviet/create-feedback';
import Feedbacks from '@/pages/tiengviet/feedbacks';
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';
import Account from '@/pages/tiengviet/account';
import ConNguoiTV from '@/pages/tiengviet/van-hoa/con-nguoi/con-nguoi-tv';
import BunSuongQuanTV from '@/pages/tiengviet/foods/bun-suong/bun-suong-quan-tv';
import Hdsd from '@/pages/tiengviet/hdsd';
import DIALYTV from '@/pages/tiengviet/van-hoa/dia-ly/dia-ly-tv';
import KHIHAUTV from '@/pages/tiengviet/van-hoa/khi-hau/khi-hau';
import LICHSUTV from '@/pages/tiengviet/van-hoa/lich-su/lich-su';
import TAINGUYENTV from '@/pages/tiengviet/van-hoa/tai-nguyen/tai-nguyen';
import THIENNHIENTV from '@/pages/tiengviet/van-hoa/thien-nhien/thien-nhien';
import BUNSUONGMAINTV from '@/pages/tiengviet/foods/bun-suong/bun-suong-main-tv';
import BANHCANHMAINTV from '@/pages/tiengviet/foods/banh-canh/banh-canh-main-tv';
import BANHCANHQUANTV from '@/pages/tiengviet/foods/banh-canh/banh-canh-quan-tv';
import BANHRAYMAINTV from '@/pages/tiengviet/foods/banh-ray/banh-ray-main-tv';
import BANHTETMAINTV from '@/pages/tiengviet/foods/banh-tet/banh-tet-main-tv';
import BUNNUOCLEOMAINTV from '@/pages/tiengviet/foods/bun-nuoc-leo/bun-nuoc-leo-main-tv';
import CAKHOAIMAINTV from '@/pages/tiengviet/foods/ca-khoai/ca-khoai-main-tv';
import CHAHOAMAINTV from '@/pages/tiengviet/foods/cha-hoa/cha-hoa-main-tv';
import CHAOAMMAINTV from '@/pages/tiengviet/foods/chao-am/chao-am-main-tv';
import CHUUMAINTV from '@/pages/tiengviet/foods/chu-u/chu-u-main-tv';
import COMDEPMAINTV from '@/pages/tiengviet/foods/com-dep/com-dep-main-tv';
import DUASAPMAINTV from '@/pages/tiengviet/foods/dua-sap/dua-sap-main-tv';
import MAMBOHOCMAINTV from '@/pages/tiengviet/foods/mam-bo-hoc/mam-bo-hoc-main-tv';
import TRAIQUACHMAINTV from '@/pages/tiengviet/foods/trai-quach/trai-quach-main-tv';
import NUOCMAMRUOIMAINTV from '@/pages/tiengviet/foods/nuoc-mam-ruoi/nuoc-mam-ruoi-main-tv';
import BANHRAYQUANTV from '@/pages/tiengviet/foods/banh-ray/banh-ray-quan-tv';
import BANHTETQUANTV from '@/pages/tiengviet/foods/banh-tet/banh-tet-quan-tv';
import BUNNUOCLEOQUANTV from '@/pages/tiengviet/foods/bun-nuoc-leo/bun-nuoc-leo-quan-tv';
import CAKHOAIQUANTV from '@/pages/tiengviet/foods/ca-khoai/ca-khoai-quan-tv';
import CHAHOAQUANTV from '@/pages/tiengviet/foods/cha-hoa/cha-hoa-quan-tv';
import CHUUQUANTV from '@/pages/tiengviet/foods/chu-u/chu-u-quan-tv';
import CHAOAMQUANTV from '@/pages/tiengviet/foods/chao-am/chao-am-quan-tv';
import COMDEPQUANTV from '@/pages/tiengviet/foods/com-dep/com-dep-quan-tv';
import BUNSUONGQUANTV from '@/pages/tiengviet/foods/bun-suong/bun-suong-quan-tv';
import DUASAPQUANTV from '@/pages/tiengviet/foods/dua-sap/dua-sap-quan-tv';
import MAMBOHOCQUANTV from '@/pages/tiengviet/foods/mam-bo-hoc/mam-bo-hoc-quan-tv';
import NUOCMAMRUOIQUANTV from '@/pages/tiengviet/foods/nuoc-mam-ruoi/nuoc-mam-ruoi-quan-tv';
import TRAIQUACHQUANTV from '@/pages/tiengviet/foods/trai-quach/trai-quach-quan-tv';
import ForgotPassword from '@/pages/tiengviet/ForgotPassword';
import BANHCANHGAMETV from '@/pages/tiengviet/game/banh-canh/banh-canh-game-tv';
import BANHRAYGAMETV from '@/pages/tiengviet/game/banh-ray/banh-ray-game-tv';
import BANHTETGAMETV from '@/pages/tiengviet/game/banh-tet/banh-tet-game-tv';
import BUNNUOCLEOGAMETV from '@/pages/tiengviet/game/bun-nuoc-leo/bun-nuoc-leo-game-tv';
import BUNSUONGGAMETV from '@/pages/tiengviet/game/bun-suong/bun-suong-game-tv';
import CAKHOAIGAMETV from '@/pages/tiengviet/game/ca-khoai/ca-khoai-game-tv';
import CHAHOAGAMETV from '@/pages/tiengviet/game/cha-hoa/cha-hoa-game-tv';
import CHAOAMGAMETV from '@/pages/tiengviet/game/chao-am/chao-am-game-tv';
import CHUUGAMETV from '@/pages/tiengviet/game/chu-u/chu-u-game-tv';
import COMDEPGAMETV from '@/pages/tiengviet/game/com-dep/com-dep-game-tv';
import DUASAPGAMETV from '@/pages/tiengviet/game/dua-sap/dua-sap-game-tv';
import MAMBOHOCGAMETV from '@/pages/tiengviet/game/mam-bo-hoc/mam-bo-hoc-game-tv';
import NUOCMAMRUOIGAMETV from '@/pages/tiengviet/game/nuoc-mam-ruoi/nuoc-mam-ruoi-game-tv';
import TRAIQUACHGAMETV from '@/pages/tiengviet/game/trai-quach/trai-quach-game-tv';
import TONGHOPGAMETV from '@/pages/tiengviet/game/tong-hop/tong-hop-game-tv';
import VANHOAGAMETV from '@/pages/tiengviet/game/van-hoa/van-hoa-game-tv';
import Question from '@/pages/tiengviet/question/question';
import Download from '@/pages/tiengviet/download';
import Categories from '@/pages/tiengviet/categories';
import Product from '@/pages/tiengviet/product';
import Tag from '@/pages/tiengviet/tag';
import Figure from '@/pages/tiengviet/figure';
import Map from '@/pages/tiengviet/map';
import LikedPosts from '@/pages/tiengviet/like';
import Main from '@/pages/tiengviet/main';
export const routes = [
    {
        path: '/download',
        element: <Download />,
    },
    {
        path: '/tieng-viet',
        element: <RootLayout />,
        children: [
            {
                path: 'account',
                element: <Account />,
            },
            { index: true, element: <Home /> },
            { path: 'figure', element: <Figure /> },
            { path: 'figure/:id', element: <Categories /> },
            { path: 'figure/:figureId/product/:id', element: <Product /> },
            { path: 'tag/:id', element: <Tag /> },
            {
                path: 'forgot-password',
                element: <ForgotPassword />,
            },
            {
                path: 'feedbacks',
                element: <Feedbacks />,
            },
            {
                path: 'create-feedback',
                element: <CreateFeedback />,
            },
            {
                path: 'question',
                element: <Question />,
            },
            {
                path: 'map',
                element: <Map />,
            },
            {
                path: 'like',
                element: <LikedPosts />,
            },
            {
                path: 'main',
                element: <Main />,
            },
            {
                path: 'mon-an',
                children: [
                    {
                        path: 'bun-suong',
                        children: [
                            {
                                path: 'main',
                                element: <BUNSUONGMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <BUNSUONGQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'banh-canh',
                        children: [
                            {
                                path: 'main',
                                element: <BANHCANHMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <BANHCANHQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'banh-ray',
                        children: [
                            {
                                path: 'main',
                                element: <BANHRAYMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <BANHRAYQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'banh-tet',
                        children: [
                            {
                                path: 'main',
                                element: <BANHTETMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <BANHTETQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'bun-nuoc-leo',
                        children: [
                            {
                                path: 'main',
                                element: <BUNNUOCLEOMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <BUNNUOCLEOQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'ca-khoai',
                        children: [
                            {
                                path: 'main',
                                element: <CAKHOAIMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <CAKHOAIQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'cha-hoa',
                        children: [
                            {
                                path: 'main',
                                element: <CHAHOAMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <CHAHOAQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'chao-am',
                        children: [
                            {
                                path: 'main',
                                element: <CHAOAMMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <CHAOAMQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'chu-u',
                        children: [
                            {
                                path: 'main',
                                element: <CHUUMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <CHUUQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'com-dep',
                        children: [
                            {
                                path: 'main',
                                element: <COMDEPMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <COMDEPQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'dua-sap',
                        children: [
                            {
                                path: 'main',
                                element: <DUASAPMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <DUASAPQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'mam-bo-hoc',
                        children: [
                            {
                                path: 'main',
                                element: <MAMBOHOCMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <MAMBOHOCQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'nuoc-mam-ruoi',
                        children: [
                            {
                                path: 'main',
                                element: <NUOCMAMRUOIMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <NUOCMAMRUOIQUANTV />,
                            },
                        ],
                    },
                    {
                        path: 'trai-quach',
                        children: [
                            {
                                path: 'main',
                                element: <TRAIQUACHMAINTV />,
                            },
                            {
                                path: 'quan',
                                element: <TRAIQUACHQUANTV />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'game',
                children: [
                    {
                        path: 'banh-canh',
                        element: <BANHCANHGAMETV />,
                    },
                    {
                        path: 'banh-ray',
                        element: <BANHRAYGAMETV />,
                    },
                    {
                        path: 'banh-tet',
                        element: <BANHTETGAMETV />,
                    },
                    {
                        path: 'bun-nuoc-leo',
                        element: <BUNNUOCLEOGAMETV />,
                    },
                    {
                        path: 'bun-suong',
                        element: <BUNSUONGGAMETV />,
                    },
                    {
                        path: 'ca-khoai',
                        element: <CAKHOAIGAMETV />,
                    },
                    {
                        path: 'cha-hoa',
                        element: <CHAHOAGAMETV />,
                    },
                    {
                        path: 'chao-am',
                        element: <CHAOAMGAMETV />,
                    },
                    {
                        path: 'chu-u',
                        element: <CHUUGAMETV />,
                    },
                    {
                        path: 'com-dep',
                        element: <COMDEPGAMETV />,
                    },
                    {
                        path: 'dua-sap',
                        element: <DUASAPGAMETV />,
                    },
                    {
                        path: 'mam-bo-hoc',
                        element: <MAMBOHOCGAMETV />,
                    },
                    {
                        path: 'nuoc-mam-ruoi',
                        element: <NUOCMAMRUOIGAMETV />,
                    },
                    {
                        path: 'trai-quach',
                        element: <TRAIQUACHGAMETV />,
                    },
                    {
                        path: 'tong-hop',
                        element: <TONGHOPGAMETV />,
                    },
                    {
                        path: 'van-hoa',
                        element: <VANHOAGAMETV />,
                    },
                ],
            },
            {
                path: 'van-hoa',
                children: [
                    {
                        path: 'con-nguoi',
                        element: <ConNguoiTV />,
                    },
                    {
                        path: 'dia-ly',
                        element: <DIALYTV />,
                    },
                    {
                        path: 'khi-hau',
                        element: <KHIHAUTV />,
                    },
                    {
                        path: 'lich-su',
                        element: <LICHSUTV />,
                    },
                    {
                        path: 'tai-nguyen',
                        element: <TAINGUYENTV />,
                    },
                    {
                        path: 'thien-nhien',
                        element: <THIENNHIENTV />,
                    },
                ],
            },
            {
                path: 'hdsd',
                element: <Hdsd />,
            },
            { path: '*', element: <NotFound /> },
        ],
    },
];
