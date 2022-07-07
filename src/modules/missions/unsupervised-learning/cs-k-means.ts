import make from '../../../core/util/make'

const kMeans = make.module({
    id: 'norman-learns-k-means',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `Norman and Merlin are in dark cave. Norman sees that the cave is mostly empty save a huge bag with something heavy in it and four empty boxes in front of it.

                       Merlin: It's time for your next mission. See that huge bag in front of you? It contains 4 different types of fruits. I am gonna ask you to separate them into these boxes without actually seeing them.
                       
                       Norman: That's ridiculous! I can't sort them correctly without having any information about them. No one can!
                       
                       Merlin: That's true... But I never said anything about not getting any information at all. You can ask me to give a certain characteristics of the items inside. You can separate them based on that information.
                       
                       Norman: OK, fair enough. Then can you give me the list of items based on...`,
                },
            ],
            choices: [
                {
                    text: 'Weight',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Weight'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Volume',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['Volume'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Weight',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177499341-3ac83b65-ec98-416c-a187-efbd9aab08e9.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: OK. Firstly, let's put them in an ascending order.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['ascending-order'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'ascending-order',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177500597-ba70fb65-dde0-41e4-960c-861a2a93e819.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: And now let's divide them into four groups.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['groups'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'groups',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177500746-d0807ec8-a018-4b32-8bed-b232ba80e2c7.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: This should work fine I think.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['work-fine'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'work-fine',
            convo: [
                {
                    type: 'text',
                    text: `Merlin smirked.
                    
                    Merlin: Do you want to see the final result?
                    
                    `,
                },
            ],
            choices: [
                {
                    text: `Norman: Yes definitely!`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['final-result'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'final-result',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177501061-e3d82a4d-cb0e-4dca-96ae-8453a14caeba.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: There are far too many errors! I was NOT expecting this.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['too-many-errors'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'too-many-errors',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: I can suggest another solution, do you want to listen?`,
                },
            ],
            choices: [
                {
                    text: `Norman: Yes!`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'Volume',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177502267-402749a8-2640-4828-9adb-eb92c3b93469.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: OK. Firstly, let's put them in an ascending order.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['ascending-order1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'ascending-order1',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177502354-3ad0c58f-18bb-4486-b426-89b82f0055b9.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: And now let's divide them into four groups.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['groups1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'groups1',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177502426-4ed4e3ff-4539-4404-9237-223a3960df19.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: This should work fine I think.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['work-fine'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'work-fine1',
            convo: [
                {
                    type: 'text',
                    text: `Merlin smirked.
                    
                    Merlin: Do you want to see the final result?
                    
                    `,
                },
            ],
            choices: [
                {
                    text: `Norman: Yes definitely!`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['final-result1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'final-result1',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177502449-2ad5683d-d3a8-4c40-9439-c873f95c885f.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: There are far too many errors! I was NOT expecting this.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['too-many-errors1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'too-many-errors1',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: I can suggest another solution, do you want to listen?`,
                },
            ],
            choices: [
                {
                    text: `Norman: Yes!`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: I suggest to separate items into groups using k-means.`,
                },
            ],
            choices: [
                {
                    text: `Norman: What's k-means?`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution1',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: It's a brunch of unsupervised learning. But wait! Everything in order! I'll need the list of items with weight AND volume to help me to explain this solution and this new concept.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177504434-222508e6-ddec-45de-87b8-2597f59393f5.png`,
                },
            ],
            choices: [
                {
                    text: `Norman:Go on`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution2'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution2',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: Now let's build a scatter chart based on this data.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177504738-0f464935-bcd0-4c5e-96ad-0aac381577f5.png`,
                },
            ],
            choices: [
                {
                    text: `Norman:Go on`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution3'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution3',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: For starters a little bit about unsupervised learning. Unsupervised learning, also known as unsupervised machine learning, uses machine learning algorithms to analyze and cluster unlabeled datasets. These algorithms discover hidden patterns or data groupings without the need for human intervention. Its ability to discover similarities and differences in information make it the ideal solution for exploratory data analysis, cross-selling strategies, customer segmentation, and image recognition. Is all of these clear?
                    `,
                },
            ],
            choices: [
                {
                    text: `Norman: Yes.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution4',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: Ok. Now about k-means. K-means clustering is a very famous and powerful unsupervised machine learning algorithm. It is used to solve many complex unsupervised machine learning problems. A K-means clustering algorithm tries to group similar items in the form of clusters. The number of groups is represented by K. Now on the example of our data set I will try to explain how the k-means clustering algorithm works.`,
                },
            ],
            choices: [
                {
                    text: `Norman: Go on.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution5',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: We begin with defining the number of clusters. Keep in mind that the accuracy of our clustering largely depends on whether we picked the most optimal number of clusters. In our example things are more simple because we know that we have 4 types of fruit, therefore the correct number of clusters is 4.`,
                },
            ],
            choices: [
                {
                    text: `Norman: I get it.`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution6'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution6',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: Now Let's put 4 random points into our graphs. These points will later become the centroids of our clusters.`,
                },
            ],
            choices: [
                {
                    text: `Norman: Show me the graph`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution7'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution7',
            convo: [
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177508829-8acee68a-ab77-42b0-8053-d631d2f743c1.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: Go on`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution8'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution8',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: Now the distance from the first point to each of the cluster centroids is measured. The point is then assigned to the cluster that is closest to it. This is now repeated for all further points. The final result should look something like this.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177510775-73a683d1-06a3-4420-81f0-837bbe8c1081.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: Go on`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution9'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution9',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: Then we calculate the center of each cluster. These centers are the new Centroids of the clusters. So the cluster centroids are moved to the cluster centers.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177511435-77925b07-a4cd-439a-b4ce-73ad2bcc96f8.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: Go on`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution10'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution10',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: Now we repeat our previous two steps until the cluster distribution does not change anymore. If the clusters do not change in one iteration, the procedure is over. In our own example the final clusters look like this.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177512075-bf335f44-050b-4a9e-b69f-614bcbf8c1ac.png`,
                },
            ],
            choices: [
                {
                    text: `Norman: Go on`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution11'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution11',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: You know our way of clustering is surprisingly similar to the actual fruit groups. Just check this out!`,
                },
            ],
            choices: [
                {
                    text: `Norman: Show me the actual clusters`,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['solution12'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'solution12',
            convo: [
                {
                    type: 'text',
                    text: `Merlin: This is the actual groups of fruit. Notice how little errors we made in our groups without seeing the items.`,
                },
                {
                    type: 'image',
                    src: `https://user-images.githubusercontent.com/68229446/177513026-799b6d6a-04a4-4b1c-aa03-234d687b883c.png`,
                },
            ],
            choices: [],
        },
    ],
})

export default kMeans
