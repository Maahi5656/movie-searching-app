

const SearchBar = (props) => {
    const { filterText, onSearchTextChange } = props;
    return (
        <div className="inputFieldDiv">
            <form>
                <input type="text" className="searchValue" value={ filterText } onChange={ (event)=>onSearchTextChange(event.target.value) } placeholder="Search..." />
            </form>
        </div>
    );
};

export default SearchBar;