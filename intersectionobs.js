let AllLinks = document.querySelectorAll('nav a');
let sections = document.querySelectorAll('section');

const opties = {
    rootMargin: '-150px',
    treshold: 1.0
};

const editcut = (entries, observer) => {
    entries.forEach(entry => {
        // console.log(entry.target.id + " doorsnijdt " + entry.isIntersecting);
        if (entry.isIntersecting) {
            let link = SearchLink('#' + entry.target.id);
            maakActief(link);
        }
    })
}

let observer = new IntersectionObserver(editcut, opties);

// observer.observe(sections[1]);
sections.forEach( section => {
    observer.observe(section);
});

// Functies die de class actief verwijderd
const verwijderActief = () => {
    AllLinks.forEach((link) => {
        if (link.classList = 'actief') {
            link.classList.remove('actief');
        }
    });
}

// Functie die actief-class toevoegd
const maakActief = (element) => {
    verwijderActief();
    element.classList.add('actief');
}

AllLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        maakActief(e.target);
        window.location = e.target.href;
    })
})

const SearchLink = (id) => {
    let link = document.querySelector('nav a[href="' + id + '"]');
    return link;
}