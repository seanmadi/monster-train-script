/* global shell, process */

import React from "react"
import {
  Container,
  FormControl,
  Button,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core"

function App() {
  const onClickOauth = (event) => {
    event.preventDefault()
    shell.openExternal(event.target.href)
  }

  const defaultFilePath =
    "C:\\Users\\" +
    (process.env.username || process.env.user) +
    "\\AppData\\LocalLow\\Shiny Shoe\\MonsterTrain\\saves\\save-singlePlayer.json"

  return (
    <Container>
      <h1>Monster Train Twitch Bot</h1>

      <form>
        <FormControl>
          <InputLabel htmlFor="username">Twitch username</InputLabel>
          <Input id="username" aria-describedby="username" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="channel">Channel</InputLabel>
          <Input id="channel" aria-describedby="channel" />
          <FormHelperText>
            The Twitch Channel the bot should be listening on (this is likely
            your Twitch channel name).
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="oauth">Oauth token</InputLabel>
          <Input id="oauth" aria-describedby="oauth" />
          <FormHelperText>
            Retrieve your token by visiting and logging into:
            <a
              className="external-link"
              href="https://twitchapps.com/tmi"
              onClick={onClickOauth}
            >
              https://twitchapps.com/tmi
            </a>
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="saveFilePath">Save File Path</InputLabel>
          <Input
            id="saveFilePath"
            aria-describedby="saveFilePath"
            defaultValue={defaultFilePath}
          />
        </FormControl>

        <Button color="primary">Run</Button>
      </form>
    </Container>
  )
}

export default App
