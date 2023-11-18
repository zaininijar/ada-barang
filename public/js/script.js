const mainContainer = document.querySelector('.__main-container')
const inputSearch = document.querySelector('.__input-search')
const searchbar = document.querySelector('.__searchbar')
const brand = document.querySelector('.__brand')
const profileStore = document.querySelector('#profile-store')
const header = document.querySelector('.__header')
const productSearchContainer = document.querySelector('#product-search-container')

const overlayFilter = document.querySelector('.__overlay-filter')

const filterButton = document.querySelector('#filter-button')

let isSearching = false

const products = [
    {
        title: "Dippolar By The Sea",
        picture_path: "images/product/277c28b3e8c017906e28fc43f0b2be27.png",
        price: 85000
    },
    {
        title: "Dippolar Oversize",
        picture_path: "images/product/277c28b3e8c017906e28fc43f0b2be27.png",
        price: 109000
    },
    {
        title: "Arthur Lyons",
        picture_path: "images/product/277c28b3e8c017906e28fc43f0b2be27.png",
        price: 185000
    },
    {
        title: "Cody Holt",
        picture_path: "images/product/277c28b3e8c017906e28fc43f0b2be27.png",
        price: 606000
    },
    {
        title: "Rosetta Phelps",
        picture_path: "images/product/277c28b3e8c017906e28fc43f0b2be27.png",
        price: 135000
    },
    {
        title: "Elva Brady",
        picture_path: "images/product/277c28b3e8c017906e28fc43f0b2be27.png",
        price: 975000
    },
    {
        title: "Adam Perez",
        picture_path: "images/product/277c28b3e8c017906e28fc43f0b2be27.png",
        price: 296000
    },
    {
        title: "Adelaide Gutierrez",
        picture_path: "images/product/277c28b3e8c017906e28fc43f0b2be27.png",
        price: 907000
    },
    {
        title: "Duane Torres",
        picture_path: "images/product/277c28b3e8c017906e28fc43f0b2be27.png",
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
    imageCard.classList.add('w-full')

    const img = document.createElement('img')
    img.src = picture_path
    img.classList.add('__img-card')
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
        mainContainer.classList.add('hidden')
        profileStore.classList.add('hidden')
        brand.classList.add('hidden')
        searchbar.classList.add('__active')
        header.classList.remove('__gradient')

        productSearchContainer.classList.remove('hidden')
        productSearchContainer.classList.add('block')
    }else {
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