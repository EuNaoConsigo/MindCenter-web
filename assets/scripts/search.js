function viewClearBtn(){
    const searchClear = document.getElementById("searchbar__clear");
    const searchInput = document.getElementById("search__input");
    
    if(searchInput.value.length > 0){
        searchClear.style.display = 'block';
    } else {
        searchClear.style.display = 'none';
    }
}


function searchClear(){
    const searchClear = document.getElementById("searchbar__clear");
    const searchInput = document.getElementById("search__input");

    searchInput.value = "";
    searchClear.style.display = 'none';
}