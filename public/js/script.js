document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true
    })

    document.querySelectorAll('.show-lightbox').forEach(element => {
        element.addEventListener('click', event => {
            document.querySelector('#lightbox-image').setAttribute('src', event.target.dataset.image)
            document.querySelector('#lightbox').setAttribute('style', 'display: block')
        })
    })

    document.querySelector('#close-lightbox').addEventListener('click', () => {
        document.querySelector('#lightbox').setAttribute('style', 'display: none');
    })

    document.querySelector('#lightbox').addEventListener('click', () => {
        document.querySelector('#lightbox').setAttribute('style', 'display: none');
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            document.querySelector('#scroll-top').classList.remove('d-none')
            document.querySelector('#scroll-top').classList.add('d-flex')
        } else {
            document.querySelector('#scroll-top').classList.remove('d-flex')
            document.querySelector('#scroll-top').classList.add('d-none')
        }
    })

    /* document.querySelector('#contact-form').addEventListener('submit', event => {
        event.preventDefault()
        document.querySelector('button[type=submit]').innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> ' + document.querySelector('button[type=submit]').innerHTML

        fetch('https://script.google.com/macros/s/AKfycbx8VMQXTGdaDeTDb6_L8kRv2-eRaQ5D2Fq2RoevQH6EHYfPU94l/exec', {
            method: 'post',
            body: new FormData(document.querySelector('#contact-form'))
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert('Votre message a bien été envoyé. Vous serez recontactez dans les plus brefs délais.')
            } else {
                alert('Une erreur est survenue lors du traitement de votre message. Si le problème persiste, je vous suggère d\'utiliser directement email indiquée sur la page.')
            }

            document.querySelector('#contact-form').reset()
            window.location.reload()
        })
    }) */
})
