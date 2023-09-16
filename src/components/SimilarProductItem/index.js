// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productsDetails} = props
  const {title, brand, imageUrl, rating, price} = productsDetails

  return (
    <li className="similar-product-item">
      <img src={imageUrl} className="image" alt={`similar product ${title}`} />
      <p className="title"> {title}</p>
      <p className="brand"> by {brand} </p>
      <div className="rating-container">
        <p className="price"> Rs {price}-</p>
        <div className="rating-container">
          <p className="rating"> {rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="product-star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
