import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../../components/BreadCrumb/Breadcrumb'
import List from '../../components/List/List'
import "./Products.scss"

const Products = () => {
  const categoryId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(150);
  const [sort, setSort] = useState(null);
  
  return (
    <div className="products-area">
      <div className='products flex mx-7 gap-16'>
      <div className="left w-9/12">
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
      <div className="right w-3/12 text-nowrap">
        <div className="filterItem">
          <div className='flex'>
            <img className='h-12' src="https://icon-library.com/images/organic-icon-png/organic-icon-png-4.jpg" alt="" />
            <h2 className='my-3'>Product Categories</h2>
          </div>
          <div className='inner mx-3'>
            <div className="inputItem flex gap-2">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Flower</label>
            </div>
            <div className="inputItem flex gap-2">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="2">Seeds</label>
            </div>
            <div className="inputItem flex gap-2">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="3">Oil</label>
            </div>
            <div className="inputItem flex gap-2">
              <input type="checkbox" id="4" value={4} />
              <label htmlFor="4">Concentrate</label>
            </div>
            <div className="inputItem flex gap-2">
              <input type="checkbox" id="5" value={5} />
              <label htmlFor="5">Cartridges</label>
            </div>
            <div className="inputItem flex gap-2">
              <input type="checkbox" id="6" value={6} />
              <label htmlFor="6">Edible</label>
            </div>
          </div>
        </div>
        <div className="filterItem">
          <div className='flex'>
            <img className='h-12' src="https://icon-library.com/images/organic-icon-png/organic-icon-png-4.jpg" alt="" />
            <h2 className='my-3'>Filter by Price</h2>
          </div>
          <div className="inputItem flex gap-1 mx-3">
            <span>0</span>
            <input type="range" min={0} max={150} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <div className='flex'>
            <img className='h-12' src="https://icon-library.com/images/organic-icon-png/organic-icon-png-4.jpg" alt="" />
            <h2 className='my-3'>Sort by Price</h2>
          </div>
          <div className="inputItem radio-group mx-3">
            <input type="radio" name="price" id="asc" value="asc" className="radio-input" onChange={e => setSort("asc")} />
            <label htmlFor="asc" className="radio-label">Price (Lowest first)</label>
          </div>
          <div className="inputItem radio-group mx-3">
            <input type="radio" name="price" id="desc" value="desc" className="radio-input" onChange={e => setSort("desc")} />
            <label htmlFor="desc" className="radio-label">Price (Highest first)</label>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Products
