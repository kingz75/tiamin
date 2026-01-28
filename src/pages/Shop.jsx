import React from 'react';
import ShopHero from './SHOP/ShopHero';
import ShopContent from './SHOP/ShopContent';
import ShopReview from './SHOP/ShopReview';

export default function Shop() {
	return (
		<div className="lg:mt-0 mt-32">
			<ShopHero />
			<div className="mt-8">
				<ShopContent />
			</div>
			<ShopReview />
		</div>
	);
}
