<template>

    <base-card>
        <div class="card-div-container">
            <div class="card-content-container">
                <label>Title:</label>
                <input type="text">
            </div>
            <div class="card-content-container">
                <label>Description:</label>
                <textarea></textarea>
            </div>
            <div class="card-content-container">
                <label>Link:</label>
                <input type="text">
            </div>
            <base-button>Add resource</base-button>
        </div>
    </base-card>

</template>

<script>

</script>

<style scoped>
    
    .card-div-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .card-content-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 2rem;
        justify-content: flex-start;
        margin-bottom: 1rem;
    }
    input {
        width: 100%;
        margin-top: 5px;
    }
    textarea {
        resize: vertical;
        height: 1rem;
    }
    button {
        margin-top: 1rem;
    }
</style>