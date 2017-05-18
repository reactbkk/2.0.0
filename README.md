<h1 align="center">reactbkk-2.0.0</h1>

<p align="center">React Bangkok 2.0.0 website</p>

<p align="center">https://reactbkk.github.io/2.0.0/</p>

<p align="center"><a href="https://waffle.io/reactbkk/2.0.0">Waffle board</a></p>

<p align="center"><a href="https://circleci.com/gh/reactbkk/2.0.0/tree/master"><img src="https://circleci.com/gh/reactbkk/2.0.0/tree/master.svg?style=svg" alt="CircleCI" /></a></p>


## Folder structure

- `pages` [Next.js][] pages
- `static` [Next.js] static files
- `components` React components
- `public` Additional files to be copied to GitHub pages
- `resources` Additional files that may be used from JavaScript files (e.g. svg files)

[Next.js]: https://github.com/zeit/next.js

## Install the dependencies
```
yarn
```

## Running development server
```
yarn start
```

## Generating static web site
```
yarn run build
```

## Testing the web site
```
yarn run serve-static
```

Test the website at http://localhost:3002/

## Deployment
When a commit is added to `master` branch, it will be deployed to GitHub Pages by the CI.
