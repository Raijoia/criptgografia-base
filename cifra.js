const mensagemSecreta  = "minhamensagemsecreta"

console.log(mensagemSecreta)

function cifraMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split('').map(caractere  => {
    const codigoCaractere = caractere.charCodeAt(0)
    return String.fromCharCode(codigoCaractere + movimentos)
  })

  return mensagemCifrada.join('')
}

function decifrarMensagem(mensagemCifrada, movimentos) {
  const mensagemDecifrada = mensagemCifrada.split('').map(caractere  => {
    const codigoCaractere = caractere.charCodeAt(0)
    return String.fromCharCode(codigoCaractere - movimentos)
  })

  return mensagemDecifrada.join('')
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, 3)

const mensagemDecifrada = decifrarMensagem(mensagemCifrada, 3);

console.log('Mensagem Cifrada:', mensagemCifrada)
console.log('Mensagem Decifrada:', mensagemDecifrada)