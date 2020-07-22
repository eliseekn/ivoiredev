document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 180) {
            document.querySelector('#scroll-top').classList.remove('d-none')
            document.querySelector('#scroll-top').classList.add('d-flex')
        } else {
            document.querySelector('#scroll-top').classList.remove('d-flex')
            document.querySelector('#scroll-top').classList.add('d-none')
        }
    })

    document.querySelector('#contact-form').addEventListener('submit', event => {
        event.preventDefault()
        document.querySelector('.loading').innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span>'

        fetch('http://ivoiredev.ci/api/email/index.php', {
            method: 'post',
            body: new FormData(document.querySelector('#contact-form'))
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message)
            document.querySelector('#contact-form').reset()
            window.location.reload()
        })
    })

    if (document.querySelector('#design')) {
        document.querySelector('#design').addEventListener('click', event => {
            event.preventDefault()
            document.querySelector('#subject').value = 'Devis conception graphique'
            document.querySelector('#contact-form').scrollIntoView(false)
        })
    }

    if (document.querySelector('#classic')) {
        document.querySelector('#classic').addEventListener('click', event => {
            event.preventDefault()
            document.querySelector('#subject').value = 'Devis conception site classique'
            document.querySelector('#contact-form').scrollIntoView(false)
        })
    }

    if (document.querySelector('#ecommerce')) {
        document.querySelector('#ecommerce').addEventListener('click', event => {
            event.preventDefault()
            document.querySelector('#subject').value = 'Devis conception site eCommerce'
            document.querySelector('#contact-form').scrollIntoView(false)
        })
    }

    if (document.querySelector('#app')) {
        document.querySelector('#app').addEventListener('click', event => {
            event.preventDefault()
            document.querySelector('#subject').value = 'Devis conception application web'
            document.querySelector('#contact-form').scrollIntoView(false)
        })
    }
})
