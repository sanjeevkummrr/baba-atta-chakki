# Baba Atta Chakki — Dynamic Version

This version converts the original static product HTML into a data-driven storefront.

## What is dynamic now?

- Products are generated from the `PRODUCTS` array in `script.js`.
- Search products by name/category/description.
- Filter by category.
- Sort by price or name.
- Select pack size and price dynamically.
- Cart supports quantity +/−, remove and clear.
- Cart persists after refresh using localStorage.
- Delivery address persists using localStorage.
- Order ID is generated automatically.
- WhatsApp order message is generated from the current cart/address.
- Product images have a fallback if an image is missing.
- Mobile responsive UI.


LIVE DEMO: https://sanjeevkummrr.github.io/baba-atta-chakki/


## Folder structure

```text
baba-atta-dynamic/
├── index.html
├── script.js
├── style.css
├── README.md
└── Images/
    └── Put your existing project images here
```

## Important

The uploaded project contained the HTML/CSS/JS but not the image files. Copy your existing `Images` folder into this project's `Images` folder.

Expected image names include:

- logo.png
- hero-bg.jpg
- mp-sarbati.jpg
- wheat-atta.jpg
- multigrain-atta.jpg
- chana-sattu.jpg
- jau-sattu.jpg
- chana-besan.jpg
- makka-atta.jpg
- bajra-atta.jpg
- jau-guri-atta.jpg
- madua-ragi-atta.jpg
- jwar-atta.jpg

## Add a new product

Open `script.js` and add another object inside `PRODUCTS`.

Example:

```js
{
    id: "new-product",
    name: "New Atta",
    category: "Special Atta",
    image: "new-atta.jpg",
    description: "Short product description.",
    prices: [
        { label: "500 GM", price: 40 },
        { label: "1 KG", price: 75 },
        { label: "5 KG", price: 350 }
    ]
}
```

No new product HTML is required.

## Run

You can open `index.html` directly in a browser.

For development, VS Code + Live Server is recommended.

## Next step for a real production e-commerce site

This is still a frontend/localStorage project. For real customers and real orders, add a backend/database such as Firebase, Supabase, Node.js + MongoDB, or another server-side system. Then add an admin panel for products, prices, stock and orders.
