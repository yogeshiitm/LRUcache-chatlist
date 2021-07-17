
import { ChatHandler, chat_names } from './chatlist_script.js';

onload = function () {

    const chatlist = document.getElementById('chat-list');
    const add = document.getElementById('generate-step');
    const add2 = document.getElementById('generate-step2');
    const add3 = document.getElementById('generate-step3');
    const add4 = document.getElementById('generate-step4');
    const text = document.getElementById('temptext');

    const templates = document.getElementsByTagName('template')[0];
    const chat_item = templates.content.querySelector("li");

    const chatHandler = new ChatHandler(chat_item, chatlist);
    let chats = [];

    add.onclick = function () {
        if(Math.random()>0.75 && chats.length > 0){
            let index = Math.floor(Math.random()*chats.length);
            let idToDelete = chats[index];
            chatHandler.deleteMsg(idToDelete);
            text.innerHTML = "Deleted message from "+chat_names[idToDelete] + "<br>" + text.innerHTML;
                chats.splice(index, 1);
        } else{
            let idOfMsg = Math.floor(Math.random()*7);
            if(chats.includes(idOfMsg)===false){
                chats.push(idOfMsg);
            }
            chatHandler.newMsg(idOfMsg);
            text.innerHTML = "New message from "+chat_names[idOfMsg] + "<br>" + text.innerHTML;
        }
    };

    add2.onclick = function () {
        if(Math.random()>0.75 && chats.length > 0){
            let index = Math.floor(Math.random()*chats.length);
            let idToDelete = chats[index];
            chatHandler.deleteMsg(idToDelete);
            text.innerHTML = "Deleted message from "+chat_names[idToDelete] + "<br>" + text.innerHTML;
                chats.splice(index, 1);
        } else{
            let idOfMsg = Math.floor(Math.random()*7);
            if(chats.includes(idOfMsg)===false){
                chats.push(idOfMsg);
            }
            chatHandler.newMsg(idOfMsg);
            text.innerHTML = "New message from "+chat_names[idOfMsg] + "<br>" + text.innerHTML;
        }
    };

    add3.onclick = function () {
        if(Math.random()>0.75 && chats.length > 0){
            let index = Math.floor(Math.random()*chats.length);
            let idToDelete = chats[index];
            chatHandler.deleteMsg(idToDelete);
            text.innerHTML = "Deleted message from "+chat_names[idToDelete] + "<br>" + text.innerHTML;
                chats.splice(index, 1);
        } else{
            let idOfMsg = Math.floor(Math.random()*7);
            if(chats.includes(idOfMsg)===false){
                chats.push(idOfMsg);
            }
            chatHandler.newMsg(idOfMsg);
            text.innerHTML = "New message from "+chat_names[idOfMsg] + "<br>" + text.innerHTML;
        }
    };

    add4.onclick = function () {
        if(Math.random()>0.75 && chats.length > 0){
            let index = Math.floor(Math.random()*chats.length);
            let idToDelete = chats[index];
            chatHandler.deleteMsg(idToDelete);
            text.innerHTML = "Deleted message from "+chat_names[idToDelete] + "<br>" + text.innerHTML;
                chats.splice(index, 1);
        } else{
            let idOfMsg = Math.floor(Math.random()*7);
            if(chats.includes(idOfMsg)===false){
                chats.push(idOfMsg);
            }
            chatHandler.newMsg(idOfMsg);
            text.innerHTML = "New message from "+chat_names[idOfMsg] + "<br>" + text.innerHTML;
        }
    };
};