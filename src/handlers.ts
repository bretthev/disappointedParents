import { launchResponses } from './alexaResponses/launchresponse';
import { greetings } from './alexaResponses/greeting';
import { disappointedResponses } from './alexaResponses/disappointedResponses';
import { askIfProudResponses } from './alexaResponses/askIfProud';
import { compareToSiblingsResponses } from './alexaResponses/compareToSiblings';
import { farewells } from './alexaResponses/farewell';

interface Handlers {
    LaunchRequest: () => void
    Greeting: () => void
    AskIfDisappointed: () => void
    AskIfProud: () => void
    CompareToSiblings: () => void
    Farewell: () => void
}

export const handlers: Handlers = {
     'LaunchRequest': function () {
        this.emit(':tell', grabRandomResponse(launchResponses));
    },
    'Greeting': function() {
        this.emit(':tell', grabRandomResponse(greetings))
    },
    'AskIfDisappointed': function() {
        this.emit(':tell', grabRandomResponse(disappointedResponses))
    },
    'AskIfProud': function() {
        this.emit(':tell', grabRandomResponse(askIfProudResponses))
    },
    'CompareToSiblings': function() {
        this.emit(':tell', grabRandomResponse(compareToSiblingsResponses))
    },
    'Farewell': function() {
        this.emit(':tell', grabRandomResponse(farewells))
    }
}

function grabRandomResponse(responses: string[]): string {
    if (responses.length === 1) { return responses[0]; }
    return responses[Math.floor(Math.random() * responses.length)]
}