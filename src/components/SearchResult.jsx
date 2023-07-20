import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/Api";
import { Context } from "../context/ContextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";
function SearchResult() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResult();
    window.scrollTo(0, 0);
  }, [searchQuery]);

  const fetchSearchResult = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      setResult(res.contents);
      setLoading(false);
    });
  };
  return (
    <div className="flex flex-row  h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item.type !== "video") return false;
            return (
              <SearchResultVideoCard
                key={item?.video?.videoId}
                video={item?.video}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
