const search_input = document.getElementById("search_bar");
const list = document.getElementById("list");

function faux_search_results() {
    if (value.length > 0) {
        list.style.display = "list-item";
    } else {
        list.style.display = "none";
    }
}

search_input.addEventListener("input", (input) => {
    let value = input.target.value

    faux_search_results()

    console.log(value.length);
});