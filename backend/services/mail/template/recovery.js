export function template(name, token){
    return `<h1>Hola ${name}</h1>
            <p> Para recuperar tu cuenta haz click <a href="http://localhost:3000/recuperar-usuario/${token}">Aqui!!</a>`
}
export default template