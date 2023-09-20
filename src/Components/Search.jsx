import axios from "axios"
import { useEffect, useState } from "react";
const Search = ({setImgArr}) => {

    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        handleSearch();
    }, [])

    async function handleSearch() {
        try {
            const respose = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    query: searchTerm || 'random' 
                },
                headers: {
                    Authorization:`Client-ID ${import.meta.env.VITE_AUTHORIZATION_KEY}`
                }
            })
            setImgArr(respose.data.results)
            console.log(respose.data)
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className="w-full h-16 fixed drop-shadow-lg bg-slate-700 flex gap-5 items-center justify-center">
    <input 
            type="text" 
            placeholder="What are you looking for...?" 
            className="outline-none py-1 px-5 rounded-md 
            bg-slate-500 text-yellow-50 "
            onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button 
            className="text-white py-1 px-6 border-2 rounded-xl 
            transition-all duration-300 hover:bg-slate-800
            active:transform active:translate-y-1"
            onClick={handleSearch}
            >
                Search
            
            </button>
    </div>
  )
}

export default Search