import React from 'react';
import "./Cart.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faTimes } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ open, setOpen }) => {
    const data = [
        {
            id: 1,
            img: "https://html.merku.love/herbalist/img/shop/14.webp",
            title: "Chem Dawg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab repellat iusto consequatur rem deleniti consectetur illo, similique impedit aliquid",
            isNew: true,
            oldPrice: 10.97,
            price: 6.97,
        },
        {
            id: 2,
            img: "https://html.merku.love/herbalist/img/shop/13.webp",
            title: "Coconut Based Tinctures",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab repellat iusto consequatur rem deleniti consectetur illo, similique impedit aliquid",
            isNew: true,
            oldPrice: 10.97,
            price: 7.97,
        },
    ];

    return (
        <div className={`cart ${open ? 'open' : ''}`}>
            <FontAwesomeIcon icon={faTimes} className="close-cart" onClick={() => setOpen(false)} />
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h2>{item.title}</h2>
                        <p>{item.desc?.substring(0, 80)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <FontAwesomeIcon icon={faTrashCan} style={{ color: "#e32400" }} className="delete" />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>Proceed to checkout</button>
            <span className='reset'>Reset Cart</span>
        </div>
    );
}

export default Cart;
