<script lang="ts">
    const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="container">
        <p>&copy; {currentYear} Premier Zone. All rights reserved.</p>
        <nav>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/contact">Contact Us</a>
        </nav>
    </div>
</footer>


<style>
    .footer {
        background-color: #333;
        color: #fff;
        padding: 1rem 0;
        text-align: center;
        /* position: fixed; */
        bottom: 0;
        width: 100%;
        margin-top: auto;
    }

    .footer .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .footer nav {
        margin-top: 0.5rem;
    }

    .footer nav a {
        color: #fff;
        margin: 0 0.5rem;
        text-decoration: none;
    }

    .footer nav a:hover {
        text-decoration: underline;
    }
</style>