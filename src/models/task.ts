import { Guid } from 'guid-typescript';

export interface Task {
	guid: Guid;
	text: string;
}
