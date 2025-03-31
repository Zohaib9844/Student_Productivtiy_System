<script setup>
import Navbar from '@/components/EntryPages/Navbar.vue';
import PageText from '@/components/EntryPages/PageText.vue';
import SignUp from '@/components/EntryPages/Signup.vue';
import Footbar from '@/components/EntryPages/Footbar.vue';

</script>

<template>
    <div class="d-flex flex-column vh-100">
        <Navbar />
    
        <main class="flex-grow-1 h-100"> <!-- Ensure main takes full height -->
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-between">
                    <div class="col-12 col-md-5 h-100 d-flex align-items-center">
                        <PageText 
                            pageHeading="" 
                            pageText=""
                        />
                    </div>
                    <div class="col-12 col-md-6 h-100 d-flex align-items-center justify-content-center">
                        <SignUp />
                    </div>
                </div>
            </div>
        </main>

        <Footbar />
    </div>
</template>




