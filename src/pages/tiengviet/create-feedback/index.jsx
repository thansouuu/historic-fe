import FeedbackForm from '@/components/feedback-form';
import { useAuth } from '@/hooks/use-auth';
import { useCreateFeedback } from '@/hooks/use-create-feedback';
import { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

const CreateFeedback = () => {
    const formRef = useRef(null);
    const { isLoggedIn } = useAuth();

    const { trigger: feedback } = useCreateFeedback();

    useEffect(() => {
        document.body.addEventListener(
            'focus',
            (event) => {
                const target = event.target;
                switch (target.tagName) {
                    case 'INPUT':
                    case 'TEXTAREA':
                    case 'SELECT':
                        document.body.classList.add('keyboard');
                }
            },
            true,
        );

        document.body.addEventListener(
            'blur',
            () => {
                document.body.classList.remove('keyboard');
            },
            true,
        );
    }, []);

    const feedbackSubmitHandler = (data) => {
        feedback(data, {
            onSuccess: () => {
                toast.success('Đánh giá phản hồi thành công!');
                formRef.current.reset();
            },
        });
    };

    return (
        <div className="container mx-auto p-4">
            <div className="w-full md:w-[500px] mx-auto bg-[#c2c6c8] p-8 rounded-2xl mb-10 md:mb-0">
                {isLoggedIn ? (
                    <FeedbackForm ref={formRef} onFeedbackSubmit={feedbackSubmitHandler} />
                ) : (
                    <div>Vui lòng đăng nhập để đăng bình luận</div>
                )}
            </div>
        </div>
    );
};

export default CreateFeedback;
