// import React, { memo, useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import cn from '@/helper/cn';
// import FoodContent from '@/components/food-content';
// import FeedbackCard from '@/components/feeadback-detail/feedback-card';
// import {
//     EmailShareButton,
//     FacebookShareButton,
//     TwitterShareButton,
//     WhatsappShareButton,
//     EmailIcon,
//     FacebookIcon,
//     TwitterIcon,
//     WhatsappIcon
// } from 'react-share';
// import { useAuth } from '@/hooks/use-auth';
// import productData from '@/data/product';
// import { uploadToCloudinary } from '@/hooks/use-upload-cloudinary';
// import CardContentHightlight from '@/components/card-content/card-content-hightlight';
// import CardContentText from '@/components/card-content/card-content-text';

// const Product = memo(() => {
//     const { isLoggedIn } = useAuth();
//     const [product, setProduct] = useState(null);
//     const [isComent, setIsComemt] = useState(false);
//     const [feedbacks, setFeedbacks] = useState([]);
//     const [images, setImages] = useState([]);
//     const [imageValue, setImagevalue] = useState('');
//     const [cloudinaryFiles, setCloudinaryFiles] = useState({});
//     const [isCreateFeedback, setIsCreateFeedback] = useState(false);
//     const [comment, setComment] = useState('');
//     const [convertFeedBacks, setConvertFeedBacks] = useState([]);
//     const [isLiked, setIsLiked] = useState(false);
//     const [showComments, setShowComments] = useState(false);
//     const [users, setUsers] = useState([]);
//     const [mentionList, setMentionList] = useState([]);
//     const params = useParams();

//     const handleComemt = async (e) => {
//         setIsCreateFeedback(true);
//         e.preventDefault();
//         try {
//             const result = await uploadToCloudinary(cloudinaryFiles);
//             const imageUrlList = result.map((file) => file.secure_url);
//             const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/feedback`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//                 body: JSON.stringify({
//                     foodName: product?.title,
//                     comment: comment,
//                     overview: 'none',
//                     making: 'none',
//                     enjoy: 'none',
//                     restaurant: 'none',
//                     images: imageUrlList,
//                     productId: product?.id,
//                 }),
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 toast.success('Bình luận đã được gửi');
//                 getListFeedBack();
//                 return;
//             }
//             toast.error(data?.message);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setIsCreateFeedback(false);
//             setComment('');
//             setImages([]);
//             setCloudinaryFiles({});
//             setImagevalue('');
//         }
//     };

//     const handleOpenComment = () => {
//         if (!isLoggedIn) {
//             toast.error('Bạn phải đăng nhập để đánh giá!');
//             return;
//         }
//         setIsComemt(!isComent);
//     };

//     const getListFeedBack = async () => {
//         const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/feedback`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const data = await response.json();
//         setFeedbacks(data?.data);
//         handleSort('desc', data?.data);
//     };

//     const handleFileChange = (event) => {
//         const files = event.target.files;
//         setImagevalue(event.target.value);
//         const selectedImagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
//         setImages(selectedImagesArray);
//         setCloudinaryFiles(files);
//     };

//     useEffect(() => {
//         const productList = productData.find((item) => item.figureId == params.figureId);
//         const product = productList?.data.find((item) => item.id == params.id);
//         setProduct(product);
//         getListFeedBack();
//     }, [params]);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                     },
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     if (data) {
//                         setIsLiked(data.likes && data.likes.includes(product?.title));
//                     }
//                 } else {
//                     console.error('Failed to fetch user data');
//                 }
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         if (isLoggedIn) {
//             fetchUser();
//         }
//     }, [isLoggedIn, product]);

//     const fetchAllUsers = async () => {
//         try {
//             const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me/users`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setUsers(data.data);
//             } else {
//                 console.error('Failed to fetch users');
//             }
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     useEffect(() => {
//         fetchAllUsers();
//     }, []);

//     const handleMentionInput = (e) => {
//         const inputValue = e.target.value;
//         setComment(inputValue);

//         const lastChar = inputValue.slice(-1);
//         if (lastChar === '@') {
//             setMentionList(users);
//         } else if (inputValue.includes('@')) {
//             const searchTerm = inputValue.split('@').pop();
//             const filteredUsers = users.filter((user) =>
//                 user.name.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//             setMentionList(filteredUsers);
//         } else {
//             setMentionList([]);
//         }
//     };

//     const selectUser = (user) => {
//         const updatedComment = comment + user.name + ' ';
//         setComment(updatedComment);
//         setMentionList([]);
//     };

//     const getFeedBackByIdProduct = (figureId, id, data) => {
//         const productList = productData.find((item) => item.figureId == figureId);
//         const product = productList?.data.find((item) => item.id == id);
//         return data?.filter((item) => item.productId == product?.id);
//     };

//     const sortFeedBack = (type, data) => {
//         if ('desc' == type) {
//             return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//         }
//         if ('asc' == type) {
//             return data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
//         }
//     };

//     const handleSort = (type, data) => {
//         setConvertFeedBacks(sortFeedBack(type, getFeedBackByIdProduct(params.figureId, params.id, data)));
//     };

//     const handleLike = async () => {
//         try {
//             const userResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             });

//             if (!userResponse.ok) {
//                 toast.error('Failed to fetch user data');
//                 return;
//             }

//             const userData = await userResponse.json();

//             const likeResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/like`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     user: userData,
//                     productTitle: product?.title,
//                 }),
//             });

//             if (likeResponse.ok) {
//                 toast.success('Product liked successfully');
//                 setIsLiked(true);
//             } else {
//                 const likeData = await likeResponse.json();
//                 toast.error(likeData.message);
//             }
//         } catch (error) {
//             console.error('Error liking product:', error);
//             toast.error('Error liking product');
//         }
//     };

//     const handleShare = async () => {
//         if (navigator.share) {
//             try {
//                 await navigator.share({
//                     title: product?.title || 'Review Product',
//                     text: 'Check out this amazing product review!',
//                     url: window.location.href,
//                 });
//             } catch (error) {
//                 console.error('Error sharing:', error);
//             }
//         } else {
//             toast.error('Web Share API is not supported in your browser.');
//         }
//     };

//     const handleCopyLink = () => {
//         navigator.clipboard.writeText(window.location.href)
//             .then(() => {
//                 toast.success('Link copied to clipboard');
//             })
//             .catch(err => {
//                 console.error('Failed to copy link:', err);
//                 toast.error('Failed to copy link');
//             });
//     };

//     const toggleComments = () => {
//         setShowComments(!showComments);
//     };

//     const encodedUrl = encodeURIComponent(window.location.href);
//     const encodedTitle = encodeURIComponent(product?.title || 'Review Product');

//     return (
//         <div className="flex flex-col gap-4 pb-4 max-w-[992px] mx-auto">
//             <iframe
//                 className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
//                 src={product?.video}
//                 title="Thuyết trình về món Bánh canh Bến Có"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
//                 allowFullScreen
//             ></iframe>
//             <h2 className="text-3xl text-center pb-4 border-b border-slate-800 flex justify-center items-center gap-2">
//                 {product?.title}
//                 <button onClick={handleLike}>
//                     {isLiked ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" width="24" height="24">
//                                   <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                         </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" width="24" height="24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                         </svg>
//                     )}
//                 </button>
//             </h2>
//             <div className="flex flex-col gap-4">
//                 {product?.contents?.map((content, index) => (
//                     <FoodContent title={content.title} key={index}>
//                         {content.data?.map((item, key) => (
//                             <div key={key}>
//                                 {item.type === 'text' && <CardContentText value={item.value} />}
//                                 {item.type === 'hightlight' && (
//                                     <CardContentHightlight value={item.value} hightlightList={item.hightlightList} />
//                                 )}
//                                 {item.type === 'grid-image' && (
//                                     <div className="grid grid-cols-2 gap-2">
//                                         {item.value.map((image, idx) => (
//                                             <div className="border border-gray-200 rounded-md" key={idx}>
//                                                 <img
//                                                     alt="content-item"
//                                                     className="w-full h-[200px] object-contain rounded-md"
//                                                     src={image}
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </FoodContent>
//                 ))}
//                 <FoodContent title="Thẻ">
//                     <div className="flex items-center gap-2 flex-wrap">
//                         {product?.tags?.map((tag, index) => (
//                             <button key={index} className="py-2 px-4 bg-slate-200 hover:bg-slate-300">
//                                 <Link to={tag.link}>{tag.title}</Link>
//                             </button>
//                         ))}
//                     </div>
//                 </FoodContent>
//                 <FoodContent title="Đánh giá và nhận xét">
//                     <button
//                         className={cn('text-white w-fit m-auto px-4 rounded py-2', {
//                             'bg-green-400 hover:bg-green-500': !isComent,
//                             'bg-red-400 hover:bg-red-500': isComent,
//                         })}
//                         onClick={handleOpenComment}
//                     >
//                         {isComent ? 'Hủy đánh giá' : 'Viết đánh giá'}
//                     </button>
//                     {isComent && (
//                         <form onSubmit={handleComemt} className="flex flex-col gap-4 mt-4">
//                             <div className="flex flex-col gap-1 relative">
//                                 <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="comment">
//                                     Bình luận
//                                 </label>
//                                 <textarea
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     id="comment"
//                                     name="comment"
//                                     rows="5"
//                                     placeholder="Nhập đánh giá..."
//                                     required
//                                     value={comment}
//                                     onChange={handleMentionInput}
//                                 ></textarea>
//                                 {mentionList.length > 0 && (
//                                     <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-md mt-1 max-h-40 overflow-y-auto z-10">
//                                         {mentionList.map((user, index) => (
//                                             <li
//                                                 key={index}
//                                                 className="p-2 cursor-pointer hover:bg-gray-200 flex items-center gap-2"
//                                                 onClick={() => selectUser(user)}
//                                             >
//                                                 <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
//                                                 {user.name}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                             <div className="flex flex-col gap-1">
//                                 <label htmlFor="fileInput"> Hình ảnh đính kèm:</label>
//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     multiple
//                                     id="fileInput"
//                                     value={imageValue}
//                                     onChange={handleFileChange}
//                                 />
//                             </div>
//                             <div className="grid grid-cols-2 gap-2 rounded-md">
//                                 {images?.map((image, index) => (
//                                     <div className="border border-gray-200 rounded-md" key={index}>
//                                         <img
//                                             alt="image-upload-item"
//                                             className="w-full h-[200px] object-contain rounded-md"
//                                             src={image}
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                             <button
//                                 className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-fit"
//                                 type="submit"
//                             >
//                                 {isCreateFeedback ? 'Đang gửi...' : 'Gửi'}
//                             </button>
//                         </form>
//                     )}
//                 </FoodContent>
//                 <FoodContent title="Danh sách đánh giá">
//                     <button
//                         className={cn('text-white w-fit m-auto px-4 rounded py-2', {
//                             'bg-green-400 hover:bg-green-500': !showComments,
//                             'bg-red-400 hover:bg-red-500': showComments,
//                         })}
//                         onClick={toggleComments}
//                     >
//                         {showComments ? 'Ẩn bình luận' : 'Hiển thị bình luận'}
//                     </button>
//                     {showComments && (
//                         <div className="mt-4">
//                             <div className="flex justify-center mb-4">
//                                 <select name="sort" id="sort" onChange={(e) => handleSort(e.target.value, feedbacks)}>
//                                     <option value="desc">Mới nhất</option>
//                                     <option value="asc">Cũ nhất</option>
//                                 </select>
//                             </div>
//                             <div className="flex flex-col gap-4">
//                                 {convertFeedBacks.map((item, index) => (
//                                     <div key={index}>
//                                         <FeedbackCard item={item} />
//                                     </div>
//                                 ))}
//                                 {convertFeedBacks.length === 0 && <div className="text-center">Chưa có đánh giá</div>}
//                             </div>
//                         </div>
//                     )}
//                 </FoodContent>
//                 <FoodContent title="Chia sẻ">
//                     <div className="flex gap-4">
//                         <FacebookShareButton url={window.location.href} quote={product?.title}>
//                             <FacebookIcon size={32} round />
//                         </FacebookShareButton>
//                         <TwitterShareButton url={window.location.href} title={product?.title}>
//                             <TwitterIcon size={32} round />
//                         </TwitterShareButton>
//                         <WhatsappShareButton url={window.location.href} title={product?.title}>
//                             <WhatsappIcon size={32} round />
//                         </WhatsappShareButton>
//                         {/* <EmailShareButton url={window.location.href} subject={product?.title}>
//                             <EmailIcon size={32} round />
//                         </EmailShareButton> */}
//                         <a href={`https://zalo.me/share/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(product?.title)}`} target="_blank" rel="noopener noreferrer">
//                             <img src="/public/images/zalo.png" alt="Share on Zalo" style={{ width: 32, height: 32, borderRadius: '50%' }} />
//                         </a>
//                         <a href={`https://www.messenger.com/t/?link=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
//                             <img src="/public/images/mess.png" alt="Share on Messenger" style={{ width: 32, height: 32, borderRadius: '50%' }} />
//                         </a>
//                         <button onClick={handleCopyLink} className="flex items-center gap-2">
//                             <img src="/public/images/link.png" alt="Copy Link" style={{ width: 32, height: 32, borderRadius: '50%' }} />
//                             Copy Link
//                         </button>
//                     </div>
//                 </FoodContent>
//                 <FoodContent title="Trò chơi thử thách">dbdbdfb</FoodContent>
//             </div>
//         </div>
//     );
// });

// export default Product;

// Product.displayName = 'Product';

import React, { memo, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import cn from '@/helper/cn';
import FoodContent from '@/components/food-content';
import FeedbackCard from '@/components/feeadback-detail/feedback-card';

import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon
} from 'react-share';
import { useAuth } from '@/hooks/use-auth';
import productData from '@/data/product';
import { uploadToCloudinary } from '@/hooks/use-upload-cloudinary';
import CardContentHightlight from '@/components/card-content/card-content-hightlight';
import CardContentText from '@/components/card-content/card-content-text';




const Product = memo(() => {
    const { isLoggedIn, mutate, data } = useAuth();

    // const { isLoggedIn } = useAuth();
    const [product, setProduct] = useState(null);
    const [isComent, setIsComemt] = useState(false);
    const [feedbacks, setFeedbacks] = useState([]);
    const [images, setImages] = useState([]);
    const [imageValue, setImagevalue] = useState('');
    const [cloudinaryFiles, setCloudinaryFiles] = useState({});
    const [isCreateFeedback, setIsCreateFeedback] = useState(false);
    const [comment, setComment] = useState('');
    const [convertFeedBacks, setConvertFeedBacks] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [showInfos, setShowInfos] = useState(false);
    const [users, setUsers] = useState([]);
    const [mentionList, setMentionList] = useState([]);
    const params = useParams();

    const handleComemt = async (e) => {
        setIsCreateFeedback(true);
        e.preventDefault();
        try {
            const result = await uploadToCloudinary(cloudinaryFiles);
            const imageUrlList = result.map((file) => file.secure_url);
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify({
                    foodName: product?.title,
                    comment: comment,
                    overview: 'none',
                    making: 'none',
                    enjoy: 'none',
                    restaurant: 'none',
                    images: imageUrlList,
                    productId: product?.id,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('Bình luận đã được gửi');
                getListFeedBack();
                return;
            }
            toast.error(data?.message);
        } catch (error) {
            console.error(error);
        } finally {
            setIsCreateFeedback(false);
            setComment('');
            setImages([]);
            setCloudinaryFiles({});
            setImagevalue('');
        }
    };

    const handleOpenComment = () => {
        if (!isLoggedIn) {
            toast.error('Bạn phải đăng nhập để đánh giá!');
            return;
        }
        setIsComemt(!isComent);
    };

    const getListFeedBack = async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/feedback`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setFeedbacks(data?.data);
        handleSort('desc', data?.data);
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        setImagevalue(event.target.value);
        const selectedImagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
        setImages(selectedImagesArray);
        setCloudinaryFiles(files);
    };

    useEffect(() => {
        const productList = productData.find((item) => item.figureId == params.figureId);
        const product = productList?.data.find((item) => item.id == params.id);
        setProduct(product);
        getListFeedBack();
    }, [params]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data) {
                        setIsLiked(data.likes && data.likes.includes(product?.title));
                    }
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (isLoggedIn) {
            fetchUser();
        }
    }, [isLoggedIn, product]);

    const fetchAllUsers = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUsers(data.data);
            } else {
                console.error('Failed to fetch users');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const handleMentionInput = (e) => {
        const inputValue = e.target.value;
        setComment(inputValue);

        const lastChar = inputValue.slice(-1);
        if (lastChar === '@') {
            setMentionList(users);
        } else if (inputValue.includes('@')) {
            const searchTerm = inputValue.split('@').pop();
            const filteredUsers = users.filter((user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setMentionList(filteredUsers);
        } else {
            setMentionList([]);
        }
    };

    const selectUser = (user) => {
        const updatedComment = comment + user.name + ' ';
        setComment(updatedComment);
        setMentionList([]);
    };

    const getFeedBackByIdProduct = (figureId, id, data) => {
        const productList = productData.find((item) => item.figureId == figureId);
        const product = productList?.data.find((item) => item.id == id);
        return data?.filter((item) => item.productId == product?.id);
    };

    const sortFeedBack = (type, data) => {
        if ('desc' == type) {
            return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        if ('asc' == type) {
            return data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
    };

    const handleSort = (type, data) => {
        setConvertFeedBacks(sortFeedBack(type, getFeedBackByIdProduct(params.figureId, params.id, data)));
    };

    const handleLike = async () => {
        try {
            const userResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            if (!userResponse.ok) {
                toast.error('Failed to fetch user data');
                return;
            }

            const userData = await userResponse.json();

            const likeResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: userData,
                    productTitle: product?.title,
                }),
            });

            if (likeResponse.ok) {
                toast.success('Product liked successfully');
                setIsLiked(true);
            } else {
                const likeData = await likeResponse.json();
                toast.error(likeData.message);
            }
        } catch (error) {
            console.error('Error liking product:', error);
            toast.error('Error liking product');
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: product?.title || 'Review Product',
                    text: 'Check out this amazing product review!',
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            toast.error('Web Share API is not supported in your browser.');
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                toast.success('Link copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy link:', err);
                toast.error('Failed to copy link');
            });
    };

    const toggleComments = () => {
        setShowComments(!showComments);
    };
    const toggleInfos = () => {
        setShowInfos(!showInfos);
    };

    const encodedUrl = encodeURIComponent(window.location.href);
    const encodedTitle = encodeURIComponent(product?.title || 'Review Product');

    return (
        <div className="flex flex-col gap-4 pb-4 max-w-[992px] mx-auto">
            <iframe
                className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                src={product?.video}
                title="Thuyết trình về món Bánh canh Bến Có"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
            ></iframe>
            <h2 className="text-3xl text-center pb-4 border-b border-slate-800 flex justify-center items-center gap-2">
                {product?.title}
                <button onClick={handleLike}>
                    {isLiked ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" width="24" height="24">
                                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    )}
                </button>
            </h2>
            <div className="flex flex-col gap-4">
                {product?.contents?.map((content, index) => (
                    <FoodContent title={content.title} key={index}>
                        {content.data?.map((item, key) => (
                            <div key={key}>
                                {item.type === 'text' && <CardContentText value={item.value} />}
                                {item.type === 'hightlight' && (
                                    <CardContentHightlight value={item.value} hightlightList={item.hightlightList} />
                                )}
                                {item.type === 'grid-image' && (
                                    <div className="grid grid-cols-2 gap-2">
                                        {item.value.map((image, idx) => (
                                            <div className="border border-gray-200 rounded-md" key={idx}>
                                                <img
                                                    alt="content-item"
                                                    className="w-full h-[200px] object-contain rounded-md"
                                                    src={image}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </FoodContent>
                ))}
                <FoodContent title="Thẻ">
                    <div className="flex items-center gap-2 flex-wrap">
                        {product?.tags?.map((tag, index) => (
                            <button key={index} className="py-2 px-4 bg-slate-200 hover:bg-slate-300">
                                <Link to={tag.link}>{tag.title}</Link>
                            </button>
                        ))}
                    </div>
                </FoodContent>
                <FoodContent title="Đánh giá và nhận xét">
                    <button
                        className={cn('text-white w-fit m-auto px-4 rounded py-2', {
                            'bg-green-400 hover:bg-green-500': !isComent,
                            'bg-red-400 hover:bg-red-500': isComent,
                        })}
                        onClick={handleOpenComment}
                    >
                        {isComent ? 'Hủy đánh giá' : 'Viết đánh giá'}
                    </button>
                    {isComent && (
                        <form onSubmit={handleComemt} className="flex flex-col gap-4 mt-4">
                            <div className="flex flex-col gap-1 relative">
                                <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="comment">
                                    Bình luận
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="comment"
                                    name="comment"
                                    rows="5"
                                    placeholder="Nhập đánh giá..."
                                    required
                                    value={comment}
                                    onChange={handleMentionInput}
                                ></textarea>
                                {mentionList.length > 0 && (
                                    <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-md mt-1 max-h-40 overflow-y-auto z-10">
                                        {mentionList.map((user, index) => (
                                            <li
                                                key={index}
                                                className="p-2 cursor-pointer hover:bg-gray-200 flex items-center gap-2"
                                                onClick={() => selectUser(user)}
                                            >
                                                <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full" />
                                                {user.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="fileInput"> Hình ảnh đính kèm:</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    id="fileInput"
                                    value={imageValue}
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-2 rounded-md">
                                {images?.map((image, index) => (
                                    <div className="border border-gray-200 rounded-md" key={index}>
                                        <img
                                            alt="image-upload-item"
                                            className="w-full h-[200px] object-contain rounded-md"
                                            src={image}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-fit"
                                type="submit"
                            >
                                {isCreateFeedback ? 'Đang gửi...' : 'Gửi'}
                            </button>
                        </form>
                    )}
                </FoodContent>
                <FoodContent title="Danh sách đánh giá">
                    {/* <button
                        className={cn('text-white w-fit m-auto px-4 rounded py-2', {
                            'bg-green-400 hover:bg-green-500': !showComments,
                            'bg-red-400 hover:bg-red-500': showComments,
                        })}
                        onClick={toggleComments}
                    >
                        {showComments ? 'Ẩn bình luận' : 'Hiển thị bình luận'}
                    </button>
                    {showComments && (
                        <div className="mt-4">
                            <div className="flex justify-center mb-4">
                                <select name="sort" id="sort" onChange={(e) => handleSort(e.target.value, feedbacks)}>
                                    <option value="desc">Mới nhất</option>
                                    <option value="asc">Cũ nhất</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-4">
                                {convertFeedBacks.map((item, index) => (
                                    <div key={index}>
                                        <FeedbackCard item={item} />
                                    </div>
                                ))}
                                {convertFeedBacks.length === 0 && <div className="text-center">Chưa có đánh giá</div>}
                            </div>
                        </div>
                    )} */}
                    <div className="mt-4">
                            <div className="flex justify-center mb-4">
                                <select name="sort" id="sort" onChange={(e) => handleSort(e.target.value, feedbacks)}>
                                    <option value="desc">Mới nhất</option>
                                    <option value={'asc'}>Cũ nhất</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-4">
                                {convertFeedBacks.map((item, index) => (
                                    <div key={index}>
                                        <FeedbackCard item={item} />
                                    </div>
                                ))}

                                {convertFeedBacks.length == 0 && <div className="text-center">Chưa có đánh giá</div>}
                            </div>
                    </div>
                </FoodContent>
                <FoodContent title="Chia sẻ">
                    <div className="flex gap-4">
                        <FacebookShareButton url={window.location.href} quote={product?.title}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton url={window.location.href} title={product?.title}>
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <WhatsappShareButton url={window.location.href} title={product?.title}>
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        {/* <EmailShareButton url={window.location.href} subject={product?.title}>
                            <EmailIcon size={32} round />
                        </EmailShareButton> */}
                        <a href={`https://zalo.me/share/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(product?.title)}`} target="_blank" rel="noopener noreferrer">
                            <img src="/public/images/zalo.png" alt="Share on Zalo" style={{ width: 32, height: 32, borderRadius: '50%' }} />
                        </a>
                        <a href={`https://www.messenger.com/t/?link=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                            <img src="/public/images/mess.png" alt="Share on Messenger" style={{ width: 32, height: 32, borderRadius: '50%' }} />
                        </a>
                        <button onClick={handleCopyLink} className="flex items-center gap-2">
                            <img src="/public/images/link.png" alt="Copy Link" style={{ width: 32, height: 32, borderRadius: '50%' }} />
                            Copy Link
                        </button>
                    </div>
                </FoodContent>
                <FoodContent title="Trò chơi thử thách">
                    
                    <button
                        className={cn('text-white w-fit m-auto px-4 rounded-2xl py-2', {
                            'bg-gray-300 hover:bg-gray-400': !showInfos,
                            'bg-gray-400 hover:bg-gray-500': showInfos,
                        })}
                        onClick={toggleInfos}
                    >
                        {showInfos ? 'Ẩn thông tin thêm' : 'Hiển thị thông tin thêm'}
                    </button>
                    {showInfos && (

                        <div className="mt-4">
                            gdfbd
                            {
                                data?.data?.fullname
                            }
                            
                        </div>
                    )}
                    <div className="mt-4">
                        <div className="flex justify-center mb-4">
                            <iframe
                                className="w-full h-auto aspect-video border-4 border-gray-600 rounded-xl overflow-hidden"
                                src={product?.video}
                                title="Thuyết trình về món Bánh canh Bến Có"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </FoodContent>
            </div>
        </div>
    );
});

export default Product;

Product.displayName = 'Product';

