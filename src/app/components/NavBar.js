import React from "react";
import '../styles/navbar.css'

export default function NavBar(props) {
    return (
        <><header>
            <a href="/account">
                <img class="pfp" src="pfp.jpg" width="64px" alt="Profile Picture" />
            </a>
            <a href="/account">@{props.username}</a>
            <nav>
                <ul class="nav_links">
                    <li><a href="/home">Your Feed</a></li>
                    <li><a href="/messages">Messages</a></li>
                    <li><a href="/friends">Friends</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </header></>
    );
}
