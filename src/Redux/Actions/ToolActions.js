import { CHANGE_ShortsMaker_INPUT_FIELD } from '../Constant/ToolConstant';

const changeShortsMakerInputField = ( newState ) => {
	return { type: CHANGE_ShortsMaker_INPUT_FIELD, newState };
};

export { changeShortsMakerInputField };
