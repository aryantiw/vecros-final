import React from 'react'

export default function Nav(){
    return(
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vecros</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Jetpix Autonomy</a>
        </li>
        
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Products</a>
        </li>
     

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Solutions</a>
        </li>
       

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
       
    </ul>
    </div>
  </div>
</nav>
    )
}