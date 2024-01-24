let searchInput = document.querySelector('.header_search_input');
let searchBtn = document.querySelector('.header_search_btn');

searchState = "hidden";

function openSearch() {
    searchInput.style.borderLeft = "1px solid #00fffa";
    searchInput.animate([
        {width: "0"},
        {width: "200px"}
        ], {
        duration: 200
        });
    searchInput.style.width = "200px";

    searchState = "open";
}

function hiddenSearch() {
    searchInput.style.borderLeft = "none";
        searchInput.animate([
            {width: "200px"},
            {width: "0"}
            ], {
            duration: 200
            });
        searchInput.style.width = "0";

        searchState = "hidden";
}

searchBtn.addEventListener('click', function(e) {
    if (searchState == "hidden") {
        openSearch();
    } else {
        hiddenSearch();
    }
});