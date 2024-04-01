$(document).ready(function() {
    const username = 'renanoliveira31';
    const contador = `https://api.github.com/users/${username}`;

    function atualizarNumeros() {
        fetch(contador)
            .then(function(resposta) {
                if (!resposta.ok) {
                    throw new Error('Erro ao carregar informações do GitHub.');
                }
                return resposta.json();
            })
            .then(function(data) {
                $('#repoCount').text(data.public_repos);
                $('#followersCount').text(data.followers);
                $('#followingCount').text(data.following);
            })
            .catch(function(erro) {
                alert(erro.message);
            });
    }
    atualizarNumeros();
    setInterval(atualizarNumeros, 300000);
});
