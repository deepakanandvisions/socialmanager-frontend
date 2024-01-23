import {
	CHANGE_ICON_FINDER_FIELDS,
	CHANGE_ShortsMaker_INPUT_FIELD,
} from '../Constant/ToolConstant';

const initialState = {
	ShortsMakerField: {
		urlInputField: '',
		preferedShortLength: 'auto',
		// downloadMpFields: 'Mp4',
		// timeDuration: 0,
		validUrlInput: true,
		isLoadingUrl: false,
		// formatOptionsValues: [],
		FormatInputField: '',
		progress_state: 'no timestamp yet',
		progress: 80,
		id: '',
		final_data: '',
		convertDisabled: true,
		cancelProgress: false,
		EditVideoApiData: '',
		isConvertLoading: false,
	},
};
export const ToolReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case CHANGE_ShortsMaker_INPUT_FIELD:
			return {
				...state,
				...{
					ShortsMakerField: {
						...state.ShortsMakerField,
						...action.newState,
					},
				},
			};
		default:
			return state;
	}
};
