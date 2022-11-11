console.log('Goliath Online!')



const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortune")
const form = document.querySelector('form')
const mainDiv = document.querySelector('#main')

const thingCallback = ({data: post}) => displayThing(post)

const getAllPosts = () => axios.get("http://localhost:4000/api/quote").then(thingCallback)
const createThing = body => axios.post("http://localhost:4000/api/quote/", body).then(thingCallback)
const deletePost = id => axios.delete(`http://localhost:4000/api/quote/${id}`).then(thingCallback)
const changeAuthor = (id, text = document.querySelector('#replace').value) => axios.put(`http://localhost:4000/api/quote/${id}`, {text}).then(thingCallback)

const getCompliment = () => {
    console.log('Go ahead TACCOM.')
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const getFortune = () => {
    console.log(' Acknowledged H.Q.')
    axios.get("http://localhost:4000/api/fortune/")
    .then (res => {
        const data = res.data
        alert(data)
    })
}

function submission(e) {
    console.log( 'Affirmative.')
     e.preventDefault()
    let phrase = document.querySelector('#phrase')
    let author = document.querySelector('#author')

    let textObj = {
        phrase: phrase.value,
        author: author.value
    }
   
    createThing(textObj)
    phrase.value = ''
    author.value = ''

    console.log('Systems functional.')

}

function createThingPost(post) {
    console.log('Data received, TACCOM.')
    const postCard = document.createElement('div')
    postCard.innerHTML = `<p>${post.phrase}</p> 
    <p>${post.author}</p>
    <input 
          type='text'
          id="replace"
          placeholder='New author?'/>
          <button onclick="changeAuthor(${post.id})">Change</button>
          <br>
    <button onclick="deletePost(${post.id})">delete</button>
    `

    mainDiv.appendChild(postCard)
}

function displayThing(info){
    mainDiv.innerHTML = ``
    for (let i = 0; i < info.length; i++) {
        createThingPost(info[i])
    }
    console.log('Checklist completed...')

}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', submission)