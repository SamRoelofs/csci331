"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

export default function Page() {
    return <div>
    <CountButton name={"+1"} mult={1} color={"aqua"}/>
    <CountButton name={"+2"} mult={2} color={"lime"}/>
    <hr />
    <a href="https://github.com/SamRoelofs/csci331.git">My GitHub Repo</a>
    <hr />
    <SearchBar />
    </div>
  }
