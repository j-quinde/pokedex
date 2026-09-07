const actualizarBotonesPaginacion = () => {

    const totalPaginas = Math.ceil(speciesRegionCompleta.length / limitePorPagina);
    const paginationContainer = document.querySelector('.pagination');

    if(!paginationContainer) return;

    paginationContainer.innerHTML = '';

    let previousli = document.createElement('li');
    previousli.classList.add('page-item');
    //previousli.id = 'btn-previous';
    if (paginaActual === 1) {
        previousli.classList.add('disabled');
    }
    previousli.innerHTML = `<a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>`;
    
    previousli.addEventListener('click', (e) => {
        e.preventDefault();
        if (paginaActual > 1){
            cambiarPagina('previous');
        }
    });

    paginationContainer.appendChild(previousli);

    for (let i = 1; i <= totalPaginas; i++) {
        let numeroli = document.createElement('li');
        numeroli.classList.add('page-item');

        if (i === paginaActual){
            numeroli.classList.add('active');
        }

        numeroli.innerHTML = `<a class="page-link" href="#">${i}</a>`;

        numeroli.addEventListener('click', (e) => {
            e.preventDefault();
            paginaActual = i;
            fetchPokemonPaginado();
        });

        paginationContainer.appendChild(numeroli);
    }

    let nextli = document.createElement('li');
    //nextli.id = 'btn-next';
    nextli.classList.add('page-item');
    nextli.innerHTML = `<a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>`;
    
    nextli.addEventListener('click', (e) => {
        e.preventDefault();
        if(paginaActual < totalPaginas){
            cambiarPagina('next');
        }
    });
    paginationContainer.appendChild(nextli);
}

const cambiarPagina = (direccion) => {
    const totalPaginas = Math.ceil(speciesRegionCompleta.length / limitePorPagina);

    if (direccion === 'next' && paginaActual < totalPaginas) {
        paginaActual++;
        fetchPokemonPaginado();
    } else if (direccion === 'previous' && paginaActual > 1) {
        paginaActual--;
        fetchPokemonPaginado();
    }
}
/*
const actualizarBotonesPaginacion = () => {
    const totalPaginas = Math.ceil(speciesRegionCompleta.length / limitePorPagina);
    const btnPrevious = document.getElementById('#btn-previous');
    const btnNext = document.getElementById('#btn-next');
    const infoPagina = document.getElementById('#info-pagina');

    if (btnPrevious && btnNext && infoPagina) {
        btnPrevious.disabled = (paginaActual === 1);
        btnNext.disabled = (paginaActual === totalPaginas || totalPaginas === 0);
        infoPagina.textContent = `Página ${paginaActual} de ${totalPaginas}`;
    }
}*/