import { v4 as uuid } from 'uuid';
const handleGenerateTypeScript = ( {
	baseURL,
	inputURL,
	outputURL,
	outputDuration,
} ) => {
	const getYTEditorURL = (
		inputURL: string,
		outputURL: string,
		outputDuration: number
	): string => {
		if ( ! inputURL || ! outputURL || outputDuration < 1 ) return '';

		const targetDomain =
			baseURL + '?utm_source=https://www.ssemble.com/youtube-downloader';
		// const postData = {
		//   video: inputURL,
		//   fileUrl: outputURL,
		//   duration: outputDuration,
		// };

		const unique_id = uuid();

		const postData = {
			type: 'Youtube',
			requestId: unique_id,
			params: {
				src: outputURL,
				type: 'video',
				video: inputURL,
				duration: outputDuration,
			},
		};

		return `${ targetDomain }&add=${ encodeURIComponent(
			JSON.stringify( postData )
		) }`;
	};
	let url = getYTEditorURL( inputURL, outputURL, outputDuration );
	return url;
};
export default handleGenerateTypeScript;
