import React, { useState } from 'react';
import './taskBar.scss';
import { Task } from '../../models';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { XCircle } from 'react-bootstrap-icons';

interface TaskBarProps {
	task: Task;
}

export const TaskBar = (props: TaskBarProps) => {
	const [checked, setChecked] = useState<boolean>(false);
	return (
		<Row>
			<Col sm={11} md={11} lg={11}>
				<div className="bar">
					<Form.Check onChange={() => setChecked(!checked)} />
					<span className={checked ? 'done' : ''}>
						{props.task.text}
					</span>
				</div>
			</Col>
			<Col sm={1} md={1} lg={1}>
				<XCircle className="barBtn" onClick={() => {}} />
			</Col>
		</Row>
	);
};
