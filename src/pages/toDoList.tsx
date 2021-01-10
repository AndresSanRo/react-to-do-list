import React, { useState } from 'react';
import './toDoList.scss';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';
import { Task } from '../models';
import { Guid } from 'guid-typescript';

export const ToDoList = () => {
	const [inputText, setInputText] = useState<string>('');
	const [tasks, setTasks] = useState<Task[]>([]);
	const onChangeInput = (event: any): void => {
		setInputText(event.target.value);
	};
	const addTask = () => {
		if (inputText !== '' && inputText !== '') {
			const newTask: Task = {
				guid: Guid.create(),
				text: inputText,
			};
			setTasks((tasks) => [...tasks, newTask]);
			setInputText('');
		}
	};
	return (
		<Container>
			<Row>
				<Col>
					<div className="title">
						<h1>My tasks to do</h1>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="form">
						<Form.Control
							value={inputText}
							onChange={onChangeInput}
							placeholder="Type task text"></Form.Control>
						<Button variant="dark" onClick={addTask}>
							<PlusSquare />
						</Button>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="list">
						{tasks.map((task: Task) => {
							return <div>{task.text}</div>;
						})}
					</div>
				</Col>
			</Row>
		</Container>
	);
};
