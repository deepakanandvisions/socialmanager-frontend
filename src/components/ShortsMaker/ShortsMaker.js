import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeShortsMakerInputField } from '../../Redux/Actions/ToolActions.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'react-uuid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NonLogedInView from './TemplateParts/NonLoggedIn/NonLogedInView.js';
import Header from './../../components/Header.js';
const id = uuid();
function ShortsMaker({ shortcodeSettings }) {
	const ToolState = useSelector((state) => state.ToolReducer);
	const dispatch = useDispatch();
	const { ShortsMakerField } = ToolState;

	useEffect(() => {
		dispatch(
			changeShortsMakerInputField({
				shortcodeSettings1: shortcodeSettings,
			})
		);


	}, [ShortsMakerField.final_data]);
	useEffect(() => {

		dispatch(changeShortsMakerInputField({ id: id }));
	}, []);

	return (
		<>

			<Header />

			<NonLogedInView ShortsMakerField={ShortsMakerField} />

			<Container>
				<Row className="justify-content-md-center p-5">
					<Col md="auto">
						<div className="custom-text">© Copyright 2024. All Rights Reserved. </div>
					</Col>
				</Row>
			</Container>

		</>
	);
}
export default ShortsMaker;
