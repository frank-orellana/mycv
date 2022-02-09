import {CV} from '../data/model/cv';

export function inheritCV(originalCV: CV): CV {
	return JSON.parse(JSON.stringify(originalCV)) as CV;
}