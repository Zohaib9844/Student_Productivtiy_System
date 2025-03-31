<script setup>
import Navbar from '@/components/EntryPages/Navbar.vue';
import PageText from '@/components/EntryPages/PageText.vue';
import SignIn from '@/components/EntryPages/SignIn.vue';
import Footbar from '@/components/EntryPages/Footbar.vue';
</script>

<template>
    <div class="d-flex flex-column vh-100">
        <Navbar />
    
        <main class="flex-grow-1 d-flex align-items-center">
            <div class="container h-100">
                <div class="row h-100 justify-content-between">
                    <div class="col-12 col-md-5 d-flex align-items-center h-100">
                        <PageText page-text=""/>
                    </div>
                    <div class="col-12 col-md-6 h-100 d-flex align-items-center justify-content-center">
                        <SignIn />
                    </div>
                </div>
            </div>
        </main>

        <Footbar />
    </div>
</template>




