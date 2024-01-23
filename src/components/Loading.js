import SsembleSpinner from './ssembleSpinner';
function Loading() {
	return (
		<section class="youtube-down-sec tools-sec">
			<div class="container">
				<div className="loadingScreen">
					<SsembleSpinner />
				</div>
			</div>
		</section>
	);
}

export default Loading;
