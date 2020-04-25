# Bug

There's a bug where the `disabled` property on `button` doesn't work on IE 11. I'm unsure if there are more elements/attributes which also break, but this is something specific that I came across.

The demo from this code is hosted at [https://umanghome.github.io/svelte-restprops-ie/](https://umanghome.github.io/svelte-restprops-ie/). It has all the polyfills required for this project to work on IE 11.

## Expected

App after initial render:
![App after initial render](https://i.imgur.com/g5jjTDi.png)

App after selecting the disabled? checkbox:
![App after selecting the disabled? checkbox](https://i.imgur.com/3XXJYHe.png)

The expected behaviour can be reproduced on Chrome 81.

## Actual behaviour

App after initial render:
![App after initial render](https://i.imgur.com/4VXd7Cd.png)

App after selecting the disabled? checkbox:
![App after selecting the disabled? checkbox](https://i.imgur.com/Mbc9HqJ.png)

Even if the disabled? is toggled back into a "false" state, the latter two buttons stay disabled.

The expected behaviour can be reproduced on Internet Exporer 11. It cannot be reproduced on Chrome 81.

--- 

## Get started

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
