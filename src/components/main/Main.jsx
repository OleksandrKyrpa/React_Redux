import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redusers/reposReduser";
import { getRepos } from "../actions/repos";
import { createPages } from "../utils/pageCreator";
import "./main.less";
import Repo from "./repo/Repo";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const [searchValue, setSearchValue] = useState("");
    const pagesCount = Math.ceil(totalCount / perPage);

    const pages = [];

    createPages(pages, pagesCount, currentPage);

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    function searchHendler() {
        dispatch(setCurrentPage(1));
        dispatch(getRepos(searchValue, currentPage, perPage))
    }


    return (
        <div>
            <div className="search">
                <input 
                    value={searchValue} 
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text" 
                    placeholder="Input repo name" 
                    className="search-input" 
                />
                <button 
                    onClick={() => searchHendler()}
                    className="search-btn">
                        Search
                </button>
            </div>

            {
                isFetching === false 
                ?
                repos.map(repo => <Repo key={repo.name} repo={repo}/>)
                :
                <div className="fetching">

                </div>
            }

            <div className="pages">
                {pages.map((page, index) => <span
                    key={index} 
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}
                    >{page}</span>)}
            </div>
        </div>
    );
};

export default Main;