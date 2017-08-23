const Alexa = require('alexa-sdk');
import { ALEXA_SKILL_ID } from './src/config';
import { handlers } from './src/handlers';

export function handler(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = ALEXA_SKILL_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
}