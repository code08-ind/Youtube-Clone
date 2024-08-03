import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const dispatch = useDispatch();
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // get the searched out cache that we have used here
    const searchCache = useSelector((store)=> store.search);

    /*
        {
            "iphone":["iphone 11", "iphone 14"]
        }
    */

    useEffect(() => {
        // Make an API Call for every key press but if the difference between 2 api calls is less than 200ms, then decline the api call. When the searchQuery changes, it makes the API call after 200ms.
        const timer = setTimeout(() => {
            // If we have cache, set the suggestions from the cache only.
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } 
            // Otherwise make an API Call.
            else {
                getSearchSuggestions();
            }
        }, 200);

        // This function is called every time my component is re-rendered and every time, my timer gets cleared off. A new timer is established and it starts counting again our task. If 200ms passed, it will again make a call to the API.
        return () => clearTimeout(timer);

    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        // To see the API calls made here on our system.
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();

        setSuggestions(json[1]);

        // API Calls will be made if it didn't cached the search results out there.
        dispatch(cacheResults({
            [searchQuery]:json[1]
        }));
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow'>
            <div className='flex col-span-1'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8 cursor-pointer"
                    alt="menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                />
                <a href="/">
                    <img
                        className="h-8 mx-2"
                        alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                    />
                </a>
            </div>
            <div className='col-span-10 px-10'>
                <div>
                    <input className='w-1/2 border border-gray-400 rounded-l-full' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
                    <button className='py-2 px-5 bg-gray-100 border border-gray-400 rounded-r-full'><IoIosSearch /></button>
                </div>
                {showSuggestions && <div className='fixed bg-white py-2 px-2 w-[37rem] rounded-lg shadow-sm'>
                    <ul>
                        {suggestions.map((s) => (
                            <li className='py-2 px-3 hover:bg-gray-100' key={s}>
                                <IoIosSearch /> {s}
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>
            <div className='col-span-1'>
                <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
            </div>
        </div>
    )
}

export default Head