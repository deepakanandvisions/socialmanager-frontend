import io from 'socket.io-client';

// const shortsmakersocket = io('https://ytimporter.plugin.vlogr.com',{withCredentials: false,transports : ["websocket","polling"]});
const shortsmakersocket = io(
	'https://youtube-importer-dot-ssemble-plugins-backend.uc.r.appspot.com',
	{ withCredentials: false, transports: [ 'websocket', 'polling' ] }
);

function subscribeToTimer( id, callback ) {
	shortsmakersocket.on( id, ( progress_state, progress ) =>
		callback( null, progress_state, progress )
	);
}

function sendForm( jsonObject ) {
	shortsmakersocket.emit( 'client-event', JSON.stringify( jsonObject ) );
}

function validateURL( jsonObject ) {
	shortsmakersocket.emit( 'validation_event', JSON.stringify( jsonObject ) );
}

export { subscribeToTimer, sendForm, validateURL, shortsmakersocket };
