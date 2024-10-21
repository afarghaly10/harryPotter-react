import { CHARACTERS } from '../characters.js';
import Product from './Product.jsx';

export default function Shop({ onAddItemToCart }) {
	return (
		<section id="shop">
			<h2>Harry Potter Main Characters</h2>

			<ul id="products">
				{CHARACTERS.map((product) => (
					<li key={product.id}>
						<Product {...product} onAddToCart={onAddItemToCart} />
					</li>
				))}
			</ul>
		</section>
	);
}
