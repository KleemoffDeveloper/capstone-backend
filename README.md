<div align=center><img src="./assets/pathfinder-logo.png" width=156/></div>

<h3>Deployed on Render: <a href=https://pathfinder-game-api.onrender.com>https://pathfinder-game-api.onrender.com</a></h3>

<b>API Endpoints</b>

<b>/response</b>

```js
Initial Input: [...messages, { role: "user", content: "Plot: some plot..." }];

Progression Input: [...messages, { role: "user", content: "some choice..." }];

Ending Input: [...messages, { role: "user", content: "some choice... <end/>" }];
```

```js
Progression Output: { role: "assistant", content: `{
    plot: "some plot...",
    choices: [ "choice 1", "choice 2", "choice 3" ],
    consumables: [],
    imagePrompt: "some descriptive visual text..."
}` }

Conclusive Output: { role: "assistant", content: `{
    end: "some ending...",
    imagePrompt: "some descriptive visual text..."
}` }
```

<b>/image</b>

```js
Input: { content: "some descriptive visual text..." }
```

```js
Output: { content: "https://example.com/openai-image.png" }
```

<b>Prompt Engineering</b>

<p>
<b>Note:</b>
We tested our prompts in OpenAI's playground to make sure that we would be receiving consistent responses each time. You can try this yourself <a href=https://platform.openai.com/playground>here</a>.
</p>
