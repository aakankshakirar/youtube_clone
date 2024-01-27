import { createContext, useState, useEffect, Children } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {

    const [loading, setLoading] = useState(false);

    const [searchResults, setSearchResults] = useState(null);

    // By default for the feed new video will be shown up
    const [selectCategories, setSelectCategories] = useState('New');

    // We will use it to show and hide mobile menu
    const [mobileMenu, setMobileMenu] = useState(false);

    // By default we will load the data of new category for the feed page
    const fetchSelectedCategoryData = (query) => {
        setLoading(true);

        fetchDataFromApi(`search?q=${query}`).then(({ contents }) => {
            setSearchResults(contents);
            setLoading(false);
        })
    }

    // By default this method will call for new category.
    // And whenever we change the category from side menu and change the setSelectCategory method this will call again to get
    // the latest related category data
    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories])

    return (
        <Context.Provider value={{ loading, setLoading, searchResults, mobileMenu, setMobileMenu, selectCategories, setSelectCategories }}>
            {props.children}
        </Context.Provider>
    )
}


