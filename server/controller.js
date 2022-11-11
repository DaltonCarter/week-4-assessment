let globalId = 1
let posts = []

module.exports = {

    getCompliment: (req, res) => {
        console.log('Alakor de zhakan!')
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        console.log('Khatum.')
    },

    getFortune: (req, res) => {
        console.log('Zerashk Gulida.')
        const fortunes = ["A good time to finish up old tasks.", "A hunch is creativity trying to tell you something.", "A pleasant surprise is waiting for you.", "All the effort you are making will ultimately pay off.", "All the troubles you have will pass away very quickly.", "Believe it can be done.", "Better ask twice than lose yourself once.", "Because you demand more from yourself, others respect you deeply.", "Dedicate yourself with a calm mind to the task at hand."]

        let randomFort = Math.floor(Math.random() * fortunes.length)
        let returnedFortune = fortunes[randomFort]

        res.status(200).send(returnedFortune)
        console.log("Ner'Mah.")
    },

    createPost: (req, res) => {
        console.log('Clever.')
        let {phrase, author} =req.body

        let newPhrase = {
            id: globalId,
            phrase,
            author
        }

        posts.push(newPhrase)

        res.status(200).send(posts)
        globalId++
        console.log('I am intrigued.')
    },

    deletePost: (req, res) => {
        console.log('Twilight falls upon us all!')
        console.log(req.params.id)
        let index = posts.findIndex(post => post.id === +req.params.id)
        posts.splice(index, 1)
        console.log(posts)

        res.status(200).send(posts)
        console.log('The Void claims its own.')
    },

    getPosts: (req, res) => {
        console.log('I will comply.')
        res.status(200).send(posts)
    },

    changeAuthor: (req, res) => {
        console.log('I am but a phantom.')
        let {id} = req.params
        let {text} = req.body
        let index = posts.findIndex(post => post.id === +id)
        posts[index].author = text
        console.log (posts[index].author)

        res.status(200).send(posts)
        console.log('Raszagal, watch over us...')

    }

}