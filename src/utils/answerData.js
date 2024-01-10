import Storage from '../services/StorageService';
import { v4 as uuidv4 } from 'uuid';
export const generateAnswer = () => {
	return [
		{
			timeline:0,
			id: uuidv4(),
			title: 'READY FOR DEV',
			issues: [
				{ id: uuidv4(), title: 'Draw Personas and Scenarios', description: 'depend on the user group, draw the personas and in some situation make sure scenarios',timeline: 1,person: "Clara Copyright",tag:[{label: 'User Research', value: 'gold', key: 'gold'},{label: 'LOFI', value: 'lime', key: 'lime'}] },
				{ id: uuidv4(), title: 'Draw Lofi Prototype of Project', description: 'fix all the necessary screens and draw the structure of the screens in Figma',timeline: 2,person: "John Johnson",tag:[{label: 'LOFI', value: 'lime', key: 'lime'}] },
			]
		},
		{
			id: uuidv4(),
			title: 'IN DEVELOPMENT',
			issues: [
				{ id: uuidv4(), title: 'Organize the opinions given by tutor', description: 'organize the opinions given by the tutor into a word document',timeline: 2,person: "John Johnson",tag:[{label: 'User Research', value: 'gold', key: 'gold'}] },
			]
		},
		{
			timeline:2,
			id: uuidv4(),
			title: 'IN TEST',
			issues: [{ id: uuidv4(), title: 'Draw Hifi Prototype', description: 'improve Lofi Prototype and determine style, fonts and icons for all screens',timeline: 0,person: "Max Muster",tag:[{label: 'HIFI', value: 'green', key: 'green'},{label: 'LOFI', value: 'lime', key: 'lime'}] },]
		},
	];
};