export default {
  init() {
    // JavaScript to be fired on all pages
    document.querySelector('#dir-switch') && document.querySelector('#dir-switch').addEventListener( 'click', () => {
      document.dir = document.dir === 'rtl' ? 'ltr' : 'rtl';
    } );
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
