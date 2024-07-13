// import FeedbackCard from '@/components/feedback-card';
// import { useFeedback } from '@/hooks/use-feedback';

// const Feedbacks = () => {
//     const { data, isLoading, error } = useFeedback();
    


//     if (isLoading) return <div>Loading...</div>;

//     if (error) return <div>Something went wrong</div>;

//     return (
//         <div>
//             <h1 className="text-2xl font-semibold text-center my-10">Nhận xét phản hồi về món ăn</h1>
//             <div className="container mx-auto flex flex-col gap-4 px-4">
//                 {data?.data?.length ? (
//                     data.data.map((feedback) => <FeedbackCard key={feedback._id} feedback={feedback} />)
//                 ) : (
//                     <div>Chưa có đánh giá nào</div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Feedbacks;

import FeedbackCard from '@/components/feedback-card';
import { useAuth } from '@/hooks/use-auth';
// import { useFeedback } from '@/hooks/use-feedback';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/libs/http/axios-instance';

const Feedbacks = () => {
    const user = useAuth()
    // const { data, isLoading, error } = useFeedback();
    // const newData = data?.data;
    const [feedbacks, setFeedbacks] = useState([]);
    const [filters, setFilters] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    
    const getFeedbacks = async () => {
        setIsLoading(true)
        const response = await axiosInstance().get('/feedback')
        setFeedbacks(response?.data)
        setFilters(response?.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getFeedbacks()
    },[])
    // if (isLoading) return <div>Loading...</div>;

    // if (error) return <div>Something went wrong</div>;

    const foodList = [
        {
            label: null,
            value: null,
        },
        {
            label: 'Bánh canh Bến Có',
            value: 'Bánh canh Bến Có',
        },
        {
            label: 'Bánh rây',
            value: 'Bánh rây',
        },
        {
            label: 'Bánh tét Trà Cuôn',
            value: 'Bánh tét Trà Cuôn',
        },
        {
            label: 'Bún nước lèo',
            value: 'Bún nước lèo',
        },
        {
            label: 'Bún suông',
            value: 'Bún suông',
        },
        {
            label: 'Cá khoai',
            value: 'Cá khoai',
        },
        {
            label: 'Chả hoa',
            value: 'Chả hoa',
        },
        {
            label: 'Cháo ám',
            value: 'Cháo ám',
        },
        {
            label: 'Chù ụ rang me',
            value: 'Chù ụ rang me',
        },
        {
            label: 'Cốm dẹp',
            value: 'Cốm dẹp',
        },
        {
            label: 'Mắm bò hóc',
            value: 'Mắm bò hóc',
        },
        {
            label: 'Nước mắm rươi',
            value: 'Nước mắm rươi',
        },
        {
            label: 'Trái quách',
            value: 'Trái quách',
        },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        setFilters(filterData(feedbacks,data) )
    }

    function filterData(data, filters) {
        let filteredData = [...data];
    
        // Lọc theo tên món ăn
        if (filters.food_name) {
            filteredData = filteredData.filter(item => item.foodName.toLowerCase() === filters.food_name.toLowerCase());
        }
    
        // Lọc theo xem theo cá nhân hoặc tất cả
        if (filters.view_type) {
            if (filters.view_type === 'personal') {
                filteredData = filteredData.filter(item => item.createdBy.email === user?.data?.data?.email);
            }
        }
    
        // Sắp xếp theo ngày
        if (filters.date_sort) {
            filteredData.sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
    
                if (filters.date_sort === 'asc') {
                    return dateA - dateB;
                } else {
                    return dateB - dateA;
                }
            });
        }
    
        return filteredData;
    }
    
    if(isLoading) return <div>Loading...</div>;
    if(!feedbacks) return <div>Something went wrong</div>;

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center my-10">Nhận xét phản hồi về món ăn</h1>
            <form className='mx-auto p-4 flex flex-col md:items-end gap-4 md:flex-row justify-center'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col gap-2'>
                    <label htmlFor="food_name">Tên món ăn</label>
                    <select name="food_name" id="food_name">
                        {foodList.map((food) => (
                            <option key={food.value} value={food.value}>
                                {food.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="date_sort">Sắp xếp ngày</label>
                    <select name="date_sort" id="date_sort">
                        <option value="desc">Giảm dần</option>
                        <option value="asc">Tăng dần</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="view_type">Xem theo</label>
                    <select name="view_type" id="view_type">
                        <option value="all">Tất cả</option>
                        <option value="personal">Cá nhân</option>
                    </select>
                </div>
                <button className="inline-flex items-center justify-center px-4 py-2 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg"

                >
                    Áp dụng
                </button>
            </form>
            <div className="container mx-auto flex flex-col gap-4 px-4 mt-4">
                {filters?.length > 0 ? (
                    filters?.map((feedback) => <FeedbackCard key={feedback._id} feedback={feedback} />)
                ):(
                    <div className='flex justify-center'>Không tìm thấy dữ liệu</div>
                )}
            </div>
        </div>
    );
};

export default Feedbacks;