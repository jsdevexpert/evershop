import React from "react";
import { useAppState } from "../../../../../../../lib/context/app";
import { get } from "../../../../../../../lib/util/get";

const Price = ({ price, salePrice }) => {
    const currency = get(useAppState(), "currency", "USD");
    const language = get(useAppState(), "language", "en");
    const _price = new Intl.NumberFormat(language, { style: 'currency', currency: currency }).format(price);
    const _salePrice = new Intl.NumberFormat(language, { style: 'currency', currency: currency }).format(salePrice);
    return <div className="product-price-listing">
        {parseFloat(salePrice) === parseFloat(price) && <div>
            <span className="sale-price">{_price}</span>
        </div>}
        {parseFloat(salePrice) < parseFloat(price) && <div>
            <span className="sale-price">{_salePrice}</span> <span className="regular-price">{_price}</span>
        </div>}
    </div>
};
export { Price };