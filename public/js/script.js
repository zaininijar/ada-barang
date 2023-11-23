const wrapper = document.querySelector('.__wrapper')
const mainContainer = document.querySelector('.__main-container')
const inputSearch = document.querySelector('.__input-search')
const searchbar = document.querySelector('.__searchbar')
const brand = document.querySelector('.__brand')
const profileStore = document.querySelector('#profile-store')
const header = document.querySelector('.__header')
const productSearchContainer = document.querySelector('#product-search-container')
const productWrapper = document.querySelector('#product-wrapper')

const overlayFilter = document.querySelector('.__overlay-filter')

const filterButton = document.querySelector('#filter-button')

let isSearching = false

const products = [
    {
        title: "Dippolar By The Sea",
        picture_path: "https://source.unsplash.com/random/Minerva Ray",
        price: 85000
    },
    {
        title: "Dippolar Oversize",
        picture_path: "https://source.unsplash.com/random/Elijah Murray",
        price: 109000
    },
    {
        title: "Arthur Lyons",
        picture_path: "https://source.unsplash.com/random/Nancy Russell",
        price: 185000
    },
    {
        title: "Cody Holt",
        picture_path: "https://source.unsplash.com/random/Katharine Mann",
        price: 606000
    },
    {
        title: "Rosetta Phelps",
        picture_path: "https://source.unsplash.com/random/Alex Duncan",
        price: 135000
    },
    {
        title: "Elva Brady",
        picture_path: "https://source.unsplash.com/random/Tony Hubbard",
        price: 975000
    },
    {
        title: "Adam Perez",
        picture_path: "https://source.unsplash.com/random/Cornelia Harvey",
        price: 296000
    },
    {
        title: "Adelaide Gutierrez",
        picture_path: "https://source.unsplash.com/random/Catherine Daniel",
        price: 907000
    },
    {
        title: "Duane Torres",
        picture_path: "https://source.unsplash.com/random/Rosalie Hernandez",
        price: 55000
    }
]

window.addEventListener('click', (e) => {
    if (e.target.classList == '__input-search') {
        isSearching = e.target === document.activeElement
    }else {
        cardWrapper.innerHTML = ''
        inputSearch.value = ''
        inputSearch.value === '' ? isSearching = false : isSearching = true
    }

    searchMode(isSearching)
})

const cardWrapper = document.createElement('div')
cardWrapper.classList.add('__product-card-wrapper')
cardWrapper.classList.add('mt-8')


const initProducts = () => {
    products.map((product) => {
        cardWrapper.appendChild(createCard(product.title, product.picture_path, product.price))
    })
    productWrapper.appendChild(cardWrapper)
}

inputSearch.addEventListener('keyup', (e) => {
    
    const inputValue = e.target.value

    cardWrapper.innerHTML = ''

    let searchResults = ''

    if (inputValue !== '') {
        searchResults = searchProducts(inputValue);
    }

    searchResults.map((product) => {
        cardWrapper.appendChild(createCard(product.title, product.picture_path, product.price))
    })

    productSearchContainer.appendChild(cardWrapper)

})

const searchProducts = (query) => {
    query = query.toLowerCase();
    return products.filter(product => product.title.toLowerCase().includes(query));
};


const createCard = (title, picture_path, price) => {
    const card = document.createElement('div')
    card.classList.add('__product-card')

    const imageCard = document.createElement('div')
    imageCard.classList.add('__product-card-image-container')

    const img = document.createElement('img')
    img.src = picture_path
    img.classList.add('__product-card-image')
    img.alt = ''

    imageCard.appendChild(img)

    const productCardContent = document.createElement('div')
    productCardContent.classList.add('__product-card-content')

    const productTitleCard = document.createElement('h3')
    productTitleCard.classList.add('__product-title-card')
    productTitleCard.innerText = title

    const productPriceCard = document.createElement('h2')
    productPriceCard.classList.add('__product-price-card')
    productPriceCard.innerText = "Rp "+ price

    productCardContent.appendChild(productTitleCard)
    productCardContent.appendChild(productPriceCard)

    card.appendChild(imageCard)
    card.appendChild(productCardContent)

    return card
}

const searchMode = (isOpen) => {

    if (isOpen) {
        wrapper.classList.add('bg-white')
        wrapper.classList.remove('bg-[#F8FAFB]')
        mainContainer.classList.add('hidden')
        profileStore.classList.add('hidden')
        brand.classList.add('hidden')
        searchbar.classList.add('__active')
        header.classList.remove('__gradient')

        productSearchContainer.classList.remove('hidden')
        productSearchContainer.classList.add('block')
    }else {
        wrapper.classList.remove('bg-white')
        wrapper.classList.add('bg-[#F8FAFB]')

        mainContainer.classList.remove('hidden')
        profileStore.classList.remove('hidden')
        brand.classList.remove('hidden')
        searchbar.classList.remove('__active')
        header.classList.add('__gradient')

        productSearchContainer.classList.add('hidden')
        productSearchContainer.classList.remove('block')
    }

}

let isOpenFilter = true

filterButton.addEventListener('click', () => {
    openFilter(isOpenFilter)
})

overlayFilter.addEventListener('click', (e) => {
    if(e.target.classList[0] === '__overlay-filter'){
        openFilter(false)
    }else {
        openFilter(true)
    }

})

const openFilter = (isOpen) => {
    if (isOpen) {
        overlayFilter.classList.add('flex')
        overlayFilter.classList.remove('hidden')
        console.log('filter open');

        isOpenFilter = !isOpen
    }else{
        overlayFilter.classList.remove('flex')
        overlayFilter.classList.add('hidden')
        console.log('filter close');

        isOpenFilter = !isOpen
    }
}