<script setup>

</script>

<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-brand">File Manager</div>

            <!-- Navbar Links -->
            <nav class="navbar-links">
                <a href="#" class="nav-item">Login</a>
                <a href="#" class="nav-item">Registro</a>
            </nav>
        </div>
    </header>

</template>

<style scoped>
.navbar {
    background-color: #253545;
    padding: 15px 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-brand {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
}

.navbar-links {
    display: flex;
    gap: 20px;
}

.navbar-links .nav-item {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    transition: background-color 0.3s ease;
}

.navbar-links .nav-item:hover {
    text-decoration: underline;
    text-decoration-color: #dcdcdc;
    text-underline-offset: 4px;
    text-decoration-thickness: 1.8px;
}

/* Navbar Responsiva para Mobile */
@media (max-width: 576px) {
    .navbar-links {
        display: none;
        flex-direction: column;
        gap: 10px;
        background-color: #253545;
        width: 100%;
        text-align: center;
    }

    .navbar .container {
        flex-direction: column;
        align-items: flex-start;
    }

    .navbar-links.active {
        display: flex;
    }

    .navbar .menu-toggle {
        display: block;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
    }
}
</style>