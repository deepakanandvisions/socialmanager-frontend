import io from 'socket.io-client';

const progressshortsmakersocket = io(
	'https://youtube-importer-dot-ssemble-plugins-backend.uc.r.appspot.com',
	{ withCredentials: false, transports: [ 'websocket', 'polling' ] }
);

/**
 * Subscribes to a timer event from the server.
 *
 * @param {string} id - The ID of the timer event.
 * @param {function} callback - The function to call when the event is received.
 */
function progressSubscribeToTimer( id, callback ) {
    progressshortsmakersocket.on( id, ( progress_state, progress ) =>
        callback( null, progress_state, progress )
    );
}

/**
 * Sends a form to the server using the Socket.IO connection.
 *
 * @param {Object} jsonObject - The form data to send to the server.
 */
function progressSendForm( jsonObject ) {
    progressshortsmakersocket.emit( 'client-event', JSON.stringify( jsonObject ) );
}

export { progressSubscribeToTimer, progressSendForm, progressshortsmakersocket };
