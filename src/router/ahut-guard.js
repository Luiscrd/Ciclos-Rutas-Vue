const isAuthenticatedGuard = (to, from, next) => {

    const random = Math.random() * 100

    if (random > 50) {
        console.log(random, 'Autentifacado - isAuthenticatedGuard')
        next()
    } else {
        console.log(random, 'Bloqueado por el beforeEacg Guard - isAuthenticatedGuard')
        next({ name: 'pokemon-about' })
    }

}

export default isAuthenticatedGuard