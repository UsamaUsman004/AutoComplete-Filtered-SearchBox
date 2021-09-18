let suggestions = [
    'Learn HTML',
    'Learn CSS',
    'Learn JS',
    'Learn React',
    'Learn React Native',
    'Learn Angular',
    'Learn Dart'
]

const searchWrapper = document.querySelector('.search-input');
const inputBox = searchWrapper.querySelector('input');
const suggBox = searchWrapper.querySelector('.autocom-box');


inputBox.onkeyup = (e) => {
    // console.log(e.target.value);
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {

        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArray = emptyArray.map((data) => {
            return data = `<li class="list-group-item border-0">${data}</li>`

        });

        console.log(emptyArray);
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);

        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attributes to all LI

            allList[i].setAttribute("onclick","select(this)");


        }
    }
    else {
        searchWrapper.classList.remove('active');
    }

}

function select(element){
    let selectUserData = element.textContent;
    console.log(selectUserData);
    inputBox.value = selectUserData;
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li class="list-group-item border-0">${userValue}
        <small class="text-secondary"> - Item Not Found</small>
        </li>`
    }
    else {
        listData = list.join('');
    }

    suggBox.innerHTML = listData;
}