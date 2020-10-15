# LoaderBlock.js
Make waiting for page / data load pleasant to the user

<a href="https://youtu.be/vzZ1t0YG_tE" target="_blank">View Video Preview</a>

<a href="https://leobrn.github.io/LoaderBlock/" target="_blank">View Demos</a>

* [Installation](#installation)
* [Usage](#usage)
* [Settings &amp; Defaults](#settings-and-defaults)
* [Public Methods](#public-methods)
* [FAQ's](#faq)
* [Compliments](#compliments)

## Installation

As standalone just include the file in a tags:

```html
<link rel="stylesheet" href="loaderBlock.css">

<script src="loaderBlock.js" defer></script>
```

## Usage

```javascript
const loader = new LoaderBlock()
```
## Settings and Defaults

```javascript
settings = {
   overlay: true,
   createStart: true,
   destroyAfterLoad: true,
   delay: 500
```

* `overlay`: If you need to cover the page
* `createStart`: Block creation on initialization
* `destroyAfterLoad`: Destroy the block after loading the page
* `delay`: A delay before the block is destroyed for the disappearance animation to work

## Public Methods

### `create`: Create block

```javascript
loader.create()
```
### `destroy`: Destroy block

```javascript
loader.destroy()
```
## FAQ

### - How to configure if i need a loader not on all pages?

Place the following html code on the pages you need:
```html
<!-- Loader start -->
<div class="loader-block loader-block--overlay">
  <div class="loader"></div>
</div>
<!-- Loader end -->
```

```javascript
const loader = new LoaderBlock({
    createStart: false
})
```

### - How to configure if you need to wait for data when downloading from the server?

```javascript
const loader = new LoaderBlock({
    overlay: false,
    createStart: false
})
```
create a loader before downloading (you can specify the name of the class after which you want to create a loader):
```javascript
loader.create('.products')
```
after loading, destroy the loader:
```javascript
loader.destroy()
```

### - I have a functional proposal / I found a bug. Where can I write?

Telegram chat <a href="https://t.me/ovmst_chat" target="_blank">@ovmst_chat</a>

## Compliments

Subscribe to <a href="https://www.youtube.com/channel/UCkgcvGx_z49fiHJ_aiHAp3g?view_as=subscriber" target="_blank">Youtube</a> and <a href="https://t.me/ovmst" target="_blank">Telegram</a> channel

<a href="https://www.youtube.com/channel/UCkgcvGx_z49fiHJ_aiHAp3g?view_as=subscriber" target="_blank"><img src="https://i.ibb.co/sV96kqK/Subscribe.png"></a>
