export default `
<style>
  #iz-background {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: -11111;
  }

  article[data-iz-new-created] {
    animation: slide-up 0.4s ease;
  }

  [data-iz-symfony-dump-watcher] {
    transition: max-width .5s ease;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    max-width: 1140px;
    margin: auto;
    padding: 45px 15px 15px;
    word-wrap: break-word;
    /*background-color: #F9F9F9;*/
    /*color: #222;*/
    /*font-family: Helvetica, Arial, sans-serif;*/
    /*font-size: 14px;*/
    /*line-height: 1.4;*/
    animation: fadein 3s;
  }

  .iz-trash, .iz-width, .iz-color {
    position: fixed;
    top: 8px;
    z-index: 999999;
    max-width: 40px;
    width: 100%;
    transition: max-width .5s ease;
  }

  .iz-trash {
    left: 5px;
  }

  .iz-width {
    left: 55px;
  }

  .iz-color {
    left: 115px;
    display: flex;
    align-items: center;
    height: 40px;
  }

  .iz-width:hover, .iz-trash:hover, .iz-color:hover{
    max-width: 50px;
    cursor: pointer;
  }
  .iz-color:hover input {
    cursor: pointer;
  }

  .iz-btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    background-color: #fff;
    margin-left: 10px;
  }

  .iz-btn:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }

  #iz-no-content {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    font-size: 4rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  #iz-no-content.iz-no-content--hidden {
    display: none;
  }
  #iz-no-content #iz-no-content__small {
    font-size: 1rem;
    color: grey;
  }

  body {
    display: initial !important;
    flex-direction: initial !important;
    justify-content: initial !important;
    max-width: initial !important;
    margin: initial !important;
    padding: initial !important;
    word-wrap: initial !important;

    background-color: #F9F9F9 !important;
    color: #222 !important;
    font-family: Helvetica, Arial, sans-serif !important;
    font-size: 14px !important;
    line-height: 1.4 !important;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
`
