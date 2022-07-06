import make from '../../core/util/make'
 
const normanIsStopped = make.module({
   id: 'norman-is-stopped',
   submodules: [],
   convoSegments: [
       {
           id: 'introduction',
           convo: [
               {
                   type: 'text',
                   text:
                       `Norman moves through the airport rather slowly, due to the weight of his belongings. Suddenly a tall, intimidating-looking man who has sunglasses and a business suit on appears seemingly out of nowhere and stops right in front of him.`,
               },
           ],
           choices: [
               {
                   text: 'How does he look like?',
                   logic: [
                       {
                           do: [
                               {
                                   type: 'goto',
                                   path: ['man-in-suit'],
                               },
                           ],
                       },
                   ],
               },
           ],
       },
       {
           id: 'man-in-suit',
           convo: [
               {
                   type: 'image',
                   src:
                       `https://i.pinimg.com/564x/33/c3/18/33c3188bfa1cc130e21eb792389349ce.jpg`,
               },
           ],
           choices: [
               {
                   text: 'Just ignore and move past him',
                   logic: [
                       {
                           do: [
                               {
                                   type: 'goto',
                                   path: ['move-past-him'],
                               },
                           ],
                       },
                   ],
               },
               {
                   text: 'Tell him to get out of the way',
                   logic: [
                       {
                           do: [
                               {
                                   type: 'goto',
                                   path: ['tell-him'],
                               },
                           ],
                       },
                   ],
               },
           ],
       },
       {
           id: 'move-past-him',
           convo: [
               {
                   type: 'text',
                   text:
                       `"Why did this guy stop all of a sudden anyway? What a lunatic," thinks Norman as he tries to move past him. He is stopped in his track by as someone grabbed his wrist.
 
                       The man: Stop where you are.
                      
                       Norman turns around and realizes it is the same guy who was in front of him a moment ago. Moreover, some other similarly dressed guys stood behind the man.`,
               },
           ],
           choices: [
               {
                   text: 'What guys?',
                   logic: [
                       {
                           do: [
                               {
                                   type: 'goto',
                                   path: ['people-in-suit'],
                               },
                           ],
                       },
                   ],
               },
           ],
       },
       {
           id: 'tell-him',
           convo: [
               {
                   type: 'text',
                   text:
                       `Norman: Sir can you please stand elsewhere, people are in a hurry and you are getting in a way.
 
                       The man: I am not going anywhere and neither are you.
                      
                       Norman: Excuse me?
                      
                       Norman notices similarly dressed people surrounding him.`,
               },
           ],
           choices: [
               {
                   text: 'What people?',
                   logic: [
                       {
                           do: [
                               {
                                   type: 'goto',
                                   path: ['people1-in-suit'],
                               },
                           ],
                       },
                   ],
               },
           ],
       },
       {
           id: 'people-in-suit',
           convo: [
               {
                   type: 'image',
                   src:
                       `https://i.pinimg.com/564x/c7/e4/27/c7e42735a824b094be58d75aa387cd57.jpg`,
               },
           ],
           choices: [
               {
                   text: 'What happens next?',
                   logic: [
                       {
                           do: [
                               {
                                   type: 'goto',
                                   path: ['ending1'],
                               },
                           ],
                       },
                   ],
               },
           ],
       },
       {
           id: 'people1-in-suit',
           convo: [
               {
                   type: 'image',
                   src:
                       `https://i.pinimg.com/564x/bf/6c/35/bf6c35ab7539ee9af89a0004dcaff924.jpg`,
               },
           ],
           choices: [
               {
                   text: 'What happens next?',
                   logic: [
                       {
                           do: [
                               {
                                   type: 'goto',
                                   path: ['ending2'],
                               },
                           ],
                       },
                   ],
               },
           ],
       },
       {
           id: 'ending1',
           convo: [
               {
                   type: 'text',
                   text:
                       `Norman is confused.
 
                       Norman: Are you mad?! Let go of me!
                      
                       The man: We are called "Self-aware" and you are coming with us.
                      
                       Those other men rapidly approached him, too, grabbed him, and started to drag him somewhere.`,
               },
           ],
           choices: [
           ],
       },
       {
           id: 'ending2',
           convo: [
               {
                   type: 'text',
                   text:
                       `The man: We are called "Self-aware" and you are coming with us.
 
                       Those other men rapidly approached him, too, grabbed him, and started to drag him somewhere.`,
               },
           ],
           choices: [
           ],
       },
   ],
})
 
export default normanIsStopped
 
