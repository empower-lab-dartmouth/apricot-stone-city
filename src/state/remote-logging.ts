import { collection, doc, setDoc } from 'firebase/firestore'
import { env } from 'process'
import { LogToRemoteEvent } from '../core/models/state/remote-logging-event'
import { REMOTE_BOT_TOKEN } from '../storyteller-config'
import { firebaseDB } from './firebase'

const EVENTS_ENV = 'loggingEvents'

const logEventToRemote: (event: LogToRemoteEvent) => void = async (
    event: LogToRemoteEvent
) => {
    console.log('push event:')
    const currentDate = Date()
    const eventWithEnv = {
        ...event,
        buildEnvironment:
            process.env.BOT_TOKEN === REMOTE_BOT_TOKEN ? 'remote' : 'local',
    }
    console.log(eventWithEnv)
    setDoc(doc(firebaseDB, EVENTS_ENV, currentDate), eventWithEnv);
}

export default logEventToRemote
