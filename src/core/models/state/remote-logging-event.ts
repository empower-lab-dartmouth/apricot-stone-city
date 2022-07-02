import { JSONValue, PlainObject } from '../common/common-types'
import ConvoNode from '../convo-engine/convo-graph/convo-node'
import { AbsoluteConvoSegmentPath } from '../convo-engine/convo-graph/convo-path'
import UserChoice from '../convo-engine/convo-graph/user-choice'
import { StateVariable } from './state'

type GotoSegmentRemoteLoggingEvent = {
    type: 'goto-segment'
    botToken?: string
    buildEnvironment?: 'local' | 'remote'
    startingPath: AbsoluteConvoSegmentPath //  before receiving user input
    endingPath: AbsoluteConvoSegmentPath // after receiving user input
    choices: string[] | 'free-response-only'
    userId: string // this is the telegram ID
    contentReceivedFromUser: JSONValue
    userStateBeforeLogic: PlainObject<StateVariable>
    contentSentToUser: string[]
    username: string
    userEmail: string
    timestamp: Date
}

type UpdateStateRemoteLoggingEvent = {
    type: 'update-state'
    buildEnvironment?: 'local' | 'remote'
    startingPath: AbsoluteConvoSegmentPath //  before receiving user input
    choices: string[] | 'free-response-only'
    userId: string // this is the telegram ID
    contentReceivedFromUser: JSONValue
    userStateBeforeLogic: PlainObject<StateVariable>
    stateUpdate: PlainObject<StateVariable>
    botToken?: string
    username: string
    userEmail: string
    timestamp: Date
}

type UnrecognizedUserResponseRemoteLoggingEvent = {
    type: 'unrecognized-response'
    buildEnvironment?: 'local' | 'remote'
    startingPath: AbsoluteConvoSegmentPath //  before receiving user input
    choices: string[] | 'free-response-only'
    userId: string // this is the telegram ID
    contentReceivedFromUser: JSONValue
    userStateBeforeLogic: PlainObject<StateVariable>
    username: string
    botToken?: string
    userEmail: string
    timestamp: Date
}

export type LogToRemoteEvent =
    | UpdateStateRemoteLoggingEvent
    | GotoSegmentRemoteLoggingEvent
    | UnrecognizedUserResponseRemoteLoggingEvent
