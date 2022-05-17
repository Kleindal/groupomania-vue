<template>
    <section style="background-color: #eee;">
    <div class="container py-5">
        <div class="row">
        <div class="chatmessage">
            <ul class="list-unstyled">
            <li class="message-received mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                class="message-avatar" width="60">
                <div class="card-body">
                    <p class="fw-bold mb-0">Brad Pitt</p>
                    <p class="text-muted small mb-0"><i class="far fa-clock"></i> 12 mins ago</p>
                    <p class="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    </p>
                </div>
            </li>
            <li class="message-me mb-4">
                <div class="card-body">
                    <p class="fw-bold mb-0">Lara Croft</p>
                    <p class="text-muted small mb-0"><i class="far fa-clock"></i> 13 mins ago</p>
                    <p class="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium.
                    </p>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                class="message-avatar" width="60">
            </li>
            <li class="message-received mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" alt="avatar"
                class="message-avatar" width="60">
                <div class="card-body">
                    <p class="fw-bold mb-0">Brad Pitt</p>
                    <p class="text-muted small mb-0"><i class="far fa-clock"></i> 10 mins ago</p>
                    <p class="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    </p>
                </div>
            </li>
            <li class="bg-white mb-3">
                <div class="form-outline">
                <textarea class="form-control" id="textAreaExample2" rows="4"></textarea>
                <label class="form-label" for="textAreaExample2">Message</label>
                </div>
            </li>
            <button type="button" class="btn btn-info btn-rounded float-end">Send</button>
            </ul>
        </div>
        </div>

    </div>
    </section>
</template>

<style>

.chatmessage {
    min-width: 360px;
}

.message-me, .message-received div{
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 5px 0 var(--contrast)!important ;
    border-radius: 1em;
    min-width: 600px;
}
.message-me {
    text-align: right;
    background-color: transparent;
}

.message-avatar {
    margin: 7px;
    border-radius: 50%;
    align-self: start;
}
</style>