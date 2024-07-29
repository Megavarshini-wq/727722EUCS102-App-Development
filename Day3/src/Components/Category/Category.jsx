// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import CategoryBooks from '../CategoryBooks/CategoryBook';
// import CategoryVideos from '../CategoryVideos/CategoryVideo';
// import './Category.css';

// const Category = () => {
//     const { age } = useParams();
//     const [activeTab, setActiveTab] = useState('books');

//     return (
//         <div className="category-container">
//             <div className="category-tabs">
//                 <button
//                     className={`tab-button ${activeTab === 'books' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('books')}
//                 >
//                     Books
//                 </button>
//                 <button
//                     className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('videos')}
//                 >
//                     Videos
//                 </button>
//             </div>
//             {activeTab === 'books' ? <CategoryBooks age={age} /> : <CategoryVideos age={age} />}
//         </div>
//     );
// }

// export default Category;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import CategoryBooks from '../CategoryBooks/CategoryBook';
// import CategoryVideos from '../CategoryVideos/CategoryVideo';
// import './Category.css';

// const Category = () => {
//     const { age } = useParams();
//     const [activeTab, setActiveTab] = useState('books');

//     return (
//         <div className="category-container">
//             <h2 className="category-title">BOOKS FOR {age} YEARS OLD</h2>
//             <div className="category-tabs">
//                 <button
//                     className={`tab-button ${activeTab === 'books' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('books')}
//                 >
//                     Books
//                 </button>
//                 <button
//                     className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
//                     onClick={() => setActiveTab('videos')}
//                 >
//                     Videos
//                 </button>
//             </div>
//             {activeTab === 'books' ? <CategoryBooks age={age} /> : <CategoryVideos age={age} />}
//         </div>
//     );
// }

// export default Category;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryBooks from '../CategoryBooks/CategoryBook';
import CategoryVideos from '../CategoryVideos/CategoryVideo';
import './Category.css';

const Category = () => {
    const { age } = useParams();
    const [activeTab, setActiveTab] = useState('books');

    const getTitle = () => {
        switch (activeTab) {
            case 'books':
                return `BOOKS FOR ${age} YEARS OLD`;
            case 'videos':
                return `VIDEOS FOR ${age} YEARS OLD`;
            default:
                return '';
        }
    };

    return (
        <div className="category-container">
            <h2 className="category-title">{getTitle()}</h2>
            <div className="category-tabs">
                <button
                    className={`tab-button ${activeTab === 'books' ? 'active' : ''}`}
                    onClick={() => setActiveTab('books')}
                >
                    Books
                </button>
                <button
                    className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('videos')}
                >
                    Videos
                </button>
            </div>
            {activeTab === 'books' ? <CategoryBooks age={age} /> : <CategoryVideos age={age} />}
        </div>
    );
}

export default Category;

