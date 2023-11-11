document.querySelector('button').addEventListener('click', getCountry)

function getCountry(){
    const country = document.querySelector('input').value
    const url = `/api/${country}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#continent').innerText = data.continent
        document.querySelector('#language').innerText = data.language
        document.querySelector('#currency').innerText = data.currency
    })
}
