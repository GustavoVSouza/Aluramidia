function AdicionarNome() {
    var album = document.getElementById("album").value;
    var nome_album = document.getElementById("nome_album").value;
    var album = "<li><img src='"+ album +"'><h2 class='albuns__texto'>"+ nome_album + "</h2></li>";
    var listaDeAlbuns = document.getElementById("listaDeAlbuns");
    listaDeAlbuns.innerHTML = listaDeAlbuns.innerHTML + album;
  
    document.getElementById("album").value = "";
    document.getElementById("nome_album").value = "";
  }
  