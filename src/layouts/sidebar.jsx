import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import Dropdown from '@/components/dropdown';
const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation()
    return (
        <div
            className={`hidden md:block z-20 fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
            <div className="flex justify-end p-4" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                </svg>
            </div>
            <ul className="mt-16">
            <Link to="/tieng-viet/"
                >
                    <li className={`p-4 hover:bg-gray-700 flex items-center gap-4 ${location.pathname.includes('categories') ? 'bg-gray-900' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 4H21V6H13V4ZM13 11H21V13H13V11ZM13 18H21V20H13V18ZM6.5 19C5.39543 19 4.5 18.1046 4.5 17C4.5 15.8954 5.39543 15 6.5 15C7.60457 15 8.5 15.8954 8.5 17C8.5 18.1046 7.60457 19 6.5 19ZM6.5 21C8.70914 21 10.5 19.2091 10.5 17C10.5 14.7909 8.70914 13 6.5 13C4.29086 13 2.5 14.7909 2.5 17C2.5 19.2091 4.29086 21 6.5 21ZM5 6V9H8V6H5ZM3 4H10V11H3V4Z"></path></svg>
                    Trang chủ
                    </li>
                </Link>
                <Link to="/tieng-viet/account"
                    className={location.pathname.includes('account') ? 'bg-gray-700' : ''}
                >
                    <li className="p-4 hover:bg-gray-700 flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M10 11V8L15 12L10 16V13H1V11H10ZM2.4578 15H4.58152C5.76829 17.9318 8.64262 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9H2.4578C3.73207 4.94289 7.52236 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.52236 22 3.73207 19.0571 2.4578 15Z"></path></svg>
                    Đăng nhập / Đăng ký
                    </li>
                </Link>
                <Link to="/tieng-viet/figure"
                >
                    <li className={`p-4 hover:bg-gray-700 flex items-center gap-4 ${location.pathname.includes('categories') ? 'bg-gray-900' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 4H21V6H13V4ZM13 11H21V13H13V11ZM13 18H21V20H13V18ZM6.5 19C5.39543 19 4.5 18.1046 4.5 17C4.5 15.8954 5.39543 15 6.5 15C7.60457 15 8.5 15.8954 8.5 17C8.5 18.1046 7.60457 19 6.5 19ZM6.5 21C8.70914 21 10.5 19.2091 10.5 17C10.5 14.7909 8.70914 13 6.5 13C4.29086 13 2.5 14.7909 2.5 17C2.5 19.2091 4.29086 21 6.5 21ZM5 6V9H8V6H5ZM3 4H10V11H3V4Z"></path></svg>
                    Danh mục
                    </li>
                </Link>
                <Link to="/tieng-viet/map"
                >
                    <li className={`p-4 hover:bg-gray-700 flex items-center gap-4 ${location.pathname.includes('categories') ? 'bg-gray-900' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 4H21V6H13V4ZM13 11H21V13H13V11ZM13 18H21V20H13V18ZM6.5 19C5.39543 19 4.5 18.1046 4.5 17C4.5 15.8954 5.39543 15 6.5 15C7.60457 15 8.5 15.8954 8.5 17C8.5 18.1046 7.60457 19 6.5 19ZM6.5 21C8.70914 21 10.5 19.2091 10.5 17C10.5 14.7909 8.70914 13 6.5 13C4.29086 13 2.5 14.7909 2.5 17C2.5 19.2091 4.29086 21 6.5 21ZM5 6V9H8V6H5ZM3 4H10V11H3V4Z"></path></svg>
                    Bản đồ
                    </li>
                </Link>
                
                {/* <li>
                    <Dropdown title="Danh mục" items={[
                        {
                            label: 'Danh mục 1',
                            href: '/tieng-viet/tin-tuc/1',
                        },
                        {
                            label: 'Danh mục 1',
                            href: '/tieng-viet/tin-tuc/1',
                        },
                        {
                            label: 'Danh mục 1',
                            href: '/tieng-viet/tin-tuc/1',
                        }
                    ]}/>
                </li> */}
            </ul>
        </div>
    );
};

export default Sidebar;
