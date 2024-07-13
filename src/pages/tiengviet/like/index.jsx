import React, { useEffect, useState } from 'react';
import FoodContent from '@/components/food-content';
import { useAuth } from '@/hooks/use-auth';
import { toast } from 'react-toastify';
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

const LikedPosts = () => {
    const { isLoggedIn } = useAuth();
    const [likedPosts, setLikedPosts] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const fetchLikedPosts = async () => {
            try {
                const userResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });

                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    setUserId(userData._id);
                    if (userData.data.likes) {
                        setLikedPosts(userData.data.likes);
                    } else {
                        setLikedPosts([]);
                    }
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching liked posts:', error);
                setLikedPosts([]);
            }
        };

        if (isLoggedIn) {
            fetchLikedPosts();
        }
    }, [isLoggedIn]);

    return (
        <div className="flex flex-col gap-4 pb-4 max-w-[992px] mx-auto">
            <h2 className="text-3xl text-center pb-4 border-b border-slate-800">Liked Posts</h2>
            <div className="flex flex-col gap-4">
                {likedPosts.map((postTitle, index) => (
                    <FoodContent title={postTitle} key={index}>
                        <div>{postTitle}</div>
                        <div className="flex gap-4">
                            <FacebookShareButton url={window.location.href} quote={postTitle}>
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            <TwitterShareButton url={window.location.href} title={postTitle}>
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                            <WhatsappShareButton url={window.location.href} title={postTitle}>
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                            <EmailShareButton url={window.location.href} subject={postTitle}>
                                <EmailIcon size={32} round />
                            </EmailShareButton>
                        </div>
                    </FoodContent>
                ))}
                {likedPosts.length === 0 && <div className="text-center">No liked posts</div>}
            </div>
        </div>
    );
};

export default LikedPosts;
