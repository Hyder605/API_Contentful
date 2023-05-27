
'use client'
import { FC, useState } from "react";

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}
interface FPT {
    products: Product[]
}

export default function App() {
    return (
        <FilterableProductTable products={PRODUCTS} />
    )
}

function FilterableProductTable({ products }: FPT) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (

        < div >
            <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly}
            setFilterText={setFilterText}
            setInStockOnly={setInStockOnly}
            />
            <ProductTable products={products} filterText={filterText}
        inStockOnly={inStockOnly} />
        </div >
    )
}

function SearchBar({filterText,inStockOnly,setFilterText,setInStockOnly}) {
    return (
        <form>
            <input type="text" value={filterText}  placeholder="Search..."
            onChange={(e)=>setFilterText(e.target.value)}
            />
            <label>
                <input type="checkbox"
                checked={inStockOnly} 
                onChange={(e)=>setInStockOnly(e.target.checked)}/>
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}

function ProductTable({ products,filterText,inStockOnly }: FPT){
    const rows: React.ReactNode[] = [];
    let lastCategory: string | null = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
              filterText.toLowerCase()
            ) === -1
          ) {
            return;
          }
          if (inStockOnly && !product.stocked) {
            return;
          }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

interface PCRP {
    category: string;
}
function ProductCategoryRow({ category }: PCRP) {
    return (
        <tr>
            <th >
                {category}
            </th>
        </tr>
    );
}
interface PRP {
    product: Product;
}
function ProductRow({ product }: PRP) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}