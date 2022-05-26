<script>
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default {
    data() {
        return {
            messages: []
        }
    },
    props: {
        users: [],
        selectedGroup: null
    },
    watch: {
        selectedGroup(newValue, oldValue) {
            this.loadGroupMessage(newValue);
        }
    },
    methods: {
        loadGroupMessage: async function(id) {
            const {data} = await this.axios.get('http://localhost:3006/api/groups/' + this.selectedGroup + '/messages', config);
            this.messages = [];
            data.forEach(message => {
                // Cherche l'auteur du message par rapport à l'author_id
                const messageAuthor = this.users.filter(user => user.id === message.author_id)[0];
                // Assigne le nom de l'author à une propriété author_name
                message.author_name = messageAuthor.name;
                // Push le message dans le tableau messages
                this.messages.push(message);
            });
        },

        async createdPost() {
            let postData = {
                author_id: userId,
                group_id: this.selectedGroup,
                text: this.messageContent,
                image: ''
            }
            try {
                const createdPost = await this.axios.post('http://localhost:3006/api/groups/' + this.selectedGroup + '/messages', postData, config);
                this.messages.push(createdPost);
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<template>
    <section style="background-color: #eee;">
    {{ this.messageContent }}
    <div class="form-outline">
        <textarea class="form-control" id="textAreaExample2" rows="1" v-model="messageContent">
        </textarea>
        <label class="form-label" for="textAreaExample2"></label>
        <button type="button" class="btn btn-primary btn-rounded float-end" @click="createdPost()">Create Post</button>
    </div>
    <div class="container py-5">
        <div class="chatmessage">
            <div>
                <section class="message" v-for="message in messages" :key="message.id">
                    <div class="author-message">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                        class="message-avatar" width="60">
                        <p>{{ message.author_name }}</p>
                        <p> 13 mins ago</p>
                    </div>
                    <div class="message-text">
                        {{ message.text }}
                    </div>
                    <div class="comment">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                            <path fill="none" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
                        </svg>
                        <button type="button" class="btn btn-info btn-rounded float-end @click">Like</button>
                        <button type="button" class="btn btn-info btn-rounded float-end @click">Dislike</button>
                    </div>
                    <div>
                        <div class="form-outline">
                            <textarea class="form-control" id="textAreaExample2" rows="1"></textarea>
                            <label class="form-label" for="textAreaExample2"></label>
                            <button type="button" class="btn btn-info btn-rounded float-end @click">Send</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    </div>
    </section>
</template>

<style>

.chatmessage {
    min-width: 360px;
    box-shadow: 0 1px 5px 0 var(--contrast)!important ;
    background-color: transparent;
    padding: 2em;
}
.message div {
    display: flex;
    min-width: 600px;
    margin-bottom: 2em;
}

.message-text {
    color: black;
    font-size: 15px;
    justify-content: space-around;
}
.author-message p{
    font-size: 15px;
    padding: 10px;
}
.message-avatar {
    border-radius: 50%;
}
.comment svg {
    fill: black;
    height: 1.5em;
    width: 1.5em;
}
</style>