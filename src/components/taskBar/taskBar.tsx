import React, { useState } from 'react';
import './taskBar.scss';
import { Task } from '../../models';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { XCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { Guid } from 'guid-typescript';

interface TaskBarProps {
	task: Task;
	removeTask: (taskGuid: Guid) => void;
}

export const TaskBar = (props: TaskBarProps) => {
	const [checked, setChecked] = useState<boolean>(false);
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	const deleteTask = () => {
		handleClose();
		props.removeTask(props.task.guid);
	};
	return (
		<>
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
					<XCircle className="barBtn" onClick={handleShow} />
				</Col>
			</Row>
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						Are you sure you want to delete this task?
					</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="danger" onClick={deleteTask}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
