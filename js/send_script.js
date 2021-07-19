
import { ChatList, chat_names } from './chatlist_script.js';

onload = function () {

    const chatlist = document.getElementById('chat-list');
    const add1 = document.getElementById('send_message1');
    const add2 = document.getElementById('send_message2');
    const add3 = document.getElementById('send_message3');
    const add4 = document.getElementById('send_message4');
    const delete1 = document.getElementById('delete_message1');
    const delete2 = document.getElementById('delete_message2');
    const delete3 = document.getElementById('delete_message3');
    const delete4 = document.getElementById('delete_message4');
    const text = document.getElementById('temptext');
    const templates = document.getElementsByTagName('template')[0];
    const chat_item = templates.content.querySelector("li");
    const chatList = new ChatList(chat_item, chatlist);
    let chats = [];

    /*----------------------------- MESSAGE RECIEVED ------------------------------------------*/
    add1.onclick = function () {
        if(chats.includes(0)===false){
            chats.push(0);
        }
        chatList.newMsg(0);
    };
    add2.onclick = function () {
        if(chats.includes(1)===false){
            chats.push(1);
        }
        chatList.newMsg(1);
    };
    add3.onclick = function () {
        if(chats.includes(2)===false){
            chats.push(2);
        }
        chatList.newMsg(2);
    };
    add4.onclick = function () {
        if(chats.includes(3)===false){
            chats.push(3);
        }
        chatList.newMsg(3);
    };


    /*------------------------------- MESSAGE DELETED ---   ---------------------------------------*/
    delete1.onclick = function () {
        // if(Math.random()>0.75 && chats.length > 0){
        //     let index = Math.floor(Math.random()*chats.length);
        //     let idToDelete = chats[index];
        //     chatList.deleteMsg(idToDelete);
        //     text.innerHTML = "Deleted message from "+chat_names[idToDelete] + "<br>" + text.innerHTML;
        //         chats.splice(index, 1);
        // } else{
        //     let idOfMsg = Math.floor(Math.random()*7);
        //     if(chats.includes(idOfMsg)===false){
        //         chats.push(idOfMsg);
        //     }
        //     chatList.newMsg(idOfMsg);
        //     text.innerHTML = "New message from "+chat_names[idOfMsg] + "<br>" + text.innerHTML;
        // }
        chatList.deleteMsg(0);
        chats.splice(0, 1);

    };
    delete2.onclick = function () {
        chatList.deleteMsg(1);
        chats.splice(1, 1);
    };
    delete3.onclick = function () {
        chatList.deleteMsg(2);
        chats.splice(2, 1);
    };
    delete4.onclick = function () {
        chatList.deleteMsg(3);
        chats.splice(3, 1);
    };
};