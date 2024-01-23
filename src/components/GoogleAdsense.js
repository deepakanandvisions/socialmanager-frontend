import React, { useEffect } from 'react';

const GoogleAdsence = () => {
	useEffect( () => {
		try {
			( window.adsbygoogle = window.adsbygoogle || [] ).push( {} );
		} catch ( e ) {}
	}, [] );

	return (
		<ins
			class="adsbygoogle"
			style={ { display: 'block' } }
			data-ad-client="ca-pub-1244083228195035"
			data-ad-slot="2643752629"
			data-ad-format="auto"
			data-full-width-responsive="true"
		></ins>
	);
};
export default GoogleAdsence;
