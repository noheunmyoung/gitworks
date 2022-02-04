<template> 
    <b-navbar 
        class="navbar header has-shadow is-primary is-10" 
        role="navigation" 
        aria-label="main navigation" 
    > 
    
        <template slot="brand"> 
            <a class="navbar-item" href="/"> 
            <img src="~assets/buefy.png" alt="Buefy" height="28" /> 
            </a> 
        </template> 
        
        <template slot="end"> 
            <b-navbar-item tag="div"> 
                <b-navbar-dropdown label="메뉴"> 
                    <b-navbar-item href="./menu1/"> 메뉴1 </b-navbar-item> 
                    <b-navbar-item href="./menu2/"> 메뉴2 </b-navbar-item> 
                    <b-navbar-item href="./menu3/"> 메뉴3 </b-navbar-item> 
                </b-navbar-dropdown> 
            </b-navbar-item> 
        </template> 
    </b-navbar> 
</template> 

<script> 
    export default {} 
</script> 

<style lang="scss" scoped></style>