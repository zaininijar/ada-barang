const mainContainer = document.querySelector('.__main-container')
const inputSearch = document.querySelector('.__input-search')
const searchbar = document.querySelector('.__searchbar')
const brand = document.querySelector('.__brand')
const profileStore = document.querySelector('#profile-store')
const header = document.querySelector('.__header')

let isSearching = false

window.addEventListener('click', (e) => {
    searchMode(isSearching);
    if (e.target.classList == '__input-search') {
        const isFocused = e.target === document.activeElement
        searchMode(isFocused)
    }
})

const searchMode = (isOpen) => {

    if (isOpen) {
        mainContainer.classList.add('hidden')
        profileStore.classList.add('hidden')
        brand.classList.add('hidden')
        searchbar.classList.add('__active')
        header.classList.remove('__gradient')
    }else {
        mainContainer.classList.remove('hidden')
        profileStore.classList.remove('hidden')
        brand.classList.remove('hidden')
        searchbar.classList.remove('__active')
        header.classList.add('__gradient')
    }

}