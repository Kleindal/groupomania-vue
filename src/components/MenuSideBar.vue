<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Menu</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Groupes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Messages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="dropdown10"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >User Profil</a
          >
          <ul class="dropdown-menu" aria-labelledby="dropdown10">
            <li><a class="dropdown-item" href="#">Mon profil</a></li>
            <li><a class="dropdown-item" href="#">Paramètres</a></li>
            <li><a class="dropdown-item" href="#">Déconnexion</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
      <div class="container-fluid">
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

        <div class="navbar-collapse justify-content-md-center collapse" id="navbarsExample10" style="">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">LOGO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Groupes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Messages</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown10" data-bs-toggle="dropdown" aria-expanded="false">Mon profil</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown10">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<style>
svg {
  fill: black;
}
</style>